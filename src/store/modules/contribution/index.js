import axios from 'axios';
axios.defaults.baseURL = 'http://portal.gtcoop.com.ng/api';
//axios.defaults.headers.common['Authorization'] = "Bearer " + window.token;

axios.defaults.headers.post['Content-Type'] = 'application/json';
import VueAxios from 'vue-axios';

const state = {

	userContribution: [], 
  allInterest: [],
  allContribution: [],
  approvedloan:[],
  loadcont: true,
   usercontData:[],
   memberInterest: [],
   userid: parseInt(localStorage.getItem('Uid') || '', 10) ,

 // uids: parseInt(localStorage.getItem('Uid') || '', 10),
  };

const mutations = {

 UPDATE_CONTRIBUTION (state, payload) {
    state.allContribution = payload;
    state.loadcont = false;

  },
 UPDATE_APPROVED_LOAN (state, payload) {
    state.approvedloan = payload;
    state.loadcont = false;

  },
  
  UPDATE_INTEREST (state, payload) {
    state.allInterest = payload;
    state.loadcont = false;

  },

  UPDATE_INT (state, payload) {
    state.applicantData = payload;
  },
   UPDATE_USERS_CONT(state, payload) {
    state.usercontData = payload;
    //state.loadloan = false;

  },
   
 UPDATE_USER_INTEREST(state, payload) {
    state.memberInterest = payload;
  },
      DELETE_CONTRIBUTION(state, payload){
  let index = state.applicationData.findIndex(x => x.id==payload);
state.applicationData.splice(index, 1);

 //applicationData.splice(i, 1)
}
};

const actions = {

 getcontributions ({ commit, payload }) {
    axios.get('/contributions').then((response) => {
      commit('UPDATE_CONTRIBUTION', response.data)
    });
  },

  getapprovedloans ({ commit, payload }) {
    axios.get('/approvedloan').then((response) => {
      commit('UPDATE_APPROVED_LOAN', response.data)
    });
  },

   getinterest ({ commit, payload }) {
    axios.get('/interest').then((response) => {
      commit('UPDATE_INTEREST', response.data)
    });
  },
  getcont ( context, payload ) {
    axios.get('/applications/' + payload).then((response) => {
      context.commit('UPDATE_APPLICANT', response.data)

    });
  },
   getcontri ({ commit }) {
    axios.get('/applications').then((response) => {
      commit('UPDATE_APPLICATIONS', response.data)
    });
  },
 
 getUserInterest ( context, payload) {

   
    axios.post('/interest/' + payload).then((response) => {
      context.commit('UPDATE_USER_INTEREST', response.data);
      

    });
  },
      deleteContr({commit}, payload){

 axios.delete('/applications/'+ payload ).then(() => {              
              commit('DELETE_applicant', payload)

            
          })


      },
 
confirmContribution(context, payload) {

        return new Promise((resolve,reject)=>{

          axios.post('/contributions', payload)
            .then((response) => {
             
              //context.commit('authSuccess', accessToken)

              console.log(payload);
              resolve(response);

            })
            .catch((error) => {
              
              console.log(error);
              reject(error);
            })

        })
         
      },

       confirmAppli ({ commit, payload }) {
    axios.put('/applications/'+ payload).then((response) => {
      context.commit('UPDATE_USERS', response.data)
    });
  },

  payinterest({ commit }, payload) {

        return new Promise((resolve,reject)=>{

          axios.post('/interest', payload)
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

       
      creatcontri (payload) {
    axios.post('/register', payload).then((response) => {
     
    }).catch((error) => {
              
              console.log(error);
              
            });
  },
 getcontid ({ commit }, payload) {
    axios.get('/getcontid/'+ parseInt(localStorage.getItem('Uid') || '', 10)).then((response) => {
     
      commit('UPDATE_USERS_CONT', response.data)
    });
  },
};

const getters = {

  contributions: state => state.allContribution,
  ContributionTotal :state =>{return state.allContribution.reduce((acc, allcontribution) => acc + allcontribution.amount, 0)} ,
  ApprovedLoanTotal :state =>{return state.approvedloan.reduce((acc, allloan) => acc + allloan.loanamount, 0)} ,
  
   interests: state => state.allInterest ,
  loadcont: state => state.loadcont,
  usercontributions: state => state.userContribution,
  contrids: state => state.allContribution.map(a => a.id),
  memberids: state => state.allContribution.map(a => a.id),
  memberInterest: state => state.memberInterest,
getcontid: state => state.usercontData,
UserContributionTotal :state =>{return state.usercontData.reduce((acc, allcontribution) => acc + allcontribution.amount, 0)} ,
 
UserInterestTotal :state =>{return state.memberInterest.reduce((acc, allcontribution) => acc + allcontribution.amount, 0)} ,
    //return state.allContribution.find(contribution => state.contribution.member === localStorage.getItem('Uid') || '')
  getcontributionsById: state =>  { return state.allContribution.filter(appdata => appdata.member === parseInt(localStorage.getItem('Uid') || '', 10) )},




  

    
  
};

const contribution = {
  state,
  mutations,
  actions,
  getters
}

export default contribution;