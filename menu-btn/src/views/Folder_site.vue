<template>
  <div class="folder-page">
    <div class="nav-bar">
      <button @click="goHome" class="back-button">
        ←
      </button>
      <h2 class="folder-title">Site 폴더</h2>
    </div>
    
    <div class="content">
      <div class="file-list">
        <div class="file-item" @click="navigateTo('/site-a')">
          <div class="file-icon">📄</div>
          <div class="file-info">
            <div class="file-name">SiteA.vue</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const navigateTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
.folder-page {
  width: 1000px;
  height: 100vh;
  background-color: #f5f5f5;
}

.nav-bar {
  background: linear-gradient(135deg,rgb(151, 168, 247) 0%,rgb(191, 159, 223) 100%);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.back-button {
  background: transparent;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-button:hover {
  background: rgba(255,255,255,0.2);
  transform: scale(1.1);
}

.folder-title {
  color: white;
  margin: 0;
  font-size: 1.5rem;
}

.content {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.file-item {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 15px;
}

.file-item:hover {
  background-color: #f8f9fa;
  border-color: #007bff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.file-icon {
  font-size: 2rem;
}

.file-info {
  flex: 1;
}

.file-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.file-description {
  color: #666;
  font-size: 0.9rem;
}
</style>
