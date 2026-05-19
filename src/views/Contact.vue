<template>
  <div class="container px-4 md:px-24 lg:px-8 text-center py-12 md:py-16">
    <h1 class="text-3xl text-primary-title mb-6 lg:mb-8">聯絡我們</h1>

    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-10 md:mb-4 lg:mb-12">
      <div class="basis-3/5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 w-full h-full">
          <div
            class="rounded-2xl overflow-hidden md:col-span-2 h-[195px] md:h-[323px] lg:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.721495914619!2d120.3429188!3d22.6269151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e440620ed772d%3A0xc3f8e65893b82736!2z6auY6ZuE5biC6IuT6ZuF5Y2A5YyX5L_oSb_!5e0!3m2!1szh-TW!2stw!4v1716100000000!5m2!1szh-TW!2stw"
              class="w-full h-full border-0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="text-left text-primary-title">
            <h2 class="text-2xl mb-2">DOYOGA 教室位置</h2>
            <p class="mb-2 md:mb-8 lg:mb-2">高雄市苓雅區北信街 23 號 2 樓</p>
            <p>如何前往：</p>
            <ul class="space-y-6">
              <li>1. 搭乘捷運：紅線到正義站 3 號出口，延正義路方向至北信街交叉口即可。</li>
              <li>2. 搭乘公車：搭這些公車都可以抵達正義站 24B 25 33 50 76 77 77區 100</li>
              <li>3. 開車前往北信街 32 號，教室旁有專屬停車場可以使用。</li>
            </ul>
          </div>
        </div>
      </div>

      <form
        @submit.prevent="handleSubmitFeedback"
        class="w-full lg:basis-2/5 text-primary-title bg-primary-bg rounded-2xl p-8 text-left flex flex-col justify-between"
      >
        <div class="space-y-4 w-full">
          <p class="text-xl font-medium mb-2">意見回饋&問題詢問</p>

          <div class="flex flex-col gap-2 pb-2 relative">
            <label for="name" class="text-base text-primary-title">姓名</label>
            <input
              type="text"
              id="name"
              placeholder="請輸入您的姓名"
              :class="[
                'w-full border rounded-md px-3 py-2 text-primary-text bg-white placeholder:text-primary-title focus:outline-none focus:ring-1 focus:ring-primary-title',
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-primary-text focus:ring-primary-title',
              ]"
              v-model="name"
            />
            <span v-if="errors.name" class="absolute -bottom-3 text-red-500 text-sm">
              <i class="bi bi-exclamation-circle"></i> 姓名必須輸入
            </span>
          </div>

          <div class="flex flex-col gap-2 pb-2 relative">
            <label for="email" class="text-base text-primary-title">電子信箱</label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              :class="[
                'w-full border rounded-md px-3 py-2 text-primary-text bg-white placeholder:text-primary-title focus:outline-none focus:ring-1 focus:ring-primary-title',
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-primary-text focus:ring-primary-title',
              ]"
              v-model="email"
            />
            <span v-if="errors.email" class="absolute -bottom-3 text-red-500 text-sm">
              <i class="bi bi-exclamation-circle"></i> 請輸入正確的信箱格式
            </span>
          </div>

          <div class="flex flex-col gap-2 pb-2 relative">
            <label for="phone" class="text-base text-primary-title">手機號碼</label>
            <input
              type="tel"
              id="phone"
              placeholder="0912-345-678"
              :class="[
                'w-full border rounded-md px-3 py-2 text-primary-text bg-white placeholder:text-primary-title focus:outline-none focus:ring-1 focus:ring-primary-title',
                errors.phone
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-primary-text focus:ring-primary-title',
              ]"
              v-model="phone"
            />
            <span v-if="errors.phone" class="absolute -bottom-3 text-red-500 text-sm">
              <i class="bi bi-exclamation-circle"></i> 請輸入有效的手機號碼
            </span>
          </div>

          <div class="flex flex-col gap-2 pb-2 relative">
            <label for="feedback" class="text-base text-primary-title">意見回饋</label>
            <textarea
              id="feedback"
              rows="4"
              placeholder="請輸入您的意見或問題..."
              :class="[
                'w-full h-[214px] border rounded-md px-3 py-2 text-primary-text bg-white placeholder:text-primary-title focus:outline-none focus:ring-1 focus:ring-primary-title resize-none',
                errors.feedback
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-primary-text focus:ring-primary-title',
              ]"
              v-model="feedback"
            ></textarea>
            <span v-if="errors.feedback" class="absolute -bottom-3 text-red-500 text-sm">
              <i class="bi bi-exclamation-circle"></i> 意見回饋必須輸入
            </span>
          </div>
        </div>

        <div class="w-full text-right mt-6">
          <button
            type="submit"
            class="bg-primary-text hover:bg-primary-title text-white py-2 px-6 rounded-md transition-colors"
          >
            送出
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
// 註：如果你有使用 vue-router 或 pinia store，請記得取消下方的註解導入
// import { useRouter } from 'vue-router'
// const router = useRouter()

// 1. 定義此聯絡表單專用的驗證規則
const schema = {
  name: 'required',
  email: 'required|email',
  phone: 'required|min:8',
  feedback: 'required',
}

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
})

// 2. 綁定此表單所需的欄位
const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: phone } = useField<string>('phone')
const { value: feedback } = useField<string>('feedback')

// 3. 處理表單送出邏輯
const handleSubmitFeedback = handleSubmit((values) => {
  console.log('表單驗證成功，送出的資料：', values)
  // 在這裡執行你的 API 送出邏輯
  alert('意見已成功送出！')
})
</script>
