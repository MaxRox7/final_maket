<template>
  <div class="btn" @click="showList">
      <img src="@/assets/Icon.svg" />
      <p>Фильтры</p>

      <ul v-if="statusShow">
    
        <input type="checkbox" id="acne" value="Акне" v-model="checkedNames">
        <label for="jack">Акне Студия</label>
        <input type="checkbox" id="paris" value="Париж" v-model="checkedNames">
        <label for="john">Ами Париж</label>
        <input type="checkbox" id="square" value="Квадрат" v-model="checkedNames">
        <label for="mike">Вквадрате2</label>
        <input type="checkbox" id="island" value="Остров" v-model="checkedNames">
        <label for="mike">Каменный остров</label>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
      return {
        
          statusShow: false
      }
  },
  methods: {
      showList() {
          this.statusShow = !this.statusShow
      },
      select(event, el){
          event.stopPropagation()
          this.$emit('select', el)
      }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  padding: 8px 16px;

  border-radius: 8px;
  img {
      margin-right: 8px;
  }
}
ul {
    list-style-type: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 320px;
    flex-direction: column;
    padding: 6px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    gap:8px;
}
p{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
}
li {
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
}
label {
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
}
</style>