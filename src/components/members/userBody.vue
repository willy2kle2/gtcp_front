<template>
  <main>
   <membeDash />
  
    

  </main>
</template>

<script>
import { mapActions, mapGetters, } from 'vuex';
import membeDash from  '@/components/members/membeDash.vue'
export default {
  name: 'userBody',
  components: {
   membeDash,
  },
   computed: {
    ...mapGetters([ 'isAuthenticated', 'authStatus', 'applicant', 'loadcont', 'getcontid']),
    
    
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
            key: 'id',
            label: 'id.',
            sortable: false
          },
          {
            key: 'user',
            label: 'User Id',
            sortable: true

          },
          {
            key: 'member',
            label: 'Member',
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
          { key: 'agename', label: ' ' }
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
this.$store.dispatch('getUserInterest', parseInt(localStorage.getItem('Uid') || ''));
    this.$store.dispatch('getcontid').then(
      
    );
  },
  
}
</script>