const createStore = () => {
    return new Vuex.Store({
      state: {
        search: {
          query: '',
          color: '',
          size: '',
          sort: ''
        }
      },
      mutations: {
        setSearch(state, { query, color, size, sort }) {
          state.search.query = query;
          state.search.color = color;
          state.search.size = size;
          state.search.sort = sort;
        }
      }
    });
  };
  