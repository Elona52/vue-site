<template>
  <!-- Ex4 컴포넌트 - 리스트 렌더링 예제 -->
  <div class="ex4-container">

    <!-- 음식 메뉴 리스트 예제 섹션 -->
    <section class="example-section">
      <h3 class="section-title">🍽️ 음식 메뉴 리스트</h3>
      <div class="example-card">
        <!-- 순서가 있는 리스트 -->
        <div class="list-example">
          <div class="ordered-list">
            <div class="ordered-item" v-for="(food, index) in manyFoods" :key="food">
              <span class="item-number">{{ index + 1 }}</span>
              <span class="item-text">{{ food }}</span>
            </div>
          </div>
        </div>

        <!-- 인덱스와 함께 표시 -->
        <!-- <div class="list-example">
          <h4 class="example-subtitle">인덱스와 함께 표시</h4>
          <div class="indexed-list">
            <div class="indexed-item" v-for="(food, idx) in manyFoods" :key="food">
              <span class="index-badge">{{ idx }}</span>
              <span class="item-text">{{ food }}</span>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Assets 이미지 사용 예제 섹션 -->
    <section class="example-section">
      <h3 class="section-title">메뉴판</h3>
      <div class="example-card">
        <div class="image-grid">
          <div class="image-card" v-for="food in foods_assets" :key="food.name">
            <div class="image-container">
              <img :src="food.src" :alt="food.name" class="food-image">
            </div>
            <div class="image-info">
              <span class="food-name">{{ food.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Public 이미지 사용 예제 섹션 -->
    <!-- <section class="example-section">
      <h3 class="section-title">🌐 Public 이미지 사용</h3>
      <div class="example-card">
        <div class="image-grid">
          <div class="image-card" v-for="food in foods_public" :key="food.name">
            <div class="image-container">
              <img :src="food.src" :alt="food.name" class="food-image">
            </div>
            <div class="image-info">
              <span class="food-name">{{ food.name }}</span>
              <span class="image-source">Public 폴더</span>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
// SVG 이미지들을 assets/images 폴더에서 import (Vite가 자동으로 base64로 변환)
import img_burrito from '../assets/images/img_burrito.svg'
import img_cake from '../assets/images/img_cake.svg'
import img_fish from '../assets/images/img_fish.svg'
import img_pizza from '../assets/images/img_pizza.svg'
import img_rice from '../assets/images/img_rice.svg'
import img_salad from '../assets/images/img_salad.svg'
import img_soup from '../assets/images/img_soup.svg'

// 1. 기본 객체 배열 - message 속성을 가진 객체들
const items = ref([
  { message: 'Foo' },
  { message: 'Bar' },
  { message: 'Bar22' }
])

// 2. 간단한 문자열 배열 - 음식 이름들
const manyFood = ref(['브리또', '샐러드'])

// 3. 음식 메뉴 배열 - 더 많은 음식 이름들
const manyFoods = ref([
  '브리또',
  '샐러드',
  '케이크',
  '스프',
  '밥',
  '피자',
  '생선'
])

// 4. Assets 이미지 사용 - Vite가 import한 SVG 파일들 사용
// 이 방식은 빌드 시 최적화되어 base64로 변환됨
const foods_assets = ref([
  { name: '브리또', src: img_burrito },
  { name: '샐러드', src: img_salad },
  { name: '케이크', src: img_cake },
  { name: '스프', src: img_soup },
  { name: '생선', src: img_fish },
  { name: '피자', src: img_pizza },
  { name: '밥', src: img_rice }
])

// 5. Public 이미지 사용 - public 폴더의 이미지들을 절대 경로로 접근
// 이 방식은 빌드 시 최적화되지 않고 그대로 유지됨
const foods_public = ref([
  { name: '브리또', src: "/images/img_burrito.svg" },
  { name: '샐러드', src: "/images/img_salad.svg" },
  { name: '케이크', src: "/images/img_cake.svg" },
  { name: '스프', src: "/images/img_soup.svg" },
  { name: '생선', src: "/images/img_fish.svg" },
  { name: '피자', src: "/images/img_pizza.svg" },
  { name: '밥', src: "/images/img_rice.svg" }
])
</script>

<style scoped>
h2 {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

/* Ex4 컴포넌트 전체 컨테이너 */
.ex4-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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
  border-bottom: 3px solid #3498db;
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

/* 예제 서브타이틀 */
.example-subtitle {
  color: #34495e;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

/* 리스트 예제 컨테이너 */
.list-example {
  margin-bottom: 2rem;
}

/* 기본 리스트 컨테이너 */
.list-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* 리스트 아이템 스타일 */
.list-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  border-left: 4px solid #3498db;
  transition: all 0.3s ease;
}

.list-item:hover {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  transform: translateX(5px);
}

.item-icon {
  font-size: 1.2rem;
}

.item-text {
  color: #2c3e50;
  font-weight: 500;
}

/* 순서가 있는 리스트 */
.ordered-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ordered-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 8px;
  border-left: 4px solid #ff9800;
  transition: all 0.3s ease;
}

.ordered-item:hover {
  background: linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%);
  transform: translateX(5px);
}

.item-number {
  background: #ff9800;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

/* 인덱스와 함께 표시 */
.indexed-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.indexed-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 8px;
  border-left: 4px solid #9c27b0;
  transition: all 0.3s ease;
}

.indexed-item:hover {
  background: linear-gradient(135deg, #e1bee7 0%, #ce93d8 100%);
  transform: translateX(5px);
}

.index-badge {
  background: #9c27b0;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 0.9rem;
}

/* 이미지 그리드 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

/* 이미지 카드 */
.image-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #3498db;
}

/* 이미지 컨테이너 */
.image-container {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

/* 음식 이미지 */
.food-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* 이미지 정보 */
.image-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.food-name {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;
}

.image-source {
  font-size: 0.8rem;
  color: #7f8c8d;
  background: rgba(52, 152, 219, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .example-card {
    padding: 1.5rem;
  }
}
</style>