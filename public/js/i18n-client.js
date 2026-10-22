window.translations = {
  en: {
    'nav.about': 'About', 'nav.projects': 'Work', 'nav.skills': 'Skills',
    'nav.blog': 'Blog', 'nav.timeline': 'Timeline', 'nav.gallery': 'Gallery', 'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm", 'hero.tagline': 'a pretty girl computer engineer',
    'hero.description': 'Building things with code, writing about the journey, and sharing what I learn along the way.',
    'hero.cta_work': 'See My Work', 'hero.cta_contact': 'Get in Touch',
    'hero.status': 'AVAILABLE FOR WORK',
    'about.label': '01 — ABOUT', 'about.title': 'About Me', 'about.subtitle': 'A little bit about who I am',
    'about.p1': "I'm lilylist, a computer engineer who loves building elegant solutions to complex problems. When I'm not writing code, you'll find me exploring new technologies, documenting my learning journey, or designing creative side projects.",
    'about.p2': "I believe in writing clean, maintainable code and creating interfaces that feel as good as they look. I'm passionate about open source, continuous learning, and sharing knowledge with the community.",
    'about.tag1': 'Open Source', 'about.tag2': 'Clean Code', 'about.tag3': 'Lifelong Learner',
    'about.stat_projects': 'Projects', 'about.stat_posts': 'Blog Posts', 'about.stat_years': 'Years Exp', 'about.stat_curiosity': 'Curiosity',
    'projects.label': '02 — WORK', 'projects.title': 'Projects', 'projects.subtitle': "Things I've built and contributed to",
    'projects.empty': 'Projects will appear here once you add them via the CMS!', 'projects.live': 'Live →',
    'skills.label': '03 — SKILLS', 'skills.title': 'Skills', 'skills.subtitle': 'Technologies and tools I work with',
    'skills.cat1': 'Languages', 'skills.cat2': 'Frontend', 'skills.cat3': 'Backend', 'skills.cat4': 'Tools & Practices',
    'blog.label': '04 — BLOG', 'blog.title': 'Blog', 'blog.subtitle': 'Thoughts, tutorials, and discoveries',
    'blog.empty': 'Blog posts will appear here. Start writing via the CMS!',
    'timeline.label': '05 — TIMELINE', 'timeline.title': 'Timeline', 'timeline.subtitle': 'My journey so far',
    'timeline.empty': 'Add your milestones via the CMS to see them here!',
    'gallery.label': '06 — GALLERY', 'gallery.title': 'Gallery', 'gallery.subtitle': 'Moments captured',
    'gallery.empty': 'Photos will appear here in a polaroid-style wall. Upload via the CMS!',
    'contact.label': '07 — CONTACT', 'contact.title': 'Get in Touch', 'contact.subtitle': "Have a question, collaboration idea, or just want to say hi?",
    'contact.github': 'GitHub', 'contact.email': 'Email',
    'footer.built_with': 'Built with', 'footer.and': '&',
    'lang.toggle': '中文'
  },
  zh: {
    'nav.about': '关于我', 'nav.projects': '作品', 'nav.skills': '技能',
    'nav.blog': '博客', 'nav.timeline': '时间线', 'nav.gallery': '相册', 'nav.contact': '联系',
    'hero.greeting': '你好，我是', 'hero.tagline': '一个漂亮的程序媛',
    'hero.description': '用代码构建东西，记录学习旅程，分享一路上的所见所得。',
    'hero.cta_work': '查看作品', 'hero.cta_contact': '联系我',
    'hero.status': '开放合作中',
    'about.label': '01 — 关于', 'about.title': '关于我', 'about.subtitle': '简单介绍一下我自己',
    'about.p1': '我是 lilylist，一个热爱构建优雅解决方案的计算机工程师。',
    'about.p2': '我相信要编写整洁、可维护的代码，创建看起来和用起来一样好的界面。',
    'about.tag1': '开源', 'about.tag2': '整洁代码', 'about.tag3': '终身学习',
    'about.stat_projects': '个项目', 'about.stat_posts': '篇博客', 'about.stat_years': '年经验', 'about.stat_curiosity': '无限好奇',
    'projects.label': '02 — 作品', 'projects.title': '项目', 'projects.subtitle': '我构建和参与的项目',
    'projects.empty': '通过 CMS 添加项目后，它们会显示在这里！', 'projects.live': '在线 →',
    'skills.label': '03 — 技能', 'skills.title': '技能', 'skills.subtitle': '我使用的技术和工具',
    'skills.cat1': '编程语言', 'skills.cat2': '前端', 'skills.cat3': '后端', 'skills.cat4': '工具与实践',
    'blog.label': '04 — 博客', 'blog.title': '博客', 'blog.subtitle': '思考、教程和发现',
    'blog.empty': '通过 CMS 开始写文章后，它们会显示在这里！',
    'timeline.label': '05 — 时间线', 'timeline.title': '时间线', 'timeline.subtitle': '我走过的旅程',
    'timeline.empty': '通过 CMS 添加里程碑后，它们会显示在这里！',
    'gallery.label': '06 — 相册', 'gallery.title': '相册', 'gallery.subtitle': '捕捉的瞬间',
    'gallery.empty': '通过 CMS 上传照片后，它们会以拍立得风格展示在这里！',
    'contact.label': '07 — 联系', 'contact.title': '联系我', 'contact.subtitle': '有问题、合作想法，或者只是想打个招呼？',
    'contact.github': 'GitHub', 'contact.email': '邮箱',
    'footer.built_with': '使用', 'footer.and': '和',
    'lang.toggle': 'EN'
  }
};

function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  applyLang(lang);
}

function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
}

function init() {
  const lang = getLang();
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  if (lang !== 'en') {
    requestAnimationFrame(() => applyLang(lang));
  }
  // Support both button IDs
  const toggleBtn = document.getElementById('lang-toggle') || document.getElementById('nav-lang-toggle');
  toggleBtn?.addEventListener('click', () => {
    setLang(getLang() === 'en' ? 'zh' : 'en');
    // Update button label
    const btn = document.getElementById('nav-lang-toggle');
    if (btn) btn.textContent = getLang() === 'en' ? '中文' : 'EN';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
