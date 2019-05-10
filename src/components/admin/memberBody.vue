<template>
  <main>
   
 <adminDash />
    <b-card border-variant="info"
            header="Applications"
            header-bg-variant="info"
            header-text-variant="white"
            align="center">

<div class="spinner-border m-5" text-warning v-if="loadmemberstatus" role="status">
  <span class="sr-only">Loading...</span>
</div>
      
 <b-table striped hover responsive 
 :items="members" 
 
 :fields="fields" 
 :current-page="currentPage" 
      :per-page="perPage"

      
>

  

 <template slot="nameage" slot-scope="data">
          <b-button variant="success" size="sm" v-on:click="memberDetails(data.item.id)"> Details </b-button>
      </template>

       


</b-table>

  
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
import adminDash from '@/components/admin/adminDash.vue'
export default {
  name: 'memberBody',
  components: {
    adminDash,
    
  },
   computed: {
    ...mapGetters(['users', 'members', 'isAuthenticated', 'authStatus', 'applicant', 'loadmemberstatus', 'admin']),
    
    
  },
  methods: {
    ...mapActions([
      
    ]),

    say: function (id) {
       this.$swal({
          title: 'Are you sure?',
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



 memberDetails: function (id) {

  this.$store.dispatch('getApplicant' , id).then(() => {
    this.$router.push({'path': '/member'})
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
     memberslength:'',
    
    
      
        

       fields: [

       {
            key: 'id',
            label: 'Member. ID.',
            sortable: false
          },
          
        
          {
            key: 'phone',
            label: 'Person Number',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
           
          },

          {
            key: 'name',
            label: ' Name',
            sortable: true

          },
          {
            key: 'email',
            label: 'Email',
            sortable: false
          },
{
            key: 'status',
            label: 'Status',
            sortable: false
          },
 

          { key: 'nameage', label: ' ' },
          
        ],
        
      
        currentPage: 1,
        perPage: 10,
        totalRows: 1000,
     //totalRows: items.length,

      }
    },


  
  created() {

   // this.loadapplicant = true,
   //this.$acl.change('admin');
this.$acl.change(localStorage.getItem('status') || '');

    this.$store.dispatch('getMembers').then(
      
    );
  },
  
}
</script>