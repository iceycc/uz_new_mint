<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components:{
    },
    name: 'app',
    methods:{
      handleClick(){
        this.Toast('ss')
      }
    }
  }
</script>

<style lang="scss">


</style>
