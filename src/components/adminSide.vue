<template>
  <main class=".hidden-sm-down">
    <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info"> <span>   <font-awesome-icon icon="address-book" /></span> Applications </b-btn>
      </b-card-header>
      <b-collapse id="accordion1"  accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            
            </p>
           <p class="card-text">  <router-link to="/">All Applications</router-link> </p>
             <p class="card-text">
              <router-link to="/newapplicant">New Applications</router-link>

          </p>
         
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info"><span><font-awesome-icon icon="user-shield" /> </span> Members</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
           <p class="card-text">
             
<router-link to="/memberslist">All Members</router-link>

              </p>
          
             <p class="card-text">
              <router-link to="/suspendedmembers">Suspended Members</router-link>

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
            <router-link to="/contributions">Contributions</router-link>
           <p class="card-text">  <router-link to="/interests">Interest</router-link> </p>
             

          </p>
         
        </b-card-body>
      </b-collapse>
    </b-card>
     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordionloan variant="info"><span><font-awesome-icon icon="user-shield" /> </span> Loans</b-btn>
      </b-card-header>
      <b-collapse id="accordionloan" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          
          
           
          <p class="card-text">
              <router-link to="/mloans">Loan Applications</router-link>

          </p>

          
           <p class="card-text">
              <router-link to="/approvedloans">Approved Loans</router-link>

          </p>
           <p class="card-text">
              <router-link to="/activeloans">Active Loans</router-link>

          </p>
          <p class="card-text">
              <router-link to="/loanpayments"> Loans Payments</router-link>

          </p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info"><span><font-awesome-icon icon="user-cog" /></span> System Users </b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
        <p class="card-text">
            <router-link to="/users">Admin Users</router-link> </p>
            <p class="card-text">
            <router-link to="/changememberpwadmin">Change Members Password</router-link> </p>
           
            

          </p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion6 variant="info"> <span>   <font-awesome-icon icon="print" /></span> Reports </b-btn>
      </b-card-header>
      <b-collapse id="accordion6"  accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
             <b-link href="#foo" >Applications</b-link> </p>
           <p class="card-text">  <b-link href="#foo" > Members</b-link> </p>
             <p class="card-text"><b-link href="#foo" > Contributions</b-link>

          </p>
         
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
  </main>
</template>
