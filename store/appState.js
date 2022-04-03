export default {
  state () {
    return {
      darkTheme: true,
      theme: 'bootstrap4-dark-blue'
    }
  },

  getters: {
    bannerImage (state) {
      return state.darkTheme ? 'images/banner-primeblocks-dark.png' : 'images/banner-primeblocks.png'
    },

    barOptions (state) {
      return state.darkTheme
        ? {
            plugins: {
              legend: {
                labels: {
                  color: '#ebedef'
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#ebedef'
                },
                grid: {
                  color: 'rgba(160, 167, 181, .3)'
                }
              },
              y: {
                ticks: {
                  color: '#ebedef'
                },
                grid: {
                  color: 'rgba(160, 167, 181, .3)'
                }
              }
            }
          }
        : {
            plugins: {
              legend: {
                labels: {
                  color: '#495057'
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#495057'
                },
                grid: {
                  color: '#ebedef'
                }
              },
              y: {
                ticks: {
                  color: '#495057'
                },
                grid: {
                  color: '#ebedef'
                }
              }
            }
          }
    },

    footerImage (state) {
      return state.darkTheme ? '/images/logo-white.svg' : '/images/logo-dark.svg'
    },

    lineOptions (state) {
      return state.darkTheme
        ? {
            plugins: {
              legend: {
                labels: {
                  color: '#ebedef'
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#ebedef'
                },
                grid: {
                  color: 'rgba(160, 167, 181, .3)'
                }
              },
              y: {
                ticks: {
                  color: '#ebedef'
                },
                grid: {
                  color: 'rgba(160, 167, 181, .3)'
                }
              }
            }
          }
        : {
            plugins: {
              legend: {
                labels: {
                  color: '#495057'
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  color: '#495057'
                },
                grid: {
                  color: '#ebedef'
                }
              },
              y: {
                ticks: {
                  color: '#495057'
                },
                grid: {
                  color: '#ebedef'
                }
              }
            }
          }
    },

    logoColor (state) {
      return state.darkTheme ? 'white' : 'dark'
    },

    pieOptions (state) {
      return state.darkTheme
        ? {
            plugins: {
              legend: {
                labels: {
                  color: '#ebedef'
                }
              }
            }
          }
        : {
            plugins: {
              legend: {
                labels: {
                  color: '#495057'
                }
              }
            }
          }
    },

    polarOptions (state) {
      return state.darkTheme
        ? {
            plugins: {
              legend: {
                labels: {
                  color: '#ebedef'
                }
              }
            },
            scales: {
              r: {
                grid: {
                  color: 'rgba(160, 167, 181, .3)'
                }
              }
            }
          }
        : {
            plugins: {
              legend: {
                labels: {
                  color: '#495057'
                }
              }
            },
            scales: {
              r: {
                grid: {
                  color: '#ebedef'
                }
              }
            }
          }
    },

    radarOptions (state) {
      return state.darkTheme
        ? {
            plugins: {
              legend: {
                labels: {
                  color: '#ebedef'
                }
              }
            },
            scales: {
              r: {
                grid: {
                  color: 'rgba(160, 167, 181, .3)'
                }
              }
            }
          }
        : {
            plugins: {
              legend: {
                labels: {
                  color: '#495057'
                }
              }
            },
            scales: {
              r: {
                grid: {
                  color: '#ebedef'
                }
              }
            }
          }
    },

    topbarImage (state) {
      return state.darkTheme ? 'images/logo-white.svg' : 'images/logo-dark.svg'
    }
  },

  mutations: {
    setDarkTheme (state, payload) {
      state.darkTheme = payload
    },

    setTheme (state, payload) {
      state.theme = payload
    }
  }
}
