import https from 'https';
import fs from 'fs';

const feedUrl = 'https://medium.com/feed/@Pinnacle_TheEnchanter';

const req = https.get(feedUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    fs.writeFileSync('feed.xml', data);
    console.log('Saved feed.xml with length', data.length);
  });
});

req.on('error', (e) => console.error(e));
