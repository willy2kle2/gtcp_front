<template>
  <main>
   
  <membeDash />

    <b-card border-variant="info"
            header="Loans"
            header-bg-variant="info"
            header-text-variant="white"
            align="center">


      
 <b-table striped hover responsive 
 :items="userloanpayData" 
 
 :fields="fields" 
 :current-page="currentPage" 
      :per-page=10

      
>

 

 

      


</b-table>

  
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows= 1000
          :per-page=10
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
            key: 'pid',
            label: 'Pay. id.',
            sortable: false
          },
          {
            key: 'amount',
            label: 'Amount ',
            sortable: true

          },
         
          {
            key: 'date',
            label: 'Date Paid',
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

   
    
  },
  
}
</script>