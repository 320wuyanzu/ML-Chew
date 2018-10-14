module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: '/katex.min.css' }]
        //['script', {src: '/katex.min.js'}],
        //['script', {src: '/auto-render.min.js'}],
        //['link', {rel: 'stylesheet', href: '/contrib/copy-tex.min.css'}],
        //['script', {src: '/contrib/copy-tex.min.js'}],
        //['script', {src: '/contrib/mathtex-script-type.min.js'}]
    ],
    base: '/ML-Chew/',
    title: '《机器学习》西瓜书读书笔记',
    description: '',
    themeConfig: {
        lastUpdated: '最近一次编辑',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' }
        ],
        sidebarDepth: 2,
        sidebar: sidebar_group()
    },
    markdown: {
        config: md => {
            md.use(require('@iktakahiro/markdown-it-katex'));
        }
    }
}

function sidebar_group() {
    let C1 = {
        title: '一、绪论',
        children: ['/1/']
    };
    let C2 = {
        title: '二、模型评估与选择',
        children: ['/2/']
    };
    let C3 = {
        title: '三、线性模型',
        children: ['/3/']
    };
    let C4 = {
        title: '四、决策树',
        children: ['/4/']
    };
    let C5 = {
        title: '五、神经网络',
        children: ['/5/']
    };
    let C6 = {
        title: '六、支持向量机',
        children: ['/6/']
    };
    let C7 = {
        title: '七、贝叶斯分类器',
        children: ['/7/']
    };
    let C8 = {
        title: '八、集成学习',
        children: ['/8/']
    };
    let C9 = {
        title: '九、聚类',
        children: ['/9/']
    };
    let C10 = {
        title: '十、降维与度量学习',
        children: ['/10/']
    };
    let C11 = {
        title: '十一、特征选择与稀疏学习',
        children: ['/11/']
    };
    let C12 = {
        title: '十二、计算学习理论',
        children: ['/12/']
    };
    let C13 = {
        title: '十三、半监督学习',
        children: ['/13/']
    };
    let C14 = {
        title: '十四、概率图模型',
        children: ['/14/']
    };
    let C15 = {
        title: '十五、规则学习',
        children: ['/15/']
    };
    let C16 = {
        title: '十六、强化学习',
        children: ['/16/']
    };
    return [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16];
}

function sidebar_divide() {
    return {
        '/1/': [''],
        '/2/': [''],
        '/3/': [''],
        '/4/': [''],
        '/5/': [''],
        '/6/': [''],
        '/7/': [''],
        '/8/': [''],
        '/9/': [''],
        '/': ['']
    }
}