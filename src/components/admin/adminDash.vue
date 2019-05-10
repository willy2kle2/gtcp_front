<template>
  <b-card-group deck class="mb-2">
        <b-card border-variant="primary" title="New Applications">

          <p class="card-text" >

               

<div v-if="loadstatus">
  <h1> Loading.... </h1>
</div>
<div v-else>
  <h1>{{newapplications.length}}</h1>
</div>

            </p>

            
           
           
        </b-card>
        <b-card border-variant="primary" title="Total Applications">
            <p class="card-text">
                <h1>{{applications.length}}</h1>
            </p>
           
        </b-card>
        <b-card border-variant="primary" 
        title="Active Members">
            <div v-if="loadstatus">
  <h1> Loading.... </h1>
</div>
<div v-else>
  <h1>{{activeMember.length}}</h1>
</div>
            
        </b-card>
 <b-card border-variant="primary" 
        title="InActive Members">
            <div v-if="loadstatus">
  <h1> Loading.... </h1>
</div>
<div v-else>
  <h1>{{inactiveMember.length}}</h1>
</div>
            
        </b-card>
    </b-card-group>
</template>
<script>
import { mapActions, mapGetters, } from 'vuex';
export default {
  name: 'adminDash',
  
   computed: {
    ...mapGetters([ 'applications',  'loadstatus',  'newapplications', 'activeMember', 'inactiveMember',]),
    
    
  },
 }
  </script>
