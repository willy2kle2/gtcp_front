import Vue from 'vue';
import Vuex from 'vuex';
import admin from './modules/admin';
import members from './modules/members';
import contribution from './modules/contribution';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    admin,
    members,
    contribution,
    
  }
})