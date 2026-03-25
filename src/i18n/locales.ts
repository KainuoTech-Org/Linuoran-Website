export type Locale = "zh-CN" | "zh-TW" | "en";

export const localeNames: Record<Locale, string> = {
  "zh-CN": "\u7B80\u4F53",
  "zh-TW": "\u7E41\u9AD4",
  en: "EN",
};

export const localeLabels: Record<Locale, string> = {
  "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
  "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
  en: "English",
};

export type TranslationKey = keyof typeof zhCN;

const zhCN = {
  // Nav
  "nav.home": "\u9996\u9875",
  "nav.about": "\u5173\u4E8E",
  "nav.skills": "\u6280\u80FD",
  "nav.music": "\u97F3\u4E50",
  "nav.performances": "\u821E\u53F0",
  "nav.gallery": "\u5F71\u50CF",
  "nav.contact": "\u8054\u7CFB",
  "nav.myMusic": "\u6211\u7684\u97F3\u4E50",

  // Hero
  "hero.greeting": "\u4F60\u597D\uFF01\u6211\u662F",
  "hero.name": "\u674E\u8BFA\u7136\u3002",
  "hero.rolePrefix": "Music",
  "hero.roleSuffix": "Creator.",
  "hero.desc": "\u97F3\u4E50\u662F\u81EA\u7531\u7684\u5F62\u72B6\uFF0C\u6BCF\u4E00\u4E2A\u97F3\u7B26\u90FD\u662F\u4E00\u6B21\u5BF9\u4E16\u754C\u7684\u4F53\u9A8C\u3002",
  "hero.years": "\u5E74\u97F3\u4E50\u4E4B\u8DEF",
  "hero.works": "\u9996\u539F\u521B\u4F5C\u54C1",
  "hero.neteaseArtist": "\u7F51\u6613\u4E91\u97F3\u4E50\u72EC\u7ACB\u97F3\u4E50\u4EBA",

  // About
  "about.subtitle": "About Me",
  "about.title": "\u5173\u4E8E\u6211",
  "about.heading1": "\u6211\u662F\u674E\u8BFA\u7136\uFF0C",
  "about.heading2": "\u4E00\u4E2A\u7528\u97F3\u4E50\u4E0E\u4E16\u754C\u5BF9\u8BDD\u7684\u4EBA\u3002",
  "about.p1": "\u6BD5\u4E1A\u4E8E\u6CB3\u5357\u5E08\u8303\u5927\u5B66\u97F3\u4E50\u5B66\u9662\uFF0C\u4E3B\u4FEE\u5408\u5531\u6307\u6325\u3002\u5728\u6821\u671F\u95F4\u7CFB\u7EDF\u5B66\u4E60\u4E86\u58F0\u4E50\u3001\u5408\u5531\u4E0E\u6307\u6325\u3001\u94A2\u7434\u5373\u5174\u4F34\u594F\u3001\u821E\u53F0\u5B9E\u8DF5\u7B49\u4E13\u4E1A\u8BFE\u7A0B\uFF0C\u79EF\u7D2F\u4E86\u624E\u5B9E\u7684\u97F3\u4E50\u7406\u8BBA\u529F\u5E95\u4E0E\u4E30\u5BCC\u7684\u821E\u53F0\u7ECF\u9A8C\u3002",
  "about.p1.choralConducting": "\u5408\u5531\u6307\u6325",
  "about.p2": "\u73B0\u5C45\u6DF1\u5733\uFF0C\u4EFB\u76D0\u7530\u533A\u5916\u56FD\u8BED\u5C0F\u5B66\u97F3\u4E50\u6559\u5E08\uFF0C\u81F4\u529B\u4E8E\u5C06\u5BF9\u97F3\u4E50\u7684\u70ED\u7231\u4F20\u9012\u7ED9\u6BCF\u4E00\u4F4D\u5B66\u751F\u3002\u8BFE\u5802\u4E4B\u5916\uFF0C\u6211\u662F\u7F51\u6613\u4E91\u97F3\u4E50\u72EC\u7ACB\u97F3\u4E50\u4EBA\uFF0C\u521B\u4F5C\u5E76\u53D1\u5E03\u4E86\u591A\u9996\u539F\u521B\u6B4C\u66F2\uFF1B\u540C\u65F6\u4F5C\u4E3A\u6DF1\u5733\u6625\u6CE5\u5408\u5531\u56E2 (CHUNNI CHOIR) \u6210\u5458\uFF0C\u6D3B\u8DC3\u5728\u6DF1\u5733\u5404\u5927\u97F3\u4E50\u821E\u53F0\u4E0A\u3002",
  "about.p2.neteaseArtist": "\u7F51\u6613\u4E91\u97F3\u4E50\u72EC\u7ACB\u97F3\u4E50\u4EBA",
  "about.p2.chunni": "\u6DF1\u5733\u6625\u6CE5\u5408\u5531\u56E2 (CHUNNI CHOIR)",
  "about.p3": "\u97F3\u4E50\u4E8E\u6211\uFF0C\u662F\u81EA\u7531\u7684\u8868\u8FBE\uFF0C\u662F\u5BF9\u4E16\u754C\u6700\u771F\u5B9E\u7684\u4F53\u9A8C\u3002\u6BCF\u4E00\u9996\u6B4C\uFF0C\u90FD\u662F\u4E00\u6BB5\u8D70\u8FC7\u7684\u8DEF\u3002",
  "about.stat.works": "\u539F\u521B\u4F5C\u54C1",
  "about.stat.performances": "\u5927\u578B\u6F14\u51FA",
  "about.stat.years": "\u5E74\u97F3\u4E50\u4E4B\u8DEF",

  // Skills
  "skills.subtitle": "My Skills",
  "skills.title": "\u4E13\u4E1A\u6280\u80FD",
  "skills.vocal": "\u58F0\u4E50\u4E0E\u8868\u6F14",
  "skills.vocal.tags": "\u7F8E\u58F0\u5531\u6CD5,\u6C11\u65CF\u5531\u6CD5,\u5408\u5531\u6F14\u5531,\u72EC\u5531\u8868\u6F14,\u821E\u53F0\u8868\u73B0\u529B,\u58F0\u97F3\u63A7\u5236",
  "skills.choral": "\u5408\u5531\u6307\u6325",
  "skills.choral.tags": "\u5408\u5531\u6307\u6325,\u58F0\u90E8\u7F16\u6392,\u6392\u7EC3\u7EC4\u7EC7,\u4F5C\u54C1\u8BE0\u91CA,\u591A\u58F0\u90E8\u8BAD\u7EC3,\u56E2\u961F\u7BA1\u7406",
  "skills.composing": "\u521B\u4F5C\u4E0E\u5236\u4F5C",
  "skills.composing.tags": "\u8BCD\u66F2\u521B\u4F5C,\u7F16\u66F2,\u5F55\u97F3,\u6DF7\u97F3,\u539F\u521B\u6B4C\u66F2,\u8BD7\u8BCD\u6539\u7F16",
  "skills.keyboard": "\u952E\u76D8\u4E0E\u4E50\u7406",
  "skills.keyboard.tags": "\u94A2\u7434\u6F14\u594F,\u5373\u5174\u4F34\u594F,\u548C\u58F0\u5B66,\u66F2\u5F0F\u5206\u6790,\u89C6\u5531\u7EC3\u8033,\u4E50\u7406",
  "skills.education": "\u97F3\u4E50\u6559\u80B2",
  "skills.education.tags": "\u8BFE\u5802\u6559\u5B66,\u513F\u7AE5\u97F3\u4E50\u6559\u80B2,\u5408\u5531\u8BAD\u7EC3,\u97F3\u4E50\u7D20\u517B,\u821E\u53F0\u5B9E\u8DF5\u6307\u5BFC",
  "skills.hl.university": "\u6CB3\u5357\u5E08\u8303\u5927\u5B66",
  "skills.hl.university.desc": "\u97F3\u4E50\u5B66\u9662 \u00B7 \u5408\u5531\u6307\u6325\u65B9\u5411",
  "skills.hl.school": "\u6DF1\u5733\u76D0\u7530\u533A\u5916\u56FD\u8BED\u5C0F\u5B66",
  "skills.hl.school.desc": "\u97F3\u4E50\u6559\u5E08",
  "skills.hl.netease": "\u7F51\u6613\u4E91\u97F3\u4E50",
  "skills.hl.netease.desc": "\u72EC\u7ACB\u97F3\u4E50\u4EBA \u00B7 6+ \u9996\u539F\u521B",
  "skills.hl.chunni": "\u6DF1\u5733\u6625\u6CE5\u5408\u5531\u56E2",
  "skills.hl.chunni.desc": "CHUNNI CHOIR \u6210\u5458",

  // Philosophy
  "philosophy.line1": "\u97F3\u4E50\u662F\u81EA\u7531\u7684\u5F62\u72B6\uFF0C",
  "philosophy.line2": "\u6BCF\u4E00\u4E2A\u97F3\u7B26\u90FD\u662F\u4E00\u6B21\u5BF9\u4E16\u754C\u7684\u4F53\u9A8C\u3002",
  "philosophy.line3": "\u6211\u7528\u58F0\u97F3\u89E6\u78B0\u98CE\u3001\u9633\u5149\u548C\u8FDC\u65B9\uFF0C",
  "philosophy.line4": "\u8BA9\u65CB\u5F8B\u6210\u4E3A\u5FC3\u7075\u6700\u8BDA\u5B9E\u7684\u8BED\u8A00\u3002",
  "philosophy.author": "\u674E\u8BFA\u7136",

  // Music
  "music.subtitle": "My Music",
  "music.title": "\u539F\u521B\u97F3\u4E50",
  "music.desc": "\u6BCF\u4E00\u9996\u6B4C\u90FD\u662F\u4E00\u6BB5\u5FC3\u8DEF\u5386\u7A0B\uFF0C\u627F\u8F7D\u7740\u4E0D\u540C\u65F6\u523B\u7684\u611F\u609F\u4E0E\u60C5\u7EEA",
  "music.listenMore": "\u5728\u7F51\u6613\u4E91\u97F3\u4E50\u6536\u542C\u66F4\u591A",

  // Songs
  "song.renjian.title": "\u4EBA\u95F4\u56DB\u6708\u5929",
  "song.renjian.meta": "\u4F5C\u8BCD\uFF1A\u674E\u8BFA / \u6797\u5FBD\u56E0 \u00B7 \u4F5C\u66F2\uFF1A\u674E\u8BFA",
  "song.renjian.desc": "\u6539\u7F16\u81EA\u6797\u5FBD\u56E0\u7ECF\u5178\u8BD7\u7BC7\uFF0C\u4EE5\u6E29\u67D4\u7684\u65CB\u5F8B\u91CD\u65B0\u8BE0\u91CA\u8BD7\u610F\u7684\u6625\u5929\u3002",
  "song.yeshen.title": "\u591C\u6DF1\u82B1\u7761",
  "song.yeshen.meta": "\u8BCD\u66F2\uFF1A\u674E\u8BFA",
  "song.yeshen.desc": "\u591C\u8272\u4E2D\u82B1\u6735\u5B89\u7136\u5165\u7761\uFF0C\u4E00\u9996\u5173\u4E8E\u5B81\u9759\u4E0E\u601D\u5FF5\u7684\u539F\u521B\u5C0F\u54C1\u3002",
  "song.hua.title": "\u82B1\u8981\u9001\u7ED9\u4F60",
  "song.hua.meta": "\u8BCD\u66F2\uFF1A\u674E\u8BFA",
  "song.hua.desc": "\u628A\u6700\u7F8E\u7684\u82B1\u6735\u548C\u6700\u771F\u7684\u5FC3\u610F\u9001\u7ED9\u6700\u91CD\u8981\u7684\u4EBA\u3002",
  "song.youyuan.title": "\u6709\u7F18\u518D\u89C1",
  "song.youyuan.meta": "\u8BCD\u66F2\uFF1A\u674E\u8BFA",
  "song.youyuan.desc": "\u79BB\u522B\u4E0D\u662F\u7EC8\u70B9\uFF0C\u662F\u4E0B\u4E00\u6B21\u76F8\u9047\u7684\u5E8F\u7AE0\u3002",
  "song.haoba.title": "\u597D\u5427",
  "song.haoba.meta": "\u8BCD\u66F2\uFF1A\u674E\u8BFA",
  "song.haoba.desc": "\u4E00\u58F0\u300C\u597D\u5427\u300D\uFF0C\u662F\u59A5\u534F\uFF0C\u4E5F\u662F\u91CA\u7136\u3002",
  "song.ji.title": "\u8BB0",
  "song.ji.meta": "\u8BCD\u66F2\uFF1A\u674E\u8BFA",
  "song.ji.desc": "\u8BB0\u5FC6\u662F\u6700\u79C1\u5BC6\u7684\u6536\u85CF\uFF0C\u6BCF\u4E00\u5E27\u753B\u9762\u90FD\u503C\u5F97\u88AB\u73CD\u5B58\u3002",

  // Performances
  "perf.subtitle": "Performances",
  "perf.title": "\u821E\u53F0\u8DB3\u8FF9",
  "perf.desc": "\u4ECE\u6DF1\u5733\u4FDD\u5229\u5267\u9662\u5230\u6237\u5916\u821E\u53F0\uFF0C\u6BCF\u4E00\u6B21\u767B\u53F0\u90FD\u662F\u4E00\u6B21\u5FC3\u7075\u7684\u5171\u632F",
  "perf.nye.tag": "\u4FDD\u5229\u5267\u9662 \u00B7 \u97F3\u4E50\u4F1A",
  "perf.nye.title": "\u300C\u6709\u70B9\u4E1C\u897F\u300D\u8DE8\u5E74\u97F3\u4E50\u4F1A",
  "perf.nye.desc": "\u6625\u6CE5\u5408\u5531\u56E2\u5E74\u5EA6\u5927\u578B\u97F3\u4E50\u4F1A\uFF0C\u5728\u4FDD\u5229\u5267\u9662\u4E0E\u5343\u540D\u89C2\u4F17\u5171\u540C\u8FCE\u63A5\u65B0\u5E74\u3002\u821E\u53F0\u4E0A\u706F\u5149\u4E0E\u6B4C\u58F0\u4EA4\u7EC7\uFF0C\u89C2\u4F17\u5E2D\u4E0A\u624B\u673A\u95EA\u5149\u706F\u6C47\u6210\u661F\u6D77\u3002",
  "perf.arts.tag": "\u827A\u672F\u5C55\u6F14",
  "perf.arts.title": "\u300C\u521B\u827A\u540C\u884C\u300D\u6E7E\u533A\u9752\u5E74\u827A\u672F\u7CBE\u54C1\u5C55\u6F14",
  "perf.arts.desc": "\u53C2\u4E0E\u7CA4\u6E2F\u6FB3\u5927\u6E7E\u533A\u9752\u5E74\u827A\u672F\u7CBE\u54C1\u5C55\u6F14\uFF0C\u4E0E\u6765\u81EA\u5404\u5730\u7684\u4F18\u79C0\u9752\u5E74\u827A\u672F\u5BB6\u540C\u53F0\uFF0C\u5C55\u73B0\u5408\u5531\u827A\u672F\u7684\u72EC\u7279\u9B45\u529B\u3002",
  "perf.national.tag": "\u6237\u5916\u6F14\u51FA",
  "perf.national.title": "\u56FD\u5E86\u5047\u671F\u6237\u5916\u97F3\u4E50\u6F14\u51FA",
  "perf.national.desc": "\u56FD\u5E86\u671F\u95F4\u53C2\u4E0E\u6237\u5916\u97F3\u4E50\u6F14\u51FA\uFF0C\u5C06\u97F3\u4E50\u5E26\u5230\u4EBA\u7FA4\u4E2D\u95F4\uFF0C\u5728\u9633\u5149\u4E0E\u5FAE\u98CE\u4E2D\u611F\u53D7\u97F3\u4E50\u6700\u672C\u771F\u7684\u6837\u5B50\u3002",
  "perf.summer.tag": "\u4FDD\u5229\u5267\u9662 \u00B7 \u97F3\u4E50\u4F1A",
  "perf.summer.title": "\u6625\u6CE5\u5408\u5531\u56E2\u300C2025 \u590F\u65E5\u5531\u6E38\u8BB0\u300D",
  "perf.summer.desc": "\u52A0\u5165\u6625\u6CE5\u5408\u5531\u56E2\u540E\u7684\u9996\u573A\u5927\u578B\u97F3\u4E50\u4F1A\u3002\u5728\u4FDD\u5229\u5267\u9662\u7684\u821E\u53F0\u4E0A\uFF0C\u7EA2\u8272\u6CE2\u70B9\u4E0E\u660E\u9EC4\u8272\u4EA4\u7EC7\uFF0C\u9752\u6625\u7684\u8272\u5F69\u4F34\u968F\u6B4C\u58F0\u5728\u590F\u591C\u7EFD\u653E\u3002",

  // Gallery
  "gallery.subtitle": "Gallery",
  "gallery.title": "\u5149\u5F71\u8BB0\u5FC6",

  // Contact
  "contact.subtitle": "Get In Touch",
  "contact.title": "\u53D6\u5F97\u8054\u7CFB",
  "contact.desc": "\u65E0\u8BBA\u662F\u97F3\u4E50\u5408\u4F5C\u3001\u6F14\u51FA\u9080\u7EA6\u8FD8\u662F\u6559\u5B66\u54A8\u8BE2\uFF0C\u90FD\u6B22\u8FCE\u4E0E\u6211\u8054\u7CFB",
  "contact.email": "\u90AE\u7BB1",
  "contact.phone": "\u7535\u8BDD",
  "contact.netease": "\u7F51\u6613\u4E91\u97F3\u4E50",
  "contact.douyin": "\u6296\u97F3",
  "contact.city": "\u6240\u5728\u57CE\u5E02",
  "contact.cityValue": "\u4E2D\u56FD \u00B7 \u6DF1\u5733",
  "contact.chunni.quote": "\u201C\u843D\u7EA2\u4E0D\u662F\u65E0\u60C5\u7269\uFF0C\u5316\u4F5C\u6625\u6CE5\u66F4\u62A4\u82B1\u3002\u6211\u4EEC\u7528\u6B4C\u58F0\u5316\u4F5C\u6625\u6CE5\uFF0C\u6ECB\u517B\u6BCF\u4E00\u9897\u70ED\u7231\u97F3\u4E50\u7684\u5FC3\u3002\u201D",
  "contact.chunni.desc": "\u6DF1\u5733\u6625\u6CE5\u5408\u5531\u56E2\u662F\u4E00\u652F\u5145\u6EE1\u6D3B\u529B\u4E0E\u70ED\u60C5\u7684\u9752\u5E74\u5408\u5531\u56E2\u4F53\uFF0C\u6C47\u805A\u4E86\u6765\u81EA\u5404\u884C\u5404\u4E1A\u7684\u97F3\u4E50\u7231\u597D\u8005\u30022025\u5E74\uFF0C\u6211\u6709\u5E78\u52A0\u5165\u8FD9\u4E2A\u6E29\u6696\u7684\u5927\u5BB6\u5EAD\uFF0C\u5728\u4FDD\u5229\u5267\u9662\u7684\u821E\u53F0\u4E0A\uFF0C\u4E0E\u56E2\u5458\u4EEC\u4E00\u8D77\u7528\u548C\u58F0\u8BB2\u8FF0\u6545\u4E8B\uFF0C\u7528\u97F3\u4E50\u4F20\u9012\u529B\u91CF\u3002",

  // Footer
  "footer.tagline": "Music is the universal language of mankind.",
  "footer.copyright": "\u674E\u8BFA\u7136 Li Nuoran. All rights reserved.",

  // Sub-page
  "subpage.back": "\u8FD4\u56DE\u9996\u9875",
  "subpage.about.desc": "\u4E86\u89E3\u674E\u8BFA\u7136\u7684\u97F3\u4E50\u4E4B\u8DEF",
  "subpage.skills.desc": "\u58F0\u4E50\u3001\u6307\u6325\u3001\u521B\u4F5C\u3001\u6559\u80B2",
  "subpage.music.desc": "\u539F\u521B\u97F3\u4E50\u4F5C\u54C1\u96C6",
  "subpage.perf.desc": "\u821E\u53F0\u4E0A\u7684\u6BCF\u4E00\u4E2A\u7CBE\u5F69\u77AC\u95F4",
  "subpage.gallery.desc": "\u821E\u53F0\u4E0E\u97F3\u4E50\u7684\u5149\u5F71\u8BB0\u5FC6",
  "subpage.contact.desc": "\u6B22\u8FCE\u8054\u7CFB\u4E0E\u5408\u4F5C",

  // Gallery captions
  "gallery.nye.stage": "\u300C\u6709\u70B9\u4E1C\u897F\u300D\u8DE8\u5E74\u97F3\u4E50\u4F1A \u00B7 \u4FDD\u5229\u5267\u9662 \u00B7 2025.12",
  "gallery.nye.group": "\u8DE8\u5E74\u97F3\u4E50\u4F1A\u5408\u5F71 \u00B7 2025.12",
  "gallery.nye.outdoor": "\u8DE8\u5E74\u97F3\u4E50\u4F1A\u6237\u5916 \u00B7 2025.12",
  "gallery.arts": "\u300C\u521B\u827A\u540C\u884C\u300D\u6E7E\u533A\u9752\u5E74\u827A\u672F\u5C55\u6F14 \u00B7 2025.10",
  "gallery.national1": "\u56FD\u5E86\u6237\u5916\u97F3\u4E50\u6F14\u51FA \u00B7 2025.10",
  "gallery.national2": "\u56FD\u5E86\u6237\u5916\u6F14\u51FA \u00B7 2025.10",
  "gallery.summer": "\u6625\u6CE5\u5408\u5531\u56E2 2025\u590F\u65E5\u5531\u6E38\u8BB0 \u00B7 \u4FDD\u5229\u5267\u9662 \u00B7 2025.8",
};

