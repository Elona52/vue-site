<script setup>
// Vue 3 Composition API 사용
import {ref, inject, onMounted} from 'vue'

// App.vue에서 제공하는 히스토리 추가 함수 주입
const addFileToHistory = inject('addFileToHistory')

// 각 예제 컴포넌트들을 import
import Ex1 from '../components/Ex1.vue'  // Vue.js 기초 예제
import Ex2 from '../components/Ex2.vue'  // 조건부 렌더링 예제
import Ex3 from '../components/Ex3.vue'  // 표시/숨김 예제
import Ex4 from '../components/Ex4.vue'  // 리스트 렌더링 예제
import Ex5 from '../components/Ex5.vue'  // 이벤트 핸들링 예제
import Ex6 from '../components/Ex6.vue'
import Ex7 from '../components/Ex7.vue'
import Ex8 from '../components/Ex8.vue'
import Ex9 from '../components/Ex9.vue'
import Ex10 from '../components/Ex10.vue'

// 동적 컴포넌트를 위한 객체 (component :is 속성에서 사용)
const pages = {Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10}

// 현재 활성화된 컴포넌트를 추적하는 반응형 변수
const activeComp = ref("Ex1")  

// 네비게이션 메뉴 아이템 배열
const menuItems = [
  { id: 'Ex1', name: 'v-bind 예제', icon: '❐ ' },
  { id: 'Ex2', name: 'v-if 예제', icon: '❐ ' },
  { id: 'Ex3', name: 'v-show 예제', icon: '❐ ' },
  { id: 'Ex4', name: 'v-for 예제', icon: '❐ ' },
  { id: 'Ex5', name: 'v-event 예제', icon: '❐ ' },
  { id: 'Ex6', name: 'v-on 예제', icon: '❐ ' },
  { id: 'Ex7', name: 'v-methods 예제', icon: '❐ ' },
  { id: 'Ex8', name: 'v-event modifier 예제', icon: '❐ ' },
  { id: 'Ex9', name: 'v-computed 예제', icon: '❐ ' },
  { id: 'Ex10', name: 'v-watcher 예제', icon: '❐ ' }
]

// 파일 선택 함수
const selectFile = (fileId) => {
  activeComp.value = fileId
  
  // 히스토리에 추가
  const selectedItem = menuItems.find(item => item.id === fileId)
  if (selectedItem && addFileToHistory) {
    addFileToHistory(fileId, selectedItem.name)
  }
}

// 컴포넌트 마운트 시 최근 학습에서 파일 선택 이벤트 리스너 추가
onMounted(() => {
  window.addEventListener('selectFile', (event) => {
    const { fileId } = event.detail
    selectFile(fileId)
  })
})
</script>

<template>
  <!-- 메인 블로그 컨테이너 -->
  <div class="blog-container">
    <!-- 상단 네비게이션 -->
    <nav class="top-navigation">
      <div class="nav-header">
        <h2 class="nav-title">Vue 핵심내용</h2>
      </div>
      
      <div class="nav-menu">
        <!-- 각 메뉴 아이템을 버튼으로 렌더링 -->
        <button 
          v-for="item in menuItems" 
          :key="item.id"
          @click="selectFile(item.id)"
          :class="['nav-button', { active: activeComp === item.id }]"
        >
          <span class="button-icon">{{ item.icon }}</span>
          <span class="button-text">{{ item.name }}</span>
        </button>
      </div>
    </nav>

    <!-- 메인 콘텐츠 영역 -->
    <main class="main-content">
      <!-- 콘텐츠 헤더 (현재 페이지 제목 표시) -->
      <div class="content-header">
        <h1 class="content-title">
          {{ menuItems.find(item => item.id === activeComp)?.name }}
        </h1>
      </div>
      
      <!-- 동적 컴포넌트 렌더링 영역 -->
      <div class="content-body">
        <!-- KeepAlive로 컴포넌트 상태 유지 -->
        <KeepAlive>
          <component :is="pages[activeComp]" class="vue-component"></component>
        </KeepAlive>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 전체 블로그 컨테이너 스타일 */
.blog-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  height: auto !important;
  max-height: none !important;
}

/* 상단 네비게이션 스타일 */
.top-navigation {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  z-index: 100;
}

.nav-header {
  text-align: center;
  margin-bottom: 1rem;
}

.nav-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
}

.nav-subtitle {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0;
  font-weight: 400;
}

.nav-menu {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* 네비게이션 버튼 스타일 */
.nav-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: #334155;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 120px;
  justify-content: center;
  border: 1px solid transparent;
}

/* 버튼 호버 효과 */
.nav-button:hover {
  background: transparent;
  border-color: transparent;
  transform: translateX(4px);
}

/* 활성 버튼 스타일 */
.nav-button.active {
  background: transparent;
  color: #334155;
  border-color: transparent;
  font-weight: 600;
}

.button-icon {
  font-size: 1rem;
  min-width: 16px;
}

.button-text {
  font-size: 0.85rem;
  font-weight: 500;
}

/* 메인 콘텐츠 영역 */
.main-content {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: auto !important;
  height: auto !important;
  max-height: none !important;
}

.content-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.content-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0;
  text-align: center;
  font-weight: 700;
}

