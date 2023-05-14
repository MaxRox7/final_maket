<template>
  <div class = "main-container ">
    <div class ="buttons"> 
    <selectButton> </selectButton>
    <defaultButton> </defaultButton>
  </div>
    <div class="container-cards">
     
    <router-link class = "link" to= "/stone_island" >
    <card v-for = "(item, index) in listCard" :key="index"  class = 'card-item' :image="item.image" :price="item.price" :brend ="item.brend" :name = "item.name" />
  </router-link>
  </div>
</div>
</template>

<script>
import card from '@/components/card.vue';
import selectButton from '@/components/selectButton.vue'
import defaultButton from '@/components/defaultButton.vue';
import stone_island from './stone_island.vue';
import shoppingCart from './shoppingCart.vue';
import shoppingCartfullVue from './shoppingCartfull.vue';
  export default {
    name: "mainpage",
    components: {
    card, selectButton, defaultButton, stone_island, shoppingCart,shoppingCartfullVue
    },
    data() {
    return {
    listCard: [
      {
        image: "square2-1.svg",
        price: '30 000',
        brend: 'Каменный остров',
        name: 'Жилет с нашивкой компасом',
        cardfull: "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет",
      },
      {
        image: "square2-2.svg",
        price: '18 800',
        brend: 'АМИ Париж',
        name: 'Полосатая рубашка с коротким рукавом',
        cardfull: "В этой модели АМИ Париж представляет смелый взгляд на классический силуэт рубашки",
      },
      {
        image: "square2-3.svg",
        price: '47 300',
        brend: 'Вквадрате2',
        name: 'Укороченные брюки с вышитым логотипом',
        cardfull: "Сделано в Италии",
      },
      {
        image: "square2-4.svg",
        price: '19 000',
        brend: 'Акне Студия',
        name: 'Полосатый двубортный блейзер',
        cardfull: "Лацканы из светло-серой шерсти в вертикальную полоску",
      },

    ]
    }
    }

    

  
  }
</script>

<style lang="scss" scoped>
.main-container {
  padding: 0px 190px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 272px;
}
.buttons {
  justify-content: space-between;
  display: flex;
}
.container-cards {
  justify-content: space-between;
  display: flex;
  
  
}
.link {
  display: flex;
  text-decoration: none;

}
router-link {
  router-link:visited {
    color: black;
  }

}


</style>