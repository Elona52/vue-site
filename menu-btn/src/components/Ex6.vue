<!-- v-on -->
<template>
    <div class="container">
        <!-- 입력 이벤트 섹션 -->
        <div class="section">
            <h3>📝 입력 이벤트 카운터</h3>
            <div class="input-section">
                <input 
                    class="input-field" 
                    type="text" 
                    @input="inpCount++" 
                    placeholder="텍스트를 입력해보세요..."
                >
                <div class="counter-display">
                    <span class="counter-label">입력 이벤트 발생 횟수:</span>
                    <span class="counter-value">{{ inpCount }}</span>
                </div>
            </div>
        </div>

        <!-- 마우스오버 이벤트 섹션 -->
        <div class="section">
            <h3>🎨 마우스오버 색상 변경</h3>
            <div class="hover-section">
                <div 
                    class="color-box" 
                    @mouseover="colorVal = Math.floor(Math.random()*360)" 
                    :style="{backgroundColor: 'hsl('+colorVal+',60%,60%)'}"
                >
                    <span class="hover-text">마우스를 올려보세요!</span>
                    <span class="color-info">HSL: {{ colorVal }}°, 60%, 60%</span>
                </div>
            </div>
        </div>

        <!-- 이미지 선택 섹션 -->
        <div class="section">
            <h3>🍽️ 음식 이미지 선택</h3>
            <div class="image-section">
                <div class="image-display">
                    <img :src="imgUrl" alt="selected food" class="selected-image" />
                    <p class="image-label">선택된 음식</p>
                </div>
                
                <div class="food-list">
                    <h4>음식 목록 (클릭하여 선택)</h4>
                    <div class="food-grid">
                        <div 
                            v-for="food in manyFoods" 
                            :key="food.name"
                            class="food-item"
                            @click="imgUrl = food.url"
                            :class="{ 'selected': imgUrl === food.url }"
                        >
                            <img :src="food.url" :alt="food.name" class="food-thumbnail" />
                            <span class="food-name">{{ food.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// b1
import {ref} from 'vue';
const inpCount = ref(0)
// b2
const colorVal = ref(50)
// b3
import img_burrito from '../assets/img_burrito.svg'
import img_cake from '../assets/img_cake.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'
import img_salad from '../assets/img_salad.svg'
import img_soup from '../assets/img_soup.svg'

const imgUrl = ref(img_pizza)

const manyFoods = [
  { name: 'Burrito', url: img_burrito },
  { name: 'Salad', url: img_salad },
  { name: 'Cake', url: img_cake },
  { name: 'Soup', url: img_soup },
  { name: 'Fish', url: img_fish },
  { name: 'Pizza', url: img_pizza },
  { name: 'Rice', url: img_rice }
]
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section h3 {
    margin: 0 0 20px 0;
    color: #495057;
    font-size: 1.3rem;
    text-align: center;
}

/* 입력 이벤트 섹션 */
.input-section {
    text-align: center;
}

.input-field {
    width: 100%;
    max-width: 400px;
    padding: 12px 16px;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 16px;
    margin-bottom: 15px;
    transition: border-color 0.3s ease;
}

.input-field:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.counter-display {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.counter-label {
    font-weight: 500;
    color: #6c757d;
}

.counter-value {
    background: #007bff;
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 18px;
    min-width: 40px;
    text-align: center;
}

/* 마우스오버 섹션 */
.hover-section {
    text-align: center;
}

.color-box {
    width: 200px;
    height: 120px;
    margin: 0 auto;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.color-box:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.hover-text {
    font-size: 16px;
    margin-bottom: 8px;
}

.color-info {
    font-size: 12px;
    opacity: 0.9;
    background: rgba(0, 0, 0, 0.2);
    padding: 4px 8px;
    border-radius: 12px;
}

/* 이미지 선택 섹션 */
.image-section {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 25px;
    align-items: start;
}

.image-display {
    text-align: center;
}

.selected-image {
    width: 150px;
    height: 150px;
    object-fit: contain;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    padding: 10px;
    background: #f8f9fa;
    margin-bottom: 10px;
}

.image-label {
    font-weight: 600;
    color: #495057;
    margin: 0;
}

.food-list h4 {
    margin: 0 0 15px 0;
    color: #495057;
    font-size: 1.1rem;
}

.food-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 12px;
}

.food-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: white;
}

.food-item:hover {
    border-color: #007bff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.food-item.selected {
    border-color: #28a745;
    background: #f8fff9;
    box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
}

.food-thumbnail {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 8px;
}

.food-name {
    font-size: 12px;
    font-weight: 600;
    color: #495057;
    text-align: center;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
    .image-section {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .food-grid {
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    }
}
</style>