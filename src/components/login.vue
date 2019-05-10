<template>
  <div>
 
    <b-row>
<b-col>


<div class="card">
  <div class="card-body">
    <div class="col-md-8 col-sm-12 ">
      

 <div class="card card-login mx-auto text-center ">
        <div class="card-header mx-auto ">
            <span> <img src="../assets/head.png" class="w-100" alt="Logo"> </span><br/>
                        <span class="logo_title mt-5"> Login Dashboard </span>


        </div>
        <div class="card-body">
           
             <b-alert show dismissible variant="warning" v-if="loginerrorstatus">
     <b>&rArr; Username or Password is Wrong</b>
  </b-alert>
            <form @submit.prevent="logIn">
               
                 <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span><font-awesome-icon icon="user-shield" /></span>
                    </div>
                    <input type="text" name="email" v-model="email" class="form-control" placeholder="email">
                </div>

                <div class="input-group form-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><font-awesome-icon icon="user-secret" /></span>
                    </div>
                    <input type="password"  v-model="password" name="password" class="form-control" placeholder="Password">
                </div>

                <div class="form-group">
                  <b-button variant="primary" disabled v-if="loginstatus" class="float-right login_btn">

      Loading...
    
  </b-button>
                    <button     class="btn btn-outline-danger float-right login_btn" v-else>Login</button>
                    
                </div>

            </form>
        </div>
    </div>

    </div>


    
  </div>
</div>


</b-col>
    </b-row>
  </div>
</template>
<script>  
import { mapActions, mapGetters} from 'vuex';
export default {
 computed: {
    ...mapGetters(['loginstatus', 'admin', 'loginerrorstatus']),
    
    
  },
    data(){
      return {
        email:null,
       
        password:null,
        
      }
    },

    methods: {

          logIn(){
        this.$store.dispatch('login',{email:this.email,password:this.password}).then(()=>{
            this.$acl.change(localStorage.getItem('status') || '');
          if (this.$acl.check('isAdmin')) {this.$router.push('/');} else

         {this.$router.push('/user'); }  
        })
        
      }
        
      }
    }









</script>


<style scoped>
.cart-item--modify {
  cursor: pointer;
}

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
