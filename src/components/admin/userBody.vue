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
       <b-row class="text-center">
    <b-col lg="4" class="pb-2"><b-button size="md" v-b-modal.modallg variant="success">Add Admin User.</b-button></b-col>
  </b-row>
 <b-table striped hover responsive 
 :items="users" 
 
 :fields="fields" 
 :current-page="currentPage" 
      :per-page= 10

      
>
 <template slot="delete" slot-scope="data">
          <b-button variant="danger" size="sm" v-on:click="say(data.item.id)"> Delete </b-button>
      </template>
  

 


       


</b-table>

  
    <b-row>

 <b-modal 
       id="modallg" 
       size="lg" 
       title="Create User"
       ok-only
       >
         
         <form  @submit.prevent="createuser">
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" >Names</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="First and Last Name" v-model="name">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" >Email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="email" v-model="email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label" >Password</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Password" v-model="password">
    </div>
  </div>
  


 
  
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </div>
</form>


       </b-modal>

      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows= 10
          :per-page= 5
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

            
            this.$store.dispatch('deleteUser', id).then(() => {
   
   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Deleted', 'successfully deleted please refresh the page', 'success')


          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
    },



 createuser: function () {
       this.$swal({
          title: 'Are you sure?',
          text: 'You want to Creat?' ,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Create!',
          cancelButtonText: 'No, Cancel',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {

            
            this.$store.dispatch('creatUsers',{name:this.name, email:this.email, password:this.password }).then(() => {



   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Confirm', 'successfull', 'success')


          } else {
            this.$swal('Cancelled', 'User not created', 'info')
          }
        })
    },
   

  },
  data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        isBusy: true,
        items: [],
     memberslength:'',
    
    name: null,
    email: null,
    password: null,
    


      
       

       fields: [

       {
            key: 'id',
            label: 'User. ID',
            sortable: false
          },
          
        
          {
            key: 'email',
            label: 'email',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
           
          },

          {
            key: 'name',
            label: ' Name',
            sortable: true

          },
        
{
            key: 'role',
            label: 'Role',
            sortable: false
          },
 

          { key: 'delete', label: ' ' },
          
        ],
        
       currentPage: 1,
       // perPage: 2,
     //totalRows: items.length,

      }
    },


  
  created() {

   // this.loadapplicant = true,
   //this.$acl.change('admin');
this.$acl.change(localStorage.getItem('status') || '');

    this.$store.dispatch('getUsers').then(
      
    );
  },
  
}
</script>