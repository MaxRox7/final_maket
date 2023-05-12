<template>
  <div class = "main-container ">
    <div class ="buttons"> 
    <selectButton> </selectButton>
    <defaultButton> </defaultButton>
  </div>
    <div class="container-cards">
     
    
    
      
    <card v-for = "(item, index) in listCard" :key="index"  class = 'card-intem' :image="item.image" :price="item.price" :brend ="item.brend" :name = "item.name" />
  </div>
</div>
</template>

<script>
import card from '@/components/card.vue';
import selectButton from '@/components/selectButton.vue'
import defaultButton from '@/components/defaultButton.vue';

  export default {
    name: "mainpage",
    components: {
    card, selectButton, defaultButton,
    },
    data() {
    return {
    listCard: [
      {
        image: "/img/square2-1.6b488368.svg",
        price: '30 000',
        brend: 'Каменный остров',
        name: 'Жилет с нашивкой компасом',
      },
      {
        image: "/img/square2-2.e8fc30d6.svg",
        price: '18 800',
        brend: 'АМИ Париж',
        name: 'Полосатая рубашка с коротким рукавом',
      },
      {
        image: "/img/square2-3.c00388bd.svg",
        price: '47 300',
        brend: 'Вквадрате2',
        name: 'Укороченные брюки с вышитым логотипом',
      },
      {
        image: "/img/square2-4.49e3f717.svg",
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
.main-container {
  padding: 0px 190px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}
.buttons {
  justify-content: space-between;
  display: flex;
}
.container-cards {
  justify-content: space-between;
  display: flex;
}
</style>