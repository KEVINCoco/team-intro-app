<template>
    <div class="department-view">
        <van-nav-bar title="科室介绍" :border="false" :safe-area-inset-top="true" />

        <div class="content">
            <van-row :gutter="16">
                <van-col :span="12">
                    <div class="card" @click="router.push('/department/situation')">
                        <van-image class="card-image" :src="situationImg" fit="cover" />
                        <div class="card-title">科室概况</div>
                        <div class="card-desc">了解科室的基本情况、人员配置及设备信息</div>
                    </div>
                </van-col>
                <van-col :span="12">
                    <div class="card" @click="router.push('/department/special')">
                        <van-image class="card-image" :src="specialImg" fit="cover" />
                        <div class="card-title">科室特色</div>
                        <div class="card-desc">了解科室的特色技术和治疗方案</div>
                    </div>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import situationImg from "@/assets/images/situation.jpg"
import specialImg from "@/assets/images/special.jpg"

const router = useRouter()
</script>

<style scoped>
.department-view {
    min-height: 100vh;
    background: #f7f8fa;
}

.content {
    padding: 16px;
}

.card {
    background: #fff;
    border-radius: 12px;
    padding: 12px;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
    transition: all 0.3s;
    cursor: pointer;
}

.card:active {
    transform: scale(0.98);
}

.card-image {
    width: 100%;
    height: 120px;
    border-radius: 8px;
    margin-bottom: 12px;
}

.card-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--van-text-color);
    margin-bottom: 8px;
}

.card-desc {
    font-size: 14px;
    color: var(--van-text-color-2);
    line-height: 1.4;
}
</style>