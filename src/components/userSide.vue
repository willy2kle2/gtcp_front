<template>
  <main>
   <div role="tablist" class=" d-none d-sm-block">
    
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info"><span><font-awesome-icon icon="user-secret" /> </span> Profile</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
           <p class="card-text">
             <router-link to="/userDetail">User Details</router-link> </p>
          
             <p>
                <router-link to="/changememberpw">Change Password</router-link>

          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion4 variant="info"> <span>   <font-awesome-icon icon="piggy-bank" /></span> Contributions </b-btn>
      </b-card-header>
      <b-collapse id="accordion4"  accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
           


<router-link to="/userContribution">All Contributions </router-link>
              </p>
           
             
 <p class="card-text">
           


<router-link to="/userInterest">All Interest</router-link>
              </p>
           
          </p>
         
        </b-card-body>
      </b-collapse>
    </b-card>
    

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion7 variant="info"> <span>   <font-awesome-icon icon="print" /></span> Loans </b-btn>
      </b-card-header>
      <b-collapse id="accordion7"  accordion="my-accordion" role="tabpanel">
        <b-card-body>
          
             <p class="card-text"><router-link to="/memberloans">Loan Applications </router-link>
              

          </p>
         
        </b-card-body>
      </b-collapse>
    </b-card>

  
  </div>
  </main>
</template>
