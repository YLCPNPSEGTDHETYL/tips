/**
 * ナビゲーションアイテムの型定義
 */
export interface NavigationItem {
	title: string;
	url?: string;
	img?: string;
	tag?: string;
	thumbnail?: string;
	children?: NavigationItem[];
}

/**
 * グローバルナビゲーションデータ
 * 既存の_data/Gnav.ymlをTypeScript化
 */
export const NAVIGATION_DATA: NavigationItem[] = [
	{
		title: "実験、解析",
		children: [
			{
				title: "Igor",
				url: "/igor",
				img: "/assets/icon/Igor.svg",
				children: [
					{
						title: "ざっくり機能一覧",
						url: "/igor/igor-features",
						img: "/assets/icon/list.svg",
						tag: "red 導入",
						thumbnail: "/assets/thumbnail/Igor-features.png"
					},
					{
						title: "マクロを書こう",
						url: "/igor/igor-macro",
						img: "/assets/icon/beginner.svg",
						tag: "red 導入",
						thumbnail: "/assets/thumbnail/Igor-macro.png",
						children: [
							{
								title: "はじめに -マクロを書こう①-",
								url: "/igor/igor-macro1",
								img: "/assets/icon/beginner.svg",
								tag: "red 導入",
								thumbnail: "/assets/thumbnail/Igor-macro1.png"
							},
							{
								title: "重要な構文 -マクロを書こう②-",
								url: "/igor/igor-macro2",
								img: "/assets/icon/beginner.svg",
								tag: "red 導入",
								thumbnail: "/assets/thumbnail/Igor-macro2.png"
							},
							{
								title: "データの名前付け自動化 -マクロを書こう③-",
								url: "/igor/igor-macro3",
								img: "/assets/icon/beginner.svg",
								tag: "green 実践編",
								thumbnail: "/assets/thumbnail/Igor-macro3.png"
							}
						]
					},
					{
						title: "自作プロシージャ倉庫",
						url: "/igor/igor-macro-archive",
						img: "/assets/icon/emoji1f5c3.svg",
						tag: "green 実践編",
						thumbnail: "/assets/thumbnail/Igor-macro-archive.png"
					},
					{
						title: "便利テクニック集",
						url: "/igor/igor-technique",
						img: "/assets/icon/technique.svg",
						tag: "blue 機能紹介",
						thumbnail: "/assets/thumbnail/Igor-Technique.png"
					},
					{
						title: "Igor チートシート",
						url: "/igor/igor-cheatsheet",
						img: "/assets/icon/Igor-CheatSheet.svg",
						tag: "green 実践編",
						thumbnail: "/assets/thumbnail/Igor-CheatSheet.png"
					}
				]
			},
			{
				title: "VESTA",
				url: "/vesta",
				img: "/assets/icon/VESTA.png",
				children: [
					{
						title: "いい感じの六方晶を書こう",
						url: "/vesta/vesta-tetragonal",
						img: "/assets/icon/hexagon.svg",
						tag: "green 応用",
						thumbnail: "/assets/thumbnail/VESTA-Tetragonal.png"
					}
				]
			}
		]
	},
	{
		title: "発表、執筆",
		children: [
			{
				title: "TeX",
				url: "/tex",
				img: "/assets/icon/TeX.svg",
				children: [
					{
						title: "TeX Liveのインストール",
						url: "/tex/texlive-install",
						img: "/assets/icon/TeXLive.svg",
						tag: "red 導入",
						thumbnail: "/assets/thumbnail/TeXLive-install.png"
					},
					{
						title: "エディタ(TeXstudio)の準備",
						url: "/tex/texstudio",
						img: "/assets/icon/TeXstudio.png",
						tag: "red 導入",
						thumbnail: "/assets/thumbnail/TeXstudio.png"
					},
					{
						title: "オンラインエディタ(Overleaf)を使う",
						url: "/tex/overleaf",
						img: "/assets/icon/Overleaf.svg",
						tag: "red 導入",
						thumbnail: "/assets/thumbnail/Overleaf.png"
					},
					{
						title: "LaTeX文書を書いてみる",
						url: "/tex/latex-beginner",
						img: "/assets/icon/emoji1f4c4.svg",
						tag: "blue 文書作成",
						thumbnail: "/assets/thumbnail/kaitemiru.png"
					},
					{
						title: "LaTeX文書のお作法",
						url: "/tex/latex-sahou",
						img: "/assets/icon/sahou.svg",
						tag: "blue 文書作成",
						thumbnail: "/assets/thumbnail/TeX_sahou.png"
					},
					{
						title: "使ってはいけないコマンド",
						url: "/tex/latex-dont-use",
						img: "/assets/icon/sahou-spoil.svg",
						tag: "blue 文書作成",
						thumbnail: "/assets/thumbnail/LaTeX-dont-use.png"
					},
					{
						title: "数式フォントを考える",
						url: "/tex/latex-math-font",
						img: "/assets/icon/mathfont.svg",
						tag: "blue 文書作成",
						thumbnail: "/assets/thumbnail/LaTeX-math-font.png"
					},
					{
						title: "LaTeX チートシート",
						url: "/tex/latex-cheatsheet",
						img: "/assets/icon/snowman.svg",
						tag: "green 実践編",
						thumbnail: "/assets/thumbnail/LaTeX-CheatSheet.png"
					},
					{
						title: "【卒論、修論用】BibTeX置き場(和文、APS形式)",
						url: "/tex/bibtex",
						img: "/assets/icon/BibTeX_icon.svg",
						tag: "green 実践編",
						thumbnail: "/assets/thumbnail/BibTeX.png"
					}
				]
			},
			{
				title: "プレゼン",
				url: "/presentation",
				img: "/assets/icon/powerpoint_icon.png",
				children: [
					{
						title: "スライドマスターの設定",
						url: "/presentation/slide-master",
						img: "/assets/icon/SlideMaster.svg",
						tag: "red 導入",
						thumbnail: "/assets/thumbnail/pp-SlideMaster.png"
					},
					{
						title: "資料の作り方・発表の仕方（3PH向け）",
						url: "/presentation/3ph",
						img: "/assets/icon/3PH.svg",
						tag: "green 配布",
						thumbnail: "/Presentation/3PH/cover.png"
					}
				]
			}
		]
	},
	{
		title: "その他",
		children: [
			{
				title: "Adobe",
				url: "/adobe",
				img: "/assets/icon/adobe.svg",
				children: [
					{
						title: "画質を落とさずpdfを軽量化",
						url: "/adobe/pdf-lightweighting",
						img: "/assets/icon/lightweighting.svg",
						tag: "red Acrobat Pro",
						thumbnail: "/assets/thumbnail/pdf-lightweighting.png"
					}
				]
			}
		]
	}
];

/**
 * タグの色を取得するヘルパー関数
 */
export function getTagColor(tag: string): 'red' | 'blue' | 'green' {
	const colorMatch = tag.match(/^(red|blue|green)/);
	return (colorMatch?.[1] as 'red' | 'blue' | 'green') || 'red';
}

/**
 * タグのテキストを取得するヘルパー関数
 */
export function getTagText(tag: string): string {
	return tag.replace(/^(red|blue|green)\s+/, '');
}
