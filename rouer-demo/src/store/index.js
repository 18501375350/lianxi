import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
const state = {
    // user:JSON.parse(sessionStorage.getItem('user')) || {}
    user: sessionStorage.getItem('user') 
}

const mutations = {
    setUser(state, item) {
        state.user = item;
        sessionStorage.setItem('user', JSON.stringify(state.user))
    }
}

const actions = {
    setUser(context, item) {
        context.commit('setUser', item)
    }
}


const store = new vuex.Store({
    state,
    mutations,
    actions
})

export default store