<script lang="ts" setup>
import { withDefaults, defineProps, toRefs } from "vue"
import { useI18n } from "vue-i18n"
import { RoutesDataItem, hasChildRoute } from '@/utils/routes'
import ALink from '@/components/ALink/index.vue'
import Icon from "./Icon.vue"

interface Props {
  routeItem: RoutesDataItem;
}

const props = withDefaults(defineProps<Props>(), {})

const { t } = useI18n()

const { routeItem }  = toRefs(props);

</script>
<template>
    <template v-if="!routeItem.hidden">

      <template v-if="routeItem.children && Array.isArray(routeItem.children) && hasChildRoute(routeItem.children)">
          <a-sub-menu :key="routeItem.path">
              <template #title>
                  <span>
                      <Icon v-if="routeItem.icon" :type="routeItem.icon" class="anticon" />
                      <span>{{t(routeItem.title)}}</span>
                  </span>
              </template>
              <sider-menu-item
                  v-for="item2 in routeItem.children"
                  :key="item2.path"
                  :routeItem="item2"
              >
              </sider-menu-item>
          </a-sub-menu>
      </template>
      <template v-else>
          <a-menu-item :key="routeItem.path">
              <a-link :to="routeItem.path">
                  <Icon v-if="routeItem.icon" :type="routeItem.icon" class="anticon" />
                  <span>{{t(routeItem.title)}}</span>
              </a-link>
          </a-menu-item>
      </template>


    </template>
</template>
