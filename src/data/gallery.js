const src = '/images/cleaning-comparisons.png';
const pair = (y, height) => ({ beforeImage: { src, region: [0, y, 768, height] }, afterImage: { src, region: [768, y, 768, height] } });
export const gallery = [
 { id: 'salon', title: 'Yaşam alanınıza ferahlık', category: 'Salon temizliği', ...pair(0, 341) },
 { id: 'mutfak', title: 'Her yüzeyde özen', category: 'Mutfak temizliği', ...pair(342, 332) },
 { id: 'banyo', title: 'Hijyeni hissettiğiniz alanlar', category: 'Banyo temizliği', ...pair(676, 348) },
];
