const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function testSEO() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Test URLs
  const baseUrl = 'http://localhost:3001';
  const testUrls = [
    '/',
    '/2023-08-01-vibes',
    '/zh/2023-08-01-vibes-zh'
  ];
  
  const results = {};
  
  for (const url of testUrls) {
    console.log(`\n🔍 Testing: ${baseUrl}${url}`);
    
    try {
      await page.goto(`${baseUrl}${url}`, { waitUntil: 'networkidle0' });
      
      // Get page title
      const title = await page.title();
      
      // Get meta description
      const description = await page.$eval('meta[name="description"]', 
        el => el.content).catch(() => null);
      
      // Get canonical URL
      const canonical = await page.$eval('link[rel="canonical"]', 
        el => el.href).catch(() => null);
      
      // Get Open Graph data
      const ogTitle = await page.$eval('meta[property="og:title"]', 
        el => el.content).catch(() => null);
      const ogDescription = await page.$eval('meta[property="og:description"]', 
        el => el.content).catch(() => null);
      const ogImage = await page.$eval('meta[property="og:image"]', 
        el => el.content).catch(() => null);
      const ogType = await page.$eval('meta[property="og:type"]', 
        el => el.content).catch(() => null);
      
      // Get Twitter Card data
      const twitterCard = await page.$eval('meta[name="twitter:card"]', 
        el => el.content).catch(() => null);
      const twitterTitle = await page.$eval('meta[name="twitter:title"]', 
        el => el.content).catch(() => null);
      const twitterDescription = await page.$eval('meta[name="twitter:description"]', 
        el => el.content).catch(() => null);
      const twitterImage = await page.$eval('meta[name="twitter:image"]', 
        el => el.content).catch(() => null);
      
      // Get JSON-LD structured data
      const jsonLd = await page.$$eval('script[type="application/ld+json"]', 
        scripts => scripts.map(script => {
          try {
            return JSON.parse(script.textContent);
          } catch (e) {
            return { error: 'Invalid JSON-LD' };
          }
        })).catch(() => []);
      
      // Get robots meta
      const robots = await page.$eval('meta[name="robots"]', 
        el => el.content).catch(() => null);
      
      // Get language alternates
      const alternates = await page.$$eval('link[rel="alternate"]', 
        links => links.map(link => ({
          hreflang: link.hreflang,
          href: link.href
        }))).catch(() => []);
      
      results[url] = {
        title,
        description,
        canonical,
        robots,
        openGraph: {
          title: ogTitle,
          description: ogDescription,
          image: ogImage,
          type: ogType
        },
        twitter: {
          card: twitterCard,
          title: twitterTitle,
          description: twitterDescription,
          image: twitterImage
        },
        jsonLd,
        alternates
      };
      
      console.log(`✅ Title: ${title}`);
      console.log(`📝 Description: ${description?.substring(0, 100)}...`);
      console.log(`🔗 Canonical: ${canonical}`);
      console.log(`🤖 Robots: ${robots}`);
      console.log(`📱 Twitter Card: ${twitterCard}`);
      console.log(`📊 JSON-LD schemas: ${jsonLd.length}`);
      
    } catch (error) {
      console.error(`❌ Error testing ${url}:`, error.message);
      results[url] = { error: error.message };
    }
  }
  
  await browser.close();
  
  // Save detailed results
  const outputPath = path.join(__dirname, '../seo-test-results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  
  console.log(`\n📊 Detailed results saved to: ${outputPath}`);
  
  return results;
}

// Validation function
function validateSEO(results) {
  console.log('\n🔎 SEO VALIDATION SUMMARY\n' + '='.repeat(50));
  
  let issues = [];
  let successes = [];
  
  Object.entries(results).forEach(([url, data]) => {
    if (data.error) {
      issues.push(`❌ ${url}: ${data.error}`);
      return;
    }
    
    // Check required elements
    if (!data.title) issues.push(`❌ ${url}: Missing title`);
    else successes.push(`✅ ${url}: Has title`);
    
    if (!data.description) issues.push(`❌ ${url}: Missing meta description`);
    else successes.push(`✅ ${url}: Has meta description`);
    
    if (!data.canonical) issues.push(`❌ ${url}: Missing canonical URL`);
    else successes.push(`✅ ${url}: Has canonical URL`);
    
    if (!data.openGraph.title) issues.push(`❌ ${url}: Missing OG title`);
    else successes.push(`✅ ${url}: Has OG title`);
    
    if (!data.openGraph.image) issues.push(`❌ ${url}: Missing OG image`);
    else successes.push(`✅ ${url}: Has OG image`);
    
    if (!data.twitter.card) issues.push(`❌ ${url}: Missing Twitter card`);
    else successes.push(`✅ ${url}: Has Twitter card`);
    
    if (data.jsonLd.length === 0) issues.push(`❌ ${url}: Missing JSON-LD structured data`);
    else successes.push(`✅ ${url}: Has JSON-LD structured data (${data.jsonLd.length} schemas)`);
  });
  
  console.log('SUCCESSES:');
  successes.forEach(success => console.log(success));
  
  if (issues.length > 0) {
    console.log('\nISSUES FOUND:');
    issues.forEach(issue => console.log(issue));
  } else {
    console.log('\n🎉 No issues found! SEO implementation looks good.');
  }
  
  return { issues, successes };
}

async function main() {
  try {
    console.log('🚀 Starting SEO test...\n');
    const results = await testSEO();
    const validation = validateSEO(results);
    
    console.log(`\n📈 SUMMARY: ${validation.successes.length} successes, ${validation.issues.length} issues`);
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { testSEO, validateSEO };