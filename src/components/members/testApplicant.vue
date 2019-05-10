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
                                 <td class="h5">{{applicant.f_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Middle Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.m_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Last Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.l_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Phone</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.phone}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Email</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.email}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>House Address</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.address}}</td>
                             </tr>  

                             <tr>
                                 <td class="h6"><strong>Biz Address</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.biz_address}}</td>
                             </tr>                            

                             <tr>
                                 <td class="h6"><strong>Occupation</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.occupation}}</td>
                             </tr> 
                              <tr>
                                 <td class="h6"><strong>Scheme</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.scheme}}</td>
                             </tr>  
                            

                         </tbody>
                    </table>


    </b-tab>
    <b-tab title="Bank Details"> <table class=" col-md-8 ">

                         <tbody>
                             <tr>
                                 <td class="h6"><strong>Bank Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.bank_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Account Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.account_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Account Number</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.account_number}}</td>
                             </tr>
                             
                                               

                             
                            

                         </tbody>
                    </table></b-tab>
    <b-tab title="Next of Kin" ><table class=" col-md-8 ">

                         <tbody>
                             <tr>
                                 <td class="h6"><strong>First Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.kin_f_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Middle Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.m_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Last Name</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.Kin_l_name}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Phone</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.kin_phone}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>Email</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.kin_email}}</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>House Address</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.kin_address}}</td>
                             </tr>  

                             <tr>
                                 <td class="h6"><strong>Relationship</strong></td>
                                 <td> </td>
                                 <td class="h5">{{applicant.kin_relationship}}</td>
                             </tr>                            

                             
                            

                         </tbody>
                    </table></b-tab>
  </b-tabs>
<hr />


    </b-card-text>
    
      <b-button  variant="success"   v-on:click="confirmApplicant(applicant.id, applicant.phone, applicant.email, applicant.f_name, applicant.l_name)" >Confirm</b-button>
      <b-button variant="danger"  >Reject</b-button>
      <h5 class="pt-2">Satus:  {{applicant.status}} </h5> 
    </b-card>

        </b-col>

        
    </b-row>
   
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
import adminSide from '@/components/adminSide.vue'





export default {
  name: 'applicant',
  components: {
    adminSide,
    
  },
  computed: {
    ...mapGetters(['applicant'])
  },
  methods: {
    ...mapActions([
      
    ]),

    

 


 confirmApplicant: function (id, phone, email, fname, lname) {

  this.$store.dispatch('confirmApplicant' , {email:email, phone:phone, id:id, fname:fname, lname:lname}).then(() => {
   

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
