<script setup>
// Vue 3 Composition API 사용
import {ref} from 'vue'

// 각 예제 컴포넌트들을 import
import Ex1 from './components/Ex1.vue'  // Vue.js 기초 예제
import Ex2 from './components/Ex2.vue'  // 조건부 렌더링 예제
import Ex3 from './components/Ex3.vue'  // 표시/숨김 예제
import Ex4 from './components/Ex4.vue'  // 리스트 렌더링 예제
import Ex5 from './components/Ex5.vue'  // 이벤트 핸들링 예제

// 동적 컴포넌트를 위한 객체 (component :is 속성에서 사용)
const pages = {Ex1, Ex2, Ex3, Ex4, Ex5}

// 현재 활성화된 컴포넌트를 추적하는 반응형 변수
const activeComp = ref("Ex1")  // 기본값은 Ex1

// 네비게이션 메뉴 아이템 배열
const menuItems = [
  { id: 'Ex1', name: 'Vue.js 기초', icon: '📚' },
  { id: 'Ex2', name: '조건부 렌더링', icon: '🔄' },
  { id: 'Ex3', name: '표시/숨김', icon: '👁️' },
  { id: 'Ex4', name: '리스트 렌더링', icon: '📝' },
  { id: 'Ex5', name: '이벤트 핸들링', icon: '⚡' }
]
</script>

<template>
  <!-- 메인 블로그 컨테이너 -->
  <div class="blog-container">
    <!-- 헤더 섹션 -->
    <header class="blog-header">
      <div class="header-content">
        <h1 class="blog-title">Vue.js 학습 블로그</h1>
        <p class="blog-subtitle">Vue.js의 핵심 개념들을 배워봅시다</p>
      </div>
    </header>

    <!-- 네비게이션 메뉴 -->
    <nav class="blog-nav">
      <div class="nav-container">
        <!-- 각 메뉴 아이템을 버튼으로 렌더링 -->
        <button 
          v-for="item in menuItems" 
          :key="item.id"
          @click="activeComp = item.id"
          :class="['nav-button', { active: activeComp === item.id }]"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-text">{{ item.name }}</span>
        </button>
      </div>
    </nav>

    <!-- 메인 콘텐츠 영역 -->
    <main class="blog-main">
      <div class="content-container">
        <!-- 콘텐츠 헤더 (현재 페이지 제목 표시) -->
        <div class="content-header">
          <h2 class="content-title">
            {{ menuItems.find(item => item.id === activeComp)?.name }}
          </h2>
        </div>
        <!-- 동적 컴포넌트 렌더링 영역 -->
        <div class="content-body">
          <!-- KeepAlive로 컴포넌트 상태 유지 -->
          <KeepAlive>
            <component :is="pages[activeComp]"></component>
          </KeepAlive>
        </div>
      </div>
    </main>

    <!-- 푸터 -->
    <footer class="blog-footer">
      <p>&copy; 2025 Vue 학습블로그</p>
    </footer>
  </div>
</template>

<style scoped>
/* 전체 블로그 컨테이너 스타일 */
.blog-container {
  min-height: 100vh;  /* 최소 높이를 뷰포트 높이로 설정 */
  display: flex;
  flex-direction: column;  /* 세로 방향 레이아웃 */
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);  /* 그라데이션 배경 */
}

/* 헤더 스타일 */
.blog-header {
  background: rgba(255, 255, 255, 0.95);  /* 반투명 흰색 배경 */
  backdrop-filter: blur(10px);  /* 배경 블러 효과 */
  padding: 2rem 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);  /* 그림자 효과 */
}

.header-content {
  max-width: 1200px;  /* 최대 너비 제한 */
  margin: 0 auto;  /* 중앙 정렬 */
  padding: 0 2rem;
  text-align: center;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
}

.blog-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin: 0;
  font-weight: 400;
}

/* 네비게이션 스타일 */
.blog-nav {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;  /* 화면이 작을 때 줄바꿈 */
  justify-content: center;
}

/* 네비게이션 버튼 스타일 */
.nav-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;  /* 둥근 모서리 */
  background: rgba(255, 255, 255, 0.8);
  color: #2c3e50;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;  /* 부드러운 애니메이션 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 버튼 호버 효과 */
.nav-button:hover {
  background: rgba(74, 85, 104, 0.1);
  transform: translateY(-2px);  /* 위로 살짝 이동 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

/* 활성 버튼 스타일 */
.nav-button.active {
  background: #4a5568;
  color: white;
  box-shadow: 0 4px 15px rgba(74, 85, 104, 0.4);
}

.nav-icon {
  font-size: 1.2rem;
}

.nav-text {
  font-size: 0.9rem;
}

/* 메인 콘텐츠 영역 */
.blog-main {
  flex: 1;  /* 남은 공간 모두 차지 */
  padding: 2rem 0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 콘텐츠 헤더 스타일 */
.content-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.content-title {
  font-size: 2rem;
  color: #2c3e50;
  margin: 0;
  text-align: center;
  font-weight: 600;
}

/* 콘텐츠 본문 스타일 */
.content-body {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-height: 400px;  /* 최소 높이 설정 */
}

/* 푸터 스타일 */
.blog-footer {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 1.5rem 0;
  text-align: center;
  color: #7f8c8d;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* 반응형 디자인 - 모바일 대응 */
@media (max-width: 768px) {
  .blog-title {
    font-size: 2rem;  /* 모바일에서 제목 크기 축소 */
  }
  
  .nav-container {
    flex-direction: column;  /* 세로 배치로 변경 */
    align-items: center;
  }
  
  .nav-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .content-container {
    padding: 0 1rem;  /* 좌우 패딩 축소 */
  }
}
</style>
