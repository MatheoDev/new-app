import { createStore } from 'vuex'
import data from './data'

export default createStore({
  state: {
    loading: false,
    news: [],
    sorting: [
      { id: 1, name: 'Popularité', value: 'popularity' },
      { id: 2, name: 'Pertinence', value: 'relevancy' },
      { id: 3, name: 'Publié récemment', value: 'publishedAt' },
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
        url = `https://newsapi.org/v2/everything?q=${state.form.search}&languague=fr&sortBy=${state.form.sorting}&pageSize=8&page=${state.paginate.page}&apiKey=${data.apiKey}`

      } else {
        url = `https://newsapi.org/v2/top-headlines?country=fr&pageSize=8&page=${state.paginate.page}&apiKey=${data.apiKey}`
      }
      
      fetch('https://newsappzvefjw70-corsproxy.functions.fnc.fr-par.scw.cloud/', {
        method: 'POST',
        body: JSON.stringify({ url: url })
      })
        .then(response => response.json())
        .then(data => {
          data.articles.forEach((article, index) => {
            article.id = index
          })
          state.news = data.articles 
          state.paginate.total = data.totalResults
          state.paginate.total
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
