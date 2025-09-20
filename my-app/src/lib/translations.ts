export interface Translations {
  [key: string]: string | Translations;
}

// Static translations - in a real app, you'd load these from files at build time
const translations: { [lang: string]: Translations } = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      work: "work",
      contact: "contact",
      archive: "archive"
    },
    site: {
      title: "Yiting Liu - Award-winning Creative Technologist in XR and AI",
      description: "With a background in XR development and creative tech, I create interactive experiences that blend art and technology. My work ranges from VR mental health tools to AI-driven music video generation, always focusing on meaningful and memorable experiences."
    },
    preview: {
      tagline: "XR Developer and Creative Technologist: Bringing Experiences to Life with AR, VR, and AI",
      intro: "With a background in XR development and creative tech, I create interactive experiences that blend art and technology. My work ranges from VR mental health tools to AI-driven music video generation, always focusing on meaningful and memorable experiences."
    },
    archive: {
      welcome: "Welcome to the collections of my past projects that emphasize my capabilities in XR, Web & Immersive Installations!"
    },
    footer: {
      expertise: "Expertise",
      development: "Development",
      development_skills: "C#, HTML/CSS/Javascript, p5.js, three.js, Node.js, Express, Heroku, MongoDB, DigitalOcean, GitHub",
      software: "Software",
      software_skills: "Unity, Unreal Engine, Max/MSP, Spark AR, Lens Studio, Effect House, Cinema 4D, Blender, Adobe Creative Suite, Ableton Live",
      lets_connect: "Let's Connect",
      start_project: "Start a Project",
      all_rights_reserved: "All rights reserved."
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      projects: "项目",
      work: "作品",
      contact: "联系",
      archive: "档案"
    },
    site: {
      title: "刘伊婷 - 屡获殊荣的XR和AI创意技术专家",
      description: "凭借XR开发和创意技术背景，我创造融合艺术与技术的互动体验。我的工作范围从VR心理健康工具到AI驱动的音乐视频生成，始终专注于有意义和难忘的体验。"
    },
    preview: {
      tagline: "XR开发者和创意技术专家：通过AR、VR和AI将体验带入生活",
      intro: "凭借XR开发和创意技术背景，我创造融合艺术与技术的互动体验。我的工作范围从VR心理健康工具到AI驱动的音乐视频生成，始终专注于有意义和难忘的体验。"
    },
    archive: {
      welcome: "欢迎来到我过去项目的收藏，这些项目强调了我在XR、Web和沉浸式装置方面的能力！"
    },
    footer: {
      expertise: "专业技能",
      development: "开发",
      development_skills: "C#, HTML/CSS/Javascript, p5.js, three.js, Node.js, Express, Heroku, MongoDB, DigitalOcean, GitHub",
      software: "软件",
      software_skills: "Unity, Unreal Engine, Max/MSP, Spark AR, Lens Studio, Effect House, Cinema 4D, Blender, Adobe Creative Suite, Ableton Live",
      lets_connect: "让我们连接",
      start_project: "开始项目",
      all_rights_reserved: "版权所有。"
    }
  }
};

export function getTranslations(lang: string = 'en'): Translations {
  return translations[lang] || translations.en;
}

export function getTranslation(key: string, lang: string = 'en'): string {
  const langTranslations = getTranslations(lang);
  const keys = key.split('.');
  let value: string | Translations = langTranslations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return the key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}