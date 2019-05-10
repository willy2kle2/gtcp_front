<template>
  <main>
   
  <b-card-group deck class="mb-2">
        <b-card border-variant="primary" title="Total Interest Paid">

          <p class="card-text" >

               

<div v-if="loadcont">
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
            <div v-if="loadcont">
  <h1> Loading.... </h1>
</div>
<div v-else>
  <h1> 50,000</h1>
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
    <b-col lg="4" class="pb-2"><b-button size="sm" v-b-modal.modallg variant="success">Pay Interest.</b-button></b-col>
  </b-row>
 <b-table striped hover responsive 
 :items="interests" 
 
 :fields="fields" 
 :current-page="currentPage" 
      :per-page="5"

      
>

  

 


</b-table>

  
    <b-row>

       <b-modal 
       id="modallg" 
       size="lg" 
       title="Pay Interest"
       ok-only
       >
         
         <form  @submit.prevent="payint">
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
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Pay</button>
    </div>
  </div>
</form>


       </b-modal>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows= 5
          :per-page="perpage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
     
    </b-card>
    

  </main>
</template>
<script>
import { mapActions, mapGetters, } from 'vuex';
export default {
  name: 'intBody',
   computed: {
    ...mapGetters([ 'isAuthenticated', 'authStatus', 'applicant', 'loadcont', 'interests', 'getmembers']),
    
    
  },
  methods: {
    ...mapActions([
      
    ]),

    payint: function () {
       this.$swal({
          title: 'Are you sure?',
          text: 'You want to pay?' ,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Pay!',
          cancelButtonText: 'No, Cancel',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {

            
            this.$store.dispatch('payinterest',{amount:this.amount,member:this.member, user:this.user }).then(() => {
    
   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Paid', 'successfull', 'success')


          } else {
            this.$swal('Cancelled', 'Interest not Paid', 'info')
          }
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
    
      totalrows:'',
        perpage:10,

       fields: [

       {
            key: 'id',
            label: 'id.',
            sortable: false
          },
          {
            key: 'user_id',
            label: 'User Id',
            sortable: true

          },
          {
            key: 'member_id',
            label: 'member id',
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
        perPage: 2,
     //totalRows: items.length,

      }
    },


  
  created() {

   // this.loadapplicant = true,
   //this.$acl.change('admin');
this.$acl.change(localStorage.getItem('status') || '');

     this.$store.dispatch('getMembers');
      this.$store.dispatch('getinterest');
  


  },
  
}
</script>