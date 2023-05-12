<template>
<div id = "app">
  
<Baseheader></Baseheader>
<router-view/>
<Basefooter> </Basefooter>

</div> 

 
</template>



<script>
import Baseheader from './components/Baseheader.vue'
import Basefooter from './components/Basefooter.vue'


export default {
  components : {

    Baseheader,

    Basefooter

  }




}

</script>



<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
 #app {
  flex-direction: column;
  width: 100%;

 }

*{
  margin: 0;
  padding: 0;
  
}


div, header, footer, ul, li,main  {
  display: flex;
}

</style>
