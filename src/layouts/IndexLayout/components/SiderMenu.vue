<template>
    <a-menu
        theme="dark"           
        mode="inline"
        :inline-collapsed="collapsed"
        :selectedKeys="selectedKeys"
        :openKeys="openKeys"
        @openChange="(key)=>{
            onOpenChange(key);
        }"
    >
        <sider-menu-item 
            v-for="item in newMenuData" 
            :key="item.path" 
            :routeItem="item"
            :topNavEnable="topNavEnable"
            :belongTopMenu="belongTopMenu"
        >
        </sider-menu-item>
        
    </a-menu>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";
import { RoutesDataItem } from '@/utils/routes';
import SiderMenuItem from './SiderMenuItem.vue';

interface SiderMenuSetupData {
  newMenuData: RoutesDataItem[];
}

export default defineComponent({
    name: 'SiderMenu',
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
        default: []
      },
      openKeys: {
        type: Array as PropType<string[]>,
        default: []
      },
      onOpenChange: {
        type: Function as PropType<(key: any) => void>
      },
      menuData: {
        type: Array as PropType<RoutesDataItem[]>,
        default: []
      }
    },
    components: {
        SiderMenuItem
    },
    setup(props): SiderMenuSetupData {
        const { menuData, topNavEnable }  = toRefs(props);

        const newMenuData = computed<RoutesDataItem[]>(()=> {
          if(!topNavEnable.value) {
            return menuData.value;
          }
          const MenuItems: RoutesDataItem[] = [];
          for (let index = 0, len = menuData.value.length; index < len; index += 1) {
            const element = menuData.value[index];
            if (element.children) {
              MenuItems.push(
                ...element.children,
              );
            }
          }
          return MenuItems;
        })


        return {
          newMenuData: newMenuData as unknown as RoutesDataItem[]
        }
    }
})
</script>