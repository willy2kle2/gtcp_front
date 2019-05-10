<template>
  <div>
     <adminNav />
      <b-row >
        
        <b-col class="pr-1" >
          
<adminSide   />


        </b-col>
        <b-col cols="9" class="mt-1 pl-0">  

 <b-card
     
      header-tag="Applicant Details"
      footer=" "
      footer-tag="footer"
      title="Applicant Details"
    >
      
<div class="mt-3">
    <b-card-group deck class="mb-3">
      <b-card 
       border-variant="primary"
        header="Loan"
        header-bg-variant="primary"
        header-text-variant="white"
        align="left"

      >
       


  <table class=" col-md-12 ">

                         <tbody>
                             <tr>
                                 <td class="h6"><strong>Loan Id</strong></td>
                                 <td> </td>
                                 <td class="h5">{{mloanapplicant.id}}</td>
                             </tr>
                             
                            
                             
                             <tr>
                                 <td class="h6"><strong>Member </strong></td>
                                 <td> </td>
                                 <td class="h5">{{mloanapplicant.memberid}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong> Amount</strong></td>
                                 <td> </td>
                                 <td class="h5">{{mloanapplicant.loanamount}} </td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Status</strong></td>
                                 <td> </td>
                                 <td class="h5">{{mloanapplicant.status}} </td>

                                 <td> </td>

                             </tr>

                             <tr>
                                 <td class="h6"><strong>Date</strong></td>
                                 <td> </td>
                                 <td class="h5">{{ mloanapplicant.created_at | moment("dddd, MMMM Do YYYY") }}</td>

                                 <td> </td>
                                 
                             </tr>
                             
                            

                                                     

                             
                            

                         </tbody>
                    </table>
      </b-card>

      <b-card 
       border-variant="success"
        header="Member Details"
        header-bg-variant="success"
        header-text-variant="white"
        align="center"

      >
        <table class=" col-md-12 ">

                         <tbody>
                             <tr>
                                 <td class="h6"><strong> Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{lmember.name}}</td>
                             </tr>
                             
                            
                             
                             <tr>
                                 <td class="h6"><strong>Email </strong></td>
                                 <td> </td>
                                 <td class="h5">{{lmember.email}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong> Phone</strong></td>
                                 <td> </td>
                                 <td class="h5">{{lmember.phone}} </td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Member Status</strong></td>
                                 <td> </td>
                                 <td class="h5">{{lmember.status}} </td>

                                 <td> </td>

                             </tr>

                             <tr>
                                 <td class="h6"><strong>Date Joined</strong></td>
                                 <td> </td>
                                 <td class="h5">{{lmember.date | moment("dddd, MMMM Do YYYY") }}</td>

                                 <td> </td>
                                 
                             </tr>
                             
                            

                                                     

                             
                            

                         </tbody>
                    </table>
      </b-card>
    </b-card-group>
  </div>

<hr />


    </b-card-text>
    
  <b-button size="md" v-b-modal.modallg variant="success">Approve Loan</b-button>
      <b-button size="md" variant="danger"  >Reject</b-button>
      <b-button variant="outline-secondary" >  <router-link
    v-if="$routerHistory.hasPrevious()"
    :to="{ path: $routerHistory.previous().path }">
    GO BACK
</router-link>

 </b-button>
     
    </b-card>

        </b-col>

        <b-modal 
       id="modallg" 
       size="lg" 
       title="Approve Loan"
       ok-only
       >
         
         <form  @submit.prevent="confirmloan">
             <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" v-model="id">Loan ID</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" value="lmember.id" placeholder="Amount" v-model="id">
    </div>
  </div>
   

  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" v-model="amount">Amount</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Amount" v-model="amount">
    </div>
  </div>
  
 <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" >Comment</label>
    <div class="col-sm-10">
      <input type="textbox" class="form-control" id="inputEmail3" placeholder="Comment" v-model="comment">
    </div>
  </div>

  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Start Date</label>
    <div class="col-sm-10">
      <date-picker v-model="startdate" lang="en"  value-type='format' type="date" format="YYYY-MM-DD" ></date-picker>
    </div>
  </div>
 
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">End Date</label>
    <div class="col-sm-10">
      <date-picker v-model="enddate" lang="en"  value-type='format' type="date" format="YYYY-MM-DD" ></date-picker>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Approve</button>
    </div>
  </div>
</form>


       </b-modal>
    </b-row>
   
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
import adminSide from '@/components/adminSide.vue'
import adminNav from  '@/components/adminNav.vue'
import DatePicker from 'vue2-datepicker'




export default {
  name: 'Lapplicant',
  components: {
    adminSide,
    adminNav,
    DatePicker,

    
  },
  computed: {
    ...mapGetters(['mloanapplicant', 'lmember'])
  },
  methods: {
    ...mapActions([
      
    ]),

    

  confirmloan: function () {
       this.$swal({
          title: 'Are you sure?',
          text: 'You want to Approve?' ,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Approve!',
          cancelButtonText: 'No, Cancel',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {

            
            this.$store.dispatch('confirmloan', {amount:this.amount, id:this.id, user:this.user, comment:this.comment
            , startdate:this.startdate, enddate:this.enddate }).then(() => {
    
   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Confirm', 'successfull', 'success')


          } else {
            this.$swal('Cancelled', 'Loan not Approved', 'info')
          }
        })
    },


 confirmApplicant: function (id, firstname, lastname, loanamount, user,) {

  this.$store.dispatch('confirmloanApplicant' , { id:id, firstname:firstname, lastname:lastname, loanamount:loanamount,  user:this.user}).then(() => {
   

this.$swal({
  position: 'top-end',
  type: 'success',
  title: 'Application Confirmed',
  showConfirmButton: false,
  timer: 1500
})
   }).catch((err) => {
    console.log(err)
   })
       
    },


    
    


  },
  data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        isBusy: true,
        items: [],
        user: localStorage.getItem('Uid') || '',
        amount:0,
        comment: '',
        startdate:' ',
        enddate:' ',
        id:0,
     
    }

  },


  
  created() {
    this.$store.dispatch('getMembers');
  },

}
</script>

<style scoped>

body {
            background: #000 !important;
        }
        
        .card-login {
            margin-top: 30px;
            padding: 18px;
            max-width: 30rem;
        }

        .card-header {
            color: #fff;
            /*background: #ff0000;*/
            font-family: sans-serif;
            font-size: 20px;
            font-weight: 600 !important;
            margin-top: 10px;
            border-bottom: 0;
        }

        .input-group-prepend span{
            width: 50px;
            background-color: #ff0000;
            color: #fff;
            border:0 !important;
        }

        input:focus{
            outline: 0 0 0 0  !important;
            box-shadow: 0 0 0 0 !important;
        }

        .login_btn{
            width: 130px;
        }

        .login_btn:hover{
            color: #fff;
            background-color: #ff0000;
        }

        .btn-outline-danger {
            color: #fff;
            font-size: 18px;
            background-color: #28a745;
            background-image: none;
            border-color: #28a745;
        }

        .form-control {
            display: block;
            width: 100%;
            height: calc(2.25rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 1.2rem;
            line-height: 1.6;
            color: #28a745;
            background-color: transparent;
            background-clip: padding-box;
            border: 1px solid #28a745;
            border-radius: 0;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .input-group-text {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            padding: 0.375rem 0.75rem;
            margin-bottom: 0;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.6;
            color: #495057;
            text-align: center;
            white-space: nowrap;
            background-color: #e9ecef;
            border: 1px solid #ced4da;
            border-radius: 0;
        }
</style>
