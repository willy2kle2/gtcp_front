<template>
  <main>
   
  <b-card-group deck class="mb-2">
        <b-card border-variant="primary" title="Total Contribution">

          <p class="card-text" >

               

<div v-if="loadloanpay">
  <h1> Loading.... </h1>
</div>
<div v-else>
  <h1>70,000</h1>
</div>

            </p>

            
           
           
        </b-card>
        <b-card border-variant="primary" title="Status">
            <p class="card-text">
                <h1>Active</h1>
            </p>
           
        </b-card>
        <b-card border-variant="primary" 
        title="Total Interest">
            <div v-if="loadloanpay">
  <h1> Loading.... </h1>
</div>
<div v-else>
  <h1> 50,000</h1>
</div>
            
        </b-card>

    </b-card-group>

    <b-card border-variant="info"
            header="Loan Payments"
            header-bg-variant="info"
            header-text-variant="white"
            align="center">

<div class="spinner-border m-5" text-warning v-if="loadloanpay" role="status">
  <span class="sr-only">Loading...</span>
</div>
      

      <b-row class="text-center">
    <b-col lg="4" class="pb-2"><b-button size="md" v-b-modal.modallg variant="success">Confirm Payment.</b-button></b-col>
  </b-row>
 <b-table striped hover responsive 
 :items="loanpay" 
 
 :fields="fields" 
 :current-page="currentPage" 
      :per-page=10

      
>

  

 

       


</b-table>

  
    <b-row>

      <b-modal 
       id="modallg" 
       size="lg" 
       title="Confirm Payment"
       ok-only
       >
         
         <form  @submit.prevent="confirmLoanpay">


    <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" v-model="loanid">Loan Id</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="loanid" placeholder="Loan ID" v-model="loanid">
    </div>
  </div>       
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" v-model="amount">Amount</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Amount" v-model="amount">
    </div>
  </div>
  


 
  
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Confirm</button>
    </div>
  </div>
</form>


       </b-modal>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows= 10
          :per-page= 10
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
     <b-button  size="md" variant="outline-secondary" >  <router-link
    v-if="$routerHistory.hasPrevious()"
    :to="{ path: $routerHistory.previous().path }">
    GO BACK
</router-link>

 </b-button>
    </b-card>
    

  </main>
</template>
<script>
import { mapActions, mapGetters, } from 'vuex';
export default {
  name: 'contrBody',
   computed: {
    ...mapGetters([ 'isAuthenticated', 'authStatus', 'applicant', 'loadloanpay', 'loanpay']),
    
    
  },
  methods: {
    ...mapActions([
      
    ]),

   confirmLoanpay: function () {
       this.$swal({
          title: 'Are you sure?',
          text: 'You want to Confirm?' ,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Confirm!',
          cancelButtonText: 'No, Cancel',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {

            
            this.$store.dispatch('confirmLoanpay',{amount:this.amount, loanid:this.loanid, user:this.user }).then(() => {
    
   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Confirm', 'successfull', 'success')


          } else {
            this.$swal('Cancelled', ' Payment not made', 'info')
          }
        })
    },


 applicantDetails: function (id) {

  this.$store.dispatch('getApplicant' , id).then(() => {
    this.$router.push({'path': '/applicant'})
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
     applicationslength:'',
    
    
      totalrows:'',
       
        user: localStorage.getItem('Uid') || '',
    amount: null,
    loanid: null,

       fields: [

       {
            key: 'pid',
            label: 'id.',
            sortable: false
          },
          {
            key: 'userid',
            label: 'User Id',
            sortable: true

          },
          {
            key: 'loanid',
            label: 'Loanid',
            sortable: false
          },
          
          {
            key: 'amount',
            label: 'Amount',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
           
          },
          {
            key: 'date',
            label: 'Payment Date',
            sortable: false
          },

 

         
          
        ],
        
       currentPage: 1,
        //perPage: 2,
     //totalRows: items.length,

      }
    },


  
  created() {

   // this.loadapplicant = true,
   //this.$acl.change('admin');
this.$acl.change(localStorage.getItem('status') || '');

    this.$store.dispatch('getLoans');
    this.$store.dispatch('getloanpayments');
  },
  
}
</script>