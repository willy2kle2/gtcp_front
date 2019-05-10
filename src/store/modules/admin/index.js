import axios from 'axios';
axios.defaults.baseURL = 'http://portal.gtcoop.com.ng/api';
//axios.defaults.headers.common['Authorization'] = "Bearer " + window.token;

axios.defaults.headers.post['Content-Type'] = 'application/json';
import VueAxios from 'vue-axios';

const state = {

	userData: [],
  applicationData: [],
  loanData: [],
  loanpayData: [],
  mloanData: [],
  count: 4,
  applicantData: [],
  loanapplicantData: [],
  mloanapplicantData: [],
  memberData: [],
  loadapplicant: true, 
  loadloanpay:true,
  memberloanapplications: [] ,
  loanapplications: [] ,
  userloanpayData:[],
  loginstatus:false,
  loginerrorstatus:false,
  
 
	cuid:0,

    token: localStorage.getItem('token') || '',
    status:'',
};

const mutations = {

 UPDATE_USERS (state, payload) {
    state.userData = payload;
  },
UPDATE_MEMBER (state, payload) {
    state.memberData = payload;
  },
  
  UPDATE_APPLICATIONS (state, payload) {
    state.applicationData = payload;
    state.loadapplicant = false;

  },
UPDATE_LOANS (state, payload) {
    state.loanData = payload;
    state.loadloan = false;

  },

  UPDATE_LOGIN_STATUS (state, payload) {
    state.loginstatus = payload;
    

  },
  UPDATE_LOGIN_ERROR (state, payload) {
    state.loginerrorstatus = payload;
    

  },
  UPDATE_USERS_LOAN_PAY(state, payload) {
    state.userloanpayData = payload;
    //state.loadloan = false;

  },
  UPDATE_LOANS_PAY (state, payload) {
    state.loanpayData = payload;
    state.loadloanpay = false;

  },
  UPDATE_MLOANS (state, payload) {
    state.mloanData = payload;
    state.loadloan = false;

  },
  UPDATE_APPLICANT (state, payload) {
    state.applicantData = payload;
  },
   UPDATE_LOAN_APPLICANT (state, payload) {
    state.loanapplicantData = payload;
  },
  UPDATE_MLOAN_APPLICANT (state, payload) {
    state.mloanapplicantData = payload;
  },
   authSuccess(state,token){
          state.token=token;
          state.status='success';
         
      },

       authSuccess2(state, userid){
          
          state.cuid = localStorage.getItem('Uid') || '';
      },
      
      authError(state){
          state.token='';
          state.status='error';
      },
 authLogout(state){
        state.token='';
        state.uid='';
      },

      DELETE_applicant(state, payload){
  let index = state.applicationData.findIndex(x => x.id==payload);
state.applicationData.splice(index, 1);

 //applicationData.splice(i, 1)
},
 ADD_LOAN_APPLY(state, payload){
 
state.mloanData.push(payload);

},
 DELETE_USER(state, payload){
  let index = state.userData.findIndex(x => x.id==payload);
state.userData.splice(index, 1);

},
  CONFIRM_applicant(state){
  
  state.applicantData.status = "Confirmed"


 
}

};

