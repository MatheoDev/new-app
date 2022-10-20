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
      page: 1,
      total: 0,
    }
  },
  mutations: {
  },
  actions: {
    search({ state }) {
      state.loading = true

      let url = null
      if (state.form.search) {
        url = `https://newsapi.org/v2/everything?q=${state.form.search}&languague=fr&sortBy=${state.form.sorting}&apiKey=${data.apiKey}`

      } else {
        url = `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${data.apiKey}`
      }
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          state.news = data.articles 
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          state.loading = false
        })
    }
  },
  modules: {
  }
})
