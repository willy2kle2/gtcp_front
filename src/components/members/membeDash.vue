<template>

  <b-card-group deck class="mb-2 ml-2">
        <b-card border-variant="primary" title="Total Contribution">

          <p class="card-text" >

               


<div >
  <h1>{{UserContributionTotal}}</h1>
</div>

            </p>

            
           
           
        </b-card>
          <b-card border-variant="primary" title="Total Interest">

          <p class="card-text" >

               


<div >
  <h1>{{UserInterestTotal}}</h1>
</div>

            </p>

            
           
           
        </b-card>
        <b-card border-variant="primary" title="No. of Contributions">
            <p class="card-text">
                <h1>{{getcontid.length}}</h1>
            </p>
           
        </b-card>
       
 
    </b-card-group>
    
 
  

</template>
<script>
import { mapActions, mapGetters, } from 'vuex';
export default {
  name: 'adminDash',
  
   computed: {
    ...mapGetters([ 'applications',  'loadstatus',  'newapplications', 'activeMember', 'inactiveMember', 'getcontid', 'UserContributionTotal', 'UserInterestTotal']),
    
    
  },
 }
  </script>
