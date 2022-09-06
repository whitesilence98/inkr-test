import {initReactI18next} from "react-i18next";
import i18n from "i18next";

import locales from "@locales";

const resources = {
   "en-US": {
      translation: locales["en-US"],
   },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   init: () =>
      i18n.use(initReactI18next).init({
         resources,
         lng: "en-US",
         interpolation: {
            escapeValue: false,
         },
      }),
};
