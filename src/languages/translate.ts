import { en, vi } from './langs';

import { flattenObject } from '../helper/utils';

const language: { [key: string]: any } = {
  vi: flattenObject(vi),
  en: flattenObject(en),
};

export default language;
