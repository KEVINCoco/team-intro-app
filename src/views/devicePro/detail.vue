<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { devices } from '@/data/devices'
import DeviceDetail from '@/components/DeviceDetail.vue'
import EmptyData from '@/components/EmptyData.vue'

const route = useRoute()
const deviceId = computed(() => route.params.id as string)

// 根据ID查找设备
const device = computed(() => {
  return devices.find(item => item.id === deviceId.value)
})
</script>

<template>
  <div class="device-detail-page">
    <van-nav-bar 
      title="设备详情" 
      left-text="返回"
      left-arrow
      :border="false" 
      :safe-area-inset-top="true"
      @click-left="$router.back()"
    />
    <div class="content">
      <template v-if="device">
        <device-detail :device="device" />
      </template>
      <template v-else>
        <empty-data text="未找到设备信息" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.device-detail-page {
  min-height: 100vh;
  background: #f7f8fa;
}

.content {
  padding: 16px;
  padding-bottom: 32px;
}

@media (min-width: 768px) {
  .content {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>