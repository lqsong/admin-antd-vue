<template>
    <div id="indexlayout-left" :class="{'narrow': collapsed}">
        <div class="indexlayout-left-logo">
            <router-link to="/" class="logo-url">
                <img v-if="collapsed" alt="Vue logo" src="../../../assets/images/logo.png" width="30">
                <h3 v-else class="logo-title">AdminAntdVue</h3>
            </router-link>
        </div>
        <div class="indexlayout-left-menu">
            <sider-menu
              :collapsed="collapsed"
              :topNavEnable="topNavEnable"
              :belongTopMenu="belongTopMenu"
              :selectedKeys="selectedKeys"
              :openKeys="openKeys"
              :onOpenChange="onOpenChange"
              :menuData="menuData"
            >
            </sider-menu>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType} from "vue";
import { RoutesDataItem } from '@/utils/routes';
import SiderMenu from './SiderMenu.vue';
export default defineComponent({
    name: 'Left',
    props: {
      collapsed: {
        type: Boolean,
        default: false
      },
      topNavEnable: {
        type: Boolean,
        default: true
      },
      belongTopMenu: {
        type: String,
        default: ''
      },
      selectedKeys: {
        type: Array as PropType<string[]>,
        default: () => {
          return [];
        }
      },
      openKeys: {
        type: Array as PropType<string[]>,
        default: () => {
          return [];
        }
      },
      onOpenChange: {
        type: Function as PropType<(key: any) => void>
      },
      menuData: {
        type: Array as PropType<RoutesDataItem[]>,
        default: () => {
          return [];
        }
      }
    },
    components: {   
         SiderMenu,   
    },
})
</script>