const zhTW: typeof zhCN = {
  // Nav
  "nav.home": "\u9996\u9801",
  "nav.about": "\u95DC\u65BC",
  "nav.skills": "\u6280\u80FD",
  "nav.music": "\u97F3\u6A02",
  "nav.performances": "\u821E\u53F0",
  "nav.gallery": "\u5F71\u50CF",
  "nav.contact": "\u806F\u7E6B",
  "nav.myMusic": "\u6211\u7684\u97F3\u6A02",

  // Hero
  "hero.greeting": "\u4F60\u597D\uFF01\u6211\u662F",
  "hero.name": "\u674E\u8AFE\u7136\u3002",
  "hero.rolePrefix": "Music",
  "hero.roleSuffix": "Creator.",
  "hero.desc": "\u97F3\u6A02\u662F\u81EA\u7531\u7684\u5F62\u72C0\uFF0C\u6BCF\u4E00\u500B\u97F3\u7B26\u90FD\u662F\u4E00\u6B21\u5C0D\u4E16\u754C\u7684\u9AD4\u9A57\u3002",
  "hero.years": "\u5E74\u97F3\u6A02\u4E4B\u8DEF",
  "hero.works": "\u9996\u539F\u5275\u4F5C\u54C1",
  "hero.neteaseArtist": "\u7DB2\u6613\u96F2\u97F3\u6A02\u7368\u7ACB\u97F3\u6A02\u4EBA",

  // About
  "about.subtitle": "About Me",
  "about.title": "\u95DC\u65BC\u6211",
  "about.heading1": "\u6211\u662F\u674E\u8AFE\u7136\uFF0C",
  "about.heading2": "\u4E00\u500B\u7528\u97F3\u6A02\u8207\u4E16\u754C\u5C0D\u8A71\u7684\u4EBA\u3002",
  "about.p1": "\u7562\u696D\u65BC\u6CB3\u5357\u5E2B\u7BC4\u5927\u5B78\u97F3\u6A02\u5B78\u9662\uFF0C\u4E3B\u4FEE\u5408\u5531\u6307\u63EE\u3002\u5728\u6821\u671F\u9593\u7CFB\u7D71\u5B78\u7FD2\u4E86\u8072\u6A02\u3001\u5408\u5531\u8207\u6307\u63EE\u3001\u92FC\u7434\u5373\u8208\u4F34\u594F\u3001\u821E\u53F0\u5BE6\u8E10\u7B49\u5C08\u696D\u8AB2\u7A0B\uFF0C\u7D2F\u7A4D\u4E86\u624E\u5BE6\u7684\u97F3\u6A02\u7406\u8AD6\u529F\u5E95\u8207\u8C50\u5BCC\u7684\u821E\u53F0\u7D93\u9A57\u3002",
  "about.p1.choralConducting": "\u5408\u5531\u6307\u63EE",
  "about.p2": "\u73FE\u5C45\u6DF1\u5733\uFF0C\u4EFB\u9E7D\u7530\u5340\u5916\u570B\u8A9E\u5C0F\u5B78\u97F3\u6A02\u6559\u5E2B\uFF0C\u81F4\u529B\u65BC\u5C07\u5C0D\u97F3\u6A02\u7684\u71B1\u611B\u50B3\u905E\u7D66\u6BCF\u4E00\u4F4D\u5B78\u751F\u3002\u8AB2\u5802\u4E4B\u5916\uFF0C\u6211\u662F\u7DB2\u6613\u96F2\u97F3\u6A02\u7368\u7ACB\u97F3\u6A02\u4EBA\uFF0C\u5275\u4F5C\u4E26\u767C\u4F48\u4E86\u591A\u9996\u539F\u5275\u6B4C\u66F2\uFF1B\u540C\u6642\u4F5C\u70BA\u6DF1\u5733\u6625\u6CE5\u5408\u5531\u5718 (CHUNNI CHOIR) \u6210\u54E1\uFF0C\u6D3B\u8E8D\u5728\u6DF1\u5733\u5404\u5927\u97F3\u6A02\u821E\u53F0\u4E0A\u3002",
  "about.p2.neteaseArtist": "\u7DB2\u6613\u96F2\u97F3\u6A02\u7368\u7ACB\u97F3\u6A02\u4EBA",
  "about.p2.chunni": "\u6DF1\u5733\u6625\u6CE5\u5408\u5531\u5718 (CHUNNI CHOIR)",
  "about.p3": "\u97F3\u6A02\u65BC\u6211\uFF0C\u662F\u81EA\u7531\u7684\u8868\u9054\uFF0C\u662F\u5C0D\u4E16\u754C\u6700\u771F\u5BE6\u7684\u9AD4\u9A57\u3002\u6BCF\u4E00\u9996\u6B4C\uFF0C\u90FD\u662F\u4E00\u6BB5\u8D70\u904E\u7684\u8DEF\u3002",
  "about.stat.works": "\u539F\u5275\u4F5C\u54C1",
  "about.stat.performances": "\u5927\u578B\u6F14\u51FA",
  "about.stat.years": "\u5E74\u97F3\u6A02\u4E4B\u8DEF",

  // Skills
  "skills.subtitle": "My Skills",
  "skills.title": "\u5C08\u696D\u6280\u80FD",
  "skills.vocal": "\u8072\u6A02\u8207\u8868\u6F14",
  "skills.vocal.tags": "\u7F8E\u8072\u5531\u6CD5,\u6C11\u65CF\u5531\u6CD5,\u5408\u5531\u6F14\u5531,\u7368\u5531\u8868\u6F14,\u821E\u53F0\u8868\u73FE\u529B,\u8072\u97F3\u63A7\u5236",
  "skills.choral": "\u5408\u5531\u6307\u63EE",
  "skills.choral.tags": "\u5408\u5531\u6307\u63EE,\u8072\u90E8\u7DE8\u6392,\u6392\u7DF4\u7D44\u7E54,\u4F5C\u54C1\u8A6E\u91CB,\u591A\u8072\u90E8\u8A13\u7DF4,\u5718\u968A\u7BA1\u7406",
  "skills.composing": "\u5275\u4F5C\u8207\u88FD\u4F5C",
  "skills.composing.tags": "\u8A5E\u66F2\u5275\u4F5C,\u7DE8\u66F2,\u9304\u97F3,\u6DF7\u97F3,\u539F\u5275\u6B4C\u66F2,\u8A69\u8A5E\u6539\u7DE8",
  "skills.keyboard": "\u9375\u76E4\u8207\u6A02\u7406",
  "skills.keyboard.tags": "\u92FC\u7434\u6F14\u594F,\u5373\u8208\u4F34\u594F,\u548C\u8072\u5B78,\u66F2\u5F0F\u5206\u6790,\u8996\u5531\u7DF4\u8033,\u6A02\u7406",
  "skills.education": "\u97F3\u6A02\u6559\u80B2",
  "skills.education.tags": "\u8AB2\u5802\u6559\u5B78,\u5152\u7AE5\u97F3\u6A02\u6559\u80B2,\u5408\u5531\u8A13\u7DF4,\u97F3\u6A02\u7D20\u990A,\u821E\u53F0\u5BE6\u8E10\u6307\u5C0E",
  "skills.hl.university": "\u6CB3\u5357\u5E2B\u7BC4\u5927\u5B78",
  "skills.hl.university.desc": "\u97F3\u6A02\u5B78\u9662 \u00B7 \u5408\u5531\u6307\u63EE\u65B9\u5411",
  "skills.hl.school": "\u6DF1\u5733\u9E7D\u7530\u5340\u5916\u570B\u8A9E\u5C0F\u5B78",
  "skills.hl.school.desc": "\u97F3\u6A02\u6559\u5E2B",
  "skills.hl.netease": "\u7DB2\u6613\u96F2\u97F3\u6A02",
  "skills.hl.netease.desc": "\u7368\u7ACB\u97F3\u6A02\u4EBA \u00B7 6+ \u9996\u539F\u5275",
  "skills.hl.chunni": "\u6DF1\u5733\u6625\u6CE5\u5408\u5531\u5718",
  "skills.hl.chunni.desc": "CHUNNI CHOIR \u6210\u54E1",

  // Philosophy
  "philosophy.line1": "\u97F3\u6A02\u662F\u81EA\u7531\u7684\u5F62\u72C0\uFF0C",
  "philosophy.line2": "\u6BCF\u4E00\u500B\u97F3\u7B26\u90FD\u662F\u4E00\u6B21\u5C0D\u4E16\u754C\u7684\u9AD4\u9A57\u3002",
  "philosophy.line3": "\u6211\u7528\u8072\u97F3\u89F8\u78B0\u98A8\u3001\u967D\u5149\u548C\u9060\u65B9\uFF0C",
  "philosophy.line4": "\u8B93\u65CB\u5F8B\u6210\u70BA\u5FC3\u9748\u6700\u8AA0\u5BE6\u7684\u8A9E\u8A00\u3002",
  "philosophy.author": "\u674E\u8AFE\u7136",

  // Music
  "music.subtitle": "My Music",
  "music.title": "\u539F\u5275\u97F3\u6A02",
  "music.desc": "\u6BCF\u4E00\u9996\u6B4C\u90FD\u662F\u4E00\u6BB5\u5FC3\u8DEF\u6B77\u7A0B\uFF0C\u627F\u8F09\u8457\u4E0D\u540C\u6642\u523B\u7684\u611F\u609F\u8207\u60C5\u7DD2",
  "music.listenMore": "\u5728\u7DB2\u6613\u96F2\u97F3\u6A02\u6536\u807D\u66F4\u591A",

  // Songs
  "song.renjian.title": "\u4EBA\u9593\u56DB\u6708\u5929",
  "song.renjian.meta": "\u4F5C\u8A5E\uFF1A\u674E\u8AFE / \u6797\u5FBD\u56E0 \u00B7 \u4F5C\u66F2\uFF1A\u674E\u8AFE",
  "song.renjian.desc": "\u6539\u7DE8\u81EA\u6797\u5FBD\u56E0\u7D93\u5178\u8A69\u7BC7\uFF0C\u4EE5\u6EAB\u67D4\u7684\u65CB\u5F8B\u91CD\u65B0\u8A6E\u91CB\u8A69\u610F\u7684\u6625\u5929\u3002",
  "song.yeshen.title": "\u591C\u6DF1\u82B1\u7761",
  "song.yeshen.meta": "\u8A5E\u66F2\uFF1A\u674E\u8AFE",
  "song.yeshen.desc": "\u591C\u8272\u4E2D\u82B1\u6735\u5B89\u7136\u5165\u7761\uFF0C\u4E00\u9996\u95DC\u65BC\u5BE7\u975C\u8207\u601D\u5FF5\u7684\u539F\u5275\u5C0F\u54C1\u3002",
  "song.hua.title": "\u82B1\u8981\u9001\u7D66\u4F60",
  "song.hua.meta": "\u8A5E\u66F2\uFF1A\u674E\u8AFE",
  "song.hua.desc": "\u628A\u6700\u7F8E\u7684\u82B1\u6735\u548C\u6700\u771F\u7684\u5FC3\u610F\u9001\u7D66\u6700\u91CD\u8981\u7684\u4EBA\u3002",
  "song.youyuan.title": "\u6709\u7DE3\u518D\u898B",
  "song.youyuan.meta": "\u8A5E\u66F2\uFF1A\u674E\u8AFE",
  "song.youyuan.desc": "\u96E2\u5225\u4E0D\u662F\u7D42\u9EDE\uFF0C\u662F\u4E0B\u4E00\u6B21\u76F8\u9047\u7684\u5E8F\u7AE0\u3002",
  "song.haoba.title": "\u597D\u5427",
  "song.haoba.meta": "\u8A5E\u66F2\uFF1A\u674E\u8AFE",
  "song.haoba.desc": "\u4E00\u8072\u300C\u597D\u5427\u300D\uFF0C\u662F\u59A5\u5354\uFF0C\u4E5F\u662F\u91CB\u7136\u3002",
  "song.ji.title": "\u8A18",
  "song.ji.meta": "\u8A5E\u66F2\uFF1A\u674E\u8AFE",
  "song.ji.desc": "\u8A18\u61B6\u662F\u6700\u79C1\u5BC6\u7684\u6536\u85CF\uFF0C\u6BCF\u4E00\u5E40\u756B\u9762\u90FD\u503C\u5F97\u88AB\u73CD\u5B58\u3002",

  // Performances
  "perf.subtitle": "Performances",
  "perf.title": "\u821E\u53F0\u8DB3\u8DE1",
  "perf.desc": "\u5F9E\u6DF1\u5733\u4FDD\u5229\u5287\u9662\u5230\u6236\u5916\u821E\u53F0\uFF0C\u6BCF\u4E00\u6B21\u767B\u53F0\u90FD\u662F\u4E00\u6B21\u5FC3\u9748\u7684\u5171\u632F",
  "perf.nye.tag": "\u4FDD\u5229\u5287\u9662 \u00B7 \u97F3\u6A02\u6703",
  "perf.nye.title": "\u300C\u6709\u9EDE\u6771\u897F\u300D\u8DE8\u5E74\u97F3\u6A02\u6703",
  "perf.nye.desc": "\u6625\u6CE5\u5408\u5531\u5718\u5E74\u5EA6\u5927\u578B\u97F3\u6A02\u6703\uFF0C\u5728\u4FDD\u5229\u5287\u9662\u8207\u5343\u540D\u89C0\u773E\u5171\u540C\u8FCE\u63A5\u65B0\u5E74\u3002\u821E\u53F0\u4E0A\u71C8\u5149\u8207\u6B4C\u8072\u4EA4\u7E54\uFF0C\u89C0\u773E\u5E2D\u4E0A\u624B\u6A5F\u9583\u5149\u71C8\u532F\u6210\u661F\u6D77\u3002",
  "perf.arts.tag": "\u85DD\u8853\u5C55\u6F14",
  "perf.arts.title": "\u300C\u5275\u85DD\u540C\u884C\u300D\u7063\u5340\u9752\u5E74\u85DD\u8853\u7CBE\u54C1\u5C55\u6F14",
  "perf.arts.desc": "\u53C3\u8207\u7CA4\u6E2F\u6FB3\u5927\u7063\u5340\u9752\u5E74\u85DD\u8853\u7CBE\u54C1\u5C55\u6F14\uFF0C\u8207\u4F86\u81EA\u5404\u5730\u7684\u512A\u79C0\u9752\u5E74\u85DD\u8853\u5BB6\u540C\u53F0\uFF0C\u5C55\u73FE\u5408\u5531\u85DD\u8853\u7684\u7368\u7279\u9B45\u529B\u3002",
  "perf.national.tag": "\u6236\u5916\u6F14\u51FA",
  "perf.national.title": "\u570B\u6176\u5047\u671F\u6236\u5916\u97F3\u6A02\u6F14\u51FA",
  "perf.national.desc": "\u570B\u6176\u671F\u9593\u53C3\u8207\u6236\u5916\u97F3\u6A02\u6F14\u51FA\uFF0C\u5C07\u97F3\u6A02\u5E36\u5230\u4EBA\u7FA4\u4E2D\u9593\uFF0C\u5728\u967D\u5149\u8207\u5FAE\u98A8\u4E2D\u611F\u53D7\u97F3\u6A02\u6700\u672C\u771F\u7684\u6A23\u5B50\u3002",
  "perf.summer.tag": "\u4FDD\u5229\u5287\u9662 \u00B7 \u97F3\u6A02\u6703",
  "perf.summer.title": "\u6625\u6CE5\u5408\u5531\u5718\u300C2025 \u590F\u65E5\u5531\u904A\u8A18\u300D",
  "perf.summer.desc": "\u52A0\u5165\u6625\u6CE5\u5408\u5531\u5718\u5F8C\u7684\u9996\u5834\u5927\u578B\u97F3\u6A02\u6703\u3002\u5728\u4FDD\u5229\u5287\u9662\u7684\u821E\u53F0\u4E0A\uFF0C\u7D05\u8272\u6CE2\u9EDE\u8207\u660E\u9EC3\u8272\u4EA4\u7E54\uFF0C\u9752\u6625\u7684\u8272\u5F69\u4F34\u96A8\u6B4C\u8072\u5728\u590F\u591C\u7DBB\u653E\u3002",

  // Gallery
  "gallery.subtitle": "Gallery",
  "gallery.title": "\u5149\u5F71\u8A18\u61B6",

  // Contact
  "contact.subtitle": "Get In Touch",
  "contact.title": "\u53D6\u5F97\u806F\u7E6B",
  "contact.desc": "\u7121\u8AD6\u662F\u97F3\u6A02\u5408\u4F5C\u3001\u6F14\u51FA\u9080\u7D04\u9084\u662F\u6559\u5B78\u8AEE\u8A62\uFF0C\u90FD\u6B61\u8FCE\u8207\u6211\u806F\u7E6B",
  "contact.email": "\u90F5\u7BB1",
  "contact.phone": "\u96FB\u8A71",
  "contact.netease": "\u7DB2\u6613\u96F2\u97F3\u6A02",
  "contact.douyin": "\u6296\u97F3",
  "contact.city": "\u6240\u5728\u57CE\u5E02",
  "contact.cityValue": "\u4E2D\u570B \u00B7 \u6DF1\u5733",
  "contact.chunni.quote": "\u201C\u843D\u7D05\u4E0D\u662F\u7121\u60C5\u7269\uFF0C\u5316\u4F5C\u6625\u6CE5\u66F4\u8B77\u82B1\u3002\u6211\u5011\u7528\u6B4C\u8072\u5316\u4F5C\u6625\u6CE5\uFF0C\u6ECB\u990A\u6BCF\u4E00\u9897\u71B1\u611B\u97F3\u6A02\u7684\u5FC3\u3002\u201D",
  "contact.chunni.desc": "\u6DF1\u5733\u6625\u6CE5\u5408\u5531\u5718\u662F\u4E00\u652F\u5145\u6EFF\u6D3B\u529B\u8207\u71B1\u60C5\u7684\u9752\u5E74\u5408\u5531\u5718\u9AD4\uFF0C\u532F\u805A\u4E86\u4F86\u81EA\u5404\u884C\u5404\u696D\u7684\u97F3\u6A02\u611B\u597D\u8005\u30022025\u5E74\uFF0C\u6211\u6709\u5E78\u52A0\u5165\u9019\u500B\u6EAB\u6696\u7684\u5927\u5BB6\u5EAD\uFF0C\u5728\u4FDD\u5229\u5287\u9662\u7684\u821E\u53F0\u4E0A\uFF0C\u8207\u5718\u54E1\u5011\u4E00\u8D77\u7528\u548C\u8072\u8B1B\u8FF0\u6545\u4E8B\uFF0C\u7528\u97F3\u6A02\u50B3\u905E\u529B\u91CF\u3002",

  // Footer
  "footer.tagline": "Music is the universal language of mankind.",
  "footer.copyright": "\u674E\u8AFE\u7136 Li Nuoran. All rights reserved.",

  // Sub-page
  "subpage.back": "\u8FD4\u56DE\u9996\u9801",
  "subpage.about.desc": "\u4E86\u89E3\u674E\u8AFE\u7136\u7684\u97F3\u6A02\u4E4B\u8DEF",
  "subpage.skills.desc": "\u8072\u6A02\u3001\u6307\u63EE\u3001\u5275\u4F5C\u3001\u6559\u80B2",
  "subpage.music.desc": "\u539F\u5275\u97F3\u6A02\u4F5C\u54C1\u96C6",
  "subpage.perf.desc": "\u821E\u53F0\u4E0A\u7684\u6BCF\u4E00\u500B\u7CBE\u5F69\u77AC\u9593",
  "subpage.gallery.desc": "\u821E\u53F0\u8207\u97F3\u6A02\u7684\u5149\u5F71\u8A18\u61B6",
  "subpage.contact.desc": "\u6B61\u8FCE\u806F\u7E6B\u8207\u5408\u4F5C",

  // Gallery captions
  "gallery.nye.stage": "\u300C\u6709\u9EDE\u6771\u897F\u300D\u8DE8\u5E74\u97F3\u6A02\u6703 \u00B7 \u4FDD\u5229\u5287\u9662 \u00B7 2025.12",
  "gallery.nye.group": "\u8DE8\u5E74\u97F3\u6A02\u6703\u5408\u5F71 \u00B7 2025.12",
  "gallery.nye.outdoor": "\u8DE8\u5E74\u97F3\u6A02\u6703\u6236\u5916 \u00B7 2025.12",
  "gallery.arts": "\u300C\u5275\u85DD\u540C\u884C\u300D\u7063\u5340\u9752\u5E74\u85DD\u8853\u5C55\u6F14 \u00B7 2025.10",
  "gallery.national1": "\u570B\u6176\u6236\u5916\u97F3\u6A02\u6F14\u51FA \u00B7 2025.10",
  "gallery.national2": "\u570B\u6176\u6236\u5916\u6F14\u51FA \u00B7 2025.10",
  "gallery.summer": "\u6625\u6CE5\u5408\u5531\u5718 2025\u590F\u65E5\u5531\u904A\u8A18 \u00B7 \u4FDD\u5229\u5287\u9662 \u00B7 2025.8",
};

