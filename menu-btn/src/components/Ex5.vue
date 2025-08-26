<template>
  <!-- Ex5 컴포넌트 - 이벤트 핸들링 예제 -->
  <div class="ex5-container">
    <!-- 카운터 예제 섹션 -->
    <section class="example-section">
      <h3 class="section-title">🔢 카운터</h3>
      <div class="example-card">
        <div class="counter-section">
          <!-- 카운터 값 표시 -->
          <div class="counter-display">
            <div class="counter-circle">
              <span class="counter-value">{{ cnt }}</span>
            </div>
          </div>
          <!-- 버튼 그룹 -->
          <div class="button-group">
            <button class="action-button decrease" @click="cnt--">
              <span class="button-icon">➖</span>
              <span class="button-text">감소</span>
            </button>
            <button class="action-button reset" @click="cnt = 0">
              <span class="button-icon">🔄</span>
              <span class="button-text">리셋</span>
            </button>
            <button class="action-button increase" @click="cnt++">
              <span class="button-icon">➕</span>
              <span class="button-text">증가</span>
            </button>
          </div>
        </div>
      </div>
    </section>
<!-- 
    전구 ON/OFF 예제 섹션 -->
    <section class="example-section">
      <h3 class="section-title">💡 ON/OFF 버튼</h3>
      <div class="example-card">
        <div class="bulb-section">
          <!-- 전구 상태 표시 -->
          <div class="bulb-container">
            <div class="bulb-wrapper" :class="{ 'bulb-on': lightOn }">
              <div class="bulb-icon">
                {{ lightOn ? '💡' : '🔌' }}
              </div>
              <div class="bulb-glow" v-if="lightOn"></div>
            </div>
            <!-- 전구 상태 표시기 -->
            <div class="bulb-status">
              <span class="status-indicator" :class="{ active: lightOn }">
                {{ lightOn ? 'ON' : 'OFF' }}
              </span>
            </div>
          </div>
          <!-- 토글 버튼 -->
          <button class="action-button toggle-button" @click="lightOn = !lightOn">
            <span class="button-icon">{{ lightOn ? '🔌' : '💡' }}</span>
            <span class="button-text">{{ lightOn ? '끄기' : '켜기' }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 입력 카운터 예제 섹션 -->
    <section class="example-section">
      <h3 class="section-title">⌨️ 텍스트 입력</h3>
      <div class="example-card">
        <div class="input-section">
          <div class="input-container">
            <label class="input-label">텍스트를 입력해보세요</label>
            <input 
              type="text" 
              @input="inpCount++"
              placeholder="여기에 텍스트를 입력하세요..."
              class="styled-input"
            >
            <!-- 입력 통계 -->
            <div class="input-stats">
              <div class="stat-item">
                <span class="stat-label">입력 횟수</span>
                <span class="stat-value">{{ inpCount }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">문자 수</span>
                <span class="stat-value">{{ $event?.target?.value?.length || 0 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 색상 변경 예제 섹션 -->
    <section class="example-section">
      <h3 class="section-title">🎨 색상변경</h3>
      <div class="example-card">
        <div class="color-section">
          <!-- 마우스 호버 이벤트로 색상 변경 -->
          <div class="color-display" 
            @mouseover="colorVal = Math.floor(Math.random() * 360)"
            :style="{backgroundColor: `hsl(${colorVal}, 70%, 70%)`}"
          >
            <!-- 현재 색상 정보 표시 -->
            <div class="color-info">
              <div class="color-circle" :style="{backgroundColor: `hsl(${colorVal}, 70%, 70%)`}"></div>
              <div class="color-details">
                <span class="color-label">색상값</span>
                <span class="color-value">{{ colorVal }}°</span>
              </div>
            </div>
            <!-- 사용자 안내 텍스트 -->
            <div class="hover-hint">
              <span class="hint-icon">👆</span>
              <span class="hint-text">마우스를 올려보세요!</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 음식 선택 예제 섹션 -->
    <section class="example-section">
      <h3 class="section-title">🍽️ 메뉴 선택</h3>
      <div class="example-card">
        <div class="food-selector">
          <!-- 음식 메뉴 목록 -->
          <div class="food-menu">
            <h4 class="menu-title">메뉴 선택</h4>
            <div class="menu-grid">
              <div 
                v-for="food in foods_assets" 
                :key="food.name"
                @click="imgUrl = food.src"
                class="menu-item"
                :class="{ 'selected': imgUrl === food.src }"
              >
                <div class="menu-icon">🍽️</div>
                <span class="menu-name">{{ food.name }}</span>
              </div>
            </div>
          </div>
          <!-- 선택된 음식 이미지 표시 -->
          <div class="selected-food">
            <h4 class="menu-title">선택된 메뉴</h4>
            <div class="selected-food-display">
              <div class="food-image-container">
                <img :src="imgUrl" :alt="'선택된 음식'" class="selected-food-image">
              </div>
              <div class="food-details">
                <span class="selected-food-name">{{ foods_assets.find(f => f.src === imgUrl)?.name || '메뉴를 선택하세요' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Vue 3 Composition API 사용
import {ref} from 'vue';

// 전구 이미지 import (GIF 파일)
import pic_bulboff from '../assets/pic_bulboff.gif'
import pic_bulbon from '../assets/pic_bulbon.gif'

// 반응형 상태 변수들
const cnt = ref(0);  // 카운터 값
const lightOn = ref(false);  // 전구 상태 (켜짐/꺼짐)
const inpCount = ref(0);  // 입력 횟수
const colorVal = ref(50);  // 색상값 (HSL)
const imgUrl = ref('/images/img_burrito.svg');  // 선택된 음식 이미지 URL

// 음식 데이터 배열
const foods_assets = ref([
    {name:'브리또', src:"/images/img_burrito.svg"},
    {name:'샐러드', src:"/images/img_salad.svg"},
    {name:'케이크', src:"/images/img_cake.svg"},
    {name:'스프', src:"/images/img_soup.svg"},
    {name:'생선', src:"/images/img_fish.svg"},
    {name:'피자', src:"/images/img_pizza.svg"},
    {name:'밥', src:"/images/img_rice.svg"}
])
</script>

<style scoped>
/* Ex5 컴포넌트 전체 컨테이너 */
.ex5-container {
  max-width: 100%;
}

/* 각 예제 섹션 스타일 */
.example-section {
  margin-bottom: 3rem;
}

/* 섹션 제목 스타일 */
.section-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #e74c3c;
  font-weight: 600;
}

/* 예제 카드 스타일 */
.example-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

/* 카운터 섹션 */
.counter-section {
  text-align: center;
}

/* 카운터 표시 스타일 */
.counter-display {
  margin-bottom: 2rem;
}

.counter-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 8px 25px rgba(231, 76, 60, 0.3);
  position: relative;
  overflow: hidden;
}

.counter-circle::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  animation: shine 2s infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.counter-value {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

/* 버튼 그룹 */
.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* 액션 버튼 스타일 */
.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  min-width: 120px;
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.action-button.decrease {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
}

.action-button.reset {
  background: linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%);
}

.action-button.increase {
  background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
}

.button-icon {
  font-size: 1.2rem;
}

.button-text {
  font-size: 0.9rem;
}

/* 전구 섹션 */
.bulb-section {
  text-align: center;
}

.bulb-container {
  margin-bottom: 2rem;
}

.bulb-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.bulb-icon {
  font-size: 4rem;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.bulb-on .bulb-icon {
  filter: drop-shadow(0 4px 20px rgba(255, 235, 59, 0.6));
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { filter: drop-shadow(0 4px 20px rgba(255, 235, 59, 0.6)); }
  to { filter: drop-shadow(0 4px 30px rgba(255, 235, 59, 0.8)); }
}

.bulb-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255, 235, 59, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

/* 전구 상태 표시 */
.bulb-status {
  margin-top: 1rem;
}

.status-indicator {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: bold;
  background: #95a5a6;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(149, 165, 166, 0.3);
}

.status-indicator.active {
  background: #27ae60;
  box-shadow: 0 2px 10px rgba(39, 174, 96, 0.3);
}

/* 토글 버튼 */
.toggle-button {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
}

.toggle-button:hover {
  box-shadow: 0 6px 20px rgba(243, 156, 18, 0.4);
}

/* 입력 섹션 */
.input-section {
  max-width: 500px;
  margin: 0 auto;
}

.input-container {
  text-align: center;
}

.input-label {
  display: block;
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* 스타일링된 입력 필드 */
.styled-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #bdc3c7;
  border-radius: 12px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
}

.styled-input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  background: white;
}

/* 입력 통계 */
.input-stats {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-label {
  color: #7f8c8d;
  font-weight: 500;
  font-size: 0.9rem;
}

.stat-value {
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.2rem;
  min-width: 60px;
  text-align: center;
}

/* 색상 섹션 */
.color-section {
  text-align: center;
}

/* 색상 변경 영역 스타일 */
.color-display {
  width: 100%;
  height: 200px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.color-display:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

/* 색상 정보 표시 */
.color-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 2;
  margin-bottom: 1rem;
}

.color-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.color-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.color-label {
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.9;
}

.color-value {
  font-size: 1.5rem;
  font-weight: bold;
}

/* 호버 안내 텍스트 */
.hover-hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  opacity: 0.9;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hint-icon {
  font-size: 1.2rem;
}

/* 음식 선택기 레이아웃 */
.food-selector {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.menu-title {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
}

/* 메뉴 그리드 */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.75rem;
}

/* 메뉴 아이템 */
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.menu-item:hover {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.2);
}

.menu-item.selected {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-color: #4caf50;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
}

.menu-icon {
  font-size: 1.5rem;
}

.menu-name {
  color: #2c3e50;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
}

/* 선택된 음식 표시 */
.selected-food-display {
  text-align: center;
}

.food-image-container {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1rem;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected-food-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.food-details {
  margin-top: 1rem;
}

.selected-food-name {
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .food-selector {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .button-group {
    flex-direction: column;
    align-items: center;
  }
  
  .action-button {
    width: 100%;
    max-width: 200px;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .counter-circle {
    width: 100px;
    height: 100px;
  }
  
  .counter-value {
    font-size: 2.5rem;
  }
  
  .color-display {
    height: 150px;
  }
  
  .color-value {
    font-size: 1.2rem;
  }
}
</style>