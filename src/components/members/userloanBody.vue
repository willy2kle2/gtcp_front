<template>
  <main>
   
  <membeDash />

    <b-card border-variant="info"
            header="Loans"
            header-bg-variant="info"
            header-text-variant="white"
            align="center">


    <b-row class="text-center">
    <b-col lg="4" class="pb-2"><b-button size="md" v-b-modal.modallg variant="success">Apply for Loan</b-button></b-col>
  </b-row>  
 <b-table striped hover responsive 
 :items="getloansById" 
 
 :fields="fields" 
 :current-page="currentPage" 
      :per-page="perPage"

      
>

  <template slot="nameage" slot-scope="data">
          <b-button variant="success" size="sm" v-on:click="lpaydetail(data.item.id)"> Payments </b-button>
      </template>

 

      


</b-table >

  
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows= "totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
    <b-button size="md" variant="outline-secondary" >  <router-link
    v-if="$routerHistory.hasPrevious()"
    :to="{ path: $routerHistory.previous().path }">
    GO BACK
</router-link>

 </b-button>
     <b-modal 
       id="modallg" 
       size="lg" 
       title="Apply for Loan"
       ok-only
       >
         
         <form  @submit.prevent="confirmapply">
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" v-model="amount">Amount</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Amount" v-model="amount">
    </div>
  </div>
  
<div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" v-model="name">Full Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder=" " v-model="name">
    </div>
  </div>

 
  
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Confirm</button>
    </div>
  </div>
</form>


       </b-modal>
    </b-card>
    

  </main>
</template>
<script>
import { mapActions, mapGetters, } from 'vuex';
import membeDash from  '@/components/members/membeDash.vue'
export default {
  name: 'useloanBody',
   components: {
   membeDash,
  },
   computed: {
    ...mapGetters([ 'isAuthenticated', 'authStatus',  'loadcont', 'getloansById',]),
    
    
  },
  methods: {
    ...mapActions([
      
    ]),

   
 lpaydetail: function (id) {

  this.$store.dispatch('getloanpayid', id).then(
    
this.$router.push('/memberloanpay')
    )
 },

 confirmapply: function () {
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

            
            this.$store.dispatch('confirmloanapply',{amount:this.amount, member:this.member, name:this.name }).then(() => {
    
   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Confirm', 'successfull', 'success')


          } else {
            this.$swal('Cancelled', 'Application Not Made', 'info')
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
     name: '',
     amount:0,
     member: localStorage.getItem('Uid') || '', 
    
    
      totalRows:1000,
        perPage:10,

       fields: [

       {
            key: 'id',
            label: 'App. id.',
            sortable: false
          },
          {
            key: 'loanamount',
            label: 'Amount ',
            sortable: true

          },
         
          {
            key: 'created_at',
            label: 'Date Applied',
            sortable: false
          },
           {
            key: 'status',
            label: 'Status',
            sortable: false
          },
           {
            key: 'Comment',
            label: 'Comment',
            sortable: false
          },
 

          { key: 'nameage', label: ' ' },
          
        ],
        
       //currentPage: 1,
      //  perPage: 2,
     //totalRows: items.length,

      }
    },


  
  created() {

   // this.loadapplicant = true,
   //this.$acl.change('admin');
this.$acl.change(localStorage.getItem('status') || '');

    this.$store.dispatch('getmLoans');
    
  },
  
}
</script>