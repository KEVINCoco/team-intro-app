import YZHImg from '@/assets/images/余志辉.png'
import LYImg from '@/assets/images/吕莉.png'
import ZSWImg from '@/assets/images/庄文雅.png'
import WWLImg from '@/assets/images/王武龙.png'
// import RLYImg from '@/assets/images/罗兰英.png'
import HHWImg from '@/assets/images/胡浩波.png'
import CJHImg from '@/assets/images/陈锦辉.png'
import ZPQImg from '@/assets/images/张佩琦.png'
import ZZMImg from '@/assets/images/郑志鸣.png'
import LXImg from '@/assets/images/李鑫.png'
import WSQImg from '@/assets/images/王圣权.png'
import SYYImg from '@/assets/images/史伊洋.png'
import WXYImg from '@/assets/images/汪雪英.png'
import ZYMImg from '@/assets/images/郑耀梅.png'
import ZWXImg from '@/assets/images/曾维鑫.png'
import KJJImg from '@/assets/images/邝俊杰.png'
import BXXImg from '@/assets/images/毕晓霞.png'


export interface TeamMember {
    name: string
    image: string
    title: string
    position: string
    description?: string
    honors?: string[]
    academicList?: Array<{
        department: string
        duty: string
    }>
}

export const teamMembers: TeamMember[] = [
    {
        name: '王武龙',
        image: WWLImg,
        title: '王武龙',
        position: '医学博士 主任医师',
        description: '科主任：王武龙，中共党员，肿瘤学博士，主任医师，硕士研究生导师。王武龙医师毕业于天津医科大学，师从我国著名放射肿瘤专家、原天津医科大学肿瘤医院院长王平教授。王武龙主任长期从事肿瘤放射治疗临床工作，熟悉并掌握实体瘤的临床治疗，特别是肺癌、食管癌、结直肠癌的同步放化疗，具备扎实的理论基础和丰富的临床工作经验。并曾于中国医学科学院肿瘤医院和中山大学附属肿瘤医院放疗中心进修学习，掌握先进的肿瘤放射治疗技术，可为肿瘤患者提供精准治疗。王武龙主任致力于抗肿瘤血管生成的基础科学研究工作，主持各级各类科研项目8项，参与各级各类科研项目6项；发表论文20余篇，SCI收录7篇；参与编写医学著作7部。',
        // 学术兼职
        academicList: [
            {
                department: '北京癌症防治学会消化道肿瘤精准治疗专委会',
                duty: '副主任委员',
            },
            {
                department: '中国抗癌协会肿瘤热疗专委会微波热疗专委会',
                duty: '委员',
            },
            {
                department: '海峡两岸医药卫生交流协会肿瘤防治专委会粒子学组',
                duty: '委员',
            },
            {
                department: '广东省惠州市抗癌协会肿瘤放疗专委会',
                duty: '副主任委员',
            },
            {
                department: '内蒙古抗癌协会肺癌专业委员会',
                duty: '副主任委员',
            },
            {
                department: '包头市医学会肿瘤医学专科分会',
                duty: '副主任委员',
            },
            {
                department: '内蒙古抗癌协会神经肿瘤青委会',
                duty: '副主任委员',
            },
            {
                department: '内蒙古医学会放射肿瘤学分会',
                duty: '常务委员',
            },
            {
                department: '内蒙古抗癌协会肿瘤放疗专委会',
                duty: '常务委员',
            },
            {
                department: '内蒙古医师协会放射治疗医师分会',
                duty: '常务委员',
            },
        ]
    },
    {
        name: '毕晓霞',
        image: BXXImg,
        title: '毕晓霞',
        position: '主任医师',
        description: '擅长擅长包括肺癌、乳腺癌、食管癌、鼻咽癌、喉癌、结直肠癌、肝癌、宫颈癌、卵巢癌、淋巴瘤、软组织肿瘤等各种恶性肿瘤的放疗、化疗、靶向治疗、免疫治疗等，尤擅长放化疗、介入、消融等各种肿瘤治疗方法的综合治疗和统筹安排，最大化优势解决中晚期肿瘤患者的困境。1994年毕业于皖南医学院临床医学系，毕业后就职于皖南医学院附属弋矶山医院放疗科，2002年人才引进惠州市中心人民医院放疗科，2014年创建惠州市第一人民医院肿瘤科至今。先后在中国医学科学院肿瘤医院、中山大学附属肿瘤医院、山东省肿瘤医院进修学习。参加卫生部举办的“首期中意肿瘤医学领军人才培养项目”，2014年完成中山大学“临床肿瘤学专业研究生课程进修班学习”。擅长常见恶性肿瘤放、化疗、靶向、免疫治疗，以及肿瘤筛查与康复、临终关怀及癌痛诊治创建惠州市总工会设立“肺癌精准筛查女职工工作室”。主持参与广东省级科研3项，获得惠州市科技局科技进步3等奖2项，国家级核心期刊发表专业论著20余篇，SCI文章2篇。',
        // 个人荣誉
        honors: ['惠州市第一人民医院肿瘤科学科带头人', '惠州市好医生、岭南名医、南粤好医生、抗疫好医生', '广东省五一劳动奖章获得者', '抗击新冠肺炎疫情全国三八红旗手'],
        // 学术兼职
        academicList: [
            {
                department: '惠州市医师协会肿瘤科医师分会',
                duty: '主任委员',
            },
            {
                department: '惠州市抗癌协会',
                duty: '副主任委员',
            },
            {
                department: '惠州市保健专家',
                duty: '',
            },
            {
                department: '广东省药学会第一届肿瘤全程管理专业委员会',
                duty: '副主任委员',
            },
            {
                department: '广东省医学会肿瘤科学分会',
                duty: '委员',
            },
            {
                department: '广东省临床医学会肿瘤免疫治疗专业委员会',
                duty: '常务委员',
            },
            {
                department: '广东省健康管理学会乳腺病学专委会',
                duty: '常务委员',
            },
            {
                department: '广东省医学会临床研究学会',
                duty: '委员',
            },
        ]
    },
    {
        name: '吕莉',
        image: LYImg,
        title: '吕莉',
        position: '主任医师',
        description: '本科、硕士毕业于武汉大学，2007年至今从事肿瘤科医疗、教学工作，临床经验丰富，擅长各种实体肿瘤（包括肺癌，乳腺癌，结直肠癌，食管癌，妇科肿瘤，头颈部肿瘤等）的放化疗、内分泌治疗、免疫治疗、分子靶向治疗，并曾于2013年至中山大学肿瘤防治中心放疗科进修学习，进一步丰富肿瘤放射治疗经验。主持及参与科研课题3项，获得惠州市科技局科技进步三等奖1项，以第一作者身份发表省级、国家级医学论文7篇。',
        // 学术兼职
        academicList: [
            {
                department: '惠州市第一人民医院肿瘤内科一区主任医师',
                duty: '医学硕士',
            },
            {
                department: '惠州市医师协会肿瘤放射治疗医师分会第一届委员会',
                duty: '副主任委员',
            },
            {
                department: '惠州市医学会肿瘤放射治疗学分会',
                duty: '常务委员',
            },
            {
                department: '惠州市抗癌协会放疗专业委员会',
                duty: '常务委员',
            },
            {
                department: '惠州市抗癌协会',
                duty: '理事',
            },
            {
                department: '惠州市抗癌协会头颈肿瘤专业委员会',
                duty: '秘书',
            },
            {
                department: '广东省抗癌协会神经肿瘤专业委员会',
                duty: '委员',
            },
            {
                department: '广东省医师协会人工智能临床应用专业委员会',
                duty: '委员',
            },
            {
                department: '广东省抗癌协会癌症筛查与早诊早治专业委员会',
                duty: '委员',
            },
        ],
    },
    {
        name: '邝俊杰',
        image: KJJImg,
        title: '邝俊杰',
        position: '医学博士 博士后 主治医师',
        description: '邝俊杰医师毕业于南方医科大学，长期从事肿瘤放射治疗临床和基础研究工作。特别是头颈、肺癌、食管癌的同步放化疗、免疫治疗，有扎实的科研基础和丰富的临床工作经验。曾与中山大学肿瘤防治中心进修学习，掌握先进放疗技术，获得优秀进修生称号。主持或参与省市级课题多项，SCI论文收录7篇。',
        // 学术兼职
        academicList: [
            {
                department: '广东省临床医学会肿瘤学专业委员会',
                duty: '委员',
            },
            {
                department: '广州抗癌协会消化道肿瘤',
                duty: '青年委员',
            },
            {
                department: '惠州市抗癌协会',
                duty: '委员',
            }
        ]
    },
    // {
    //   name: '罗兰英',
    //   image: RLYImg,
    //   title: '罗兰英',
    //   position: '主治医师',
    //   description: '硕士研究生 毕业广西医科大学  江西省整合医学学会肿瘤精准诊疗分会第一届委员会委员 江西省药物临床试验与研究学会第一届CRC管理专业委员会委员，原单位临床试验GCP放疗专业秘书，2017年原单位技能操作大赛荣获“个人一等奖”，2021年度原单位指南解读大赛荣获“个人三等奖”，荣获原单位2020年度“榜样医生”荣誉称号；赣州市2021年健康科普讲解大赛三等奖，2022年南昌市经开区疫情防控“最美逆行者”， 从事肿瘤放射治疗工作至今，掌握全身多种肿瘤三维适形、IMRT、VMAT、三维后装等放射治疗、化疗、靶向、免疫治疗等综合治疗，对围放化疗管理具有独到经验，并从事肿瘤预防和早诊工作；公开发表论文多篇。'
    // },
    {
        name: '余志辉',
        image: YZHImg,
        title: '余志辉',
        position: '医师',
        description: '医学硕士 毕业于广州医科大学。硕士期间与中山大学肿瘤防治中心联合培养，从事恶性肿瘤的发生发展及耐药等基础科学研究工作，揭示了改善脑胶质瘤化疗耐药的潜在靶点，并阐明蛋白翻译后修饰作用对宫颈癌发生发展及预后的影响，相关科研成果发表在国际学术期刊上，供同行评议。同时以参与人身份发表多篇SCI论文。毕业后于广东省人民医院放疗科进行住院医师规范化培训，熟悉常规实体肿瘤的临床诊疗，特别是乳腺癌、肺癌及结直肠癌的放化疗、靶向治疗及免疫治疗。',
    },
    {
        name: '庄文雅',
        image: ZSWImg,
        title: '庄文雅',
        position: '医师',
        description: '硕士研究生，毕业于南方医科大学肿瘤学专业，在导师指导下完成肺癌相关课题研究，在佛山市第一人民医院肿瘤中心完成放射肿瘤学住院医师规范化培训，熟悉常见恶性肿瘤的诊疗规范，掌握常见恶性肿瘤的放射治疗、化疗等综合治疗，掌握常见恶性肿瘤的靶区勾画原则。'
    },
    {
        name: '胡浩波',
        image: HHWImg,
        title: '胡浩波',
        position: '物理师',
        description: '中级工程师，惠一放疗科物理师兼任中国抗癌协会肿瘤微环境专业委员会会员，肿瘤粒子治疗专业委员会会员，医学物理技术专业委员会会员，从事放射治疗物理十余年，曾师从美国著名放射治疗物理学家，原佛罗里达质子中心物理部主任李左峰教授。本人有着丰富的放射物理临床经验，擅长放疗新技术开发，临床应用及质量保证，如三维适形放疗（3DCRT）、调强放疗（IMRT/VMAT）、立体定向放疗（SBRT/SRS）和影像引导放疗（IGRT），伽马刀治疗， 质子治疗， 自适应治疗等，并在美国AAPM和中国抗癌协会等国内外学术期刊上发表摘要、论文多篇，参与翻译《质子治疗：适应症、技术与疗效》一书，并申请专利一项。'
    },
    {
        name: '陈锦辉',
        image: CJHImg,
        title: '陈锦辉',
        position: '物理师',
        description: '毕业于南方医科大学生物医学工程专业，医疗器械工程师。从事肿瘤放射治疗物理技术应用及新放疗技术研究工作。2022年于广州中山大学附属肿瘤医院进修学习。现任广东省医学装备学会临床工程技术专业委员会委员，广东省医学装备学会青年委员会委员，惠州市医学会医学工程学分会委员。有丰富的医疗设备管理质控及肿瘤放疗计划设计经验。'
    },
    {
        name: '张佩琦',
        image: ZPQImg,
        title: '张佩琦',
        position: '技师',
    },
    {
        name: '郑志鸣',
        image: ZZMImg,
        title: '郑志鸣',
        position: '副主任技师',
    },
    {
        name: '李鑫',
        image: LXImg,
        title: '李鑫',
        position: '技师',
    },
    {
        name: '王圣权',
        image: WSQImg,
        title: '王圣权',
        position: '技师',
    },
    {
        name: '史伊洋',
        image: SYYImg,
        title: '史伊洋',
        position: '技师',
    },
    {
        name: '曾维鑫',
        image: ZWXImg,
        title: '曾维鑫',
        position: '技师',
    },
    {
        name: '汪雪英',
        image: WXYImg,
        title: '汪雪英',
        position: '主管护师',
    },
    {
        name: '郑耀梅',
        image: ZYMImg,
        title: '郑耀梅',
        position: '主管护师',
    },
]