import { createStore } from 'vuex'

export default createStore({
  state: {
    news: [],
    categories: [
      { id: 1, name: 'general' },
      { id: 2, name: 'business' },
      { id: 3, name: 'entertainment' },
      { id: 4, name: 'health' },
      { id: 5, name: 'science' },
      { id: 6, name: 'sports' },
      { id: 7, name: 'technology' },
    ],
    form: {
      search: '',
      category: '',
    }
  },
  mutations: {
  },
  actions: {
    search() {
      console.log('search')
    }
  },
  modules: {
  }
})
