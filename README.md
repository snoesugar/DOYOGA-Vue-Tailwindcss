# 🧘‍♀️ DOYOGA - 健身輕時尚瑜珈品牌官網

DOYOGA 是一個專為瑜珈愛好者與初學者設計的響應式品牌官方網站。透過清新、簡約且溫柔的「輕時尚」視覺設計，傳遞「多給自己一點時間享受靜謐，傾聽內心的聲音」之核心理念，並提供流暢的沉浸式互動體驗。

🔗 **[點此線上預覽成品](https://doyoga-vue-tailwindcss.vercel.app)**

---

## 🎯 開發動機與核心價值

在忙碌的現代生活中，人們常因繁雜的日常而感到焦慮與緊繃。瑜珈是少數能讓人與身體對話、釋放壓力的溫柔媒介，然而許多運動品牌的官網資訊過於生硬，無法傳遞內心的平靜。

- **核心重點**：透過引導式的 UI/UX 設計與流暢的動態反饋，從使用者進入網站的首頁起，就建立起放鬆與平靜的沉浸感。
- **目標**：利用直覺的數位導覽流程，協助使用者找到專屬的課程方案與優質師資，引導大眾接觸瑜珈並在墊子上找到屬於自己的寧靜角落。

---

## 🛠️ 技術重點與解決方案

本專案由我獨立負責前端架構開發，針對跨裝置排版、動態組件渲染、流暢的手勢互動以及**跨頁面複雜預約邏輯**，提出了以下解決方案：

### 1. TypeScript 強型別與 Pinia 全域狀態管理（Pinia State Management）

- **跨組件資料共享**：使用 **Pinia** 建立 `userReservationStore`，集中管理多步驟預約表單（如瑜珈經驗、改善目標、個人資料等）的複雜資料流。
- **型別安全與嚴謹性**：全面導入 **TypeScript** 定義 `ReservationForm` 介面，針對全域狀態進行強型別約束。
- **容錯與相容性優化**：在定義與操作 State 時，精準處理 `string | null` 或 `number | null` 的潛在空值問題。透過在 Store 內部將 `selectedPlan` 與 `selectedCourse` 斷言為 `string | null`，並在 Actions（如 `setPlan`, `setCourse`）中嚴格限制型別傳入，徹底杜絕了跨頁面傳遞、初始路由載入時可能發生的型別衝突與執行期錯誤（Runtime Error）。

- **流暢的商務邏輯**：透過 `Object.assign(this.$state, data)` 實現響應式狀態的批次安全更新；並利用 Pinia **Getters**（如 `selectedDateDisplay`）即時進行資料轉換（將 `YYYY-MM-DD` 轉換為預覽介面所需的 `YYYY/MM/DD` 格式），達成資料與視圖的完美分離。
- **無縫跳轉體驗**：當使用者在「首頁/方案頁」點選特定方案或課程後，資料能無縫傳遞至「預約報名頁面」並自動帶入對應欄位，大幅優化商務轉換率。

### 2. 響應式排版與斷點優化 (Responsive Design)

- 使用 **Tailwind CSS** 實作嚴謹的 RWD 設計，針對手機、平板與桌面端（`md:`, `lg:`）進行斷點微調。
- 在行動端與桌面端採用不同的佈局策略（例如環境介紹區塊的 `order` 權重反轉排版），確保各裝置皆有最佳閱讀視野。

### 3. 高自定義手勢拖曳與導覽機制 (Custom Drag & Scroll)

- **原生手勢拖曳**：使用 Vue 3 `ref` 直接操作 DOM 元素，透過計算 `MouseEvent` 物理座標，為評論區塊打造順暢的「滑鼠抓取拖曳（Drag to Scroll）」功能。
- **無縫導覽控制**：整合 CSS 的 `snap-x`（物理對齊）與 `scrollBy` 平滑捲動 API，完美提供行動端按鈕與滑動手勢的雙軌導覽體驗。

### 4. 多端自適應媒體渲染 (Swiper & Grid Integration)

- **動態組件切換**：針對多元課程區塊，在行動端與平板端採用靈活的 `grid` 網格排列，極大化提升載入效能。
- **Swiper 套件整合**：在桌面端（`lg`）自動切換並初始化 **Swiper.js** 輪播組件，配置非整數的 `slidesPerView: 1.5` 視覺留白，營造品牌高雅的延伸感。

### 5. 元件化與資料驅動優化 (Data-Driven Logic)

- **資料與視圖分離**：將特色功能、多元課程、師資經歷、價格方案及評論數據全面封裝為結構化陣列，透過 `v-for` 達成高維護性的動態渲染。
- **CSS 性能與動畫優化**：利用 Tailwind 的 `group-hover` 特效，實作師資卡片 hover 時自我展開、細節圖片自動縮放等硬體加速動畫。

---

## 🚀 技術棧 (Tech Stack)

- **Framework:** Vue 3 (Composition API / `<script setup>`)
- **State Management:** Pinia (全域狀態管理、跨頁面資料傳遞)
- **Build Tool:** Vite
- **TypeScript:** 用於定義全域 Store 資料結構、組件內部型別（如 `ref<HTMLElement | null>`），提升代碼嚴謹度與維護性
- **Styling:** Tailwind CSS (含過渡、自定義捲動條優化)
- **Utility Libraries:** Swiper (Vue 3 整合版), Bootstrap Icons
- **Code Quality:** ESLint / Prettier
