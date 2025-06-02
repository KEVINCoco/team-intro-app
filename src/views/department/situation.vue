<template>
    <div class="situation-view">
        <van-nav-bar 
            title="科室概况" 
            left-arrow 
            @click-left="$router.back()" 
            :border="false" 
            :safe-area-inset-top="true" 
        />

        <div class="content">
            <van-image class="section-image" :src="situationImg" fit="cover" />
            <div class="section-content">
                惠州市第一人民医院肿瘤放疗科成立于2023年12月，标志着我院肿瘤中心基本架构已完善，具备肿瘤全方位诊疗能力。
                肿瘤放疗科是以"精准放疗"为导向，集结高素质人才队伍、先进仪器设备、进取创新和优质服务于一体的肿瘤治疗专业科室。目前科室医技护团队人员20余人，涵盖医师、物理师、技术员和护士。团队人员均毕业于"985"、"211"、双一流等国内知名高校，现有放疗专业医师8人（其中主任医师3人，硕士研究生导师1人；博士2人、硕士5人、在读硕士1人）、放疗物理师2人（其中高级职称1人，中级职称1人；在读硕士1人）、放疗技师6人、放疗护士3人。
                肿瘤放疗科配备先进放疗大型设备，包括：瑞典Elekta Infinity直线加速器、德国西门子32排64层4D-CT模拟定位机、荷兰核通铱-192高剂量率后装机，同时具有业内主流的靶区勾画和计划设计系统：Manteia靶区自动勾画系统、Monaco放射治疗计划系统、Mosaiq肿瘤信息管理系统，可为患者提供三维适型放疗（3D-CRT）、适型调强放射治疗（IMRT）、容积弧形动态旋转调强放疗（VMAT）、图像引导放疗（IGRT）、立体定向放射治疗（SBRT）、三维后装治疗、二维后装治疗、腔内近距离放射治疗、4DCT呼吸时相融合控制技术、呼吸门控放射治疗、普通放射治疗等现进放疗技术，并与化疗、免疫治疗、射频热疗及中医药等相结合，为患者制定个体化治疗方案，令患者得到最佳疗效。
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import situationImg from "@/assets/images/situation.jpg"
</script>

<style scoped>
.situation-view {
    min-height: 100vh;
    background: #f7f8fa;
}

.content {
    padding: 16px;
}

.section-image {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
}

.section-content {
    font-size: 15px;
    color: #646566;
    line-height: 1.6;
    text-indent: 2em;
    background: #fff;
    padding: 16px;
    border-radius: 8px;
}
</style>