/* 콘텐츠 본문 스타일 */
.content-body {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-height: 800px;
  overflow: visible;
  flex: 1;
  width: 100%;
}

/* 스크롤바 스타일링 */
.content-body::-webkit-scrollbar {
  width: 18px;
}

.content-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.content-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.content-body::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Vue 컴포넌트 스타일 */
.vue-component {
  width: 100%;
  min-height: 100%;
  height: auto !important;
  max-height: none !important;
  padding-bottom: 4rem;
  overflow: visible !important;
}

/* Vue 컴포넌트 내부 스타일 재정의 */
.vue-component :deep(.container) {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  min-height: auto !important;
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
}

.vue-component :deep(.example) {
  margin-bottom: 30px !important;
  padding: 25px !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 8px !important;
  background: #f8fafc !important;
  overflow: visible !important;
  min-height: 100px !important;
  height: auto !important;
  max-height: none !important;
}

.vue-component :deep(h3) {
  color: #2d3748 !important;
  margin-bottom: 20px !important;
  font-size: 1.3rem !important;
  font-weight: 600 !important;
}

.vue-component :deep(.btn) {
  background: #667eea !important;
  color: white !important;
  border: none !important;
  padding: 12px 20px !important;
  border-radius: 6px !important;
  cursor: pointer !important;
  font-size: 0.9rem !important;
  transition: all 0.3s ease !important;
  margin: 8px !important;
}

.vue-component :deep(.btn:hover) {
  background: #5a67d8 !important;
  transform: translateY(-1px) !important;
}

.vue-component :deep(.input) {
  width: 100% !important;
  padding: 12px 16px !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 6px !important;
  font-size: 0.9rem !important;
  margin-bottom: 20px !important;
}

.vue-component :deep(.demo-image) {
  max-width: 100% !important;
  height: auto !important;
  border-radius: 8px !important;
  margin-bottom: 20px !important;
}

.vue-component :deep(.text-demo) {
  padding: 20px !important;
  background: white !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 6px !important;
  margin-bottom: 20px !important;
  overflow: visible !important;
  min-height: 60px !important;
  height: auto !important;
  max-height: none !important;
}

.vue-component :deep(.color-demo) {
  padding: 25px !important;
  border-radius: 6px !important;
  margin-bottom: 20px !important;
  text-align: center !important;
  font-weight: bold !important;
  overflow: visible !important;
  min-height: 80px !important;
  height: auto !important;
  max-height: none !important;
}

.vue-component :deep(.class-demo) {
  padding: 20px !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 6px !important;
  margin-bottom: 20px !important;
  text-align: center !important;
  overflow: visible !important;
  min-height: 60px !important;
  height: auto !important;
  max-height: none !important;
}

.vue-component :deep(.status) {
  padding: 20px !important;
  border-radius: 6px !important;
  margin-bottom: 20px !important;
  font-weight: bold !important;
  overflow: visible !important;
  min-height: 60px !important;
  height: auto !important;
  max-height: none !important;
}

.vue-component :deep(.in-stock) {
  background: #d4edda !important;
  color: #155724 !important;
}

.vue-component :deep(.out-of-stock) {
  background: #f8d7da !important;
  color: #721c24 !important;
}

.vue-component :deep(.low-stock) {
  background: #fff3cd !important;
  color: #856404 !important;
}

.vue-component :deep(.found) {
  background: #d1ecf1 !important;
  color: #0c5460 !important;
}

.vue-component :deep(.not-found) {
  background: #f8d7da !important;
  color: #721c24 !important;
}

.vue-component :deep(.controls) {
  display: flex !important;
  align-items: center !important;
  gap: 20px !important;
  margin-top: 20px !important;
  flex-wrap: wrap !important;
}

.vue-component :deep(.count) {
  font-weight: bold !important;
  font-size: 1.3rem !important;
  min-width: 50px !important;
  text-align: center !important;
}

.vue-component :deep(.slider) {
  width: 100% !important;
  margin: 20px 0 !important;
}

.vue-component :deep(.pizza-result) {
  text-align: center !important;
  padding: 20px !important;
}

.vue-component :deep(.pizza-img) {
  max-width: 150px !important;
  height: auto !important;
  margin-top: 20px !important;
}

/* 긴 텍스트나 내용이 잘리지 않도록 */
.vue-component :deep(p) {
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  white-space: normal !important;
  line-height: 1.7 !important;
  margin-bottom: 15px !important;
  font-size: 1rem !important;
}

.vue-component :deep(div) {
  overflow: visible !important;
  height: auto !important;
  max-height: none !important;
}

/* 반응형 디자인 - 모바일 대응 */
@media (max-width: 768px) {
  .top-navigation {
    padding: 1rem;
  }
  
  .nav-title {
    font-size: 1.2rem;
  }
  
  .nav-menu {
    gap: 0.25rem;
  }
  
  .nav-button {
    min-width: 100px;
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
  
  .button-text {
    font-size: 0.75rem;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .content-title {
    font-size: 1.8rem;
  }
  
  .content-body {
    padding: 1rem;
    min-height: 1000px !important;
  }
}

@media (max-width: 480px) {
  .nav-menu {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-button {
    width: 100%;
    max-width: 200px;
  }
}
</style>
