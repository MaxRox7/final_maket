<template>
  <header> 
    <div class = "container"> 
      <img src = "@/assets/logo.svg"/>
      <h1> Курсовой макет</h1>

    </div>
    <div class = "right"> 
    <img src = "@/assets/lk.svg"/>
    <img src = "@/assets/shop.svg" alt = "shop"/>
  </div>


  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

header {
  justify-content: space-between;
  
  padding: 24px 160px;
  border-bottom: 1px solid #EAECF0;
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;

 }
 .container {
  
  display: flex;
  img {
    padding-right: 16px ;
  }
 }
 
.right {

  img {

  padding-left: 33px;

  }

}


</style>