const actions = {


  getUsers ({ commit }) {
    axios.get('/users').then((response) => {
      commit('UPDATE_USERS', response.data)
    });
  },
  getApplicant ( context, payload ) {
    axios.get('/applications/' + payload).then((response) => {
      context.commit('UPDATE_APPLICANT', response.data)


    });
  },

    getloanApplicant ( context, payload ) {
    axios.get('/loans/' + payload).then((response) => {
      context.commit('UPDATE_LOAN_APPLICANT', response.data)


    });
  },

   getmloanApplicant ( context, payload ) {
    axios.get('/mloans/' + payload).then((response) => {
      context.commit('UPDATE_MLOAN_APPLICANT', response.data);
      let memberid = response.data.memberid;
     
      localStorage.setItem('mid', memberid);
    


    });
  },
getmLoans ({ commit }) {
    axios.get('/mloans').then((response) => {
      commit('UPDATE_MLOANS', response.data)
    });
  },
  getLoans ({ commit }) {
    axios.get('/loans').then((response) => {
      commit('UPDATE_LOANS', response.data)
    });
  },
  getloanpayments ({ commit }) {
    axios.get('/loanpay').then((response) => {
      commit('UPDATE_LOANS_PAY', response.data)
    });
  },
  getUser ( context, payload) {

   
    axios.get('/applications/' + payload).then((response) => {
      context.commit('UPDATE_MEMBER', response.data)

    });
  },
   getApplications ({ commit }) {
    axios.get('/applications').then((response) => {
      commit('UPDATE_APPLICATIONS', response.data)
    });
  },


 login(context, payload) {

        return new Promise((resolve,reject)=>{
           context.commit('UPDATE_LOGIN_STATUS', true);
          axios.post('/login', payload)
            .then((response) => {
              let accessToken = response.data.access_token;
              let userstatus = response.data.role;
              let userid = response.data.uid;
              
              context.commit('authSuccess', accessToken);
              context.commit('authSuccess2', userid);
              localStorage.setItem('token', accessToken);
              localStorage.setItem('status', userstatus);
              localStorage.setItem('Uid', userid);
              axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;
              context.commit('UPDATE_LOGIN_STATUS', false);
              resolve(response);

            })
            .catch(Error => {
              localStorage.removeItem('token');
              context.commit('authError')
              context.commit('UPDATE_LOGIN_STATUS', false);
              context.commit('UPDATE_LOGIN_ERROR', true);
              
              reject(Error);
            })

        })
         
      },


    

      deleteApplicant({commit}, payload){

 axios.delete('/applications/'+ payload ).then(() => {              
              commit('DELETE_applicant', payload)

            
          })


      },


       deleteUser({commit}, payload){

 axios.delete('/users/'+ payload ).then(() => {              
              commit('DELETE_USER', payload)

            
          })


      },
 
confirmApplicant({ commit }, payload) {

        return new Promise((resolve,reject)=>{

          axios.post('/members', payload)
            .then((response) => {
             
              //commit('CONFIRM_applicant', payload)

              

              
              resolve(response);

            })
            .catch((error) => {
              
             
              reject(error);
            })

        })
         
      },
confirmloanApplicant({ commit }, payload) {

        return new Promise((resolve,reject)=>{

          axios.post('/mloans', payload)
            .then((response) => {
             
              //commit('CONFIRM_applicant', payload)

              

              
              resolve(response);

            })
            .catch((error) => {
              
             
              reject(error);
            })

        })
         
      },


      confirmLoanpay(context, payload) {

        return new Promise((resolve,reject)=>{

          axios.post('/loanpay', payload)
            .then((response) => {
             
              //context.commit('authSuccess', accessToken)

              
              resolve(response);

            })
            .catch((error) => {
              
             
              reject(error);
            })

        })
         
      },

       confirmApplicants ({ commit, payload }) {
    axios.put('/applications/'+ payload).then((response) => {
      context.commit('UPDATE_USERS', response.data)
    });
  },

   getloanpayid ({ commit }, payload) {
    axios.get('/userloanpay/'+ payload).then((response) => {
     
      commit('UPDATE_USERS_LOAN_PAY', response.data)
    });
  },

        logout(context){
        return new Promise((resolve,reject)=>{
            context.commit('authLogout')
            localStorage.removeItem('token');
            localStorage.removeItem('status');
             localStorage.removeItem('Uid');
            delete axios.defaults.headers.common['Authorization'] ;

            resolve();


        })
      },
      creatUsers (context, payload) {
    axios.post('/register', payload).then((response) => {
     
    }).catch((error) => {
              
             
              
            });
  },

   changeuserpw(context, payload) {
    axios.post('/changeuserpw', payload).then((response) => {
     
    }).catch((error) => {
              
             
              
            });
  },
confirmloan(context, payload) {

        return new Promise((resolve,reject)=>{

          axios.post('/confirmloan', payload)
            .then((response) => {
             
              //context.commit('authSuccess', accessToken)

              
              resolve(response);

            })
            .catch((error) => {
              
             
              reject(error);
            })

        })
         
      },

      confirmloanapply({ commit }, payload) {

        return new Promise((resolve,reject)=>{

          axios.post('/loanapply', payload)
            .then((response) => {
             
              commit('ADD_LOAN_APPLY', payload)

              
              resolve(response);

            })
            .catch((error) => {
              
              
              reject(error);
            })

        })
         
      },
};

const getters = {

  users: state => { return state.userData.filter(appdata => appdata.role === 'admin')},
  
   loadstatus: state => state.loadapplicant,
   loginstatus: state => state.loginstatus,
   loginerrorstatus: state=> state.loginerrorstatus,
  applications: state => state.applicationData,
   loanapp: state => state.loanData,
   loanpay: state => state.loanpayData,
   mloanapp: state => state.mloanData,
   loadloanpay: state => state.loadloanpay,
  applicant: state => state.applicantData,

  loanapplicant: state => state.loanapplicantData,
   mloanapplicant: state => state.mloanapplicantData,

  admin: state => state.admin,
 newapplications: state =>  { return state.applicationData.filter(appdata => appdata.status === 'not confirmed')},
  approvedloans: state =>  { return state.mloanData.filter(appdata => appdata.status === 'Approved')},
  activeloans: state =>  { return state.mloanData.filter(appdata => appdata.status === 'Active')},
  
   isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    memberData: state => state.memberData,
     getloansById: state =>  { return state.mloanData.filter(appdata => appdata.memberid == parseInt(localStorage.getItem('Uid') || '', 10) )},

userloanpayData:state => state.userloanpayData,



    
  
};

const admin = {
  state,
  mutations,
  actions,
  getters
}

export default admin;