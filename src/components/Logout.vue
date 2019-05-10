<template>
        
           <h3>You are logged out</h3>
         
</template>


<script>  

export default {

    data(){
      return {
        email:null,
        password:null
      }
    },

    created(){
     // Bus.$emit('logout');
      this.$store.dispatch('logout').then(()=>{
        this.$router.push('/login')
      })
    }

}

</script>

