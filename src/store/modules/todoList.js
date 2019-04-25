const state = {
  list: [
    { message: 'Foo' },
    { message: 'Bar' }
  ]
}

const getters = {

}

const actions = {
  addListItemStatus({commit, state}, msg) {
    if(state.list.length) {
      const index = state.list.findIndex((itm) => itm.message === msg)
      if(!(index > -1)) {
        commit('addListItem', {message: msg})
      }else {
        console.log('msg已存在')
      }
    }else {
      commit('addListItem', {message: msg})
    }
  },
  delListItemStatus({ commit }, index) {
    commit('delListItem', index)
  }
}

const mutations = {
  addListItem(state, item) {
    state.list.push(item)
  },
  delListItem(state, index) {
    state.list.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
