<template>
    <div class="department-view">
        <van-nav-bar title="科室介绍" :border="false" :safe-area-inset-top="true" />

        <div class="content">
            <!-- 科室概况 -->
            <div class="section">
                <div class="section-title">一、科室概况</div>
                <van-image class="section-image" :src="situationImg" fit="cover" />
                <div class="section-content">
                    惠州市第一人民医院肿瘤放疗科成立于2023年12月，标志着我院肿瘤中心基本架构已完善，具备肿瘤全方位诊疗能力。
                    肿瘤放疗科是以“精准放疗”为导向，集结高素质人才队伍、先进仪器设备、进取创新和优质服务于一体的肿瘤治疗专业科室。目前科室医技护团队人员20余人，涵盖医师、物理师、技术员和护士。团队人员均毕业于“985”、“211”、双一流等国内知名高校，现有放疗专业医师8人（其中主任医师3人，硕士研究生导师1人；博士2人、硕士5人、在读硕士1人）、放疗物理师2人（其中高级职称1人，中级职称1人；在读硕士1人）、放疗技师6人、放疗护士3人。
                    肿瘤放疗科配备先进放疗大型设备，包括：瑞典Elekta
                    Infinity直线加速器、德国西门子32排64层4D-CT模拟定位机、荷兰核通铱-192高剂量率后装机，同时具有业内主流的靶区勾画和计划设计系统：Manteia靶区自动勾画系统、Monaco放射治疗计划系统、Mosaiq肿瘤信息管理系统，可为患者提供三维适型放疗（3D-CRT）、适型调强放射治疗（IMRT）、容积弧形动态旋转调强放疗（VMAT）、图像引导放疗（IGRT）、立体定向放射治疗（SBRT）、三维后装治疗、二维后装治疗、腔内近距离放射治疗、4DCT呼吸时相融合控制技术、呼吸门控放射治疗、普通放射治疗等现进放疗技术，并与化疗、免疫治疗、射频热疗及中医药等相结合，为患者制定个体化治疗方案，令患者得到最佳疗效。
                </div>
            </div>

            <!-- 科室特色 -->
            <div class="section">
                <div class="section-title">二、科室特色</div>
                <van-image class="section-image" :src="specialImg" fit="cover" />
                <div class="section-content">
                    肿瘤放疗科坚持基于患者临床、病理和基因分子生物指导下的肿瘤个体化治疗，并长期坚定肿瘤多学科会诊（MDT）后的精准治疗原则。结合本市流行病学特点，开展以肺癌、乳腺癌、结直肠癌、头颈部肿瘤、食管癌、妇科肿瘤及泌尿系肿瘤为主的根治性放疗、术前放疗、术后放疗、同步放化疗，以及放疗联合免疫治疗、靶向治疗等肿瘤综合治疗，并积极运用普通调强放疗（IMRT）、立体定向放射治疗（SBRT）、旋转容积调强放射治疗（VMAT）、图像引导放射治疗（IGRT）和呼吸门控放射治疗等高精尖技术，给予患者最好的个体化精准综合治疗模式。
                    肿瘤放疗科室依托肿瘤中心开展抗肿瘤血管生成和肿瘤微环境等基础科学研究，并作为协同单位参与临床研究工作。我科坚守精细化诊断、规范化治疗、精准化放疗、常态化学习、严谨化科研、护理系统化的理念，诚挚为患者提供优质医疗服务。
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import situationImg from "@/assets/images/situation.jpg"
import specialImg from "@/assets/images/special.jpg"
</script>

<style scoped>
.department-view {
    padding-bottom: 20px;
    background: #f7f8fa;
}

.content {
    padding: 16px;
}

.section {
    margin-bottom: 24px;
}

.section-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--van-primary-color);
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
    background: var(--van-primary-color);
    border-radius: 2px;
}

.section-image {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 12px;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
}

.section-content {
    font-size: 15px;
    color: #646566;
    line-height: 1.6;
    text-indent: 2em;
}
</style>