<template>
  <main>
   
  <b-card-group deck class="mb-2">
        <b-card border-variant="primary" title="Total Contribution">

          <p class="card-text" >

               

<div v-if="loadcont">
  <h1> Loading.... </h1>
</div>
<div v-else>
  <h1>{{ContributionTotal}}</h1>
</div>

            </p>

            
           
           
        </b-card>
        <b-card border-variant="primary" title="Status">
            <p class="card-text">
                <h1>Active</h1>
            </p>
           
        </b-card>
        <b-card border-variant="primary" 
        title="Approved Loan Total">
            <div v-if="loadcont">
  <h1> Loading.... </h1>
</div>
<div v-else>
  <h1>{{ApprovedLoanTotal}}</h1>
</div>
            
        </b-card>

    </b-card-group>

    <b-card border-variant="info"
            header="Contributions"
            header-bg-variant="info"
            header-text-variant="white"
            align="center">

<div class="spinner-border m-5" text-warning v-if="loadcont" role="status">
  <span class="sr-only">Loading...</span>
</div>
      

      <b-row class="text-center">
    <b-col lg="4" class="pb-2"><b-button size="md" v-b-modal.modallg variant="success">Confirm Payment.</b-button></b-col>
  </b-row>
 <b-table striped hover responsive 
 :items="contributions" 
 
 :fields="fields" 
 :current-page="currentPage" 
  :per-page="perPage"

      
>

  

 

       


</b-table>

  
    <b-row>


    

      <b-modal 
       id="modallg" 
       size="lg" 
       title="Confirm Payment"
       ok-only
       >
         
         <form  @submit.prevent="confirmCont">
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" v-model="amount">Amount</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Amount" v-model="amount">
    </div>
  </div>
  
 <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Member</label>
    <div class="col-sm-10">
      <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="member">
    <option selected>Choose...</option>
    
    <option v-for="memberid in getmembers" >{{memberid}}</option>
  </select>
    </div>
  </div>

 <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Date</label>
    <div class="col-sm-10">
      <date-picker v-model="value" lang="en"  value-type='format' type="date" format="YYYY-MM-DD" ></date-picker>
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
          :total-rows= "totalRows"
          :per-page= "perPage"
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
import DatePicker from 'vue2-datepicker'
export default {
  name: 'contrBody',

  components: { DatePicker },
   computed: {
    ...mapGetters([ 'isAuthenticated', 'authStatus', 'applicant', 'loadcont', 'getmembers', 'contributions','ContributionTotal','ApprovedLoanTotal' ]),
    
    
  },
  methods: {
    ...mapActions([
      
    ]),

   confirmCont: function () {
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

            
            this.$store.dispatch('confirmContribution',{amount:this.amount, member:this.member, user:this.user, date:this.value }).then(() => {
    
   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Confirm', 'successfull', 'success')


          } else {
            this.$swal('Cancelled', 'Interest not Paid', 'info')
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
    
    
      
       
        user: localStorage.getItem('Uid') || '',
    amount: null,
    member: null,

       fields: [

       {
            key: 'id',
            label: 'id.',
            sortable: false
          },
          {
            key: 'user',
            label: 'User Id',
            sortable: true

          },
          {
            key: 'member',
            label: 'Member',
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
            label: 'Date',
            sortable: false
          },

 

         
          
        ],
        
       currentPage: 1,
        perPage: 10,
     totalRows: 1000,
      value: '',
 
      // custom range shortcuts
     
      }
    },


  
  created() {

   // this.loadapplicant = true,
   //this.$acl.change('admin');
this.$acl.change(localStorage.getItem('status') || '');

    this.$store.dispatch('getMembers');
    this.$store.dispatch('getcontributions');
  },
  
}
</script>