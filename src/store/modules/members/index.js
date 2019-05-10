import axios from 'axios';
axios.defaults.baseURL = 'http://portal.gtcoop.com.ng/api';
//axios.defaults.headers.common['Authorization'] = "Bearer " + window.token;

axios.defaults.headers.post['Content-Type'] = 'application/json';
import VueAxios from 'vue-axios';
const state = {
members: [],

loadmember: true, 
lmember:  parseInt(localStorage.getItem('mid') || '') ,
};

const mutations = {

	UPDATE_MEMBER_DETAILS(state, payload) {
    state.userDetails = payload;
  },

 
  UPDATE_MEMBERS (state, payload) {
    state.members = payload;
    state.loadmember = false;
  }
};

const actions = {

	getMembers ({ commit }) {
    axios.get('/members').then((response) => {
      commit('UPDATE_MEMBERS', response.data)
        
    });
  },

  

  suspendMember({ commit }, payload) {

        return new Promise((resolve,reject)=>{

          axios.get('/suspend/' + payload)
            .then((response) => {
             
              //commit('CONFIRM_applicant', payload)

              

              
              resolve(response);

            })
            .catch((error) => {
              
              console.log(error);
              reject(error);
            })

        })
         
      },
      restoreMember({ commit }, payload) {

        return new Promise((resolve,reject)=>{

          axios.get('/restore/' + payload)
            .then((response) => {
             
              //commit('CONFIRM_applicant', payload)

              

              
              resolve(response);

            })
            .catch((error) => {
              
              console.log(error);
              reject(error);
            })

        })
         
      },
};

const getters = {

	members: state => state.members,
  loadmemberstatus: state => state.loadmember,
  activeMember: state =>  { return state.members.filter(appdata => appdata.status === 'active')},
  inactiveMember: state =>  { return state.members.filter(appdata => appdata.status === 'Suspended')},
  lmember: state =>  { return state.members.find(appdata => appdata.id == state.lmember)},
  //objArray.find(obj => obj.id == 3);
  getmembers: state => state.members.map(a => a.id),


};

const membersModule = {
  state,
  mutations,
  actions,
  getters
}

export default membersModule;