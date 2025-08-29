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

<script>
export default {
  name: 'AppComponent',
  data() {
    return {
      siteHistory: [],
      currentSite: '',
      sites: {
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
    }
  },
  mounted() {
    // 브라우저 뒤로가기/앞으로가기 버튼 이벤트 리스너
    window.addEventListener('popstate', this.handlePopState)
    
    // 현재 URL에서 사이트 정보 확인
    const hash = window.location.hash.replace('#', '')
    if (hash && this.sites[hash]) {
      this.currentSite = hash
    }
  },
  beforeUnmount() {
    window.removeEventListener('popstate', this.handlePopState)
  },
  methods: {
    navigateToSite(siteKey) {
      const site = this.sites[siteKey]
      
      // 현재 사이트를 히스토리에 추가 (중복 방지)
      if (this.currentSite && this.currentSite !== siteKey) {
        this.siteHistory.push(this.currentSite)
      }
      
      // 현재 사이트 업데이트
      this.currentSite = siteKey
      
      // 브라우저 히스토리에 상태 추가
      window.history.pushState(
        { site: siteKey, url: site.url },
        site.name,
        `#${siteKey}`
      )
      
      // 사이트로 이동
      window.location.href = site.url
    },
    handlePopState(event) {
      if (event.state && event.state.site) {
        // 이전 사이트로 이동
        const previousSite = event.state.site
        const site = this.sites[previousSite]
        
        if (site) {
          this.currentSite = previousSite
          window.location.href = site.url
        }
      } else if (this.siteHistory.length > 0) {
        // 히스토리에서 이전 사이트 가져오기
        const previousSite = this.siteHistory.pop()
        const site = this.sites[previousSite]
        
        if (site) {
          this.currentSite = previousSite
          window.location.href = site.url
        }
      } else {
        // 히스토리가 없으면 홈으로
        this.currentSite = ''
        window.location.href = window.location.origin
      }
    }
  }
}
</script>

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
  border: none;
  cursor: pointer;
  background: white;
  color: #374151;
}

.github-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.github-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-icon {
  font-size: 1.5rem;
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.btn-title {
  font-size: 1rem;
  font-weight: 700;
}

.btn-subtitle {
  font-size: 0.8rem;
  opacity: 0.8;
  font-weight: 500;
}

/* 헤더 스타일 */
.app-header {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.app-title {
  text-align: center;
  color: #1f2937;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.main-nav {
  display: flex;
  justify-content: center;
}

.main-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #374151;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* 메인 콘텐츠 스타일 */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .github-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .github-btn {
    width: 100%;
    max-width: 300px;
  }
  
  .app-title {
    font-size: 2rem;
  }
  
  .main-nav ul {
    flex-direction: column;
    gap: 1rem;
  }
  
  .main-content {
    padding: 1rem;
  }
}
</style>
