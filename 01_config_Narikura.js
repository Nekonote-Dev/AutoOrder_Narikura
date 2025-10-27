var NARIKURA_KURUMESHI_OVERRIDE = {
  CREATE_SHEET: {
    TEMPLATE_ID: "1nthTUqPRdNCA1H0S7kWX8DI-2n_FvAtF7Jv1O5zEEe4",
    OUTPUT: {
      OUTPUT_FOLDER_ID: "1mp_qA9i1m_Zm8rSgu1F3ovr65gQjIwu4",
    },
  },
  ERROR_REPORT: {
    TITLE: "とんかつ成蔵_くるめし_GAS",
  },
};

var NARIKURA_BASE_CONFIG = {
  EMAIL_FILTER: {
    PRINTED_LABEL: "01.メール印刷済",
  },
  FILL_ORDER_LIST: {
    ORDER_LIST_ID: "1y2t6izvLV_ZhBO0h1q5SHWHGtw8vQbRKt0fFHxYNKaM",
  },
  CALENDAR: {
    ID: {
      // ☆新規受注
      NEW: "4b209d7e06f26f4211644f916a7549ce670ee5b03f223076914b8a553bf75be3@group.calendar.google.com",
      // ②受注
      CONFIRMED:
        "09845285cdc05efe90f89f23bd0531b8dbc40ce25409e45e6c7ae91669538369@group.calendar.google.com",
      // ★変更あり
      CHANGED:
        "97aaaa180142521584949f8dacf5b334d6bda4fb026caf9297839a9ab4ee3809@group.calendar.google.com",
      // ⑤キャンセル
      CANCELLED:
        "4a9165df8d95d7fb4caef3ec6bbfe811405c018bc46cfb5b9011160b72ff91be@group.calendar.google.com",
      // 新規→変更あり
      BECHANGED:
        "d6502ba8b181e80cb056d44baf3a1653224e60a0ee66ab85cce25765ffcdc4ae@group.calendar.google.com",
      // 連絡事項
      CONTACT: "order.narikura@gmail.com",
      // ①現場確認済
      FIELD_CONFIRMED: "c91bf87aac6cbe5716dfa672ea2e0330a7877fc06b8f2a37dec8d6eed7814159@group.calendar.google.com",
      // ③現場印刷済（現場）
      FIELD_PRINTED: "efe8bbf1f0834d19d471baf9ce1632f3207c0e258b92596607d151fe3625bc21@group.calendar.google.com",
      // ⑤納品書印刷済
      DOCUMENT_PRINTED: "fb6ebcebc06a3b7593763488b196ba0969de489bd3a77d790e732f6e80cca77f@group.calendar.google.com",
      // ★変更確認済
      CHANGE_CONFIRMED: "ff46cf01bc9d42b83d5c2f4a05a251e6ecf549f68042892deaaaba9f17dafded@group.calendar.google.com",
    },
  },
  PRINT_SERVICE: {
    PENDING_FOLDER_ID: "1SvUS1dG0wbaeruYHhkrOoDKpbbcsHYgR",
  },
};

// NARIKURA 専用の最終 BASE_CONFIG を作成
var NARIKURA_FINAL_BASE_CONFIG = CommonLib.deepMerge(
  CommonLib.BASE_CONFIG,
  NARIKURA_BASE_CONFIG
);

// NARIKURA の CONFIG を作成
var NARIKURA_FINAL_KURUMESHI_OVERRIDE = CommonLib.deepMerge(
  CommonLib.KURUMESHI_OVERRIDE,
  NARIKURA_KURUMESHI_OVERRIDE
);
var CONFIG_NARIKURA_KURUMESHI = CommonLib.deepMerge(
  NARIKURA_FINAL_BASE_CONFIG,
  NARIKURA_FINAL_KURUMESHI_OVERRIDE
);
