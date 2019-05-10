<template>
  <main>
   
  <membeDash />

    <b-card border-variant="info"
            header="Change Password"
            header-bg-variant="info"
            header-text-variant="white"
            align="center" 

            >


      
 <form  @submit.prevent="confirmchange">
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-4 col-form-label" v-model="password">Password</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Password" v-model="password">
    </div>
  </div>
  
<div class="form-group row">
    <label for="inputEmail3" class="col-sm-4 col-form-label" v-model="password2">Confirm Password</label>
    <div class="col-sm-8">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Confirm Password" v-model="password2">
    </div>
  </div>

 
  
  <div class="form-group row">
    <div class="col-sm-8">
      <button type="submit" class="btn btn-primary float-right">Confirm</button>
    </div>
  </div>
</form>

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
import membeDash from  '@/components/members/membeDash.vue'
export default {
  name: 'userloanpayBody',
   components: {
   membeDash,
  },
   computed: {
    ...mapGetters([ 'isAuthenticated', 'authStatus',  'loadcont', 'userloanpayData',]),
    
    
  },
  methods: {
    ...mapActions([
      
    ]),


 confirmchange: function () {
       this.$swal({
          title: 'Are you sure?',
          text: 'You want to Change?' ,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Confirm!',
          cancelButtonText: 'No, Cancel',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {

            
            this.$store.dispatch('changeuserpw',{ password:this.password, user:this.user}).then(() => {
    
   }).catch((err) => {
    console.log(err)
   })
           
       

            this.$swal('Changed', 'successfull', 'success')


          } else {
            this.$swal('Cancelled', 'Changed Not Made', 'info')
          }
        })
    },
 
 
  },
  data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        password: ' ',
        user: localStorage.getItem('Uid') || '',
        
      }
    },


  
  created() {

   // this.loadapplicant = true,
   //this.$acl.change('admin');
this.$acl.change(localStorage.getItem('status') || '');

   
    
  },
  
}
</script>