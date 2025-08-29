<template>
  <!-- 메인 블로그 컨테이너 -->
  <div class="blog-container">
    <!-- 사이드바 -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2 class="sidebar-title">Vue 핵심내용</h2>
        <p class="sidebar-subtitle">Vue.js의 핵심 개념들</p>
      </div>
      
      <nav class="sidebar-nav">
        <div class="nav-menu">
          <!-- 각 메뉴 아이템을 버튼으로 렌더링 -->
          <button 
            v-for="item in menuItems" 
            :key="item.id"
            @click="activeComp = item.id"
            :class="['sidebar-button', { active: activeComp === item.id }]"
          >
            <span class="button-icon">{{ item.icon }}</span>
            <span class="button-text">{{ item.name }}</span>
          </button>
        </div>
      </nav>
      
      <div class="sidebar-footer">
        <p>&copy; 2025 Vue jimin's 학습블로그</p>
      </div>
    </aside>

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
          <component :is="pages[activeComp]"></component>
        </KeepAlive>
      </div>
    </main>
  </div>
</template>

<script>
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

export default {
  name: 'FileComponent',
  components: {
    Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10
  },
  data() {
    return {
      // 동적 컴포넌트를 위한 객체 (component :is 속성에서 사용)
      pages: {Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10},
      // 현재 활성화된 컴포넌트를 추적하는 반응형 변수
      activeComp: "Ex1",
      // 네비게이션 메뉴 아이템 배열
      menuItems: [
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
    }
  }
}
</script>

<style scoped>
/* 전체 블로그 컨테이너 스타일 */
.blog-container {
  min-height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
}

/* 사이드바 스타일 */
.sidebar {
  width: 280px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  padding: 0 2rem 2rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.sidebar-title {
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.sidebar-subtitle {
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
}

.sidebar-nav {
  flex: 1;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
}

.sidebar-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #374151;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
}

.sidebar-button:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  transform: translateX(5px);
}

.sidebar-button.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.button-icon {
  font-size: 1.1rem;
}

.button-text {
  flex: 1;
}

.sidebar-footer {
  padding: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;
  text-align: center;
  color: #6b7280;
  font-size: 0.8rem;
}

/* 메인 콘텐츠 스타일 */
.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.content-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(102, 126, 234, 0.2);
}

.content-title {
  color: #1f2937;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.content-body {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .blog-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .nav-menu {
    flex-direction: row;
    overflow-x: auto;
    padding: 1rem;
  }
  
  .sidebar-button {
    white-space: nowrap;
    min-width: 150px;
  }
  
  .main-content {
    padding: 1rem;
  }
  
  .content-title {
    font-size: 1.5rem;
  }
}
</style>
