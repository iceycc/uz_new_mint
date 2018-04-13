<template>
  <div class="page" v-bind:style="style">
    <div class="sub-page">
        <keep-alive>
          <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="$route.meta && !$route.meta.keepAlive"></router-view>
    </div>


    <mt-tabbar v-model="selected">
      <mt-tab-item id="问答">
        <img slot="icon" :src="selected == '问答'?tab0[1]:tab0[0]" @click="tabHandle('index')">
        问答
      </mt-tab-item>
      <mt-tab-item id="课堂">
        <img slot="icon" :src="selected == '课堂'?tab1[1]:tab1[0]" @click="tabHandle('knowledge')">
        课堂
      </mt-tab-item>
      <mt-tab-item id="提问">
        <img slot="icon" :src="selected == '提问'?tab2[1]:tab2[0]" class="tabicon" @click="tabHandle('index')">
        提问
      </mt-tab-item>
      <mt-tab-item id="通知">
        <img slot="icon" :src="selected == '通知'?tab3[1]:tab3[0]" @click="tabHandle('notice')">
        通知
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" :src="selected == '我的'?tab4[1]:tab4[0]" @click="tabHandle('index')">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        selected:'课堂',
        style: '',
        bottomNav:'0',
        tab0: [require('../assets/images/icon_tab_index.svg'), require('../assets/images/icon_tab_index_ed.svg')],
        tab1: [require('../assets/images/icon_tab_school.svg'), require('../assets/images/icon_tab_school_ed.svg')],
        tab2: [require('../assets/images/icon_tab_ask.svg'), require('../assets/images/icon_tab_ask.svg')],
        tab3: [require('../assets/images/icon_tab_notifi.svg'), require('../assets/images/icon_tab_notifi_ed.svg')],
        tab4: [require('../assets/images/icon_tab_user.svg'), require('../assets/images/icon_tab_user_ed.svg')]
      }
    },
    created(){
    },
    watch:{

    },
    methods:{
      tabHandle(name){
        console.log(name)
        this.$router.push({
          name:name
        })
        this.Toast(name)
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/style/px2rem';

.page{
  height: 100%;
  background: #dedede;
}
  .mint-tab-item{
    position: relative;
    color: #333;
    &.is-selected{
      color:#28d9af !important;
      font-weight: bold !important;
      background-color:#fff !important;
    }
  }
  .tabicon{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: px2rem(-20);

    width: px2rem(60);
    height: px2rem(60);
  }


</style>
