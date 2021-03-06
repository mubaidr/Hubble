<template>
  <div class="my-stars">
    <header>
      <h1>
        Hubble
      </h1>
      <h2>Travel through GitHub Stars' history</h2>
    </header>
    <main>
      <div class="input-group">
        <el-input :value="`Stars ${viewer ? `${viewer} has` : 'I have'} earned this year`" readonly
                  v-if="!requesting" />
        <el-button type="primary" :loading="requesting" @click="start">
          {{ !requesting ? `${viewer ? stargazersCount : 'Start'}` : `Counting stars (${stargazersCount})`}}
        </el-button>
      </div>
      <div class="chart-place">
        <chart :options="chartOptions" ref="chart"></chart>
        <div class="buttons">
          <el-switch
            v-model="showCollaboratorRepos"
            active-text="Show also repos I'm collaborator"
            inactive-text="Show only repos I'm owner"
            style="margin-right: 1em"
          >
          </el-switch>
        </div>
      </div>
    </main>
    <footer align="center">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/repo-race">Repo race</router-link>
      |
      <router-link to="/react-vs-vue">React vs. Vue</router-link>
    </footer>
  </div>
</template>

<script>
  import EventBus from '../bus'
  import { graphqlFetchRepoStarsThisYear, graphqlFetchViewerBestarredRepos } from '@/utils';

  export default {
    name: 'MyStars',

    data() {
      return {
        viewer: '',
        username: '',
        repo: '',
        reposWithStars: [],
        beforePointer: null,
        afterPointer: null,
        chartData: [],
        requesting: false,
        useGraphQL: false,
        showCollaboratorRepos: false,
        suspended: false
      }
    },
    computed: {
      displayChartData() {
        if (!this.showCollaboratorRepos) {
          return this.chartData.filter(d => !!d).filter(([repo, star, owner]) => owner === this.viewer)
        }
        return this.chartData.filter(d => !!d)
      },
      stargazersCount() {
        return this.displayChartData.filter(d => !!d).reduce((sum, [name, count]) => sum + count, 0)
      },
      chartOptions() {
        return {
          tooltip: {
            trigger: 'item',
          },
          grid: {
            bottom: 5,
            left: 24,
            right: 24,
            containLabel: true
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#cccccc',
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: '#333333',
            },
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
              },
            },
          },
          series: [{
            type: 'bar',
            lineStyle: {
              color: '#409EFF',
            },
            showSymbol: false,
            itemStyle: {
              color: '#409EFF',
            },
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
            data: this.displayChartData
          }],
        }
      },
    },
    methods: {
      start() {
        this.reposWithStars = []
        this.chartData = []
        this.requesting = true

        if (!localStorage.getItem('access_token')) {
          this.requesting = false
          EventBus.$emit('require:accessToken', this.start, {
            title: 'Tell Hubble who you are',
            body: 'Hubble recognize you by your access token',
          })
        } else {
          this.v4start()
        }
      },
      v4start() {
        graphqlFetchViewerBestarredRepos({
          onPageData: ({ viewer }) => this.viewer = viewer,
          onComplete: ({ repositories }) => {
            this.reposWithStars = repositories
              .map(repository => [...repository.nameWithOwner.split('/'), repository.stargazers.totalCount])
              .sort(([owner1, repo1, stars1], [owner2, repo2, stars2]) => {
                if (owner1 === this.viewer && owner2 !== this.viewer) {
                  return -1
                }
                if (owner2 === this.viewer && owner1 !== this.viewer) {
                  return 1
                }
                return stars2 - stars1
              })
            this.fetchRepoStarThisYear()
          }
        })
      },
      fetchRepoStarThisYear(i = 0) {
        let repo = this.reposWithStars[i]
        if (!repo) {
          this.requesting = false
          this.suspended = false
        } else if (repo[0] !== this.viewer && !this.showCollaboratorRepos) {
          this.requesting = false
          this.suspended = i
        } else {
          let total = 0
          graphqlFetchRepoStarsThisYear(repo[0], repo[1], {
            onPageData: (stars) => {
              if (stars.length > 0) {
                if (total === 0) {
                  this.chartData.push([repo[1], stars.length, repo[0]])
                } else {
                  let data = this.chartData.pop()
                  data[1] += stars.length
                  this.chartData.push(data)
                }
                total += stars.length
              }
            },
            onComplete: () => {
              this.fetchRepoStarThisYear(i + 1)
            }
          })
        }
      },
      resume(i) {
        this.requesting = true
        this.fetchRepoStarThisYear(i)
      },
      resizeChart() {
        this.$refs.chart.resize()
      },
    },
    watch: {
      showCollaboratorRepos(val) {
        if (val && this.suspended !== false && !this.requesting) {
          this.resume(this.suspended)
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.resizeChart)

      if (this.$route.query.start !== undefined) {
        this.start()
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeChart)
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .my-stars {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    header {
      h1, h2 {
        font-weight: normal;
      }

      h1 {
        font-size: 48px;
        position: relative;
        display: inline-block;
        margin-bottom: 0;
        &::before {
          content: '';
          background-image: url(../assets/logo.png);
          position: absolute;
          left: -53px;
          top: 0;
          height: 48px;
          width: 48px;
          background-size: contain;
          display: block;
        }
      }
    }
    footer {
      padding: 20px 0 50px;
    }

    main {
      flex-grow: 1;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      .input-group {
        display: flex;
        align-items: center;
        width: 400px;
        max-width: 96%;
        margin: 28px auto 0;
        position: relative;
        .addon {
          position: absolute;
          left: 100%;
          margin-left: 1em;
          white-space: nowrap;
        }
        .el-input {
          flex-grow: 1;
          & > input {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          & + * {
            margin-left: -1px;
            &, & > input {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
          }
        }
        .el-button {
          flex-grow: 1;
          flex-shrink: 1;
        }
      }

      .chart-place {
        flex-grow: 1;
        width: 100%;
        display: flex;
        flex-direction: column;

        .echarts {
          width: 100%;
          flex-grow: 1;
        }

        .buttons {
          flex-shrink: 0;
          height: 40px;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
</style>
