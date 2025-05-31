<script setup lang="ts">
// import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { devices } from '@/data/devices'

const router = useRouter()

// 跳转到设备详情页
const goToDeviceDetail = (deviceId: string) => {
  router.push({
    name: 'deviceDetail',
    params: { id: deviceId }
  })
}
</script>

<template>
  <div class="device-pro">
    <van-nav-bar title="设备介绍" :border="false" :safe-area-inset-top="true" />
    <div class="content">
      <div class="device-list">
        <!-- :desc="device.description" -->
        <van-card
          v-for="device in devices"
          :key="device.id"
          :title="device.name.length > 15 ? device.name.slice(0, 15) + '...' : device.name"
          :thumb="device.images && device.images.length > 0 ? device.images[0] : ''"
          class="device-card"
          @click="goToDeviceDetail(device.id)"
        >
          <template #tags>
            <div class="device-tags">
              <van-tag v-for="(app, index) in device.applications.slice(0, 3)" 
                      :key="index"
                      type="primary"
                      plain
                      size="medium"
                      class="device-tag">
                {{ app }}
              </van-tag>
              <van-tag v-if="device.applications.length > 3" 
                      type="primary"
                      plain
                      size="medium"
                      class="device-tag">
                +{{ device.applications.length - 3 }}
              </van-tag>
            </div>
          </template>
          <template #footer>
            <van-button size="small" type="primary" @click.stop="goToDeviceDetail(device.id)">
              查看详情
            </van-button>
          </template>
        </van-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.device-pro {
  min-height: 100vh;
  background: #f7f8fa;
}

.content {
  padding: 16px;
  padding-bottom: 32px;
}

.device-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.device-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(100, 101, 102, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.device-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(100, 101, 102, 0.15);
}

:deep(.van-card) {
  background-color: #fff;
  padding: 16px;
  height: auto;
  min-height: 160px;
}

:deep(.van-card__title) {
  font-size: 18px;
  font-weight: 600;
  color: #323233;
  margin-bottom: 8px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.van-card__desc) {
  font-size: 14px;
  color: #646566;
  line-height: 1.5;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: normal;
}

:deep(.van-card__thumb) {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
}

.device-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.device-tag {
  margin-right: 0;
}

@media (min-width: 768px) {
  .device-list {
    max-width: 800px;
    margin: 0 auto;
  }
  
  :deep(.van-card__thumb) {
    width: 120px;
    height: 120px;
  }
}
</style>