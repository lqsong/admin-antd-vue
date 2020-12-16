/**
 * 重置 Antd Form VaildateInfos 为 I18n
 * @author LiQingSong
 */
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { validateInfos } from '@ant-design-vue/use/lib/useForm';

export default function useI18nAntdFormVaildateInfos(infos: validateInfos): validateInfos {
    const{ t } = useI18n();

    const infosNew = computed<validateInfos>(() => {
        const vInfos: validateInfos  = {};            
        for (const index in infos) {
            vInfos[index] = JSON.parse(JSON.stringify(infos[index]));
            if(vInfos[index] && vInfos[index]['help']) {
                vInfos[index]['help'] = t(vInfos[index]['help'] || '');
            }
        }
        return vInfos;
    });

    return infosNew as unknown as validateInfos;
}