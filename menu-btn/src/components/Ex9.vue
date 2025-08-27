<!-- v-computed properties -->
<template>
    <div class="container">
        <div class="card">
            <p class="description">
                체크박스의 상태에 따라 동적으로 텍스트가 변경됩니다.
            </p>
            
            <div class="checkbox-section">
                <label class="checkbox-label">
                    <input type="checkbox" v-model="chbxVal">
                    <span class="checkbox-text">중요한 항목인가요?</span>
                </label>
            </div>
            
            <div class="result-section">
                <div class="result-card" :class="{ 'important': chbxVal }">
                    <span class="result-icon">{{ chbxVal ? '⭐' : '📋' }}</span>
                    <span class="result-text">{{ isImportant }}</span>
                </div>
            </div>
            
            <div class="info-section">
                <h4>💡 설명</h4>
                <ul class="info-list">
                    <li>체크박스가 <strong>체크되지 않음</strong> → "보통"</li>
                    <li>체크박스가 <strong>체크됨</strong> → "중요함"</li>
                </ul>
                <p class="code-info">
                    <code>computed()</code> 함수를 사용하여 반응형 데이터의 변화에 따라 
                    자동으로 계산된 값을 반환합니다.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const chbxVal = ref(false)
const isImportant = computed(
    () => {
        if (chbxVal.value) {
            return "중요함"
        } else {
            return "보통"
        }
    }
)
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card {
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card h3 {
    margin: 0 0 10px 0;
    color: #495057;
    font-size: 1.5rem;
    text-align: center;
}

.description {
    text-align: center;
    color: #6c757d;
    margin-bottom: 25px;
    line-height: 1.5;
}

.checkbox-section {
    text-align: center;
    margin-bottom: 25px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    font-size: 16px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    transition: background-color 0.2s;
}

.checkbox-label:hover {
    background: #e9ecef;
}

.checkbox-label input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.checkbox-text {
    font-weight: 500;
}

.result-section {
    text-align: center;
    margin-bottom: 25px;
}

.result-card {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 15px 25px;
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.result-card.important {
    background: #fff3cd;
    border-color: #ffc107;
    color: #856404;
    transform: scale(1.05);
}

.result-icon {
    font-size: 20px;
}

.result-text {
    font-weight: 700;
}

.info-section {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
}

.info-section h4 {
    margin: 0 0 15px 0;
    color: #495057;
    font-size: 1.1rem;
}

.info-list {
    list-style: none;
    padding: 0;
    margin-bottom: 15px;
}

.info-list li {
    padding: 8px 0;
    border-bottom: 1px solid #e9ecef;
    color: #495057;
}

.info-list li:last-child {
    border-bottom: none;
}

.info-list strong {
    color: #007bff;
    font-weight: 600;
}

.code-info {
    background: #e9ecef;
    padding: 12px;
    border-radius: 6px;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    color: #495057;
}

.code-info code {
    background: #495057;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-weight: 600;
}
</style>