import Vue from 'vue'
import '../plugins/vender'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//
// const login = r => require.ensure([],() =>r(requier('../pages/login.vue')),'login')
const main =  resolve => require(['../pages/main.vue'], resolve);
const login =  resolve => require(['../pages/login.vue'], resolve);
const index =  resolve => require(['../pages/index/index.vue'], resolve);
const knowledge =  resolve => require(['../pages/knowledge/knowledge.vue'], resolve);
const notice =  resolve => require(['../pages/notice/notice.vue'], resolve);


export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      meta:{keepAlive:false,title:'主页'},
      children:[
        {
          path:'index',
          name:'index',
          component:index,
        },
        {
          path:'knowledge',
          name:'knowledge',
          component:knowledge
        },
        {
          path:'notice',
          name:'notice',
          component:notice
        }
      ]
    }
  ]
})
