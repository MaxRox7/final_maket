<template>
  <div class = "card">
    <div class = "upper"> 
      <img :src="require(`@/assets/${image}`)" :alt="brend">

    
    <h2>{{ price }} руб </h2>
  </div>
  <div class="down">
   <h3> Бренд <p> {{ brend }} </p> </h3>
    <p> {{ name }} </p>
  </div> 
  </div>
</template>

<script>

  export default {
   
    props: {
      image: {
        type: String
      },
      price: {
     type: Number,
      },
      brend: {
        type: String,
      },
      name: {
        type: String,
      }


    }
  }
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 24px;
  flex-direction: column;
  p {
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
  }
  p:first-child {
    color: #354153;
  }
  h2 {
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
  }

}

.upper {
  img {
    margin-bottom: 16px;
  }
  flex-direction: column;
  margin-bottom: 16px ;
}
.down {
  color: #667085;
  flex-direction: column;
  h3 {
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #667085;

  }

}

</style>