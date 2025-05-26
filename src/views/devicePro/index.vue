<script setup lang="ts">
// import { ref } from 'vue'
import EmptyData from '@/components/EmptyData.vue'
</script>

<template>
  <div class="device-pro">
    <van-nav-bar title="设备介绍" :border="false" :safe-area-inset-top="true" />
    <div class="content">
      <empty-data text="设备介绍开发中" />
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
}
</style>