<!-- v-methods -->
<template>
  <div class="container">
    <!-- 텍스트 변경 섹션 -->
    <div class="section text-change-section">
      <div class="section-header">
        <h3 class="section">🔄텍스트 변경</h3>
        <p class="section-description">클릭하여 텍스트를 변경해보세요</p>
      </div>
      <div class="click-section">
        <div class="click-box" @click="changeTxt">
          <div class="click-content">
            <p class="click-text">{{ txt }}</p>
            <div class="click-indicator">
              <span class="indicator-dot"></span>
              <span class="click-hint">클릭!</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 마우스 위치 추적 섹션 -->
    <div class="section mouse-track-section">
      <div class="section-header">
        <h3 class="section">🖱️마우스 위치 추적</h3>
        <p class="section-description">마우스를 움직여 좌표를 확인해보세요</p>
      </div>
      <div class="mouse-section">
        <div class="mouse-area" @mousemove="mousePos">
          <div class="mouse-content">
            <div class="coordinate-display">
              <div class="coordinate-item">
                <span class="coordinate-label">X</span>
                <span class="coordinate-value">{{ xPos }}</span>
              </div>
              <div class="coordinate-item">
                <span class="coordinate-label">Y</span>
                <span class="coordinate-value">{{ yPos }}</span>
              </div>
            </div>
            <div class="mouse-cursor"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 카운터 섹션 -->
    <div class="section counter-section">
      <div class="section-header">
        <h3 class="section">🔢 카운터</h3>
        <p class="section-description">버튼을 클릭하여 숫자를 조정해보세요</p>
      </div>
      <div class="counter-content">
        <div class="counter-display">
          <div class="counter-circle">
            <span class="counter-value">{{ count }}</span>
          </div>
        </div>
        <div class="counter-buttons">
          <button @click="addCount(1)" class="btn btn-primary">
            <span class="btn-icon">+</span>
            <span class="btn-text">1</span>
          </button>
          <button @click="addCount(5)" class="btn btn-success">
            <span class="btn-icon">+</span>
            <span class="btn-text">5</span>
          </button>
          <button @click="addCount(-1)" class="btn btn-danger">
            <span class="btn-icon">−</span>
            <span class="btn-text">1</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 이미지 클릭 이벤트 섹션 -->
    <div class="section image-section">
      <div class="section-header">
        <h3 class="section">🖼️이미지 클릭 이벤트1</h3>
        <p class="section-description">이미지를 클릭하여 메시지를 확인해보세요</p>
      </div>
      <div class="image-content">
        <div class="image-container">
          <div class="image-wrapper">
            <img id="tiger" @click="myMethod($event, '안녕')" :src="img_tiger_square" alt="tiger"
              class="clickable-image" />
            <div class="image-overlay">
              <span class="overlay-text">클릭하세요!</span>
            </div>
          </div>
          <div class="message-container">
            <p class="image-message" :class="{ 'has-message': msgAndId }">
              {{ msgAndId || '이미지를 클릭하면 메시지가 나타납니다' }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section image-section">
      <div id="tigers">
        <img src="img_tiger_square.jpeg" width="733" height="733">
        <button v-on:click="addAnimal($event, 1)">+1</button>
        <button v-on:click="addAnimal($event, 5)">+5</button>
        <button v-on:click="addAnimal($event, -1)">-1</button>
      </div>
      <div id="moose">
        <img src="img_moose_square.jpeg" width="549" height="549">
        <button v-on:click="addAnimal($event, 1)">+1</button>
        <button v-on:click="addAnimal($event, 5)">+5</button>
        <button v-on:click="addAnimal($event, -1)">-1</button>
      </div>
      <div id="kangaroos">
        <img src="img_kangaroo_square.jpeg" width="582" height="582">
        <button v-on:click="addAnimal($event, 1)">+1</button>
        <button v-on:click="addAnimal($event, 5)">+5</button>
        <button v-on:click="addAnimal($event, -1)">-1</button>
      </div>
      <ul>
        <li>Tigers: {{ tigers }}</li>
        <li>Moose: {{ moose }}</li>
        <li>Kangaroos: {{ kangaroos }}</li>
      </ul>
    </div>

    <!-- 노트북 섹션 -->
    <div class="notebook-container">
      <h1>📒Notebook</h1>
      <div class="notebook-app">
        <textarea v-model="text" rows="8" cols="30" placeholder="Start writing.."></textarea>
        <div>
          <span class="notebook-text">{{ text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import img_tiger_square from '../assets/img_tiger_square.jpeg'
import img_notebook from '../assets/img_notebook.jpg'
import img_tiger_square from '../assets/img_tiger_square.jpeg'
import img_kangaroo_square from '../assets/img_kangaroo_square.jpeg'
import img_moose_square from '../assets/img_moose.jpeg'

// b1
const txt = ref('txt')
function changeTxt() {
  txt.value = '안녕'
}

// b2
const xPos = ref(0)
const yPos = ref(0)
const mousePos = (e) => {
  xPos.value = e.offsetX
  yPos.value = e.offsetY
}

// b3
const count = ref(0)
const addCount = (num) => {
  count.value += num
}

// b4
const msgAndId = ref('')
const myMethod = (e, msg) => {
  msgAndId.value = `${e.target.id}이 ${msg} 좋은 하루`
}

// b5
const text = ref('') // ✅ text 상태 정의
const writeText = (event) => {
  text.value = event.target.value
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section {
  background: #ffffff;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.section-header {
  text-align: center;
  margin-bottom: 30px;
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  background: #f7fafc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  border: 1px solid #e2e8f0;
}

.section-icon {
  font-size: 18px;
}

.section h3 {
  margin: 0 0 8px 0;
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 700;
}

.section-description {
  margin: 0;
  color: #718096;
  font-size: 0.95rem;
}

/* 텍스트 변경 섹션 */
.click-section {
  text-align: center;
}

.click-box {
  width: 200px;
  height: 100px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0 auto;
}

.click-box:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

.click-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  z-index: 1;
}

.click-text {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #374151;
}

.click-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
}

.indicator-dot {
  width: 6px;
  height: 6px;
  background: #6b7280;
  border-radius: 50%;
}

.click-hint {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

/* 마우스 위치 추적 섹션 */
.mouse-section {
  text-align: center;
}

.mouse-area {
  width: 300px;
  height: 120px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: crosshair;
  margin: 0 auto;
}

.mouse-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.coordinate-display {
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
}

.coordinate-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.coordinate-label {
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  background: #f3f4f6;
  padding: 4px 8px;
  border-radius: 4px;
}

.coordinate-value {
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  background: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  min-width: 50px;
  text-align: center;
  border: 1px solid #e5e7eb;
}

.mouse-cursor {
  width: 12px;
  height: 12px;
  background: #6b7280;
  border-radius: 50%;
}

/* 카운터 섹션 */
.counter-content {
  text-align: center;
}

.counter-display {
  margin-bottom: 30px;
}

.counter-circle {
  width: 80px;
  height: 80px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.counter-value {
  font-size: 24px;
  font-weight: 600;
  color: #374151;
}

.counter-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #ffffff;
}

.btn:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.btn-icon {
  font-size: 16px;
  font-weight: 600;
}

.btn-text {
  font-size: 13px;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.btn-success {
  background: #10b981;
  color: white;
  border-color: #10b981;
}

.btn-danger {
  background: #ef4444;
  color: white;
  border-color: #ef4444;
}

/* 이미지 섹션 */
.image-content {
  text-align: center;
}

.image-container {
  display: inline-block;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #e2e8f0;
}

.clickable-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.2s ease;
  display: block;
}

.image-wrapper:hover .clickable-image {
  opacity: 0.8;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-weight: 600;
  font-size: 16px;
}

.message-container {
  margin-top: 15px;
  padding: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-message {
  color: #374151;
  font-weight: 500;
  margin: 0;
  text-align: center;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.image-message.has-message {
  opacity: 1;
  font-size: 16px;
}

/* 노트북 섹션 */
.notebook-container {
  border: black dashed 1px;
  width: 300px;
  padding: 20px;
  margin: 0 auto;
}

.notebook-container h1 {
  margin: 0 0 20px 0;
  text-align: center;
  color: #2d3748;
}

.notebook-app {
  width: 100%;
  position: relative;
  margin-top: 10px;
}

.notebook-app>div {
  width: 100%;
  position: relative;
  margin-top: 10px;
  aspect-ratio: 1;
  background-image: url("../assets/img_notebook.jpg");
  background-size: 340%;
  background-position: -310px 0;
  overflow: hidden;
}

.notebook-text {
  width: 80%;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.2em;
  transform-origin: 0 0;
  rotate: 33deg;
  position: absolute;
  top: 60px;
  left: 80px;
  color: #000;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 16px;
  z-index: 10;
}

.notebook-app textarea {
  width: 100%;
  box-sizing: border-box;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .section {
    padding: 25px 20px;
  }

  .counter-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 200px;
  }

  .mouse-area {
    width: 100%;
    max-width: 350px;
  }

  .coordinate-display {
    gap: 20px;
  }

  .click-box {
    width: 200px;
    height: 100px;
  }

  .clickable-image {
    width: 150px;
    height: 150px;
  }
}
</style>