const en: typeof zhCN = {
  // Nav
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.music": "Music",
  "nav.performances": "Stage",
  "nav.gallery": "Gallery",
  "nav.contact": "Contact",
  "nav.myMusic": "My Music",

  // Hero
  "hero.greeting": "Hello! I'm",
  "hero.name": "Li Nuoran.",
  "hero.rolePrefix": "Music",
  "hero.roleSuffix": "Creator.",
  "hero.desc": "Music is the shape of freedom \u2014 every note is an experience of the world.",
  "hero.years": "Years of Music",
  "hero.works": "Original Works",
  "hero.neteaseArtist": "NetEase Cloud Music Independent Artist",

  // About
  "about.subtitle": "About Me",
  "about.title": "About Me",
  "about.heading1": "I'm Li Nuoran,",
  "about.heading2": "a person who speaks to the world through music.",
  "about.p1": "Graduated from Henan Normal University, School of Music, majoring in choral conducting. During my studies, I systematically learned vocal music, choral conducting, piano accompaniment, and stage performance, building a solid foundation in music theory and rich stage experience.",
  "about.p1.choralConducting": "choral conducting",
  "about.p2": "Currently based in Shenzhen, working as a music teacher at Yantian Foreign Language Primary School, dedicated to passing on the love of music to every student. Beyond the classroom, I am an independent artist on NetEase Cloud Music with multiple original songs published; I'm also an active member of the Shenzhen CHUNNI CHOIR, performing on major stages across the city.",
  "about.p2.neteaseArtist": "NetEase Cloud Music independent artist",
  "about.p2.chunni": "Shenzhen CHUNNI CHOIR",
  "about.p3": "To me, music is a free expression \u2014 the most authentic experience of the world. Every song marks a road I've walked.",
  "about.stat.works": "Original Works",
  "about.stat.performances": "Major Performances",
  "about.stat.years": "Years of Music",

  // Skills
  "skills.subtitle": "My Skills",
  "skills.title": "Professional Skills",
  "skills.vocal": "Vocal & Performance",
  "skills.vocal.tags": "Bel Canto,Folk Singing,Choral Singing,Solo Performance,Stage Presence,Voice Control",
  "skills.choral": "Choral Conducting",
  "skills.choral.tags": "Choral Conducting,Voice Arrangement,Rehearsal Organization,Work Interpretation,Multi-Part Training,Team Management",
  "skills.composing": "Composition & Production",
  "skills.composing.tags": "Songwriting,Arranging,Recording,Mixing,Original Songs,Poetry Adaptation",
  "skills.keyboard": "Keyboard & Theory",
  "skills.keyboard.tags": "Piano Performance,Improvisation,Harmony,Form Analysis,Sight-Singing,Music Theory",
  "skills.education": "Music Education",
  "skills.education.tags": "Classroom Teaching,Children's Music Education,Choral Training,Musical Literacy,Stage Practice Guidance",
  "skills.hl.university": "Henan Normal University",
  "skills.hl.university.desc": "School of Music \u00B7 Choral Conducting",
  "skills.hl.school": "Yantian Foreign Language Primary School",
  "skills.hl.school.desc": "Music Teacher",
  "skills.hl.netease": "NetEase Cloud Music",
  "skills.hl.netease.desc": "Independent Artist \u00B7 6+ Originals",
  "skills.hl.chunni": "Shenzhen CHUNNI CHOIR",
  "skills.hl.chunni.desc": "CHUNNI CHOIR Member",

  // Philosophy
  "philosophy.line1": "Music is the shape of freedom,",
  "philosophy.line2": "every note an experience of the world.",
  "philosophy.line3": "I touch the wind, sunlight, and the distance with sound,",
  "philosophy.line4": "letting melody become the most honest language of the soul.",
  "philosophy.author": "Li Nuoran",

  // Music
  "music.subtitle": "My Music",
  "music.title": "Original Music",
  "music.desc": "Each song is a journey of the heart, carrying emotions and reflections from different moments",
  "music.listenMore": "Listen to more on NetEase Cloud Music",

  // Songs
  "song.renjian.title": "April on Earth",
  "song.renjian.meta": "Lyrics: Li Nuo / Lin Huiyin \u00B7 Music: Li Nuo",
  "song.renjian.desc": "Adapted from Lin Huiyin's classic poem, reinterpreting the poetic spring with tender melody.",
  "song.yeshen.title": "Flowers Sleep at Night",
  "song.yeshen.meta": "Words & Music: Li Nuo",
  "song.yeshen.desc": "Flowers falling asleep in the night \u2014 an original piece about peace and longing.",
  "song.hua.title": "Flowers for You",
  "song.hua.meta": "Words & Music: Li Nuo",
  "song.hua.desc": "Sending the most beautiful flowers and sincerest feelings to the most important person.",
  "song.youyuan.title": "Until We Meet Again",
  "song.youyuan.meta": "Words & Music: Li Nuo",
  "song.youyuan.desc": "Farewell is not the end, but the prelude to the next encounter.",
  "song.haoba.title": "Alright",
  "song.haoba.meta": "Words & Music: Li Nuo",
  "song.haoba.desc": "A single 'alright' \u2014 part compromise, part letting go.",
  "song.ji.title": "Remember",
  "song.ji.meta": "Words & Music: Li Nuo",
  "song.ji.desc": "Memory is the most private collection \u2014 every frame deserves to be treasured.",

  // Performances
  "perf.subtitle": "Performances",
  "perf.title": "Stage Footprints",
  "perf.desc": "From Shenzhen Poly Theatre to outdoor stages, every performance is a resonance of the soul",
  "perf.nye.tag": "Poly Theatre \u00B7 Concert",
  "perf.nye.title": "\"Something Special\" New Year's Eve Concert",
  "perf.nye.desc": "CHUNNI CHOIR's annual concert at Poly Theatre, welcoming the new year with a thousand audience members. Stage lights intertwined with voices, phone flashlights forming a sea of stars.",
  "perf.arts.tag": "Art Exhibition",
  "perf.arts.title": "\"Creative Arts Together\" GBA Youth Art Showcase",
  "perf.arts.desc": "Participating in the Greater Bay Area Youth Art Showcase, performing alongside outstanding young artists from across the region, demonstrating the unique charm of choral art.",
  "perf.national.tag": "Outdoor Performance",
  "perf.national.title": "National Day Outdoor Music Performance",
  "perf.national.desc": "Outdoor music performance during National Day, bringing music to the crowd, experiencing the most authentic side of music under sunshine and breeze.",
  "perf.summer.tag": "Poly Theatre \u00B7 Concert",
  "perf.summer.title": "CHUNNI CHOIR \"2025 Summer Singing Journey\"",
  "perf.summer.desc": "The first major concert after joining CHUNNI CHOIR. On the Poly Theatre stage, red polka dots and bright yellow intertwined, colors of youth blooming with song on a summer night.",

  // Gallery
  "gallery.subtitle": "Gallery",
  "gallery.title": "Visual Memories",

  // Contact
  "contact.subtitle": "Get In Touch",
  "contact.title": "Get In Touch",
  "contact.desc": "Whether it's music collaboration, performance invitations, or teaching inquiries, feel free to reach out",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.netease": "NetEase Music",
  "contact.douyin": "Douyin",
  "contact.city": "Location",
  "contact.cityValue": "Shenzhen, China",
  "contact.chunni.quote": "\u201CFallen petals are not heartless things \u2014 they become spring mud to nourish flowers. We turn our voices into spring mud, nurturing every heart that loves music.\u201D",
  "contact.chunni.desc": "Shenzhen CHUNNI CHOIR is a vibrant youth choral ensemble, bringing together music lovers from all walks of life. In 2025, I was fortunate to join this warm family, sharing stories through harmony and conveying strength through music on the Poly Theatre stage.",

  // Footer
  "footer.tagline": "Music is the universal language of mankind.",
  "footer.copyright": "Li Nuoran. All rights reserved.",

  // Sub-page
  "subpage.back": "Back to Home",
  "subpage.about.desc": "Learn about Li Nuoran's musical journey",
  "subpage.skills.desc": "Vocal, Conducting, Composition, Education",
  "subpage.music.desc": "Collection of original music works",
  "subpage.perf.desc": "Every brilliant moment on stage",
  "subpage.gallery.desc": "Visual memories of stage and music",
  "subpage.contact.desc": "Welcome to connect and collaborate",

  // Gallery captions
  "gallery.nye.stage": "\"Something Special\" NYE Concert \u00B7 Poly Theatre \u00B7 2025.12",
  "gallery.nye.group": "NYE Concert Group Photo \u00B7 2025.12",
  "gallery.nye.outdoor": "NYE Concert Outdoor \u00B7 2025.12",
  "gallery.arts": "\"Creative Arts Together\" GBA Youth Art Showcase \u00B7 2025.10",
  "gallery.national1": "National Day Outdoor Performance \u00B7 2025.10",
  "gallery.national2": "National Day Outdoor Show \u00B7 2025.10",
  "gallery.summer": "CHUNNI CHOIR 2025 Summer Singing Journey \u00B7 Poly Theatre \u00B7 2025.8",
};

export const translations: Record<Locale, typeof zhCN> = {
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  en,
};
