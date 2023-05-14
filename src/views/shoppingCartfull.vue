<template>
  <div class = "cart">
    <div class="shopping">
      <h1>Корзина</h1>


    </div>
    <div class="buy">
      <router-link class = "link" to= "/stone_island" >
      <card v-for = "(item, index) in listCard" :key="index"  class = 'card-item' :image="item.image" :price="item.price" :brend ="item.brend" :name = "item.name" />
  </router-link>
    </div>
  </div>
</template>

<script>
import card from '@/components/card.vue';
import stone_island from './stone_island.vue';
  export default {
    name: "full",
    components: {
    card, stone_island,
    },
    data() {
    return {
    listCard: [

      {
        image: "acne.svg",
        price: '19 000',
        brend: 'Акне Студия',
        name: 'Полосатый двубортный блейзер',
      },
    ]
  }
}
  }
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  margin-bottom: 528px;
}
.shopping {
  display: flex;
  margin: 40px 160px;
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
}
.buy {
  display: flex;
  
  margin: 16px 160px;
}
.card-item {
  display: flex
 
}
.link {
  display: flex;
  text-decoration: none;

}
</style>