<template>
  <div class="folder-page">
    <div class="nav-bar">
      <button @click="goBack" class="back-button">
        ←
      </button>
      <h2 class="folder-title">레이아웃 폴더</h2>
    </div>
    
    <div class="content">
      <div class="file-list">
        <div class="file-item" @click="navigateTo('/a1')">
          <div class="file-icon">📄</div>
          <div class="file-info">
            <div class="file-name">A1.vue</div>
          </div>
        </div>
        
        <div class="file-item" @click="navigateTo('/b1')">
          <div class="file-icon">📄</div>
          <div class="file-info">
            <div class="file-name">B1_.vue</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'FolderRoComponent',
  setup() {
    const router = useRouter()

    const goBack = () => {
      // 이전 페이지로 이동 (웹 예제 페이지)
      router.push('/web')
    }

    const navigateTo = (path) => {
      router.push(path)
    }

    return {
      goBack,
      navigateTo
    }
  }
}
</script>

<style scoped>
.folder-page {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-bar {
  background: linear-gradient(135deg, rgb(151, 168, 247) 0%,rgb(191, 159, 223) 100%);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 1000px;
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
  width: 100%;
  display: flex;
  justify-content: center;
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.file-item {
  background: white;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
}

.file-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  border-color: #667eea;
}

.file-icon {
  font-size: 2rem;
  color: #667eea;
}

.file-info {
  flex: 1;
}

.file-name {
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .nav-bar {
    padding: 10px 15px;
  }
  
  .folder-title {
    font-size: 1.2rem;
  }
  
  .content {
    padding: 20px 15px;
  }
  
  .file-item {
    padding: 12px;
  }
  
  .file-icon {
    font-size: 1.5rem;
  }
  
  .file-name {
    font-size: 1rem;
  }
}
</style>
