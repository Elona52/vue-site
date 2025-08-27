<template>
  <div class="container">
    
    <div class="example">
      <h3>이미지 바인딩</h3>
      <img v-bind:src="img_beach" alt="해변 이미지" class="demo-image">
      <p>코드: &lt;img v-bind:src="img_beach"&gt;</p>
    </div>

    <div class="example">
      <h3>글자 크기 바인딩</h3>
      <div v-bind:style="{ fontSize: size }" class="text-demo">글자 크기: {{ size }}</div>
      <div v-bind:style="{fontSize: size2 + 'px'}" class="text-demo">글자 크기: {{ size2 }}px</div>
      <div v-bind:style="{fontSize: size3 + 'px'}" class="text-demo">글자 크기: {{ size3 }}px</div>
    </div>

    <div class="example">
      <h3>배경색 바인딩</h3>
      <div v-bind:style="{ backgroundColor:`rgb(${bgVal}, 100, 100)`}" class="color-demo">
        배경색: rgb({{ bgVal }}, 100, 100) : 백그라운드 색상값 변수로 적용
      </div>
      <input type="range" v-model="bgVal" min="0" max="255" class="slider">
      <span>값: {{ bgVal }}</span>
      
      <div v-bind:style="{ backgroundColor: isImportant ? 'lightcoral' : 'lightgrey' }" class="color-demo">
        {{ isImportant ? '중요함' : '일반' }}
      </div>
      <button @click="isImportant = !isImportant" class="btn">
        {{ isImportant ? '중요함' : '일반' }} 토글
      </button>
    </div>

    <div class="example">
      <h3>클래스 바인딩</h3>
      <div v-bind:style="className" class="class-demo">클래스 바인드</div>
      <div v-bind:class="{myClass:true}" class="class-demo">클래스 true/false 바인드</div>
      <div :class="{myClass:isImportant}" class="class-demo">클래스 important 속성 여부</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import img_beach from "../assets/img_beach.jpg"

const size = ref("20px")
const size2 = ref(30)
const size3 = ref(40)
const bgVal = ref(100)
const isImportant = ref(false)
const className = ref("impClass")
</script>

<style scoped>
/* 전체 내용 */
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

/* 이미지 바인딩 */
.example {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.demo-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* 글자크기 바인딩 */
.text-demo {
  padding: 10px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

/* 배경색 바인딩 */
.color-demo {
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
}

.btn {
  background: #4ea1fa;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background: #4ea1fa;
}

/* 클래스 바인딩 */
.class-demo {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;
}

/* 클래스 바인딩 - 색상 */
.myClass {
  background-color: #ffeb3b !important;
  color: #333 !important;
  border: 2px dashed #ff9800 !important;
}


</style>