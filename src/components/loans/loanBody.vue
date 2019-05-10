<template>
  <main>
   
  <adminDash />

    <b-card border-variant="info"
            header="Applications"
            header-bg-variant="info"
            header-text-variant="white"
            align="center">

<div class="spinner-border m-5" text-warning v-if="loadstatus" role="status">
  <span class="sr-only">Loading...</span>
</div>
      
 <b-table striped hover responsive 
 :items="loanapp" 
 
 :fields="fields" 
 :current-page="currentPage" 
      :per-page="perPage"

      
>

  

 <template slot="nameage" slot-scope="data">
          <b-button variant="success" size="sm" v-on:click="applicantDetails(data.item.id)"> Details </b-button>
      </template>

       <template slot="agename" slot-scope="data">
          <b-button variant="danger" size="sm" v-on:click="say(data.item.id)"> Delete </b-button>
      </template>


</b-table>

  
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows= '10'
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
import adminDash from '@/components/admin/adminDash.vue'
export default {
  name: 'loanBody',
   components: {
    adminDash,
    
  },
   computed: {
    ...mapGetters(['users', 'loanapp', 'isAuthenticated', 'authStatus', 'applicant', 'loadstatus', 'admin', 'newapplications', 'activeMember', 'inactiveMember']),
    
    
  },
  methods: {
    ...mapActions([
      
    ]),

    say: function (id) {
       this.$swal({
          title: 'Are you sure?' + id,
          text: 'You can\'t revert your action' ,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {

            
            this.$store.dispatch('deleteApplicant', id).then(() => {
    this.$router.push({'path': '/'})
   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Deleted', 'successfully deleted please refresh the page', 'success')


          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
    },



 applicantDetails: function (id) {

  this.$store.dispatch('getloanApplicant' , id).then(() => {
    this.$router.push({'path': '/loanapplicant'})
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
        perpage:5,

       fields: [

       {
            key: 'id',
            label: 'Application. No.',
            sortable: false
          },
          {
            key: 'lastname',
            label: 'Last Name',
            sortable: true

          },
          {
            key: 'firstname',
            label: 'First Name',
            sortable: false
          },
          
          {
            key: 'phone',
            label: 'Person Number',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
           
          },
          {
            key: 'email',
            label: 'Email',
            sortable: false
          },

  {
            key: 'loanamount',
            label: 'Amount',
            sortable: false
          },
           {
            key: 'occupation',
            label: 'Occupation',
            sortable: false
          },
           {
            key: 'address',
            label: 'Address',
            sortable: false
          },

          { key: 'nameage', label: ' ' },
          { key: 'agename', label: ' ' }
        ],
        
       currentPage: 1,
        perPage: 10,
     //totalRows: items.length,

      }
    },


  
  created() {

   // this.loadapplicant = true,
   //this.$acl.change('admin');
this.$acl.change(localStorage.getItem('status') || '');

    this.$store.dispatch('getLoans').then(
      
    );
   
  },
  
}
</script>