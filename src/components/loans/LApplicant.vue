<template>
  <div>
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
      

<b-tabs content-class="mt-3">
    <b-tab title="Bio Data" active>
      
<table class=" col-md-8 ">

                         <tbody>
                             <tr>
                                 <td class="h6"><strong>First Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.firstname}}</td>
                             </tr>
                             
                             
                             
                             <tr>
                                 <td class="h6"><strong>Last Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.lastname}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Phone</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.phone}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Email</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.email}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>House Address</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.address}}</td>
                             </tr>  

                             <tr>
                                 <td class="h6"><strong>Biz Address</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.bizaddress}}</td>
                             </tr>                            

                             <tr>
                                 <td class="h6"><strong>Occupation</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.occupation}}</td>
                             </tr> 
                              <tr>
                                 <td class="h6"><strong>Loan Amount</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.loanamount}}</td>
                             </tr>  
                            

                         </tbody>
                    </table>


    </b-tab>
    <b-tab title="Bank Details"> <table class=" col-md-8 ">

                         <tbody>
                             <tr>
                                 <td class="h6"><strong>Bank Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.Bank_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Account Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.Account_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Account Number</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.Account_number}}</td>
                             </tr>
                             
                                               

                             
                            

                         </tbody>
                    </table></b-tab>
    <b-tab title="Next of Kin" ><table class=" col-md-8 ">

                         <tbody>
                             <tr>
                                 <td class="h6"><strong>First Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.kin_fname}}</td>
                             </tr>
                             
                            
                             
                             <tr>
                                 <td class="h6"><strong>Last Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.kin_lname}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Phone</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.kin_phone}} <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span></td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Email</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.kin_email}} <span>{{ loanapplicant.created_at | moment("dddd, MMMM Do YYYY") }}</span></td>
                             </tr>
                             
                            

                             <tr>
                                 <td class="h6"><strong>Relationship</strong></td>
                                 <td> </td>
                                 <td class="h5">{{loanapplicant.kin_relationship}}</td>
                             </tr>                            

                             
                            

                         </tbody>
                    </table></b-tab>
  </b-tabs>
<hr />


    </b-card-text>
    
      <b-button  variant="success"   v-on:click="confirmApplicant(loanapplicant.id, loanapplicant.firstname, loanapplicant.lastname, loanapplicant.loanamount)" >Confirm</b-button>
      <b-button variant="danger"  >Reject</b-button>
      <h5 class="pt-2">Satus:  {{loanapplicant.status}} </h5> 
    </b-card>

        </b-col>

        
    </b-row>
   
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
import adminSide from '@/components/adminSide.vue'





export default {
  name: 'Lapplicant',
  components: {
    adminSide,
    
  },
  computed: {
    ...mapGetters(['loanapplicant'])
  },
  methods: {
    ...mapActions([
      
    ]),

    

 


 confirmApplicant: function (id, firstname, lastname, loanamount, user) {

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
     
    }

  },


  
  created() {
    this.$store.dispatch('getApplications');
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
