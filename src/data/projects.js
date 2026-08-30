// ជំនួសតម្លៃ `image` និង `gallery` ដោយរូបភាពពិតរបស់ស្ទូឌីយោ (ដាក់ក្នុង /public/projects/...)
// Replace `image` / `gallery` with the studio's real photography.

export const projects = [
  {
    slug: 'camtech-campus',
    title: 'Camtech Campus',
    titleKh: 'បរិវេណ Camtech',
    location: 'Phnom Penh, Cambodia',
    locationKh: 'ភ្នំពេញ, កម្ពុជា',
    category: 'Institutional',
    categoryKh: 'ស្ថាប័ន',
    year: '2023',
    status: 'Completed',
    area: '18,400 m²',
    client: 'Camtech University',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600&q=80',
    ],
    excerpt:
      'A learning campus organised around shaded courtyards, deep verandas and cross ventilation — a modern reading of the Khmer school typology.',
    excerptKh:
      'បរិវេណសិក្សាដែលរៀបចំជុំវិញទីធ្លាម្លប់ ព្រះលានជ្រៅ និងខ្យល់ចេញចូល — ការបកស្រាយទំនើបនៃស្ថាបត្យកម្មសាលារៀនខ្មែរ។',
    featured: true,
  },
  {
    slug: 'boribot-house',
    title: 'Boribot House',
    titleKh: 'ផ្ទះបរិបូណ៌',
    location: 'Kampong Speu, Cambodia',
    locationKh: 'កំពង់ស្ពឺ, កម្ពុជា',
    category: 'Residential',
    categoryKh: 'លំនៅឋាន',
    year: '2024',
    status: 'Completed',
    area: '640 m²',
    client: 'Private',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600&q=80',
    ],
    excerpt:
      'A family house that lifts its living floor above the flood line, borrowing the logic of the traditional stilt house for a contemporary life.',
    excerptKh:
      'ផ្ទះគ្រួសារដែលលើកជាន់រស់នៅខ្ពស់ផុតពីទឹកជំនន់ ដោយខ្ចីតក្កវិជ្ជានៃផ្ទះខ្ពស់បុរាណសម្រាប់ជីវិតសម័យទំនើប។',
    featured: true,
  },
  {
    slug: 'phnom-penh-2050',
    title: 'Phnom Penh 2050',
    titleKh: 'ភ្នំពេញ ២០៥០',
    location: 'Urban Study',
    locationKh: 'ការសិក្សាទីក្រុង',
    category: 'Urban Design',
    categoryKh: 'ការរចនាទីក្រុង',
    year: '2025',
    status: 'Research',
    area: 'City scale',
    client: 'Self-initiated',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80',
    ],
    excerpt:
      'A speculative study on how the riverfront capital can grow denser without losing its water, its trees and its public life.',
    excerptKh:
      'ការសិក្សាអំពីរបៀបដែលរាជធានីមាត់ទន្លេអាចរីកចម្រើនក្រាស់ជាងមុន ដោយមិនបាត់បង់ទឹក ដើមឈើ និងជីវិតសាធារណៈ។',
    featured: true,
  },
  {
    slug: 'the-urban-room',
    title: 'The Urban Room',
    titleKh: 'បន្ទប់ទីក្រុង',
    location: 'Phnom Penh, Cambodia',
    locationKh: 'ភ្នំពេញ, កម្ពុជា',
    category: 'Interior',
    categoryKh: 'ការតុបតែងផ្ទៃក្នុង',
    year: '2024',
    status: 'Completed',
    area: '320 m²',
    client: 'Confidential',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&q=80',
    ],
    excerpt:
      'A timber-screened workspace where light is filtered the way it is on an old shophouse veranda.',
    excerptKh:
      'កន្លែងធ្វើការដែលបាំងដោយឈើ ជាកន្លែងដែលពន្លឺត្រូវបានច្រោះដូចនៅព្រះលានផ្ទះល្វែងចាស់។',
    featured: true,
  },
  {
    slug: 'mekong-pavilion',
    title: 'Mekong Pavilion',
    titleKh: 'សាលមេគង្គ',
    location: 'Kratie, Cambodia',
    locationKh: 'ក្រចេះ, កម្ពុជា',
    category: 'Public',
    categoryKh: 'សាធារណៈ',
    year: '2023',
    status: 'Completed',
    area: '210 m²',
    client: 'Provincial Department',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80',
    gallery: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80'],
    excerpt:
      'A light timber structure for river festivals — built by local carpenters, dismantled and rebuilt each season.',
    excerptKh:
      'រចនាសម្ព័ន្ធឈើស្រាលសម្រាប់ពិធីបុណ្យទន្លេ — សាងសង់ដោយជាងឈើក្នុងស្រុក រុះរើ និងសង់ឡើងវិញរាល់រដូវ។',
  },
  {
    slug: 'silk-atelier',
    title: 'Silk Atelier',
    titleKh: 'រោងសិប្បកម្មសូត្រ',
    location: 'Takeo, Cambodia',
    locationKh: 'តាកែវ, កម្ពុជា',
    category: 'Cultural',
    categoryKh: 'វប្បធម៌',
    year: '2022',
    status: 'Completed',
    area: '1,150 m²',
    client: 'Weavers Cooperative',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80',
    gallery: ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80'],
    excerpt:
      'A weaving workshop and gallery in rammed earth, keeping the looms cool through the dry season.',
    excerptKh:
      'រោងតម្បាញ និងវិចិត្រសាលធ្វើពីដីបង្ហាប់ ដែលរក្សាកន្ត្រកតម្បាញឲ្យត្រជាក់ពេញរដូវប្រាំង។',
  },
  {
    slug: 'riverside-office',
    title: 'Riverside Office',
    titleKh: 'ការិយាល័យមាត់ទន្លេ',
    location: 'Phnom Penh, Cambodia',
    locationKh: 'ភ្នំពេញ, កម្ពុជា',
    category: 'Commercial',
    categoryKh: 'ពាណិជ្ជកម្ម',
    year: '2025',
    status: 'Under construction',
    area: '9,800 m²',
    client: 'Private developer',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    gallery: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80'],
    excerpt:
      'A perforated concrete facade tuned to the sun path, cutting cooling loads by a third.',
    excerptKh:
      'ជញ្ជាំងបេតុងមានរន្ធតម្រូវតាមផ្លូវព្រះអាទិត្យ កាត់បន្ថយបន្ទុកត្រជាក់មួយភាគបី។',
  },
  {
    slug: 'temple-visitor-centre',
    title: 'Temple Visitor Centre',
    titleKh: 'មជ្ឈមណ្ឌលភ្ញៀវប្រាសាទ',
    location: 'Siem Reap, Cambodia',
    locationKh: 'សៀមរាប, កម្ពុជា',
    category: 'Institutional',
    categoryKh: 'ស្ថាប័ន',
    year: '2024',
    status: 'Competition',
    area: '4,300 m²',
    client: 'Open competition',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1600&q=80',
    gallery: ['https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600&q=80'],
    excerpt:
      'A low, quiet threshold building that lets the temple remain the only monument on site.',
    excerptKh:
      'អគារទាប ស្ងាត់ ជាច្រកចូល ដែលទុកឲ្យប្រាសាទនៅតែជាវិមានតែមួយគត់នៅទីតាំង។',
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
