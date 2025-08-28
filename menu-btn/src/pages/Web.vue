<script setup>
import { ref } from 'vue'

const title = ref('웹기능사 문제')
const description = ref('이 페이지는 2025 웹 기능사 문제를 기반으로 구성되었습니다.')
</script>

<template>
  <div class="web-container">
    <div class="web-header">
      <h1 class="web-title">{{ title }}</h1>
      <p class="web-description">{{ description }}</p>
    </div>
    
    <div class="web-content">
      <div class="content-card">
        <h2>웹기능사 문제</h2>
        <p>2025 웹기능사 문제 결과</p>
        <div class="example-grid">
            <div class="example-item">
            <h3>레이아웃 예제</h3>
            <p>웹 기능사 레이아웃 예제</p>
          </div>
          <div class="example-item">
            <h3>사이트 예제</h3>
            <p>웹 기능사 사이트 예제</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.web-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.web-header {
  text-align: center;
  margin-bottom: 3rem;
}

.web-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.web-description {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 0;
}

.web-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.content-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.content-card p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.example-item {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.example-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.example-item h3 {
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.example-item p {
  color: #4a5568;
  margin: 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .web-container {
    padding: 1rem;
  }
  
  .web-title {
    font-size: 2rem;
  }
  
  .web-description {
    font-size: 1rem;
  }
  
  .web-content {
    padding: 1.5rem;
  }
  
  .example-grid {
    grid-template-columns: 1fr;
  }
}
</style>
