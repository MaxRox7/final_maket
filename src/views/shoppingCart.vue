<template>
  
  <div class = "shoppingcart">
  <div class = "cart">
    <h1>Корзина</h1>
    <p>Ваша корзина пуста</p>

  </div>
  <div class="personal">

    <h2>Но у нас есть персональные предложения для вас</h2>
    <router-link class = "link" to= "/stone_island" >
    <card v-for = "(item, index) in listCard" :key="index"  class = 'card-item' :image="item.image" :price="item.price" :brend ="item.brend" :name = "item.name" />
  </router-link>
  

  </div>
</div>

</template>

<script>
 import card from '@/components/card.vue';
  import stone_island from './stone_island.vue';
  import Baseheader from '../components/Baseheader.vue'
import Basefooter from '../components/Basefooter.vue'
  export default {
    name: "shoppingcart",
    components: {
    card, stone_island, Basefooter, Baseheader
    },
    data() {
    return {
    listCard: [
      {
        image: "square2-1.svg",
        price: '30 000',
        brend: 'Каменный остров',
        name: 'Жилет с нашивкой компасом',
      },
      {
        image: "square2-2.svg",
        price: '18 800',
        brend: 'АМИ Париж',
        name: 'Полосатая рубашка с коротким рукавом',
      },
      {
        image: "square2-3.svg",
        price: '47 300',
        brend: 'Вквадрате2',
        name: 'Укороченные брюки с вышитым логотипом',
      },
      {
        image: "square2-4.svg",
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
  margin-bottom: 40px;
  
  h1 {
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #354153;
  }
  p{
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #667085;

  }
}
.shoppingcart {
  margin: 40px 160px;
  
  display: flex;
  flex-direction: column;
}
.personal {
  border-top: 1px solid #EAECF0;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  
  h2 {
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
  }
}
.link {
  display: flex;
  text-decoration: none;

}
.card-item {
  display: flex;
}
</style>