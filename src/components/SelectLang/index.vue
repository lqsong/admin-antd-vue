<template>
    <a-dropdown>
        <span class="dropDown">
            <GlobalOutlined  />
        </span>
        <template #overlay>
            <a-menu class="menu" @click="changeLang" :selectedKeys="[locale]">
                <a-menu-item v-for="item in locales" :key="item">
                    <span role="img" :aria-label="languageLabels[item]">
                        {{languageIcons[item]}}
                    </span>  
                    {{languageLabels[item]}}
                </a-menu-item>                
            </a-menu>
        </template>
    </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { GlobalOutlined } from '@ant-design/icons-vue';
import { setI18nLanguage } from "@/config/i18n";
import { useI18n } from "vue-i18n";
interface SelectLangSetupData {
    locales: string[];
    languageLabels: {[key: string]: string};
    languageIcons: {[key: string]: string};
    changeLang: ({ key }: any) => void;
    locale: string;
}

export default defineComponent({
    name: 'SelectLang',
    components: {
        GlobalOutlined
    },
    setup(): SelectLangSetupData {

        const { locale }  = useI18n();
       
        const locales: string[] = ['zh-CN', 'zh-TW', 'en-US'];
        const languageLabels: {[key: string]: string} = {
            'zh-CN': '简体中文',
            'zh-TW': '繁体中文',
            'en-US': 'English',
        };
        const languageIcons: {[key: string]: string} = {
            'zh-CN': '🇨🇳',
            'zh-TW': '🇭🇰',
            'en-US': '🇺🇸',
        };

        // 切换语言
        const changeLang = ({ key }: any): void => setI18nLanguage(key);

        return {
            locales,
            languageLabels,
            languageIcons,
            changeLang,
            locale: locale as unknown as string
        }
    }
})
</script>
<style lang="less" scoped>
.menu {
  .anticon {
    margin-right: 8px;
  }
  .ant-dropdown-menu-item {
    min-width: 160px;
  }
}
.dropDown {
  cursor: pointer;
}
</style>