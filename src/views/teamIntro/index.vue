<script setup lang="ts">
import YZHImg from '@/assets/images/余志辉.png'
import LYImg from '@/assets/images/吕莉.png'
import ZSWImg from '@/assets/images/庄文雅.png'
import WWLImg from '@/assets/images/王武龙.png'
import RLYImg from '@/assets/images/罗兰英.png'
import HHWImg from '@/assets/images/胡浩波.png'
import CJHImg from '@/assets/images/陈锦辉.png'

const teamMembers = [
    { name: '余志辉', image: YZHImg, title: '前端开发工程师', description: '专注于Web前端开发，擅长Vue.js和TypeScript技术栈。' },
    { name: '吕莉', image: LYImg, title: '产品经理', description: '负责产品规划和用户体验设计，拥有丰富的产品管理经验。' },
    { name: '庄文雅', image: ZSWImg, title: 'UI设计师', description: '专注于用户界面设计，擅长创造美观且实用的界面。' },
    { name: '王武龙', image: WWLImg, title: '后端开发工程师', description: '专注于服务端开发，擅长Java和Spring技术栈。' },
    { name: '罗兰英', image: RLYImg, title: '测试工程师', description: '负责产品质量保证，擅长自动化测试和性能测试。' },
    { name: '胡浩波', image: HHWImg, title: '运维工程师', description: '负责系统运维和部署，擅长Docker和Kubernetes。' },
    { name: '陈锦辉', image: CJHImg, title: '项目经理', description: '负责项目管理和团队协调，拥有丰富的项目管理经验。' },
]
</script>

<template>
    <van-nav-bar title="首页" />
    <div class="team-intro">
        <van-row :gutter="[16, 16]">
            <van-col v-for="member in teamMembers" :key="member.name" span="12">
                <div class="member-card" @click="$router.push(`/member/${member.name}`)">
                    <van-image width="100" height="142" :src="member.image" />
                    <div class="member-name">{{ member.name }}</div>
                </div>
            </van-col>
        </van-row>
    </div>
</template>

<style scoped>
.team-intro {
    width: 100%;
    height: 100%;
    padding: 16px;
    background: #fff;
}

.member-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.member-name {
    font-size: 14px;
    color: #000;
}
</style>
