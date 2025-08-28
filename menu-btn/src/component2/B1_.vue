<template>
  <div class="page-container">
    <div class="nav-bar">
      <button @click="goHome" class="back-button">
        ←
      </button>
    </div>
    <div class="container">
    <div class="logo">
      <div class="logo-left">
        로고
      </div>

      <div class="logo-right">
        <nav class="menu-nav">
          <ul class="menu-list">
            <li class="menu-item" @mouseenter="showSubmenu" @mouseleave="hideSubmenu">
              <a href="#" class="menu-link">메뉴1</a>
            </li>
            
            <li class="menu-item" @mouseenter="showSubmenu" @mouseleave="hideSubmenu">
              <a href="#" class="menu-link">메뉴2</a>
            </li>

            <li class="menu-item" @mouseenter="showSubmenu" @mouseleave="hideSubmenu">
              <a href="#" class="menu-link">메뉴3</a>
            </li>
            
            <li class="menu-item" @mouseenter="showSubmenu" @mouseleave="hideSubmenu">
              <a href="#" class="menu-link">메뉴4</a>
            </li>
          </ul>
          
          <!-- 통합된 서브메뉴 박스 -->
          <div class="unified-submenu" :class="{ active: isSubmenuVisible }" @mouseenter="showSubmenu" @mouseleave="hideSubmenu">
            <div class="submenu-section">
              <h4>메뉴1</h4>
              <ul>
                <li><a href="#">서브메뉴1-1</a></li>
                <li><a href="#">서브메뉴1-2</a></li>
                <li><a href="#">서브메뉴1-3</a></li>
              </ul>
            </div>
            
            <div class="submenu-section">
              <h4>메뉴2</h4>
              <ul>
                <li><a href="#">서브메뉴2-1</a></li>
                <li><a href="#">서브메뉴2-2</a></li>
              </ul>
            </div>
            
            <div class="submenu-section">
              <h4>메뉴3</h4>
              <ul>
                <li><a href="#">서브메뉴3-1</a></li>
                <li><a href="#">서브메뉴3-2</a></li>
                <li><a href="#">서브메뉴3-3</a></li>
              </ul>
            </div>
            
            <div class="submenu-section">
              <h4>메뉴4</h4>
              <ul>
                <li><a href="#">서브메뉴4-1</a></li>
                <li><a href="#">서브메뉴4-2</a></li>
                <li><a href="#">서브메뉴4-3</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="slide">
      이미지 슬라이드
    </div>

    <div class="banner">
      <div class="banner-left">
        공지사항/갤러리
      </div>
      <div class="banner-center">
        배너
      </div>
      <div class="banner-right">
       바로가기
      </div>
    </div>

    <div class="footer">
      <div class="footer-left">
       로고
      </div>
      <div class="footer-center">
        copyright
      </div>
      <div class="footer-right">
        패밀리 사이트
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import main1 from '../assets/main1.png'
import main2 from '../assets/main2.png'
import main3 from '../assets/main3.png'

const router = useRouter()
const isSubmenuVisible = ref(false)
const currentSlide = ref(0)
const slideInterval = ref(null)

const slideImages = [main1, main2, main3]

const goHome = () => {
  router.push('/')
}

const showSubmenu = () => {
  isSubmenuVisible.value = true
}

const hideSubmenu = () => {
  isSubmenuVisible.value = false
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slideImages.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startSlideShow = () => {
  slideInterval.value = setInterval(nextSlide, 3000)
}

const stopSlideShow = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
  }
}

onMounted(() => {
  startSlideShow()
})

onUnmounted(() => {
  stopSlideShow()
})
</script>

<style scoped>
.page-container {
  width: 1200px;
  background-color: #f5f5f5;
}

.nav-bar {
  padding: 15px 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.back-button {
  background: transparent;
  border: none;
  color: #333;
  padding: 8px 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-button:hover {
  background: rgba(0,0,0,0.1);
  transform: scale(1.1);
}

.container {
  width: 1200px;
  display: flex;
  flex-direction: column;
  height: 700px; /* 화면 전체 높이 사용 */
}

.logo {
  background-color: #f5f5f5;
  padding: 0; /* 패딩 제거하여 딱 맞게 */
  height: 100px;  display: flex; /* flexbox 사용 */
  /* 고정 높이나 컨텐츠 크기에 맞게 */
}

.logo-left {
  width: 33.33%; /* 1/3 지점 */
  height: 100px;
  background-color: #e0e0e0;
  padding: 20px; /* 내부 여백 추가 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-right {
  width: 66.67%; /* 나머지 2/3 */
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  align-items: center;
}

/* 메뉴 스타일 */
.menu-nav {
  width: 100%;
  position: relative;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0; /* 간격 제거 */
  border: 2px solid #333; /* 전체 테두리 */
  border-radius: 4px;
}

.menu-item {
  position: relative;
  flex: 1; /* 균등 분할 */
}

.menu-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
  display: block;
  transition: color 0.3s;
  border-right: 1px solid #333; /* 오른쪽 구분선만 */
  flex: 1; /* 균등 분할 */
}

.menu-link:hover {
  color:rgb(143, 145, 147);
}

.menu-item:last-child .menu-link {
  border-right: none; /* 마지막 항목의 오른쪽 테두리 제거 */
}

/* 통합된 서브메뉴 박스 스타일 */
.unified-submenu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1000;
  display: flex;
  gap: 30px;
  margin-top: 0;
  width: 100%;
}

.unified-submenu.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.submenu-section {
  flex: 1;
}

.submenu-section h4 {
  color: #333;
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 2px solidrgb(135, 137, 139);
  padding-bottom: 5px;
}

.submenu-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.submenu-section li {
  margin-bottom: 5px;
}

.submenu-section a {
  text-decoration: none;
  color: #333;
  padding: 8px 12px;
  display: block;
  transition: all 0.3s ease;
  border-radius: 4px;
  font-size: 13px;
  position: relative;
}

.submenu-section a:hover {
  background: rgba(0, 123, 255, 0.15);
  color:rgb(176, 179, 181);
  transform: translateX(3px);
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);
}

.submenu-section a::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg,rgb(186, 186, 186), transparent);
  transition: width 0.3s ease;
  border-radius: 4px 0 0 4px;
  z-index: -1;
}

.submenu-section a:hover::before {
  width: 100%;
}

.slide {
  background-color: #bbb;
  padding: 10px;
  height: 300px;
}

.banner {
  background-color: #999;
  padding: 0; /* 패딩 제거 */
  height: 200px;
  display: flex; /* flexbox 사용 */
}

.banner-left {
  width: 33.33%; /* 1/3 */
  background-color: #888;
  padding: 20px;
  border-right: 1px solid #777; /* 구분선 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-center {
  width: 33.33%; /* 1/3 */
  background-color: #777;
  padding: 20px;
  border-right: 1px solid #777; /* 구분선 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-right {
  width: 33.33%; /* 1/3 */
  background-color: #666;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  background-color: #666;
  padding: 0; /* 패딩 제거 */
  color: white;
  text-align: center;
  height: 100px;
  display: flex; /* flexbox 사용 */
}

.footer-left {
  width: 16.67%; /* 1/6 */
  background-color: #555;
  padding: 20px;
  border-right: 1px solid #777; /* 구분선 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-center {
  width: 66.67%; /* 4/6 */
  background-color: #444;
  padding: 20px;
  border-right: 1px solid #777; /* 구분선 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-right {
  width: 16.67%; /* 1/6 */
  background-color: #555;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
