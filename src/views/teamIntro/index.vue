<script setup lang="ts">
import { teamMembers } from '@/data/teamMembers'
</script>

<template>
    <van-nav-bar title="团队介绍" :border="false" :safe-area-inset-top="true" />
    <div class="team-intro">
        <van-row :gutter="[16, 16]">
            <van-col v-for="member in teamMembers" :key="member.name" span="12">
                <div class="member-card" @click="$router.push(`/member/${member.name}`)">
                    <van-image class="member-image" width="100" height="142" :src="member.image" radius="8"
                        show-loading show-error>
                        <template #loading>
                            <van-loading type="spinner" size="20" />
                        </template>
                        <template #error>
                            <van-icon name="photo-fail" size="30" />
                        </template>
                    </van-image>
                    <div class="member-name">{{ member.name }}</div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<style scoped>
.team-intro {
    width: 100%;
    min-height: 100vh;
    padding: 16px;
    background: #f7f8fa;
}

.member-card {
    background: var(--van-blue);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 16px;
}

.member-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

.member-card :deep(.van-card__cover) {
    margin: 0;
    padding: 12px;
    display: flex;
    justify-content: center;
}

.member-card :deep(.van-card__content) {
    padding: 8px;
    text-align: center;
}

.member-image {
    border-radius: 8px;
    overflow: hidden;
}

.member-name {
    font-size: 16px;
    font-weight: 500;
    color: #323233;
    line-height: 1.4;
}
</style>
