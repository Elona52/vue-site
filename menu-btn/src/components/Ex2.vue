<template>
  <div class="container">
    <h2>조건부 렌더링 예제</h2>
    
    <div class="example">
      <h3>Boolean 조건</h3>
      <p v-if="typewritersInStock" class="status in-stock">✅ 재고 있음</p>
      <p v-else class="status out-of-stock">❌ 재고 없음</p>
      <button @click="typewritersInStock = !typewritersInStock" class="btn">
        재고 상태 토글
      </button>
    </div>

    <div class="example">
      <h3>숫자 조건</h3>
      <p v-if="typewriterCount" class="status in-stock">✅ 재고 있음 ({{ typewriterCount }}개)</p>
      <p v-else class="status out-of-stock">❌ 재고 없음</p>
      <div class="controls">
        <button @click="typewriterCount--" class="btn">-</button>
        <span class="count">{{ typewriterCount }}</span>
        <button @click="typewriterCount++" class="btn">+</button>
      </div>
    </div>

    <div class="example">
      <h3>다중 조건 (v-else-if)</h3>
      <p v-if="typewriterCount2 > 3" class="status in-stock">✅ 재고 충분함</p>
      <p v-else-if="typewriterCount2 > 0" class="status low-stock">⚠️ 재고 조금 남음</p>
      <p v-else-if="typewriterCount2 == 0" class="status out-of-stock">❌ 재고 없음</p>
      <p v-else class="status reserved">📋 선불(예약) 있음</p>
      <div class="controls">
        <button @click="typewriterCount2--" class="btn">-</button>
        <span class="count">{{ typewriterCount2 }}</span>
        <button @click="typewriterCount2++" class="btn">+</button>
      </div>
    </div>

    <div class="example">
      <h3>문자열 검색</h3>
      <input v-model="text" placeholder="텍스트를 입력하세요" class="input">
      <p v-if="text.includes('pizza')" class="status found">🍕 "pizza" 포함됨</p>
      <p v-else class="status not-found">❌ "pizza" 없음</p>
    </div>

    <div class="example">
      <h3>한국어 검색</h3>
      <input v-model="text2" placeholder="텍스트를 입력하세요" class="input">
      <div v-if="text2.includes('피자')" class="pizza-result">
        <p class="status found">🍕 피자를 찾았습니다!</p>
        <img src="../assets/img_pizza.svg" alt="피자" class="pizza-img">
      </div>
      <p v-else class="status not-found">❌ 피자 없음</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const typewritersInStock = ref(false)
const typewriterCount = ref(0)
const typewriterCount2 = ref(-5)
const text = ref("I like taco, pizza, Thai beef salad, pho soup and tagine")
const text2 = ref("I like taco, pizza, Thai beef salad, pho soup and tagine, 피자")
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  color: #333;
  text-align: center;
  margin-bottom: 30px;
}

.example {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

h3 {
  color: #555;
  margin-bottom: 15px;
}

.status {
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-weight: bold;
}

.in-stock {
  background: #d4edda;
  color: #155724;
}

.low-stock {
  background: #fff3cd;
  color: #856404;
}

.out-of-stock {
  background: #f8d7da;
  color: #721c24;
}

/* 다중 조건 */
.reserved {
  background: #e2e3e5;
  color: #383d41;
}

/* 문자열 검색 */
.found {
  background: #d1ecf1;
  color: #0c5460;
}

.not-found {
  background: #f8d7da;
  color: #721c24;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

.btn:hover {
  background: #0056b3;
}

.controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.count {
  font-size: 18px;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
}

/* 한국어 */
.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.pizza-result {
  text-align: center;
}

.pizza-img {
  width: 60px;
  height: 60px;
  margin-top: 10px;
}
</style>