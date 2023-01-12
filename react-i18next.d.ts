// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import en_common from 'locales/en/common.json';
import pt_common from 'locales/pt/common.json';

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    en_common: typeof en_common;
    pt_common: typeof pt_common;
  }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'en_common';
    // custom resources type
    resources: {
      en_common: typeof en_common;
      pt_common: typeof pt_common;
    };
  }
}
