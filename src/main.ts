import { createApp } from 'vue';

// 全局样式
import '@/assets/css/global.less';

// 引入 Antd 
import Antd from 'ant-design-vue';

// 导入 svg
import { importAllSvg } from "@/components/IconSvg/index";
importAllSvg();

import App from '@/App.vue';
import router from '@/config/routes';
import store from '@/config/store';
import i18n from '@/config/i18n';


const app = createApp(App)
app.use(store);
app.use(router)
app.use(Antd);
app.use(i18n);
app.mount('#app');
