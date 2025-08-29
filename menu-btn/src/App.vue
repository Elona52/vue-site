<script setup>
import { ref, onMounted } from 'vue'

// 방문한 사이트 히스토리를 저장할 배열
const siteHistory = ref([])
const currentSite = ref('')

// 사이트 정보
const sites = {
  html: {
    url: 'https://elona52.github.io/html2507/',
    name: 'HTML 학습',
    icon: '🌐'
  },
  js: {
    url: 'https://elona52.github.io/js2507/',
    name: 'JavaScript 학습',
    icon: '📜'
  },
  react: {
    url: 'https://elona52.github.io/react-site/',
    name: 'React 사이트',
    icon: '⚛️'
  }
}

// 사이트로 이동하는 함수
const navigateToSite = (siteKey) => {
  const site = sites[siteKey]
  
  // 현재 사이트를 히스토리에 추가 (중복 방지)
  if (currentSite.value && currentSite.value !== siteKey) {
    siteHistory.value.push(currentSite.value)
  }
  
  // 현재 사이트 업데이트
  currentSite.value = siteKey
  
  // 브라우저 히스토리에 상태 추가
  window.history.pushState(
    { site: siteKey, url: site.url },
    site.name,
    `#${siteKey}`
  )
  
  // 사이트로 이동
  window.location.href = site.url
}

// 뒤로가기 처리
const handlePopState = (event) => {
  if (event.state && event.state.site) {
    // 이전 사이트로 이동
    const previousSite = event.state.site
    const site = sites[previousSite]
    
    if (site) {
      currentSite.value = previousSite
      window.location.href = site.url
    }
  } else if (siteHistory.value.length > 0) {
    // 히스토리에서 이전 사이트 가져오기
    const previousSite = siteHistory.value.pop()
    const site = sites[previousSite]
    
    if (site) {
      currentSite.value = previousSite
      window.location.href = site.url
    }
  } else {
    // 히스토리가 없으면 홈으로
    currentSite.value = ''
    window.location.href = window.location.origin
  }
}

// 컴포넌트 마운트 시 이벤트 리스너 등록
onMounted(() => {
  // 브라우저 뒤로가기/앞으로가기 버튼 이벤트 리스너
  window.addEventListener('popstate', handlePopState)
  
  // 현재 URL에서 사이트 정보 확인
  const hash = window.location.hash.replace('#', '')
  if (hash && sites[hash]) {
    currentSite.value = hash
  }
})
</script>

<template>
  <div class="app-container">
    <!-- GitHub 사이트 네비게이션 -->
    <nav class="github-nav">
      <div class="github-nav-container">
        <h3 class="github-nav-title">다른 GitHub 사이트</h3>
        <div class="github-buttons">
          <button 
            @click="navigateToSite('html')"
            class="github-btn html-btn"
            :class="{ active: currentSite === 'html' }"
          >
            <div class="btn-icon">🌐</div>
            <div class="btn-content">
              <span class="btn-title">HTML</span>
              <span class="btn-subtitle">학습</span>
            </div>
          </button>
          
          <button 
            @click="navigateToSite('js')"
            class="github-btn js-btn"
            :class="{ active: currentSite === 'js' }"
          >
            <div class="btn-icon">📜</div>
            <div class="btn-content">
              <span class="btn-title">JavaScript</span>
              <span class="btn-subtitle">학습 과제</span>
            </div>
          </button>
          
          <button 
            @click="navigateToSite('react')"
            class="github-btn react-btn"
            :class="{ active: currentSite === 'react' }"
          >
            <div class="btn-icon">⚛️</div>
            <div class="btn-content">
              <span class="btn-title">React</span>
              <span class="btn-subtitle">사이트</span>
            </div>
          </button>
        </div>
      </div>
    </nav>

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
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

/* GitHub 사이트 네비게이션 스타일 */
.github-nav {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;
}

.github-nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.github-nav-title {
  font-size: 1.1rem;
  color: #374151;
  margin: 0 0 1rem 0;
  text-align: center;
  font-weight: 600;
}

.github-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.github-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  min-width: 200px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9);
  font-family: inherit;
}

.github-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.github-btn:hover::before {
  left: 100%;
}

.github-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 0, 0, 0.2);
}

.github-btn.active {
  border-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.btn-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn-title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
}

.btn-subtitle {
  font-size: 0.8rem;
  opacity: 0.7;
  font-weight: 500;
}

/* 각 버튼별 색상 */
.js-btn {
  color: #1f2937;
}

.js-btn:hover {
  background: rgba(255, 255, 255, 1);
}

.js-btn.active {
  background: rgba(255, 255, 255, 1);
}

.react-btn {
  color: #1f2937;
}

.react-btn:hover {
  background: rgba(255, 255, 255, 1);
}

.react-btn.active {
  background: rgba(255, 255, 255, 1);
}

.html-btn {
  color: #1f2937;
}

.html-btn:hover {
  background: rgba(255, 255, 255, 1);
}

.html-btn.active {
  background: rgba(255, 255, 255, 1);
}

.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 2rem;
  color: #1f2937;
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
  color: #4b5563;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  transition: left 0.3s;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  transform: translateY(-1px);
}

.nav-link.router-link-active {
  background: #3b82f6;
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.main-content {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  margin: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .github-nav-container {
    padding: 0 1rem;
  }
  
  .github-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .github-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .app-header {
    padding: 1rem;
  }
  
  .app-title {
    font-size: 1.5rem;
  }
  
  .main-nav ul {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  
  .main-content {
    padding: 1rem;
    margin: 1rem;
  }
}

@media (max-width: 480px) {
  .github-btn {
    min-width: auto;
    padding: 0.75rem 1rem;
  }
  
  .btn-icon {
    font-size: 1.5rem;
  }
  
  .btn-title {
    font-size: 0.9rem;
  }
  
  .btn-subtitle {
    font-size: 0.75rem;
  }
}
</style>
