<script setup>
import File from './pages/File.vue'
import Web from './pages/Web.vue'
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <h1 class="app-title">Vue.js 학습 프로젝트</h1>
      <nav class="main-nav">
        <ul>
          <li>
            <RouterLink to="/" class="nav-link">File 예제</RouterLink>
          </li>
          <li>
            <RouterLink to="/web" class="nav-link">Web 예제</RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
}

.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 1.8rem;
  color: #2d3748;
  margin: 0 0 1rem 0;
  text-align: center;
  font-weight: 700;
}

.main-nav ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(74, 85, 104, 0.1);
  color: #2d3748;
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
}

.main-content {
  padding: 2rem;
}

@media (max-width: 768px) {
  .app-header {
    padding: 1rem;
  }
  
  .app-title {
    font-size: 1.4rem;
  }
  
  .main-nav ul {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  
  .main-content {
    padding: 1rem;
  }
}
</style>
