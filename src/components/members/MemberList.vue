<template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div  class="product-list--item">
       
      </div>


      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="member in members" :key="member.id">
      
      <td >{{member.id}}</td> 

      <td >{{member.email}}</td> 

      <td >{{member.status}}</td> </tr>
     
   
  </tbody>
</table>

    </div>
    <div class="product-count has-text-right">
      <span class="has-text-weight-bold"># of products: 4</span>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';
//import ProductListItem from './ProductListItem';

export default {
  name: 'MemberList',
  computed: {
    ...mapGetters([
      'members'
    ])
  },
  created() {
    this.$store.dispatch('getMembers');
  },
  components: {
   // ProductListItem
  }
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 10px 0;
}
</style>
