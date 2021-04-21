import Vue from 'vue'
import Vuex from 'vuex'
import modals from '../store/modals/modals.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        modals
    }
})