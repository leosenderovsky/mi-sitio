export interface DocenciaCicloDocumento {
  title: string;
  link: string;
}

export interface DocenciaCiclo {
  id: string;
  title: string;
  subtitle?: string;
  grupo: 'judaismo' | 'cine-argentino';
  documents: DocenciaCicloDocumento[];
}

export const docenciaCiclos: DocenciaCiclo[] = [
  // ── JUDAÍSMO EN CINE Y TV ────────────────────────────────────────────────
  {
    id: 'ciclo-1',
    grupo: 'judaismo',
    title: 'El humor judío en el cine',
    subtitle: 'Ciclo de cuatro encuentros (o cuatro encuentros individuales)',
    documents: [
      { title: 'Cine norteamericano', link: '/assets/docs/el-humor-judio-en-el-cine-norteamericano.pdf' },
      { title: 'Cine europeo', link: '/assets/docs/el-humor-judio-en-el-cine-europeo.pdf' },
      { title: 'Cine israelí', link: '/assets/docs/el-humor-judio-en-el-cine-israeli.pdf' },
      { title: 'Cine argentino', link: '/assets/docs/el-humor-judio-en-el-cine-argentino.pdf' },
    ],
  },
  {
    id: 'ciclo-2',
    grupo: 'judaismo',
    title: 'El humor judío en la TV norteamericana',
    subtitle: 'Ciclo de cuatro encuentros (o cuatro encuentros individuales)',
    documents: [
      { title: 'Personajes y referencias culturales', link: '/assets/docs/el-humor-judio-en-la-tv-norteamericana-parte-I.pdf' },
      { title: 'Ceremonias', link: '/assets/docs/el-humor-judio-en-la-tv-norteamericana-parte-II.pdf' },
      { title: 'El judío como "el otro" / Antisemitismo', link: '/assets/docs/el-humor-judio-en-la-tv-norteamericana-parte-III.pdf' },
      { title: 'Festividades', link: '/assets/docs/el-humor-judio-en-la-tv-norteamericana-parte-IV.pdf' },
    ],
  },
  {
    id: 'ciclo-3',
    grupo: 'judaismo',
    title: 'Historia del cine israelí',
    subtitle: 'Ciclo de cuatro encuentros (o cuatro encuentros individuales)',
    documents: [
      { title: 'Películas emblemáticas', link: '/assets/docs/cine-israeli-70x7.pdf' },
      { title: 'Humor y musical', link: '/assets/docs/humor-y-musical-en-el-cine-israeli.pdf' },
      { title: 'Ejército y conflictos bélicos', link: '/assets/docs/ejercito-y-conflictos-belicos-en-el-cine-israeli.pdf' },
      { title: 'Identidad religiosa y sexual', link: '/assets/docs/identidad-religiosa-y-sexual-en-el-cine-israeli.pdf' },
    ],
  },
  {
    id: 'ciclo-4',
    grupo: 'judaismo',
    title: 'Conflicto israelí - palestino en el cine documental',
    documents: [
      { title: 'Reseña del encuentro', link: '/assets/docs/conflicto-israeli-palestino-miradas-desde-el-cine-documental.pdf' },
    ],
  },
  {
    id: 'ciclo-5',
    grupo: 'judaismo',
    title: 'La shoá en el cine',
    documents: [
      { title: 'Reseña del encuentro', link: '/assets/docs/la-shoa-en-el-cine.pdf' },
    ],
  },
  {
    id: 'ciclo-6',
    grupo: 'judaismo',
    title: 'Judaísmo en el cine argentino',
    documents: [
      { title: 'Reseña del encuentro', link: '/assets/docs/el-judaismo-en-el-cine-argentino.pdf' },
    ],
  },
  {
    id: 'ciclo-7',
    grupo: 'judaismo',
    title: 'La mujer judía en el cine',
    documents: [
      { title: 'Reseña del encuentro', link: '/assets/docs/la-mujer-judia-en-el-cine.pdf' },
    ],
  },
  // ── CINE ARGENTINO ──────────────────────────────────────────────────────
  {
    id: 'ciclo-8',
    grupo: 'cine-argentino',
    title: 'El humor en el cine argentino',
    documents: [
      { title: 'Reseña del encuentro', link: '/assets/docs/el-humor-en-el-cine-argentino.pdf' },
    ],
  },
  {
    id: 'ciclo-9',
    grupo: 'cine-argentino',
    title: 'El cine argentino en dictadura',
    documents: [
      { title: 'Reseña del encuentro', link: '/assets/docs/el-cine-argentino-en-dictadura.pdf' },
    ],
  },
  {
    id: 'ciclo-10',
    grupo: 'cine-argentino',
    title: 'Cine bajo tijeras: La censura en dictadura',
    documents: [
      { title: 'Reseña del encuentro', link: '/assets/docs/cine-bajo-tijeras-la-censura-en-dictadura.pdf' },
    ],
  },
];
