<script setup lang="ts">
import { ref } from 'vue'
import type { Device } from '@/data/devices'

interface Props {
  device: Device
}

const props = defineProps<Props>()

const paramActiveNames = ref(['param-0']) // 默认展开第一个参数
const featureActiveNames = ref(['feature-0']) // 默认展开第一个特点
</script>

<template>
  <div class="device-detail">
    <h2 class="device-name">{{ device.name }}</h2>
    
    <!-- 设备图片轮播 -->
    <div class="device-images" v-if="device.images && device.images.length > 0">
      <van-swipe :autoplay="3000" indicator-color="#1989fa">
        <van-swipe-item v-for="(image, index) in device.images" :key="index">
          <img :src="image" class="swipe-image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    
    <p class="device-desc">{{ device.description }}</p>
    
    <!-- 核心参数 -->
    <div class="section-title">一、核心技术参数</div>
    <van-collapse v-model="paramActiveNames">
      <van-collapse-item
        v-for="(param, index) in device.parameters"
        :key="'param-' + index"
        :title="param.title"
        :name="'param-' + index"
      >
        <van-cell v-for="(item, itemIndex) in param.items" 
                 :key="'item-' + itemIndex"
                 :title="item.name"
                 :value="item.value"
                 :border="itemIndex !== param.items.length - 1" />
      </van-collapse-item>
    </van-collapse>
    
    <!-- 核心特点 -->
    <div class="section-title">二、核心特点</div>
    <van-collapse v-model="featureActiveNames">
      <van-collapse-item
        v-for="(feature, index) in device.features"
        :key="'feature-' + index"
        :title="feature.title"
        :name="'feature-' + index"
      >
        {{ feature.content }}
      </van-collapse-item>
    </van-collapse>
    
    <!-- 临床应用 -->
    <div class="section-title">三、临床应用优势</div>
    <div class="applications-list">
      <van-tag v-for="(app, index) in device.applications" 
              :key="index"
              type="primary"
              size="medium"
              class="app-tag">
        {{ app }}
      </van-tag>
    </div>
  </div>
</template>

<style scoped>
.device-detail {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
}

.device-name {
  font-size: 22px;
  font-weight: 600;
  color: #323233;
  margin: 0 0 16px;
  text-align: center;
}

.device-images {
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
}

:deep(.van-swipe) {
  height: 200px;
}

.swipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.device-desc {
  font-size: 15px;
  color: #646566;
  line-height: 1.6;
  margin: 0 0 20px;
  text-indent: 2em;
  padding: 0 4px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: #1989fa;
  margin: 24px 0 12px;
  position: relative;
  padding-left: 12px;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 4px;
  background: #1989fa;
  border-radius: 2px;
}

:deep(.van-collapse) {
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
}

:deep(.van-collapse-item__title) {
  font-size: 16px;
  font-weight: 500;
}

:deep(.van-collapse-item__content) {
  color: #646566;
  line-height: 1.6;
  padding: 12px 16px;
}

.applications-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 12px 0;
}

.app-tag {
  margin-bottom: 8px;
}

@media (min-width: 768px) {
  :deep(.van-swipe) {
    height: 300px;
  }
}
</style>