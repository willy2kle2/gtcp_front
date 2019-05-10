import Vue from 'vue'
import Router from 'vue-router'
import { AclRule } from 'vue-acl'

import HelloWorld from '@/components/HelloWorld'
import admin from '@/components/admin/admin'
import contributions from '@/components/admin/contributions'
import interests from '@/components/admin/interests'
import user from '@/components/admin/user'
import users from '@/components/admin/userslist'
import newapplicant from '@/components/admin/newapplicant'
import Login from '@/components/login'
import Logout from '@/components/Logout'
import Members from '@/components/members/MemberList'
import memberslist from '@/components/members/memberslist'
import Applicant from '@/components/members/Applicant'
import NotFound from '@/components/NotFound.vue'
import memberDetails from '@/components/members/memberDetails'
import suspendedmembers from '@/components/members/suspendedmembers'
import userDetail from '@/components/members/userDetail'
import userContribution from '@/components/members/userContribution'
import userInterest from '@/components/members/userInterest'
import loan from '@/components/loans/loan'
import mloan from '@/components/loans/mloan'
import Loanapplicant from '@/components/loans/LApplicant'
import mLoanapplicant from '@/components/loans/mLApplicant'
import approvedloans from '@/components/loans/approvedloans'
import activeloans from '@/components/loans/activeloans'
import loanpayment from '@/components/loans/loanpayments'
import userloan from '@/components/members/userLoan'
import userloanpay from '@/components/members/userLoanpay'
import changememberpw from '@/components/members/changememberpw'
import changememberpwadmin from '@/components/admin/changememberpw'



import store from '../store';

Vue.use(Router)



const router=new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: admin,

        meta: {
        rule: 'isAdmin' 
      }
          },

      {
      path: '/memberslist',
      name: 'MemberList',
      component: memberslist,

        meta: {
        rule: 'isAdmin' 
      }
          }, 
           

      {
      path: '/allloans',
      name: 'allloans',
      component: mloan,

        meta: {
        rule: 'isAdmin' 
      }
},
{
      path: '/changememberpw',
      name: 'changememberpw',
      component: changememberpw,

        meta: {
        rule: 'isUser' 
      }
},
{
      path: '/changememberpwadmin',
      name: 'changememberpwadmin',
      component: changememberpwadmin,

        meta: {
        rule: 'isAdmin' 
      }
},
 {
      path: '/approvedloans',
      name: 'approvedloans',
      component: approvedloans,

        meta: {
        rule: 'isAdmin' 
      }
},
 {
      path: '/activeloans',
      name: 'activeloans',
      component: activeloans,

        meta: {
        rule: 'isAdmin' 
      }
},
{
       path: '/loans',
      name: 'loans',
      component: loan,

        meta: {
        rule: 'isAdmin' 
      }
          },
 {
       path: '/loanpayments',
      name: 'loanpayments',
      component: loanpayment,

        meta: {
        rule: 'isAdmin' 
      }
          },          
      {
       path: '/mloans',
      name: 'mloans',
      component: mloan,

        meta: {
        rule: 'isAdmin' 
      }
          },      
       {
      path: '/newapplicant',
      name: 'newapplicant',
      component: newapplicant,

        meta: {
        rule: 'isAdmin' 
      }
          },        

      {
      path: '/contributions',
      name: 'Contributions',
      component: contributions,

        meta: {
        rule: 'isAdmin' 
      }
          },    

         {
      path: '/interests',
      name: 'Interests',
      component: interests,

        meta: {
        rule: 'isAdmin' 
      }
          },      

     {
      path: '/user',
      name: 'userHome',
      component: user,

        meta: {
        rule: 'isUser' 
      }
          },

       {
      path: '/users',
      name: 'users',
      component: users,

        meta: {
        rule: 'isAdmin' 
      }
          },    

          {
      path: '/userContribution',
      name: 'userContribution',
      component: userContribution,

        meta: {
        rule: 'isUser' 
      }
          },
 {
      path: '/userInterest',
      name: 'userInterest',
      component: userInterest,

        meta: {
        rule: 'isUser' 
      }
          },
        {
      path: '/memberloans',
      name: 'userloans',
      component: userloan,

        meta: {
        rule: 'isUser' 
      }
          }, 


           {
      path: '/memberloanpay',
      name: 'userloanpay',
      component: userloanpay,

        meta: {
        rule: 'isUser' 
      }
          },    
      {
      path: '/userDetail',
      name: 'userDetail',
      component: userDetail,

        meta: {
        rule: 'isUser' 
      }
          },  
   
    {
      path: '/login',
      name: 'Login',
      component: Login,
       meta: {
        rule: 'isPublic'
      }
    },
      {
      path: '/logout',
      name: 'Logout',
      component: Logout,
       meta: {
        rule: 'isPublic'
      }
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
   
   {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/applicant',
      name: 'Applicant',
      component: Applicant,
      meta: {
        rule: 'isAdmin'
      }
    },
     {
      path: '/loanapplicant',
      name: 'LoanApplicant',
      component: Loanapplicant,
      meta: {
        rule: 'isAdmin'
      }
    },

     {
      path: '/mloanapplicant',
      name: 'mLoanApplicant',
      component: mLoanapplicant,
      meta: {
        rule: 'isAdmin'
      }
    },
    {
      path: '/member',
      name: 'member',
      component: memberDetails,
      meta: {
        rule: 'isAdmin'
      }
    },

    {
      path: '/suspendedmembers',
      name: 'suspendedmembers',
      component: suspendedmembers,

        meta: {
        rule: 'isAdmin' 
      }
          }, 
      {
      path: '/error',
      name: 'notfound',
      component: NotFound,
      meta: {
        rule: '*'
      }
    }
  ]
});

const openRoutes=['Login','Signup'];

router.beforeEach((to, from, next) => {
    
    if(openRoutes.includes(to.name)  ){
      next()
    } else if (store.getters.isAuthenticated){


      next()
    }else{
      next('/login')
    }

})



export default router
