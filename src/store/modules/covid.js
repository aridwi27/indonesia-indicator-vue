import axios from 'axios'

const covid = {
  namespaced: true,
  state: () => {
    return {
      totalConfirmed: '',
      totalDeaths: '',
      totalRecovered: '',
      contries: ''
    }
  },
  mutations: {
    setTotalConfirmed (state, payload) {
      state.totalConfirmed = payload
    },
    setTotalDeaths (state, payload) {
      state.totalDeaths = payload
    },
    setTotalRecovered (state, payload) {
      state.totalRecovered = payload
    },
    setCovidContries (state, payload) {
      state.contries = payload
    }

  },
  actions: {
    GetDataCovid (context) {
      axios.get('https://api.covid19api.com/summary').then((response) => {
        context.commit('setTotalConfirmed', response.data.Global.TotalConfirmed)
        context.commit('setTotalDeaths', response.data.Global.TotalDeaths)
        context.commit('setTotalRecovered', response.data.Global.TotalRecovered)
        context.commit('setCovidContries', response.data.Countries)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  getters: {
    getTotalConfirmed (state) {
      return state.totalConfirmed
    },
    getTotalDeaths (state) {
      return state.totalDeaths
    },
    getTotalRecovered (state) {
      return state.totalRecovered
    },
    getCovidContries (state) {
      return state.contries
    }
  }
}
export default covid
