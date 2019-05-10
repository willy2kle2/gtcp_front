<template>
  <main>
   
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

 <b-navbar-brand href="#">GTCOOP</b-navbar-brand>


  <b-collapse is-nav id="nav_collapse">

     <b-navbar-nav >
        <b-nav-item ><router-link to="/userContribution" class="text-white ">Contributions</router-link></b-nav-item>
        <b-nav-item ><router-link to="/memberloans" class="text-white">Loans</router-link></b-nav-item>
        <b-nav-item ><router-link :to="{ name: 'userDetail' }" class="text-white">Reports</router-link></b-nav-item>
       
      </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      

      

     

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#"><router-link :to="{ name: 'userDetail' }">Profile</router-link></b-dropdown-item>
        <b-dropdown-item href="#"><router-link :to="{ name: 'Logout' }">Logout</router-link></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<!-- navbar-1.vue -->

   
  </main>
</template>
