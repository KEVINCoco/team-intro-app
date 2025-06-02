<template>
    <div class="special-view">
        <van-nav-bar 
            title="科室特色" 
            left-arrow 
            @click-left="$router.back()" 
            :border="false" 
            :safe-area-inset-top="true" 
        />

        <div class="content">
            <van-image class="section-image" :src="specialImg" fit="cover" />
            <div class="section-content">
                肿瘤放疗科坚持基于患者临床、病理和基因分子生物指导下的肿瘤个体化治疗，并长期坚定肿瘤多学科会诊（MDT）后的精准治疗原则。结合本市流行病学特点，开展以肺癌、乳腺癌、结直肠癌、头颈部肿瘤、食管癌、妇科肿瘤及泌尿系肿瘤为主的根治性放疗、术前放疗、术后放疗、同步放化疗，以及放疗联合免疫治疗、靶向治疗等肿瘤综合治疗，并积极运用普通调强放疗（IMRT）、立体定向放射治疗（SBRT）、旋转容积调强放射治疗（VMAT）、图像引导放射治疗（IGRT）和呼吸门控放射治疗等高精尖技术，给予患者最好的个体化精准综合治疗模式。
                肿瘤放疗科室依托肿瘤中心开展抗肿瘤血管生成和肿瘤微环境等基础科学研究，并作为协同单位参与临床研究工作。我科坚守精细化诊断、规范化治疗、精准化放疗、常态化学习、严谨化科研、护理系统化的理念，诚挚为患者提供优质医疗服务。
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import specialImg from "@/assets/images/special.jpg"
</script>

<style scoped>
.special-view {
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