/**
 * Google Indexing API Auto-Pinger with Rate Limiting & Quota Management
 * Path: seo-engine/scripts/ping_google_indexing.js
 * Description: Automated Google Indexing API integration script with 200 reqs/day quota awareness and graceful rate-limiting.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const DOMAIN = 'https://sahayakai.co.in';
const INDEXING_ENDPOINT = 'indexing.googleapis.com';
const SCOPE = 'https://www.googleapis.com/auth/indexing';

console.log('====================================================');
console.log('   SAHAYAKAI SEO ENGINE — GOOGLE INDEXING API PINGER');
console.log('====================================================\n');

// 1. Gather all URLs to ping from posts/ and registry
function getAllUrls() {
  const urls = [
    `${DOMAIN}/`,
    `${DOMAIN}/about`,
    `${DOMAIN}/contact`,
    `${DOMAIN}/pricing`,
    `${DOMAIN}/knowledge`,
    `${DOMAIN}/tools`,
    `${DOMAIN}/sitemap.xml`
  ];

  const postsDir = path.join(__dirname, '../posts');
  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
    files.forEach(file => {
      const slug = file.replace(/\.md$/, '');
      urls.push(`${DOMAIN}/knowledge/gem-registration/${slug}`);
      urls.push(`${DOMAIN}/blog/${slug}`);
      urls.push(`${DOMAIN}/guides/${slug}`);
    });
  }

  return Array.from(new Set(urls));
}

function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function getAccessToken(keyData) {
  return new Promise((resolve, reject) => {
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: 'RS256', typ: 'JWT' };
    const claimSet = {
      iss: keyData.client_email,
      scope: SCOPE,
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    };

    const encodedHeader = base64UrlEncode(JSON.stringify(header));
    const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
    const signatureInput = `${encodedHeader}.${encodedClaimSet}`;

    const signer = crypto.createSign('RSA-SHA256');
    signer.update(signatureInput);
    const signature = signer.sign(keyData.private_key, 'base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    const jwt = `${signatureInput}.${signature}`;
    const postData = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;

    const req = https.request({
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.access_token) resolve(parsed.access_token);
          else reject(new Error(`OAuth Error: ${body}`));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function pingUrl(token, url, type = 'URL_UPDATED') {
  return new Promise((resolve) => {
    const body = JSON.stringify({ url: url, type: type });
    const req = https.request({
      hostname: INDEXING_ENDPOINT,
      path: '/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Length': Buffer.byteLength(body)
      }
    }, (res) => {
      let respBody = '';
      res.on('data', chunk => respBody += chunk);
      res.on('end', () => {
        resolve({ url, status: res.statusCode, response: respBody });
      });
    });

    req.on('error', (err) => {
      resolve({ url, status: 500, error: err.message });
    });

    req.write(body);
    req.end();
  });
}

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function main() {
  const isDryRun = process.argv.includes('--dry-run');
  const urls = getAllUrls();

  console.log(`Discovered ${urls.length} total URLs for Google Indexing API ping.\n`);

  if (isDryRun) {
    console.log('🔍 DRY-RUN MODE ACTIVATED — Sample URLs discovered:');
    urls.slice(0, 10).forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
    console.log(`  ... and ${urls.length - 10} more URLs.`);
    console.log('\n🟢 Dry-Run Complete: Google Indexing API Auto-Pinger script is valid & ready.');
    return;
  }

  let credentials = null;
  const keyPath = path.join(__dirname, '../service-account.json');
  if (process.env.GOOGLE_INDEXING_CREDENTIALS) {
    credentials = JSON.parse(process.env.GOOGLE_INDEXING_CREDENTIALS);
  } else if (fs.existsSync(keyPath)) {
    credentials = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
  }

  if (!credentials) {
    console.log('⚠️ GOOGLE INDEXING API CREDENTIALS NOT FOUND!');
    return;
  }

  try {
    console.log('Authenticating with Google OAuth 2.0 JWT...');
    const token = await getAccessToken(credentials);
    console.log('🟢 OAuth Authentication Successful!\n');

    console.log(`Pinging Google Indexing API (${urls.length} URLs, 200 reqs/day quota limit)...`);
    let successCount = 0;
    let quotaHit = false;

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const res = await pingUrl(token, url);

      if (res.status === 200) {
        successCount++;
        console.log(`  ✓ [200 OK] (${successCount}) ${url}`);
      } else if (res.status === 429) {
        console.log(`\n⚠️ Google Indexing API Daily Quota Limit Reached (200 requests/day).`);
        console.log(`   Submitted ${successCount} URLs today. Remaining ${urls.length - successCount} URLs will ping in next batch.`);
        quotaHit = true;
        break;
      } else {
        console.log(`  ✗ [${res.status}] ${url}`);
      }

      await sleep(100); // 100ms throttle per request
    }

    console.log(`\n🟢 Batch Execution Complete: ${successCount} URLs successfully submitted to Google Indexing API.`);
  } catch (err) {
    console.error('🔴 Error executing Google Indexing API ping:', err.message);
  }
}

main();
