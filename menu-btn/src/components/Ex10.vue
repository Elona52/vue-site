<!-- v-watchers -->
<template>
    <div class="watcher-container">
        <div class="watcher-card">
            <p class="card-description">
                슬라이더 값을 감시하여 특정 범위에 들어가면 자동으로 조정됩니다.
            </p>
            
            <div class="slider-section">
                <div class="slider-container">
                    <label class="slider-label">현재 값: <span class="value-display">{{ rangeVal }}</span></label>
                    <input 
                        v-model="rangeVal" 
                        type="range" 
                        min="0" 
                        max="100" 
                        step="1"
                        class="modern-slider"
                    >
                    <div class="slider-track">
                        <div class="slider-fill" :style="{ width: rangeVal + '%' }"></div>
                    </div>
                    <div class="range-labels">
                        <span>0</span>
                        <span>20</span>
                        <span>40</span>
                        <span>60</span>
                        <span>80</span>
                        <span>100</span>
                    </div>
                </div>
            </div>
            
            <div class="info-section">
                <h4>🎯 감시 규칙</h4>
                <div class="rules-container">
                    <div class="rule-item">
                        <span class="rule-range">20-40 범위</span>
                        <span class="rule-action">→ 자동으로 20으로 조정</span>
                    </div>
                    <div class="rule-item">
                        <span class="rule-range">40-60 범위</span>
                        <span class="rule-action">→ 자동으로 60으로 조정</span>
                    </div>
                </div>
                
                <div class="status-section">
                    <div class="status-indicator" :class="getStatusClass()">
                        <span class="status-icon">{{ getStatusIcon() }}</span>
                        <span class="status-text">{{ getStatusText() }}</span>
                    </div>
                </div>
                
                <p class="code-info">
                    <code>watch()</code> 함수를 사용하여 반응형 데이터의 변화를 감시하고 
                    특정 조건에 따라 자동으로 값을 조정합니다.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const rangeVal = ref(70)

// watch(감시할 변수, (구현부))
watch(rangeVal, (val) => {
    if (val > 20 && val < 40) {
        rangeVal.value = 20
    } else if (val > 40 && val < 60) {
        rangeVal.value = 60
    }
})

// 상태 표시를 위한 메서드들
const getStatusClass = () => {
    const val = rangeVal.value
    if (val > 20 && val < 40) return 'adjusting'
    if (val > 40 && val < 60) return 'adjusting'
    if (val <= 20) return 'safe-low'
    if (val >= 60) return 'safe-high'
    return 'normal'
}

const getStatusIcon = () => {
    const val = rangeVal.value
    if (val > 20 && val < 40) return '⚠️'
    if (val > 40 && val < 60) return '⚠️'
    if (val <= 20) return '✅'
    if (val >= 60) return '✅'
    return '📊'
}

const getStatusText = () => {
    const val = rangeVal.value
    if (val > 20 && val < 40) return '조정 중...'
    if (val > 40 && val < 60) return '조정 중...'
    if (val <= 20) return '안전 범위 (낮음)'
    if (val >= 60) return '안전 범위 (높음)'
    return '정상 범위'
}
</script>

<style scoped>
.watcher-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.watcher-card {
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    color: #333;
    text-align: center;
    border: 1px solid #e2e8f0;
}

.card-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: 600;
}

.card-description {
    font-size: 1.1rem;
    margin-bottom: 30px;
    opacity: 0.7;
    line-height: 1.6;
    color: #666;
}

.slider-section {
    margin-bottom: 30px;
}

.slider-container {
    background: #f8fafc;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #e2e8f0;
}

.slider-label {
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
}

.value-display {
    background: #f3f4f6;
    padding: 6px 12px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1.1rem;
    color: #374151;
    border: 1px solid #e5e7eb;
}

.modern-slider {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    outline: none;
    -webkit-appearance: none;
    margin-bottom: 10px;
}

.modern-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #6b7280;
    cursor: pointer;
    border: 2px solid #ffffff;
    transition: all 0.2s ease;
}

.modern-slider::-webkit-slider-thumb:hover {
    background: #4b5563;
}

.modern-slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #6b7280;
    cursor: pointer;
    border: 2px solid #ffffff;
}

.slider-track {
    position: relative;
    height: 8px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-bottom: 15px;
    overflow: hidden;
}

.slider-fill {
    height: 100%;
    background: linear-gradient(90deg, #4CAF50, #45a049);
    border-radius: 4px;
    transition: width 0.3s ease;
}

.range-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0.6;
    color: #666;
}

.info-section {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 25px;
    text-align: left;
}

.info-section h4 {
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
}

.rules-container {
    margin-bottom: 25px;
}

.rule-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.rule-item:last-child {
    border-bottom: none;
}

.rule-range {
    background: #fef3c7;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 0.85rem;
    color: #92400e;
    border: 1px solid #fde68a;
}

.rule-action {
    font-size: 0.9rem;
    opacity: 0.7;
    color: #666;
}

.status-section {
    margin-bottom: 25px;
    text-align: center;
}

.status-indicator {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.2s ease;
}

.status-indicator.safe-low {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
}

.status-indicator.safe-high {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
}

.status-indicator.adjusting {
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #fde68a;
}

.status-indicator.normal {
    background: #dbeafe;
    color: #1e40af;
    border: 1px solid #bfdbfe;
}

.status-icon {
    font-size: 1.1rem;
}

.status-text {
    font-weight: 600;
}

.code-info {
    background: #f8fafc;
    padding: 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
    color: #666;
    border: 1px solid #e2e8f0;
}

.code-info code {
    background: #f3f4f6;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-weight: 600;
    color: #374151;
    border: 1px solid #e5e7eb;
}

@media (max-width: 768px) {
    .watcher-container {
        padding: 15px;
    }
    
    .watcher-card {
        padding: 25px;
    }
    
    .card-title {
        font-size: 1.5rem;
    }
    
    .rule-item {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
    
    .slider-container {
        padding: 20px;
    }
}
</style>