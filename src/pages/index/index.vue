<template>
<div>
  <mt-navbar v-model="selected">
    <mt-tab-item id="问答">选项一</mt-tab-item>
    <mt-tab-item id="课堂">选项二</mt-tab-item>
    <mt-tab-item id="提问">选项4</mt-tab-item>
    <mt-tab-item id="通知">选项5</mt-tab-item>
    <mt-tab-item id="我的">选项6</mt-tab-item>
  </mt-navbar>
  <mt-tab-container v-model="selected" class="header" swipeable>
    <mt-tab-container-item id="问答">
      <mt-cell v-for="n in 10" title="tab-container 1" :key="n"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="课堂">
      <mt-cell v-for="n in 5" title="tab-container 2" :key="n"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="提问">
      <mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="通知">
      <mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>
    </mt-tab-container-item>
    <mt-tab-container-item id="我的">
      <mt-cell v-for="n in 7" title="tab-container 3" :key="n"></mt-cell>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
  export default {
    data(){
      return{
        selected:'课堂'
      }
    }
  }
</script>

<style lang="scss">

</style>
