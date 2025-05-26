<script setup lang="ts">
interface Props {
  text?: string
  customClass?: string
  style?: string
}

withDefaults(defineProps<Props>(), {
  text: '暂无数据',
  customClass: '',
  style: ''
})
</script>

<template>
  <div class="empty-data" :class="customClass" :style="style">
    <van-empty :description="text" />
  </div>
</template>

<style scoped>
.empty-data {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
}

:deep(.van-empty) {
  padding: 0;

  &__image {
    width: 120px;
    height: 120px;
  }

  &__description {
    margin-top: 12px;
    color: #969799;
    font-size: 14px;
  }
}
</style>