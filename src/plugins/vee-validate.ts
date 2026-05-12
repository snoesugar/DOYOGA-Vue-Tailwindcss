// src/plugins/vee-validate.ts
import { defineRule, configure } from 'vee-validate'
import { all } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

export function setupVeeValidate() {
  // 註冊所有規則
  Object.entries(all).forEach(([name, rule]) => {
    defineRule(name, rule)
  })

  // 配置設定
  configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true,
  })

  // 設定語系
  setLocale('zh_TW')
}
