<template>
  <div class="blog-post">
    <div class="post-header">
      <h3>Vue.js v-show vs v-if 디렉티브</h3>
      <p>v-show와 v-if의 차이점을 이해하고 언제 어떤 것을 사용해야 하는지 학습합니다.</p>
    </div>

    <div class="post-content">
      <section class="example-section">
        <h4>🔍 v-show와 v-if의 기본 동작</h4>
        <div class="demo-card">
          <div class="control-panel">
            <button @click="showDiv = !showDiv" class="toggle-btn">
              {{ showDiv ? '숨기기' : '보이기' }}
            </button>
            <div class="status-indicator">
              현재 상태: <span :class="['status', showDiv ? 'visible' : 'hidden']">
                {{ showDiv ? '보임' : '숨김' }}
              </span>
            </div>
          </div>

          <div class="comparison-grid">
            <div class="comparison-item">
              <h5>v-show 디렉티브</h5>
              <div v-show="showDiv" class="demo-element show-demo">
                이 엘리먼트는 v-show로 제어됩니다
              </div>
              <div class="code-example">
                <code>&lt;div v-show="showDiv"&gt;...&lt;/div&gt;</code>
              </div>
              <div class="explanation">
                <p><strong>특징:</strong></p>
                <ul>
                  <li>CSS display 속성만 변경</li>
                  <li>DOM에 요소가 항상 존재</li>
                  <li>자주 토글되는 요소에 적합</li>
                  <li>초기 렌더링 비용이 낮음</li>
                </ul>
              </div>
            </div>

            <div class="comparison-item">
              <h5>v-if 디렉티브</h5>
              <div v-if="showDiv" class="demo-element if-demo">
                이 엘리먼트는 v-if로 제어됩니다
              </div>
              <div class="code-example">
                <code>&lt;div v-if="showDiv"&gt;...&lt;/div&gt;</code>
              </div>
              <div class="explanation">
                <p><strong>특징:</strong></p>
                <ul>
                  <li>실제로 DOM에서 요소 생성/제거</li>
                  <li>조건이 false면 완전히 제거됨</li>
                  <li>조건이 자주 변경되지 않는 경우에 적합</li>
                  <li>초기 렌더링 비용이 높음</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="example-section">
        <h4>🔧 개발자 도구로 확인하기</h4>
        <div class="demo-card">
          <div class="instruction-box">
            <h5>📋 확인 방법</h5>
            <ol>
              <li>위의 토글 버튼을 클릭하여 요소를 숨겨보세요</li>
              <li>브라우저에서 F12를 눌러 개발자 도구를 열세요</li>
              <li>Elements 탭에서 두 요소를 찾아보세요</li>
              <li>v-show 요소는 DOM에 남아있지만 CSS로 숨겨져 있습니다</li>
              <li>v-if 요소는 조건이 false일 때 DOM에서 완전히 제거됩니다</li>
            </ol>
          </div>
          
          <div class="technical-details">
            <h5>🔬 기술적 차이점</h5>
            <div class="detail-grid">
              <div class="detail-item">
                <h6>v-show</h6>
                <p>CSS <code>display: none</code>으로 숨김</p>
                <p>DOM 구조는 유지됨</p>
                <p>메모리 사용량: 낮음</p>
              </div>
              <div class="detail-item">
                <h6>v-if</h6>
                <p>실제 DOM 노드 생성/제거</p>
                <p>조건부 렌더링</p>
                <p>메모리 사용량: 조건에 따라 변동</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="example-section">
        <h4>💡 언제 어떤 것을 사용할까?</h4>
        <div class="demo-card">
          <div class="usage-guide">
            <div class="usage-item">
              <h5>✅ v-show 사용 권장 상황</h5>
              <ul>
                <li>요소가 자주 토글되는 경우</li>
                <li>초기 렌더링 성능이 중요한 경우</li>
                <li>조건이 거의 변경되지 않는 경우</li>
                <li>CSS 전환 효과를 사용하고 싶은 경우</li>
              </ul>
            </div>
            
            <div class="usage-item">
              <h5>✅ v-if 사용 권장 상황</h5>
              <ul>
                <li>조건이 런타임에 거의 변경되지 않는 경우</li>
                <li>조건부 렌더링이 필요한 경우</li>
                <li>메모리 사용량을 최적화하고 싶은 경우</li>
                <li>조건이 false일 때 완전히 제거하고 싶은 경우</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const showDiv = ref(true)
</script>

<style scoped>

.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ecf0f1;
}

.post-header p {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin: 0;
}

/* 사이드 선 */
.example-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border-left: 4px solid #4a5568;
}

/* 내부 전체 칸 */
.demo-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

/* 토글버튼 칸 */
.control-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

/* 토글버튼 효과 */
.toggle-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
}

.toggle-btn:hover {
  background: #764ba2;
  transform: translateY(-1px);
}

.status-indicator {
  font-weight: 500;
  color: #2c3e50;
}

.status.visible {
  color: #27ae60;
  font-weight: bold;
}

.status.hidden {
  color: #e74c3c;
  font-weight: bold;
}

/* show칸 */
/* 두칸으로 나누기 */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* 내부 칸 */
.comparison-item {
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
}

.comparison-item h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.1rem;
}

.demo-element {
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.show-demo {
  background: linear-gradient(135deg, #4b4a4a, #7d7f81);
  color: white;
  border: 2px solid #4a5568;
}

.if-demo {
  background: linear-gradient(135deg, #4b4a4a, #7d7f81);
  color:white;
  border: 2px solid #718096;
}

.code-example {
  background: #8bc5ff;
  color: #ecf0f1;
  padding: 0.75rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  margin: 1rem 0;
  text-align: center;
}

/* 개발자 도구 확인 칸 */
.instruction-box {
  background: #e8f4fd;
  border: 1px solid #b3d9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

/* 기술적 차이점 칸 */
.technical-details {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.detail-item {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.detail-item h6 {
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

/* 양쪽으로 나누기 */
.usage-guide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.usage-item {
  padding: 1rem;
  border-radius: 8px;
}

/* 왼쪽 칸 */
.usage-item:first-child {
  background: #e8f5e8;
  border: 1px solid #a8e6a8;
}

/* 오른쪽 칸 */
.usage-item:last-child {
  background: #fff3e0;
  border: 1px solid #ffcc80;
}

/* 칸 글자크기 */
.usage-item h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
}
</style>