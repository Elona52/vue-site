<script setup>
// Vue 3 Composition API 사용
import { ref, computed, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 현재 활성화된 페이지를 추적하는 반응형 변수
const activePage = ref('file')

// 클릭 히스토리를 저장하는 배열
const clickHistory = ref([])

// 컴포넌트 마운트 시 로컬 스토리지에서 히스토리 불러오기
onMounted(() => {
  const savedHistory = localStorage.getItem('vueClickHistory')
  if (savedHistory) {
    clickHistory.value = JSON.parse(savedHistory)
  }
})

// 히스토리를 로컬 스토리지에 저장하는 함수
const saveHistory = () => {
  localStorage.setItem('vueClickHistory', JSON.stringify(clickHistory.value))
}

// 페이지 목록
const pages = [
  { id: 'file', name: 'Vue 컴포넌트', description: 'Vue.js의 핵심 개념들을 학습할 수 있습니다.', path: '/file' },
  { id: 'web', name: '웹기능사 문제', description: '2025 웹 기능사 문제를 기반으로 구성된 예제들입니다.', path: '/web' }
]

// File 페이지의 개별 파일 클릭을 위한 히스토리 추가 함수
const addFileToHistory = (fileId, fileName) => {
  // 기존 항목이 있으면 제거
  const existingIndex = clickHistory.value.findIndex(item => item.id === fileId)
  if (existingIndex !== -1) {
    clickHistory.value.splice(existingIndex, 1)
  }
  
  // 새 항목을 맨 앞에 추가
  clickHistory.value.unshift({
    id: fileId,
    name: fileName,
    type: 'file',
    timestamp: new Date().toISOString()
  })
  
  // 최대 5개까지만 유지
  if (clickHistory.value.length > 5) {
    clickHistory.value = clickHistory.value.slice(0, 5)
  }
  
  // 로컬 스토리지에 저장
  saveHistory()
}

// provide로 히스토리 추가 함수를 자식 컴포넌트에 제공
provide('addFileToHistory', addFileToHistory)

const handleSelect = (page) => {
  activePage.value = page.id
  router.push(page.path)
  
  // 클릭 히스토리에 추가 (중복 제거)
  const existingIndex = clickHistory.value.findIndex(item => item.id === page.id)
  if (existingIndex !== -1) {
    // 이미 존재하면 제거
    clickHistory.value.splice(existingIndex, 1)
  }
  
  // 최신 항목을 맨 앞에 추가
  clickHistory.value.unshift({
    id: page.id,
    name: page.name,
    type: 'page',
    timestamp: new Date().toISOString()
  })
  
  // 최대 5개까지만 유지
  if (clickHistory.value.length > 5) {
    clickHistory.value = clickHistory.value.slice(0, 5)
  }
  
  // 로컬 스토리지에 저장
  saveHistory()
}

// 날짜 포맷팅 함수
const formatDate = (timestamp) => {
  const now = new Date()
  const date = new Date(timestamp)
  const diffTime = now - date
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) {
    return '오늘'
  } else if (diffDays === 1) {
    return '어제'
  } else if (diffDays < 7) {
    return `${diffDays}일 전`
  } else {
    return `${date.getMonth() + 1}/${date.getDate()}`
  }
}

// 최근 학습 데이터 (실제 히스토리가 없을 때 표시할 기본 데이터)
const defaultRecentPosts = [
  { id: 'file', name: 'Vue Composition API', date: '12/20' },
  { id: 'web', name: 'Vue Router', date: '12/19' },
  { id: 'file', name: 'Vue 컴포넌트', date: '12/18' }
]

// 최근 학습 데이터 계산 (히스토리가 있으면 히스토리, 없으면 기본 데이터)
const recentPosts = computed(() => {
  if (clickHistory.value.length > 0) {
    return clickHistory.value.map(item => ({
      id: item.id,
      name: item.name,
      date: formatDate(item.timestamp)
    }))
  }
  return defaultRecentPosts
})

// 최근 학습 항목 클릭 처리
const handleRecentClick = (post) => {
  // 페이지인 경우
  const page = pages.find(p => p.id === post.id)
  if (page) {
    handleSelect(page)
    return
  }
  
  // 파일인 경우 (File 페이지로 이동하고 해당 파일 선택)
  if (post.type === 'file') {
    router.push('/file')
    // File 페이지에서 해당 파일을 선택하도록 이벤트 발생
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('selectFile', { detail: { fileId: post.id } }))
    }, 100)
  }
}

// 초기 페이지 설정
router.push('/file')
</script>

