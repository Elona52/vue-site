<script setup>
import {ref} from 'vue'
import Ex1 from './components/Ex1.vue'
import Ex2 from './components/Ex2.vue'
import Ex3 from './components/Ex3.vue'
import Ex4 from './components/Ex4.vue'

const pages = {Ex1, Ex2, Ex3, Ex4}
const activeComp = ref("Ex1")

const menuItems = [
  { id: 'Ex1', name: 'Vue.js 기초', icon: '📚' },
  { id: 'Ex2', name: '조건부 렌더링', icon: '🔄' },
  { id: 'Ex3', name: '표시/숨김', icon: '👁️' },
  { id: 'Ex4', name: '리스트 렌더링', icon: '📝' }
]
</script>

<template>
  <div class="blog-container">
    <!-- 헤더 -->
    <header class="blog-header">
      <div class="header-content">
        <h1 class="blog-title">Vue.js 학습 블로그</h1>
        <p class="blog-subtitle">Vue.js의 핵심 개념들을 배워봅시다</p>
      </div>
    </header>

    <!-- 네비게이션 -->
    <nav class="blog-nav">
      <div class="nav-container">
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

    <!-- 메인 콘텐츠 -->
    <main class="blog-main">
      <div class="content-container">
        <div class="content-header">
          <h2 class="content-title">
            {{ menuItems.find(item => item.id === activeComp)?.name }}
          </h2>
        </div>
        <div class="content-body">
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
.blog-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
}

.blog-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
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
  flex-wrap: wrap;
  justify-content: center;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.8);
  color: #2c3e50;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-button:hover {
  background: rgba(74, 85, 104, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

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

.blog-main {
  flex: 1;
  padding: 2rem 0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

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

.content-body {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}

.blog-footer {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 1.5rem 0;
  text-align: center;
  color: #7f8c8d;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .blog-title {
    font-size: 2rem;
  }
  
  .nav-container {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .content-container {
    padding: 0 1rem;
  }
}
</style>
