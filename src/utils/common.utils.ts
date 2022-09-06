import {I18nextProviderProps} from "react-i18next";
import i18Next from "i18next";

export const formatMessage = (key: string, params?: I18nextProviderProps) => {
   const text = i18Next.t(key, params);
   return text;
};
