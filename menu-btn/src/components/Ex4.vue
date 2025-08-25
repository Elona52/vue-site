<template>
  <div class="blog-post">
    <div class="post-header">
      <h3>Vue.js 리스트 렌더링 (v-for 디렉티브)</h3>
      <p>v-for 디렉티브를 사용하여 배열과 객체를 반복적으로 렌더링하는 방법을 학습합니다.</p>
    </div>

    <div class="post-content">
      <section class="example-section">
        <h4>📝 기본 배열 렌더링</h4>
        <div class="demo-card">
          <div class="control-panel">
            <button @click="addItem" class="action-btn">아이템 추가</button>
            <button @click="removeItem" class="action-btn danger">아이템 제거</button>
            <button @click="shuffleItems" class="action-btn">섞기</button>
          </div>
          
          <div class="list-container">
            <h5>기본 리스트 ({{ items.length }}개)</h5>
            <ul class="demo-list">
              <li v-for="(item, index) in items" :key="index" class="list-item">
                <span class="item-number">{{ index + 1 }}</span>
                <span class="item-text">{{ item }}</span>
                <button @click="removeItemAt(index)" class="remove-btn">×</button>
              </li>
            </ul>
          </div>
          
          <div class="code-example">
            <code>&lt;li v-for="(item, index) in items" :key="index"&gt;{{ item }}&lt;/li&gt;</code>
          </div>
        </div>
      </section>

      <section class="example-section">
        <h4>👥 객체 배열 렌더링</h4>
        <div class="demo-card">
          <div class="control-panel">
            <button @click="addUser" class="action-btn">사용자 추가</button>
            <button @click="toggleUserStatus" class="action-btn">상태 토글</button>
          </div>
          
          <div class="users-grid">
            <div v-for="user in users" :key="user.id" class="user-card">
              <div class="user-avatar">
                <span class="avatar-text">{{ user.name.charAt(0) }}</span>
              </div>
              <div class="user-info">
                <h6 class="user-name">{{ user.name }}</h6>
                <p class="user-email">{{ user.email }}</p>
                <span :class="['user-status', user.active ? 'active' : 'inactive']">
                  {{ user.active ? '활성' : '비활성' }}
                </span>
              </div>
            </div>
          </div>
          
          <div class="code-example">
            <pre><code>&lt;div v-for="user in users" :key="user.id"&gt;
  &lt;h6&gt;{{ user.name }}&lt;/h6&gt;
  &lt;p&gt;{{ user.email }}&lt;/p&gt;
&lt;/div&gt;</code></pre>
          </div>
        </div>
      </section>

      <section class="example-section">
        <h4>🔢 숫자 범위 렌더링</h4>
        <div class="demo-card">
          <div class="control-panel">
            <label for="rangeInput">범위: </label>
            <input 
              id="rangeInput"
              v-model.number="rangeNumber" 
              type="number" 
              min="1" 
              max="20" 
              class="range-input"
            >
          </div>
          
          <div class="number-grid">
            <div v-for="n in rangeNumber" :key="n" class="number-item">
              {{ n }}
            </div>
          </div>
          
          <div class="code-example">
            <code>&lt;div v-for="n in rangeNumber" :key="n"&gt;{{ n }}&lt;/div&gt;</code>
          </div>
        </div>
      </section>

      <section class="example-section">
        <h4>🗂️ 객체 속성 렌더링</h4>
        <div class="demo-card">
          <div class="object-display">
            <h5>객체 속성들</h5>
            <div class="property-list">
              <div v-for="(value, key) in userProfile" :key="key" class="property-item">
                <span class="property-key">{{ key }}:</span>
                <span class="property-value">{{ value }}</span>
              </div>
            </div>
          </div>
          
          <div class="code-example">
            <code>&lt;div v-for="(value, key) in userProfile" :key="key"&gt;{{ key }}: {{ value }}&lt;/div&gt;</code>
          </div>
        </div>
      </section>

      <section class="example-section">
        <h4>⚡ 성능 최적화 팁</h4>
        <div class="demo-card">
          <div class="tips-grid">
            <div class="tip-item">
              <h6>🔑 key 속성 사용</h6>
              <p>고유한 key 값을 사용하여 Vue가 DOM 요소를 효율적으로 추적할 수 있도록 합니다.</p>
            </div>
            <div class="tip-item">
              <h6>📊 v-show vs v-if</h6>
              <p>리스트가 자주 토글되는 경우 v-show를, 조건부 렌더링이 필요한 경우 v-if를 사용합니다.</p>
            </div>
            <div class="tip-item">
              <h6>🔄 배열 변경 감지</h6>
              <p>Vue는 배열의 변경 사항을 감지하므로 직접 인덱스로 수정하는 것보다 배열 메서드를 사용합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 기본 배열
