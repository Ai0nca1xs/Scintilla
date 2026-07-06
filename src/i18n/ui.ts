// Scintilla 雙語詞典：所有介面文字集中在這裡維護。
// 設計約定：分類學編碼與 metadata（等寬字體的機器風格文字）保持英文，不翻譯。

export type Lang = 'EN' | 'FR';

export const defaultLang: Lang = 'EN';

export const languages: Record<Lang, string> = {
	EN: 'English',
	FR: 'Français',
};

export interface Dict {
	site: {
		title: string;
		tagline: string;
		description: string;
	};
	nav: {
		home: string;
		project: string;
		gallery: string;
		contact: string;
	};
	home: {
		pageTitle: string;
		heroMeta: string;
		concept: string;
		introHtml: string;
		capabilitiesLabel: string;
		capabilities: string[];
		selectedLabel: string;
		galleryLabel: string;
		galleryText: string;
		galleryCta: string;
	};
	project: {
		pageTitle: string;
		heading: string;
		filterAll: string;
		statusInProgress: string;
		back: string;
	};
	categories: Record<'GRA' | 'SCE' | 'INS' | 'PRD' | 'PHO', string>;
	gallery: {
		pageTitle: string;
		heading: string;
	};
	contact: {
		pageTitle: string;
		heading: string;
		email: string;
		blurbHtml: string;
	};
}

export const dict: Record<Lang, Dict> = {
	EN: {
		site: {
			title: 'Scintilla',
			tagline: "Qianyu's digital space — Multidisciplinary designer",
			description:
				'Scintilla — the digital space and design archive of Qianyu, multidisciplinary designer.',
		},
		nav: {
			home: 'Home',
			project: 'Project',
			gallery: 'Gallery',
			contact: 'Contact',
		},
		home: {
			pageTitle: "Scintilla — Qianyu's digital space",
			heroMeta: 'Residue of a thousand burnt eras',
			concept: 'A physical translation of poetics through light, space, and material.',
			introHtml:
				'I am Qianyu, a multidisciplinary designer exploring the boundaries between <strong>Visual Identity</strong>, <strong>Spatial Narrative</strong>, and <strong>Interactive Experience</strong>. My work seeks to capture the <em>scintilla</em>—the subtle, fleeting sparks of conceptual fusion—and solidify them through rigorous design processes.',
			capabilitiesLabel: 'Capabilities | What I Do',
			capabilities: [
				'Visual Identity & Brand Systems',
				'Scenography & Spatial Narrative',
				'Installation & Interactive Experience',
				'Typography & Editorial Design',
				'Creative Direction & Strategy',
			],
			selectedLabel: 'Selected Projects',
			galleryLabel: 'Personal Aesthetic',
			galleryText: 'Audio, Painting, Photography, Writing, Music Sharing.',
			galleryCta: 'ENTER DIGITAL GALLERY ↗',
		},
		project: {
			pageTitle: 'Projects — Scintilla',
			heading: 'ARCHIVE / PROJECTS',
			filterAll: 'ALL',
			statusInProgress: 'IN PROGRESS',
			back: '← BACK TO ARCHIVE',
		},
		categories: {
			GRA: 'Graphic & Editorial',
			SCE: 'Scenography & Worldbuilding',
			INS: 'Installation & Interaction',
			PRD: 'Object & Product',
			PHO: 'Photography',
		},
		gallery: {
			pageTitle: 'Gallery — Scintilla',
			heading: 'AESTHETIC GALLERY',
		},
		contact: {
			pageTitle: 'Contact — Scintilla',
			heading: 'INITIATE TRANSMISSION',
			email: 'FELICETTEC341A@GMAIL.COM',
			blurbHtml:
				'Based in Bordeaux, France.<br />Open to internships, freelance opportunities and collaborations.',
		},
	},
	FR: {
		site: {
			title: 'Scintilla',
			tagline: "L'espace numérique de Qianyu — Designer pluridisciplinaire",
			description:
				"Scintilla — l'espace numérique et l'archive de design de Qianyu, designer pluridisciplinaire.",
		},
		nav: {
			home: 'Accueil',
			project: 'Projets',
			gallery: 'Galerie',
			contact: 'Contact',
		},
		home: {
			pageTitle: "Scintilla — l'espace numérique de Qianyu",
			heroMeta: 'Residue of a thousand burnt eras',
			concept: "Une traduction physique de la poétique, par la lumière, l'espace et la matière.",
			introHtml:
				"Je suis Qianyu, designer pluridisciplinaire explorant les frontières entre <strong>identité visuelle</strong>, <strong>narration spatiale</strong> et <strong>expérience interactive</strong>. Mon travail cherche à capter la <em>scintilla</em> — ces étincelles subtiles et fugaces où les concepts fusionnent — et à les fixer par un processus de design rigoureux.",
			capabilitiesLabel: 'Capacités | Ce que je fais',
			capabilities: [
				'Identité visuelle & systèmes de marque',
				'Scénographie & narration spatiale',
				'Installation & expérience interactive',
				'Typographie & design éditorial',
				'Direction créative & stratégie',
			],
			selectedLabel: 'Projets choisis',
			galleryLabel: 'Univers personnel',
			galleryText: 'Audio, peinture, photographie, écriture, partages musicaux.',
			galleryCta: 'ENTRER DANS LA GALERIE ↗',
		},
		project: {
			pageTitle: 'Projets — Scintilla',
			heading: 'ARCHIVE / PROJETS',
			filterAll: 'TOUS',
			statusInProgress: 'EN COURS',
			back: '← RETOUR À L’ARCHIVE',
		},
		categories: {
			GRA: 'Graphique & Éditorial',
			SCE: 'Scénographie & Univers',
			INS: 'Installation & Interaction',
			PRD: 'Objet & Produit',
			PHO: 'Photographie',
		},
		gallery: {
			pageTitle: 'Galerie — Scintilla',
			heading: 'GALERIE PERSONNELLE',
		},
		contact: {
			pageTitle: 'Contact — Scintilla',
			heading: 'INITIATE TRANSMISSION',
			email: 'FELICETTEC341A@GMAIL.COM',
			blurbHtml:
				'Bordeaux, France.<br />Disponible pour stages, missions freelance et collaborations.',
		},
	},
};
