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
        <img :src="logo" alt="로고" class="logo-image">
      </div>

      <div class="logo-right">
        <nav class="menu-nav">
          <ul class="menu-list">
            <li class="menu-item">
              <a href="#" class="menu-link">메뉴1</a>
              <ul class="submenu">
                <li><a href="#">서브메뉴1-1</a></li>
                <li><a href="#">서브메뉴1-2</a></li>
                <li><a href="#">서브메뉴1-3</a></li>
              </ul>
            </li>
            
            <li class="menu-item">
              <a href="#" class="menu-link">메뉴2</a>
              <ul class="submenu">
                <li><a href="#">서브메뉴2-1</a></li>
                <li><a href="#">서브메뉴2-2</a></li>
              </ul>
            </li>

            <li class="menu-item">
              <a href="#" class="menu-link">메뉴3</a>
              <ul class="submenu">
                <li><a href="#">서브메뉴3-1</a></li>
                <li><a href="#">서브메뉴3-2</a></li>
                <li><a href="#">서브메뉴3-3</a></li>
              </ul>
            </li>
            
            <li class="menu-item">
              <a href="#" class="menu-link">메뉴4</a>
              <ul class="submenu">
                <li><a href="#">서브메뉴4-1</a></li>
                <li><a href="#">서브메뉴4-2</a></li>
                <li><a href="#">서브메뉴4-3</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="slide">
      <div class="slide-container">
        <div class="slide-images">
          <div class="slide-item" v-for="(image, index) in slideImages" :key="index" :class="{ active: currentSlide === index }">
            <img :src="image" :alt="`슬라이드 ${index + 1}`">
          </div>
        </div>
        <div class="slide-dots">
          <span 
            v-for="(image, index) in slideImages" 
            :key="index"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>

    <div class="banner">
      <div class="banner-left">
        <div class="notice-section">
          <h3 class="notice-title">공지사항</h3>
          <div class="notice-content">
            <div class="notice-item" @click="openPopup(0)">
              <span class="notice-text">2025 봄신상 출시 안내</span>
              <span class="notice-date">2025.01.15</span>
            </div>
            <div class="notice-item" @click="openPopup(1)">
              <span class="notice-text">무료배송 이벤트 진행중</span>
              <span class="notice-date">2025.01.10</span>
            </div>
            <div class="notice-item" @click="openPopup(2)">
              <span class="notice-text">회원가입 시 10% 할인쿠폰 지급</span>
              <span class="notice-date">2025.01.05</span>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-center">
        <div class="banner-content">
          <h3 class="banner-title">봄 신상 특가 세일</h3>
          <div class="banner-text">
            <p>신상품 20% 할인</p>
            <p>2개 이상 구매 시</p>
            <p>추가 10% 할인</p>
          </div>
          <button class="banner-button">자세히 보기</button>
        </div>
      </div>
      <div class="banner-right">
        <div class="quick-links">
          <h4 class="quick-title">바로가기</h4>
          <div class="quick-list">
            <a href="#" class="quick-item">신상품</a>
            <a href="#" class="quick-item">베스트</a>
            <a href="#" class="quick-item">세일</a>
            <a href="#" class="quick-item">이벤트</a>
            <a href="#" class="quick-item">매장안내</a>
            <a href="#" class="quick-item">고객센터</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 레이어 팝업창 -->
    <div class="popup-overlay" v-if="isPopupOpen" @click="closePopup">
      <div class="popup-content" @click.stop>
        <div class="popup-header">
          <h3>{{ popupData.title }}</h3>
          <button class="close-button" @click="closePopup">×</button>
        </div>
        <div class="popup-body">
          <p>{{ popupData.content }}</p>
        </div>
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
import logo from '../assets/logo.png'

const router = useRouter()
const currentSlide = ref(0)
const slideInterval = ref(null)
const isPopupOpen = ref(false)
const popupData = ref({ title: '', content: '' })

const slideImages = [
  main1,
  main2,
  main3
]

