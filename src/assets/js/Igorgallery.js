import { initializeApp } from "./gallery.js";
import { csData } from './Igorcsdata.js'

const checkboxMapping = {
  'SP-checkbox-1': { tag: 'MustKnow', text: '基本' },
  'SP-checkbox-2': { tag: 'Graph', text: 'グラフ' },
  'SP-checkbox-3': { tag: 'Table', text: 'テーブル' },
  'SP-checkbox-4': { tag: 'Analysis', text: '解析' },
  'SP-checkbox-5': { tag: 'Wave', text: 'Wave操作' },
  'SP-checkbox-6': { tag: 'Operation', text: 'コマンド／操作関数' },
  'SP-checkbox-7': { tag: 'Programing', text: 'プロシージャ' },
  'SP-checkbox-8': { tag: 'Layout', text: 'レイアウト' },
  'SP-checkbox-9': { tag: 'Utility', text: 'Utility' },
  'SP-checkbox-10': { tag: 'HighLevel', text: '高度' }
};

initializeApp(checkboxMapping,csData);