<template>
  <main>
   
 <membeDash />

    <b-card border-variant="info"
            header="Interest"
            header-bg-variant="info"
            header-text-variant="white"
            align="center">

<div class="spinner-border m-5" text-warning v-if="loadcont" role="status">
  <span class="sr-only">Loading...</span>
</div>
      
 <b-table striped hover responsive 
 :items="memberInterest" 
 
 :fields="fields" 
 :current-page="currentPage" 
      :per-page="perPage"

      
>

  

 

      


</b-table>

  
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="totalRows"
          :per-page="perpage"
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
    </b-card>
    

  </main>
</template>
<script>
import { mapActions, mapGetters, } from 'vuex';
import membeDash from  '@/components/members/membeDash.vue'
export default {
  name: 'InterestuserBody',
  components: {
   membeDash,
  },
   computed: {
    ...mapGetters([ 'isAuthenticated', 'authStatus',  'loadcont', 'getcontid', 'memberInterest']),
    
    
  },
  methods: {
    ...mapActions([
      
    ]),

   





   

  },
  data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        isBusy: true,
        items: [],
     applicationslength:'',
    
    
      totalrows:'',
        perpage:10,

       fields: [

       {
            key: 'id',
            label: 'id.',
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

 

          { key: 'nameage', label: ' ' },
          
        ],
        
       currentPage: 1,
        perPage: 10,
     totalRows: 1000,

      }
    },


  
  created() {

   // this.loadapplicant = true,
this.$store.dispatch('getUserInterest', parseInt(localStorage.getItem('Uid') || ''));

this.$acl.change(localStorage.getItem('status') || '');


    
  },
  
}
</script>