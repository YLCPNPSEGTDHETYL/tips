import { initializeApp } from "./gallery.js";
import { csData } from './TeXcsdata.js'

const checkboxMapping = {
  'SP-checkbox-1': { tag: 'MustKnow', text: '基本' },
  'SP-checkbox-2': { tag: 'Eq', text: '数式' },
  'SP-checkbox-3': { tag: 'EqSymbl', text: '数式記号' },
  'SP-checkbox-4': { tag: 'FigTabItm', text: '図表／箇条書き' },
  'SP-checkbox-5': { tag: 'Layout', text: 'レイアウト' },
  'SP-checkbox-6': { tag: 'StyDocStr', text: '体裁／文書構造' },
  'SP-checkbox-7': { tag: 'Package', text: 'Package' },
  'SP-checkbox-8': { tag: 'HighLevel', text: '高度' },
  'SP-checkbox-9': { tag: 'Macro', text: 'マクロ' }
};

initializeApp(checkboxMapping,csData);