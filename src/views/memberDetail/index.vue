<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { teamMembers } from '@/data/teamMembers'

const loading = ref(true)

const route = useRoute()
const memberName = route.params.name as string

const memberInfo = ref(teamMembers.find(member => member.name === memberName))

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<template>
  <div class="member-detail" v-if="memberInfo">
    <van-nav-bar title="成员详情" left-arrow @click-left="$router.back()" :border="false" :safe-area-inset-top="true" />
    <van-skeleton title avatar :row="10" :loading="loading">
      <div class="content">
        <van-image class="avatar" width="200" height="284" :src="memberInfo.image" radius="8" show-loading show-error>
          <template #loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template #error>
            <van-icon name="photo-fail" size="30" />
          </template>
        </van-image>
        <div class="info van-slide-up-enter-active">
          <div class="title van-ellipsis">{{ memberInfo.title }}</div>
          <div class="position van-ellipsis">{{ memberInfo.position }}</div>
          <div class="description">{{ memberInfo.description }}</div>

          <div v-if="memberInfo.academicList" class="academic-list">
            <van-cell-group title="学术兼职" inset>
              <van-cell v-for="(item, index) in memberInfo.academicList" :key="index" :title="item.department"
                :label="item.duty" :border="index !== memberInfo.academicList.length - 1" />
            </van-cell-group>
          </div>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<style scoped>
.member-detail {
  height: 100vh;
  width: 100%;
  background: #f7f8fa;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation: fade-in 0.3s ease-in-out;
}

.avatar {
  border-radius: 8px;
  overflow: hidden;
}

.info {
  width: 100%;
  text-align: center;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.name {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px;
}

.title {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 8px;
}

.position {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 500;
  margin-bottom: 16px;
}

.description {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.8;
  margin: 16px 0;
  text-align: justify;
  text-indent: 2em;
}

.academic-list {
  width: 100%;
  margin-top: 20px;

  :deep(.van-cell-group__title) {
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    background: transparent;
  }

  :deep(.van-cell) {
    padding: 16px;
    background: #f8f9fa;

    &__title {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }

    &__label {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.65);
      margin-top: 6px;
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>