const items = ref(['Vue.js', 'React', 'Angular', 'Svelte', 'Ember'])

// 사용자 객체 배열
const users = ref([
  { id: 1, name: '김철수', email: 'kim@example.com', active: true },
  { id: 2, name: '이영희', email: 'lee@example.com', active: false },
  { id: 3, name: '박민수', email: 'park@example.com', active: true },
  { id: 4, name: '정수진', email: 'jung@example.com', active: false }
])

// 숫자 범위
const rangeNumber = ref(10)

// 객체 속성
const userProfile = ref({
  이름: '홍길동',
  나이: 30,
  직업: '개발자',
  도시: '서울',
  취미: '코딩, 독서, 여행'
})

// 메서드들
const addItem = () => {
  const newItems = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++']
  const randomItem = newItems[Math.floor(Math.random() * newItems.length)]
  items.value.push(randomItem)
}

const removeItem = () => {
  if (items.value.length > 0) {
    items.value.pop()
  }
}

const removeItemAt = (index) => {
  items.value.splice(index, 1)
}

const shuffleItems = () => {
  items.value.sort(() => Math.random() - 0.5)
}

const addUser = () => {
  const newUsers = [
    { id: Date.now(), name: '새사용자', email: 'new@example.com', active: true },
    { id: Date.now() + 1, name: '테스터', email: 'test@example.com', active: false }
  ]
  const randomUser = newUsers[Math.floor(Math.random() * newUsers.length)]
  users.value.push(randomUser)
}

const toggleUserStatus = () => {
  users.value.forEach(user => {
    user.active = !user.active
  })
}
</script>

<style scoped>
.blog-post {
  max-width: 100%;
}

.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ecf0f1;
}

.post-header h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.post-header p {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin: 0;
}

.example-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border-left: 4px solid #4a5568;
}

.example-section h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.demo-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.control-panel {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.action-btn {
  background: #4a5568;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;
}

.action-btn:hover {
  background: #2d3748;
  transform: translateY(-1px);
}

.action-btn.danger {
  background: #e74c3c;
}

.action-btn.danger:hover {
  background: #c0392b;
}

.list-container {
  margin-bottom: 1.5rem;
}

.list-container h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.demo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.list-item:hover {
  background: #e9ecef;
  transform: translateX(5px);
}

.item-number {
  background: #4a5568;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 1rem;
}

.item-text {
  flex: 1;
  color: #2c3e50;
  font-weight: 500;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: #c0392b;
  transform: scale(1.1);
}

.users-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.user-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.user-card:hover {
  background: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a5568, #2d3748);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.avatar-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.user-info {
  flex: 1;
}

.user-name {
  color: #2c3e50;
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
}

.user-email {
  color: #7f8c8d;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
}

.user-status {
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.user-status.active {
  background: #d4edda;
  color: #155724;
}

.user-status.inactive {
  background: #f8d7da;
  color: #721c24;
}

.number-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.number-item {
  background: linear-gradient(135deg, #4a5568, #2d3748);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0 auto;
}

.range-input {
  padding: 0.5rem;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  font-size: 1rem;
  width: 80px;
}

.range-input:focus {
  outline: none;
  border-color: #4a5568;
}

.object-display {
  margin-bottom: 1.5rem;
}

.object-display h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.property-list {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.property-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
}

.property-item:last-child {
  border-bottom: none;
}

.property-key {
  font-weight: 600;
  color: #2c3e50;
}

.property-value {
  color: #7f8c8d;
}

.code-example {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 0.75rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
  background: none;
  padding: 0;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tip-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #4a5568;
}

.tip-item h6 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tip-item p {
  color: #34495e;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .control-panel {
    flex-direction: column;
    align-items: stretch;
  }
  
  .action-btn {
    width: 100%;
  }
  
  .users-grid {
    grid-template-columns: 1fr;
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
  
  .example-section {
    padding: 1rem;
  }
  
  .demo-card {
    padding: 1rem;
  }
  
  .property-item {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
