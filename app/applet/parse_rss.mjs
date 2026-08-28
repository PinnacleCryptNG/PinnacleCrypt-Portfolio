import https from 'https';
import fs from 'fs';

https.get('https://medium.com/feed/@Pinnacle_TheEnchanter', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let xml = '';
  res.on('data', chunk => xml += chunk);
  res.on('end', () => {
    const items = xml.split('<item>');
    items.shift();
    items.forEach((item, index) => {
      const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
      const linkMatch = item.match(/<link>(.*?)<\/link>/);
      const imgMatches = [...item.matchAll(/src="(https:\/\/[^"]+)"/g)].map(m => m[1]);
      console.log(`\n--- Item ${index + 1} ---`);
      console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
      console.log('Link:', linkMatch ? linkMatch[1] : 'No link');
      console.log('Images:', imgMatches);
    });
  });
});
