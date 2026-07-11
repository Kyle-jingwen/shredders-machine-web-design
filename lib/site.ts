/**
 * 全站统一配置。
 * 联系方式、社交链接、第三方服务 ID 等集中在此维护，方便长期运维。
 */
export const site = {
  brand: "TIMO",
  domain: "shredders-machine.com",
  url: "https://shredders-machine.com",
  description:
    "TIMO manufactures industrial shredders, dewatering screw presses and integrated recycling systems for food, medical, municipal, slaughterhouse and pulp & paper waste.",

  contact: {
    // 沿用旧邮箱（阶段1确认）
    email: "info@shredding-machine.com",
    address:
      "No.1-3, Junfa Street, Yangguang Road, Mingzhong Village, Zhongshan City, China.",
    // WhatsApp：+86-13435753318（wa.me 需纯数字含国家码，去掉 + 与连字符）
    whatsapp: "8613435753318",
    whatsappDisplay: "+86 134 3575 3318",
  },

  social: {
    youtube: "https://www.youtube.com/@liphilip8232",
    // 旧站的 Vimeo 频道（如仍启用可保留）
    vimeo: "https://vimeo.com/user53797621",
  },

  thirdParty: {
    // Tawk.to 在线客服：阶段4/上线前填入真实 Property ID / Widget ID
    tawkPropertyId: "TAWK_PROPERTY_ID_PLACEHOLDER",
    tawkWidgetId: "TAWK_WIDGET_ID_PLACEHOLDER",
    // Formspree 表单 ID：上线前填入真实 form id（如 "xxxxabcd"）
    formspreeId: "FORMSPREE_FORM_ID_PLACEHOLDER",
  },
} as const;

export type Site = typeof site;
