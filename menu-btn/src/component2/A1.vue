<template>
  <div class="page-container">
    <div class="nav-bar">
      <button @click="goBack" class="back-button">
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
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  // 이전 페이지로 이동 (레이아웃 폴더)
  router.push('/folder-ro')
}
</script>

<style scoped>
.page-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-bar {
  padding: 15px 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
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
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 700px;
}

.logo {
  background-color: #f5f5f5;
  padding: 0;
  height: 100px;
  display: flex;
  width: 100%;
  max-width: 1200px;
}

.logo-left {
  width: 33.33%;
  height: 100px;
  background-color: #e0e0e0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-right {
  width: 66.67%;
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 메뉴 스타일 */
.menu-nav {
  width: 100%;
  max-width: 800px;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0;
  border: 2px solid #333;
  border-radius: 4px;
}

.menu-item {
  position: relative;
  flex: 1;
}

.menu-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
  display: block;
  transition: color 0.3s;
  border-right: 1px solid #333;
  flex: 1;
  text-align: center;
}

.menu-link:hover {
  color:rgb(143, 145, 147);
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

.slide {
  background-color: #bbb;
  padding: 10px;
  height: 300px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.banner {
  background-color: #999;
  padding: 0;
  height: 200px;
  display: flex;
  width: 100%;
  max-width: 1200px;
}

.banner-left {
  width: 33.33%;
  background-color: #888;
  padding: 20px;
  border-right: 1px solid #777;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-center {
  width: 33.33%;
  background-color: #777;
  padding: 20px;
  border-right: 1px solid #777;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-right {
  width: 33.33%;
  background-color: #666;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  background-color: #666;
  padding: 0;
  color: white;
  text-align: center;
  height: 100px;
  display: flex;
  width: 100%;
  max-width: 1200px;
}

.footer-left {
  width: 16.67%;
  background-color: #555;
  padding: 20px;
  border-right: 1px solid #777;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-center {
  width: 66.67%;
  background-color: #444;
  padding: 20px;
  border-right: 1px solid #777;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-right {
  width: 16.67%;
  background-color: #555;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0 10px;
  }
  
  .logo, .slide, .banner, .footer {
    max-width: 100%;
  }
  
  .menu-list {
    flex-direction: column;
  }
  
  .menu-item {
    flex: none;
  }
  
  .menu-link {
    border-right: none;
    border-bottom: 1px solid #333;
  }
  
  .menu-item:last-child .menu-link {
    border-bottom: none;
  }
}
</style>