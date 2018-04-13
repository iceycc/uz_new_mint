import Vue from 'vue';

// 按需加载
import {
  Button,
  Tabbar,
  TabContainer,
  TabContainerItem,
  Cell,
  Header,
  Navbar,
  TabItem,
  // 弹出层 需要原型注册
  Toast,
  MessageBox
} from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)
Vue.component(Button.name,Button)
Vue.component(TabContainerItem.name,TabContainerItem)
Vue.component(TabContainer.name,TabContainer)
Vue.component(Cell.name,Cell)
Vue.component(Header.name,Header)
Vue.component(Navbar.name,Navbar)

Vue.prototype.Toast = Toast
Vue.prototype.MessageBox = MessageBox