<template>
  <div class="app-root">
    <!-- 헤더 -->
    <header class="header">
      <div class="header-container">
        <div class="header-content">
          <div class="profile-section">
            <img src="/poto.png" alt="Profile" class="profile-image" />
            <div class="profile-info">
              <h1 class="blog-title">Vue.js 학습 프로젝트</h1>
              <p class="blog-subtitle">Frontend Developer & Vue Enthusiast</p>
            </div>
          </div>
          <!-- 깃허브 사이트 링크 (상단) -->
          <div class="github-links-header">
            <a href="https://elona52.github.io/html2507/" target="_blank" class="site-link-header html-link">
              <span class="site-icon">🌐</span>
              <span class="site-name">HTML</span>
            </a>
            <a href="https://elona52.github.io/js/" target="_blank" class="site-link-header js-link">
              <span class="site-icon">📜</span>
              <span class="site-name">JS</span>
            </a>
            <a href="https://elona52.github.io/react-site/" target="_blank" class="site-link-header react-link">
              <span class="site-icon">⚛️</span>
              <span class="site-name">React</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <div class="main-layout">
      <!-- 사이드바 -->
      <aside class="sidebar">
        <div class="sidebar-content">
          <!-- 프로필 카드 -->
          <div class="profile-card">
            <div class="profile-avatar">
              <img src="/poto.png" alt="Profile" class="avatar-image" />
            </div>
            <h3 class="profile-name">이지민</h3>
            <p class="profile-bio">Vue.js 개발 학습 중인 개발자입니다.</p>
            <div class="social-links">
              <a href="#" class="social-link"><i class="fab fa-github"></i></a>
              <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            </div>
          </div>

          <!-- 페이지 목록 -->
          <div class="sidebar-section">
            <h4 class="sidebar-title">페이지</h4>
            <div class="sidebar-items">
              <div
                v-for="page in pages"
                :key="page.id"
                class="sidebar-item"
                :class="{ active: activePage === page.id }"
                @click="handleSelect(page)"
              >
                <span class="item-date">📄</span>
                <span class="item-title">{{ page.name }}</span>
              </div>
            </div>
          </div>

          <!-- 최근 학습 -->
          <div class="sidebar-section">
            <h4 class="sidebar-title">최근 학습</h4>
            <div class="recent-posts">
              <a href="#" class="recent-post" v-for="post in recentPosts" :key="post.id" @click="handleRecentClick(post)">
                <span class="post-date">{{ post.date }}</span>
                <span class="post-title">{{ post.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      <!-- 메인 콘텐츠 -->
      <main class="main-content">
        <!-- 라우터 뷰 -->
        <section class="result-section">
          <div class="result-container">
            <router-view />
          </div>
        </section>
      </main>
    </div>

    <!-- 푸터 -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>이지민 개발 블로그</h4>
            <p>Vue.js 개발 학습 과정을 기록하는 블로그입니다.</p>
          </div>
          <div class="footer-section">
            <h4>기술 스택</h4>
            <div class="tech-stack">
              <span class="tech-item">HTML5</span>
              <span class="tech-item">CSS3</span>
              <span class="tech-item">JavaScript</span>
              <span class="tech-item">Vue.js</span>
            </div>
          </div>
          <div class="footer-section">
            <h4>연락처</h4>
            <div class="contact-info">
              <p><i class="fas fa-envelope"></i> contact@example.com</p>
              <p><i class="fab fa-github"></i> github.com/elona52</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 이지민. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 전체 기본 세팅 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  background: #f8fafc;
  color: #334155;
  line-height: 1.6;
  min-height: 100vh;
}

/* 헤더 스타일 */
.header {
  background: #1a202c;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.header-container {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 2rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.blog-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

.blog-subtitle {
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
  color: white;
}

/* 헤더 깃허브 링크 */
.github-links-header {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: -2rem;
}

.site-link-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  min-width: 60px;
  background: rgba(255, 255, 255, 0.1);
}

.site-link-header:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.site-link-header .site-icon {
  font-size: 1.2rem;
  text-align: center;
}

.site-link-header .site-name {
  font-weight: 600;
  font-size: 0.7rem;
  text-align: center;
}

/* 메인 레이아웃 */
.main-layout {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2rem;
  width: 100%;
  max-width: none;
  margin: 2rem 0;
  padding: 0 2rem;
}

/* 사이드바 스타일 */
.sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 프로필 카드 */
.profile-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.profile-avatar {
  margin-bottom: 1rem;
}

.avatar-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: none;
}

.profile-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.profile-bio {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f1f5f9;
  border-radius: 50%;
  color: #64748b;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

/* 사이드바 섹션 */
.sidebar-section {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.sidebar-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 사이드바 항목들 */
.sidebar-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 600px;
  overflow-y: auto;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 12px;
  text-decoration: none;
  color: #334155;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  cursor: pointer;
  background: #f8fafc;
  border-color: #e2e8f0;
}

.sidebar-item:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateX(4px);
}

.sidebar-item.active {
  background: transparent;
  color: #334155;
  border-color: transparent;
  font-weight: 600;
}

.item-date {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
  background: #f1f5f9;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  width: fit-content;
}

.sidebar-item.active .item-date {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.item-title {
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.3;
  flex: 1;
}

/* 최근 포스트 */
.recent-posts {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.recent-post {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
  border-radius: 12px;
  text-decoration: none;
  color: #334155;
  transition: all 0.3s ease;
}

.recent-post:hover {
  background: #f8fafc;
  transform: translateX(4px);
}

.post-date {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.post-title {
  font-size: 0.9rem;
  font-weight: 600;
}

/* 메인 콘텐츠 */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: auto !important;
  height: auto !important;
  max-height: none !important;
}

/* 결과 표시 영역 */
.result-section {
  width: 100%;
  min-height: auto !important;
  height: auto !important;
  max-height: none !important;
}

.result-container {
  background: white;
  border-radius: 16px;
  width: 100%;
  min-height: auto !important;
  height: auto !important;
  max-height: none !important;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  overflow: visible !important;
}

/* 푸터 */
.footer {
  background: #1e293b;
  color: white;
  margin-top: 4rem;
  padding: 3rem 0 1rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #f1f5f9;
}

.footer-section p {
  color: #94a3b8;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-item {
  background: #334155;
  color: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.contact-info i {
  color: #667eea;
  width: 16px;
}

.footer-bottom {
  border-top: 1px solid #334155;
  padding-top: 1rem;
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .main-layout {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .sidebar {
    position: static;
    order: 2;
  }
  
  .sidebar-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .result-section {
    min-height: auto !important;
    height: auto !important;
    max-height: none !important;
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .github-links-header {
    justify-content: center;
  }
  
  .main-layout {
    padding: 0 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .welcome-message h2 {
    font-size: 1.5rem;
  }
}
</style>