const noticeData = [
  {
    title: '2025 봄신상 출시 안내',
    content: '2025년 봄신상이 출시되었습니다!\n\n새로운 컬렉션:\n- 트렌디한 봄 코트\n- 가벼운 니트웨어\n- 데일리 원피스\n- 캐주얼 팬츠\n\n특가 할인:\n- 신상품 20% 할인 (1월 15일 ~ 1월 31일)\n- 2개 이상 구매 시 추가 10% 할인\n\n사이즈 및 컬러는 매장에서 확인 가능하며, 온라인 주문도 가능합니다.\n\n문의: 1588-1234'
  },
  {
    title: '무료배송 이벤트 진행중',
    content: '무료배송 이벤트가 진행중입니다!\n\n이벤트 기간:\n- 2025년 1월 10일 ~ 1월 31일\n\n무료배송 조건:\n- 3만원 이상 구매 시 무료배송\n- 일반 배송비: 3,000원\n- 제주도 추가 배송비: 2,000원\n\n특별 혜택:\n- 첫 구매 고객: 2만원 이상 구매 시 무료배송\n- VIP 회원: 1만원 이상 구매 시 무료배송\n\n배송 안내:\n- 주문 후 1-2일 내 배송\n- 퇴근 후 배송 서비스 제공\n\n자세한 내용은 고객센터로 문의해주세요.'
  },
  {
    title: '회원가입 시 10% 할인쿠폰 지급',
    content: '신규 회원가입 시 10% 할인쿠폰을 지급해드립니다!\n\n쿠폰 혜택:\n- 10% 할인쿠폰 (최대 5만원 할인)\n- 사용 기간: 발급일로부터 30일\n- 최소 주문 금액: 1만원\n\n회원가입 방법:\n- 홈페이지 회원가입\n- 모바일 앱 회원가입\n- SNS 간편가입 (카카오, 네이버, 구글)\n\n추가 혜택:\n- 생일 축하 쿠폰\n- 적립금 적립 (구매 금액의 1%)\n- VIP 등급 혜택\n- 신상품 알림 서비스\n\n지금 바로 회원가입하고 특별한 혜택을 받아보세요!'
  }
]

const goHome = () => {
  router.push('/')
}

const goToSlide = (index) => {
  currentSlide.value = index
  // 슬라이드 변경 시 타이머 재시작
  stopSlideShow()
  startSlideShow()
}

const openPopup = (index) => {
  popupData.value = noticeData[index]
  isPopupOpen.value = true
}

const closePopup = () => {
  isPopupOpen.value = false
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slideImages.length
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
  width: 1400px;
  background: #f8f9fa;
  min-height: 100vh;
}

.nav-bar {
  width: 1400px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
  width: 1400px;
  display: flex;
  flex-direction: column;
  min-height: 700px;
}

.logo {
  background: rgba(255, 255, 255, 0.9);
  padding: 0;
  height: 100px;
  display: flex;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  border-radius: 0 0 15px 15px;
}

.logo-left {
  width: 33.33%;
  height: 100px;
  background: #ffffff;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 0 15px;
  border: 1px solid #e9ecef;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-right {
  width: 66.67%;
  background: rgba(255, 255, 255, 0.8);
  padding: 15px;
  display: flex;
  align-items: center;
  border-radius: 0 0 15px 0;
}

/* 메뉴 스타일 */
.menu-nav {
  width: 100%;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  position: relative;
  z-index: 999;
}

.menu-item {
  position: relative;
  flex: 1;
}

.menu-link {
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  padding: 15px 20px;
  display: block;
  transition: all 0.2s ease;
  border-right: 1px solid #e9ecef;
  flex: 1;
  position: relative;
  overflow: hidden;
}

.menu-link:hover {
  color: #212529;
  background: #f8f9fa;
  transform: none;
  box-shadow: none;
}

.menu-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.menu-link:hover::before {
  left: 100%;
}

.menu-item:last-child .menu-link {
  border-right: none;
}

