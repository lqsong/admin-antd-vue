<script lang="ts" setup>
import { withDefaults, defineProps, computed, ref, toRefs, watch, nextTick } from "vue"
import { useStore } from 'vuex'
import { RoutesDataItem, getPermissionMenuData, getSelectLeftMenuPath } from '@/utils/routes'
import { StateType as UserStateType } from "@/store/user"
import SiderMenuItem from './SiderMenuItem.vue'
import { mergeUnique as ArrayMergeUnique } from '@/utils/array'

interface Props {
  menuData: RoutesDataItem[];
  routeItem: RoutesDataItem;
  mode?: 'horizontal' | 'inline';
  theme?: 'dark' | 'light ';
  collapsed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    mode: 'inline',
    theme: 'dark',
    collapsed: false
})
const { menuData, routeItem, mode, theme, collapsed } = toRefs(props)

const store = useStore<{ user: UserStateType; }>();

// 有权限的菜单
const permissionMenuData = computed<RoutesDataItem[]>(()=> getPermissionMenuData(store.state.user.currentUser.roles, menuData.value))

// 左侧选择菜单key
const selectedKeys = computed<string[]>(()=>{
  const selectedKey = getSelectLeftMenuPath(routeItem.value);
  return [selectedKey]
});

// 左侧展开菜单keys
const openKeys = ref<string[]>(mode.value === 'inline'? routeItem.value.parentPath || []: []);
watch([collapsed],()=>{
  if (!collapsed.value && mode.value === 'inline') {
    openKeys.value = ArrayMergeUnique<string>(openKeys.value, routeItem.value.parentPath || []);
  } else {
    nextTick(()=> {
      openKeys.value =[];
    })
  }
})

// 左侧菜单展开收起
const openChange = (key: any) => {
  openKeys.value = key;
}

</script>
<template>
  <a-menu
      class="universallayout-menu"
      :theme="theme"
      :mode="mode"
      :inline-collapsed="collapsed"
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      @openChange="openChange"
  >
      <sider-menu-item
          v-for="item in permissionMenuData"
          :key="item.path"
          :routeItem="item"
      >
      </sider-menu-item>

  </a-menu>
</template>
