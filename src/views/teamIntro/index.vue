<script setup lang="ts">

const teamMembers = [
    { name: '余志辉', image: '/src/assets/images/余志辉.png' },
    { name: '吕莉', image: '/src/assets/images/吕莉.png' },
    { name: '庄文雅', image: '/src/assets/images/庄文雅.png' },
    { name: '王武龙', image: '/src/assets/images/王武龙.png' },
    { name: '罗兰英', image: '/src/assets/images/罗兰英.png' },
    { name: '胡浩波', image: '/src/assets/images/胡浩波.png' },
    { name: '陈锦辉', image: '/src/assets/images/陈锦辉.png' },
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
