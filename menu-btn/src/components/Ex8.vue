<!-- v-event modifiers -->
<template>
    <div class="container">
        <!-- 양방향 바인딩 -->
        <div class="section">
            <div class="input-group">
                <input type="text" v-model="inpText" placeholder="텍스트를 입력하세요">
                <p class="output">{{ inpText }}</p>
            </div>
        </div>

        <!-- 체크박스 -->
        <div class="section">
            <h3>✅ 중요도 체크</h3>
            <div class="checkbox-group">
                <label class="checkbox-label">
                    <input type="checkbox" v-model="important">
                    <span>{{ important ? '중요함' : '보통' }}</span>
                </label>
            </div>
        </div>

        <!-- 쇼핑 목록 -->
        <div class="section">
            <h3>🛒 쇼핑 목록 관리</h3>
            
            <!-- 입력 폼 -->
            <form @submit.prevent="addItem" class="form">
                <div class="form-group">
                    <label>구매목록</label>
                    <input type="text" v-model="itemName" required placeholder="목록 이름을 입력하세요">
                </div>
                
                <div class="form-group">
                    <label>구매개수</label>
                    <input type="number" v-model="itemNumber" placeholder="목록 개수를 입력하세요">
                </div>
                
                <div class="form-group">
                    <label class="checkbox-label">
                        <input type="checkbox" v-model="itemImportant">
                        <span>중요한 항목</span>
                    </label>
                </div>
                
                <button type="submit" class="submit-btn">목록 추가하기</button>
            </form>

            <!-- 목록 출력 -->
            <div class="list-container">
                <h4>📋 구매 목록</h4>
                <div class="list">
                    <div v-for="(list, index) in shoppingList" :key="index" class="list-item">
                        <span class="item-name">{{ list.name }}</span>
                        <span class="item-quantity">수량: {{ list.number }}</span>
                        <span class="item-importance" :class="{ important: list.important }">
                            {{ list.important ? '⭐ 중요' : '보통' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 양방향 바인딩
const inpText = ref('Initial text')
const important = ref(false)
// 쇼핑 목록 ----------------------------------
const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)

const addItem = () => {
    let item = {
        name: itemName.value,
        number: itemNumber.value,
        important: itemImportant.value
    }
    shoppingList.value.push(item)

    // 목록 init
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false
}

const shoppingList = ref(
    [
        { name: 'Tomatoes', number: 5, important: false },
        { name: 'banana', number: 2, important: true }
    ]
)
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.section {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}

.section h3 {
    margin: 0 0 15px 0;
    color: #495057;
    font-size: 1.2rem;
}

.input-group {
    text-align: center;
}

.input-group input {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
}

.output {
    background: #e9ecef;
    padding: 10px;
    border-radius: 4px;
    font-weight: 500;
    display: inline-block;
}

.checkbox-group {
    text-align: center;
}

.checkbox-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    font-size: 16px;
}

.checkbox-label input[type="checkbox"] {
    width: 18px;
    height: 18px;
}

.form {
    background: white;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 15px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #495057;
}

.form-group input[type="text"],
.form-group input[type="number"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;
}

.submit-btn {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.submit-btn:hover {
    background: #0056b3;
}

.list-container h4 {
    margin: 0 0 10px 0;
    color: #495057;
}

.list {
    background: white;
    border-radius: 6px;
    padding: 10px;
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #e9ecef;
}

.list-item:last-child {
    border-bottom: none;
}

.item-name {
    font-weight: 600;
    flex: 1;
}

.item-quantity {
    background: #e9ecef;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    margin: 0 10px;
}

.item-importance {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    background: #e9ecef;
}

.item-importance.important {
    background: #fff3cd;
    color: #856404;
}
</style>