<template>
  <div class = "main-container">
    <div class="photos">
      <div class = "upper_photos">
        <img src="../assets/stone-1.svg"/>
        <img src="../assets/stone-2.svg"/>
      </div>
      <div class = "down_photos">
      <div class="down_photos_border">
        <img src="../assets/island1.svg"/>
        <img src="../assets/island2.svg"/>
      </div>
        <div class="down_photos_noborder">
          <img src="../assets/island3.svg"/>
          <img src="../assets/island4.svg"/>
        </div>
        
      </div>
    </div>

    <div class="desc">
      <div class = "upper_desc">
        <h1>Каменный остров</h1>
        <p>Жилет с нашивкой компасом </p>

      </div>
      <div class="down_desc">

        <p>Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет.</p>
        <h1>30 000 руб</h1>
        <sizeButton></sizeButton>
        <button v-on:click="shop">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import sizeButton from '@/components/sizeButton.vue';
  export default {
    name: "stone_island",
    components: {
    sizeButton,
    },
  }
</script>

<style lang="scss" scoped>
  .main-container {
    display: flex;
    padding: 30px 155px;
    gap: 64px;
  }
  .photos, .desc {
    display: flex;
    flex-direction: column;
  }
  .upper_photos {
    gap: 16px;
  }
  .upper_desc {
    flex-direction: column;
    display: flex;
    h1 {
      font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
    }
    p {
      font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
    }
    
  }
  .down_desc {
    margin-top: 40px;
    flex-direction: column;
    gap: 40px 0;
    align-items: flex-start;
    button {
      color: white;
      background-color: black;
      border-radius: 8px;
      font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
padding: 12px 22px;
    }
    p {
      font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
    }
    h1 {
      font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 48px;
    }
  }
  .down_photos {
    display: flex;
    
  }
  .down_photos {
    
    margin-top: 24px;
  }
  .down_photos_border, .down_photos_noborder {
    gap: 16px;
  }
  .down_photos_border {
    border:solid;
    
  }
</style>