/* 서브메뉴 스타일 */
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-5px);
  transition: all 0.2s ease;
  z-index: 1000;
}

.menu-item:hover .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.submenu li {
  border-bottom: 1px solid #eee;
}

.submenu li:last-child {
  border-bottom: none;
}

.submenu a {
  text-decoration: none;
  color: #333;
  padding: 15px 20px;
  display: block;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 5px;
}

.submenu a:hover {
  background: #f8f9fa;
  color: #212529;
  transform: none;
  box-shadow: none;
}

/* 슬라이드 스타일 */
.slide {
  background: #ffffff;
  padding: 0px;
  height: 700px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin: 10px 0;
}

.slide-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-images {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1;
}

.slide-item.active {
  opacity: 1;
  z-index: 2;
}

.slide-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background: #f8f9fa;
  border-radius: 0px;
}

.slide-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.slide-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #dee2e6;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #ffffff;
}

.slide-dots span.active {
  background-color: #6c757d;
  transform: scale(1.1);
  border-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.slide-dots span:hover {
  background-color: #adb5bd;
  transform: scale(1.05);
}

/* 팝업 스타일 */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;
  border-radius: 12px 12px 0 0;
}

.popup-header h3 {
  margin: 0;
  color: #333;
  font-size: 18px;
  font-weight: bold;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-button:hover {
  background-color: #e9ecef;
  color: #333;
}

.popup-body {
  padding: 25px;
}

.popup-body p {
  margin: 0;
  line-height: 1.6;
  color: #333;
  white-space: pre-line;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.banner {
  background: #ffffff;
  padding: 15px;
  height: 400px;
  display: flex;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin: 30px 0 10px 0;
}

.banner-left {
  width: 33.33%;
  background: #ffffff;
  padding: 25px;
  border-right: 1px solid #e9ecef;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 8px 0 0 8px;
  border: 1px solid #e9ecef;
}

.notice-section {
  width: 100%;
}

.notice-title {
  color: #212529;
  margin: 0 0 15px 0;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid #212529;
  padding-bottom: 8px;
}

.notice-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.notice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: #f8f9fa;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
}

.notice-item:hover {
  background-color: #e9ecef;
  transform: translateX(5px);
}

.notice-text {
  color: #212529;
  font-size: 14px;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.notice-date {
  color: #6c757d;
  font-size: 12px;
  margin-left: 10px;
}

.banner-center {
  width: 33.33%;
  background: #ffffff;
  padding: 25px;
  border-right: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
}

.banner-content {
  text-align: center;
  color: #212529;
}

.banner-title {
  margin: 0 0 15px 0;
  font-size: 20px;
  font-weight: bold;
}

.banner-text {
  margin-bottom: 20px;
}

.banner-text p {
  margin: 5px 0;
  font-size: 16px;
  font-weight: 500;
}

.banner-button {
  background: #6c757d;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.banner-button:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.banner-right {
  width: 33.33%;
  background: #ffffff;
  padding: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 0 8px 8px 0;
  border: 1px solid #e9ecef;
}

.quick-links {
  width: 100%;
}

.quick-title {
  color: #212529;
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid #212529;
  padding-bottom: 8px;
}

.quick-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quick-item {
  color: #212529;
  text-decoration: none;
  padding: 8px 12px;
  background-color: #f8f9fa;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 14px;
  display: block;
  border: 1px solid #e9ecef;
}

.quick-item:hover {
  background-color: #e9ecef;
  transform: translateX(5px);
  color: #212529;
}

.footer {
  background: #ffffff;
  padding: 15px;
  color: #212529;
  text-align: center;
  height: 100px;
  display: flex;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin: 30px 0 10px 0;
}

.footer-left {
  width: 16.67%;
  background: #f8f9fa;
  padding: 20px;
  border-right: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;
}

.footer-center {
  width: 66.67%;
  background: #f8f9fa;
  padding: 20px;
  border-right: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-right {
  width: 16.67%;
  background: #f8f9fa;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 8px 0;
}
</style>