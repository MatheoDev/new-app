import { createStore } from 'vuex'
import data from './data'

export default createStore({
  state: {
    loading: false,
    news: [],
    sorting: [
      { id: 1, name: 'popularity' },
      { id: 2, name: 'relevancy' },
      { id: 3, name: 'publishedAt' },
    ],
    form: {
      search: '',
      sorting: '',
    },
    paginate: {

    }
  },
  mutations: {
  },
  actions: {
    search({ state }) {
      // https://newsapi.org/v2/top-headlines?country=fr&apiKey=ff2ae2f3bcab49e9b4cfb5aa1d548f87
      // https://newsapi.org/v2/everything?q=&languague=fr&sortBy=&apiKey=ff2ae2f3bcab49e9b4cfb5aa1d548f87
      console.log('TODO dev search', state, data)

      let url = null
      if (state.form.search) {
        url = `https://newsapi.org/v2/everything?q=${state.form.search}&languague=fr&sortBy=${state.form.sorting}&apiKey=${data.apiKey}`
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${data.apiKey}`
      }

      console.log(url)

      // 0. loading = true
      // 1. Récupérer les données de l'API avec un fetch 
      // 2. Stocker les données dans le state de news
      // 3. Catch les erreurs 
      // 4. finally => loading = false
    }
  },
  modules: {
  }
})
