# BAA — Bunseang Architects & Associates (Frontend)

Website frontend សុទ្ធ (គ្មាន backend) សម្រាប់ស្ទូឌីយោស្ថាបត្យកម្ម BAA។

## Stack

| ផ្នែក | ជ្រើសរើស | ហេតុអ្វី |
| --- | --- | --- |
| Build | **Vite 8** | dev server លឿនខ្លាំង, hot reload ភ្លាមៗ |
| UI | **React 19** | សរសេរ component លឿន ងាយបន្ថែមទំព័រ |
| Style | **Tailwind CSS v4** | សរសេរ style ក្នុង JSX តែម្ដង គ្មានឯកសារ CSS ច្រើន |
| Routing | **React Router 7** | ចុចចូលមើលស្នាដៃនីមួយៗបាន |
| Font | Cormorant Garamond + Jost + Kantumruy Pro | អក្សរឡាតាំង + ខ្មែរ |

## ការប្រើប្រាស់

```bash
npm install      # ដំឡើងម្ដងគត់
npm run dev      # បើក http://localhost:5173
npm run build    # បង្កើតឯកសារសម្រាប់ដាក់ online (dist/)
npm run preview  # មើល build សាកល្បង
```

Deploy: អាច upload folder `dist/` ទៅ **Netlify / Vercel / Cloudflare Pages** បានតែម្ដង (គ្មាន server ត្រូវការ)។
បើ deploy លើ static host សូមកំណត់ SPA fallback ទៅ `index.html` ដើម្បីឲ្យ route `/projects/...` ដំណើរការ។

## រចនាសម្ព័ន្ធ

```
src/
  data/projects.js          ← ព័ត៌មានស្នាដៃទាំងអស់ (កែត្រង់នេះដើម្បីបន្ថែមគម្រោង)
  i18n/dictionary.js        ← អក្សរ EN / KH ទាំងអស់
  i18n/LanguageContext.jsx  ← ប៊ូតុងប្ដូរភាសា EN / KH
  components/
    Header.jsx              ← nav + menu ពេញអេក្រង់
    Hero.jsx                ← ផ្នែកខាងលើ (BAA + សម្រង់សម្ដីស្ថាបនិក)
    SelectedAndAbout.jsx    ← Selected Projects + Context/Culture/Craft/Future
    ProcessAndPillars.jsx   ← Our Design Process + រូប ៤ (Research…Journal)
    ProjectCard.jsx, ui.jsx (Reveal, Img, ArrowLink, Ornament)
    Footer.jsx
  pages/
    Home.jsx, Projects.jsx, ProjectDetail.jsx, ComingSoon.jsx
```

## របៀបបន្ថែមស្នាដៃថ្មី

បើក `src/data/projects.js` ហើយ copy object មួយ រួចប្ដូរតម្លៃ៖

```js
{
  slug: 'my-new-project',        // URL: /projects/my-new-project
  title: 'My New Project',
  titleKh: 'គម្រោងថ្មីរបស់ខ្ញុំ',
  location: 'Phnom Penh, Cambodia',
  category: 'Residential',
  year: '2026',
  image: '/projects/my-new-project/cover.jpg',   // ដាក់រូបក្នុង public/projects/...
  gallery: ['/projects/my-new-project/01.jpg'],
  excerpt: 'ពិពណ៌នាខ្លីៗ...',
  featured: true,                 // បើ true នឹងបង្ហាញនៅទំព័រដើម (យក ៤ ដំបូង)
}
```

## រូបភាព

រូបភាពបច្ចុប្បន្នជា **placeholder** ពី Unsplash។ ពេលមានរូបពិត៖
ដាក់ឯកសារក្នុង `public/projects/` រួចប្ដូរ path ក្នុង `src/data/projects.js`
(និង `HERO_IMAGE` ក្នុង `Hero.jsx`, `RELIEF_IMAGE` ក្នុង `SelectedAndAbout.jsx`, `pillarImages` ក្នុង `ProcessAndPillars.jsx`)។
បើរូបផ្ទុកមិនបាន វានឹងបង្ហាញផ្ទាំងពណ៌ជំនួស មិនបែកទម្រង់ទេ។

## ពណ៌ (កែក្នុង `src/index.css`)

`--color-ink` ខ្មៅ · `--color-cream` ក្រែម · `--color-gold` មាស · `--color-sand` ខ្សាច់

## Live

**https://buthsovandy.github.io/baa-website/** (GitHub Pages, ឥតគិតថ្លៃ)

ក្រោយកែកូដ ដាក់ online ឡើងវិញដោយពាក្យបញ្ជាតែមួយ៖

```bash
npm run deploy:gh
```

(វា build ជាមួយ base path `/baa-website/`, បន្ថែម `404.html` សម្រាប់ SPA routing, រួច push ទៅ branch `gh-pages`។)
