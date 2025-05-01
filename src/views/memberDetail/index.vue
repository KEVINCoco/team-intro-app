<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const memberName = route.params.name as string

const teamMembers = [
  { name: '余志辉', image: '/src/assets/images/余志辉.png', title: '前端开发工程师', description: '专注于Web前端开发，擅长Vue.js和TypeScript技术栈。' },
  { name: '吕莉', image: '/src/assets/images/吕莉.png', title: '产品经理', description: '负责产品规划和用户体验设计，拥有丰富的产品管理经验。' },
  { name: '庄文雅', image: '/src/assets/images/庄文雅.png', title: 'UI设计师', description: '专注于用户界面设计，擅长创造美观且实用的界面。' },
  { name: '王武龙', image: '/src/assets/images/王武龙.png', title: '后端开发工程师', description: '专注于服务端开发，擅长Java和Spring技术栈。' },
  { name: '罗兰英', image: '/src/assets/images/罗兰英.png', title: '测试工程师', description: '负责产品质量保证，擅长自动化测试和性能测试。' },
  { name: '胡浩波', image: '/src/assets/images/胡浩波.png', title: '运维工程师', description: '负责系统运维和部署，擅长Docker和Kubernetes。' },
  { name: '陈锦辉', image: '/src/assets/images/陈锦辉.png', title: '项目经理', description: '负责项目管理和团队协调，拥有丰富的项目管理经验。' },
]

const memberInfo = ref(teamMembers.find(member => member.name === memberName))
</script>

<template>
  <div class="member-detail" v-if="memberInfo">
    <van-nav-bar
      title="成员详情"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="content">
      <van-image
        class="avatar"
        width="200"
        height="284"
        :src="memberInfo.image"
      />
      <div class="info">
        <h2 class="name">{{ memberInfo.name }}</h2>
        <div class="title">{{ memberInfo.title }}</div>
        <div class="description">{{ memberInfo.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.member-detail {
  height: 100%;
  width: 100%;
  background: #fff;
}

.content {
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.avatar {
  border-radius: 8px;
  overflow: hidden;
}

.info {
  width: 100%;
  text-align: center;
}

.name {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px;
}

.title {
  font-size: 16px;
  color: #666;
  margin-bottom: 16px;
}

.description {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
}
</style>