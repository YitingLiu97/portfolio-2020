const fs = require('fs');
const path = require('path');

// Static SEO Analysis Script
function analyzeStaticSEO() {
  console.log('🔍 STATIC SEO ANALYSIS');
  console.log('='.repeat(50));
  
  const results = {
    files: {},
    issues: [],
    successes: []
  };
  
  // Check layout.tsx
  try {
    const layoutPath = path.join(__dirname, '../src/app/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    results.files.layout = {
      hasMetadataBase: layoutContent.includes('metadataBase'),
      hasCanonical: layoutContent.includes('canonical'),
      hasOpenGraph: layoutContent.includes('openGraph'),
      hasTwitter: layoutContent.includes('twitter'),
      hasRobots: layoutContent.includes('robots'),
      importsSEOHelpers: layoutContent.includes('from "@/lib/seo"'),
    };
    
    console.log('\n📄 Layout.tsx Analysis:');
    if (results.files.layout.hasMetadataBase) {
      console.log('✅ Has metadataBase configuration');
      results.successes.push('Layout has metadataBase');
    } else {
      console.log('❌ Missing metadataBase');
      results.issues.push('Layout missing metadataBase');
    }
    
    if (results.files.layout.hasCanonical) {
      console.log('✅ Has canonical URL setup');
      results.successes.push('Layout has canonical URLs');
    } else {
      console.log('❌ Missing canonical URL');
      results.issues.push('Layout missing canonical URLs');
    }
    
    if (results.files.layout.hasOpenGraph) {
      console.log('✅ Has Open Graph configuration');
      results.successes.push('Layout has Open Graph');
    } else {
      console.log('❌ Missing Open Graph');
      results.issues.push('Layout missing Open Graph');
    }
    
    if (results.files.layout.hasTwitter) {
      console.log('✅ Has Twitter Card configuration');
      results.successes.push('Layout has Twitter Cards');
    } else {
      console.log('❌ Missing Twitter Card');
      results.issues.push('Layout missing Twitter Cards');
    }
    
    if (results.files.layout.importsSEOHelpers) {
      console.log('✅ Imports SEO helper utilities');
      results.successes.push('Layout imports SEO helpers');
    } else {
      console.log('❌ Missing SEO helper imports');
      results.issues.push('Layout missing SEO helper imports');
    }
    
  } catch (error) {
    console.log('❌ Could not analyze layout.tsx:', error.message);
    results.issues.push(`Layout analysis failed: ${error.message}`);
  }
  
  // Check SEO helper file
  try {
    const seoPath = path.join(__dirname, '../src/lib/seo.ts');
    const seoContent = fs.readFileSync(seoPath, 'utf8');
    
    results.files.seoHelpers = {
      hasSiteUrl: seoContent.includes('SITE_URL'),
      hasAbsoluteUrl: seoContent.includes('absoluteUrl'),
      hasCanonicalBuilder: seoContent.includes('buildCanonicalUrl'),
      hasDateHelper: seoContent.includes('safeDateIso'),
    };
    
    console.log('\n🛠️ SEO Helpers (lib/seo.ts) Analysis:');
    if (results.files.seoHelpers.hasSiteUrl) {
      console.log('✅ Has SITE_URL constant');
      results.successes.push('SEO helpers have SITE_URL');
    } else {
      console.log('❌ Missing SITE_URL constant');
      results.issues.push('SEO helpers missing SITE_URL');
    }
    
    if (results.files.seoHelpers.hasAbsoluteUrl) {
      console.log('✅ Has absoluteUrl helper');
      results.successes.push('SEO helpers have absoluteUrl function');
    } else {
      console.log('❌ Missing absoluteUrl helper');
      results.issues.push('SEO helpers missing absoluteUrl function');
    }
    
    if (results.files.seoHelpers.hasCanonicalBuilder) {
      console.log('✅ Has buildCanonicalUrl helper');
      results.successes.push('SEO helpers have buildCanonicalUrl function');
    } else {
      console.log('❌ Missing buildCanonicalUrl helper');
      results.issues.push('SEO helpers missing buildCanonicalUrl function');
    }
    
  } catch (error) {
    console.log('❌ Could not analyze seo.ts:', error.message);
    results.issues.push(`SEO helpers analysis failed: ${error.message}`);
  }
  
  // Check English blog page
  try {
    const englishPagePath = path.join(__dirname, '../src/app/[slug]/page.tsx');
    const englishPageContent = fs.readFileSync(englishPagePath, 'utf8');
    
    results.files.englishPage = {
      hasGenerateMetadata: englishPageContent.includes('generateMetadata'),
      hasCanonical: englishPageContent.includes('canonical'),
      hasOpenGraph: englishPageContent.includes('openGraph'),
      hasTwitter: englishPageContent.includes('twitter'),
      hasJsonLd: englishPageContent.includes('application/ld+json'),
      hasBlogPostingSchema: englishPageContent.includes('BlogPosting'),
      hasRobots: englishPageContent.includes('robots'),
    };
    
    console.log('\n🇺🇸 English Blog Page ([slug]/page.tsx) Analysis:');
    if (results.files.englishPage.hasGenerateMetadata) {
      console.log('✅ Has generateMetadata function');
      results.successes.push('English page has generateMetadata');
    } else {
      console.log('❌ Missing generateMetadata function');
      results.issues.push('English page missing generateMetadata');
    }
    
    if (results.files.englishPage.hasJsonLd) {
      console.log('✅ Has JSON-LD structured data');
      results.successes.push('English page has JSON-LD');
    } else {
      console.log('❌ Missing JSON-LD structured data');
      results.issues.push('English page missing JSON-LD');
    }
    
    if (results.files.englishPage.hasBlogPostingSchema) {
      console.log('✅ Has BlogPosting schema');
      results.successes.push('English page has BlogPosting schema');
    } else {
      console.log('❌ Missing BlogPosting schema');
      results.issues.push('English page missing BlogPosting schema');
    }
    
  } catch (error) {
    console.log('❌ Could not analyze English blog page:', error.message);
    results.issues.push(`English page analysis failed: ${error.message}`);
  }
  
  // Check Chinese blog page
  try {
    const chinesePagePath = path.join(__dirname, '../src/app/zh/[slug]/page.tsx');
    const chinesePageContent = fs.readFileSync(chinesePagePath, 'utf8');
    
    results.files.chinesePage = {
      hasGenerateMetadata: chinesePageContent.includes('generateMetadata'),
      hasCanonical: chinesePageContent.includes('canonical'),
      hasLanguageAlternates: chinesePageContent.includes('languages'),
      hasJsonLd: chinesePageContent.includes('application/ld+json'),
      hasBlogPostingSchema: chinesePageContent.includes('BlogPosting'),
      hasRobots: chinesePageContent.includes('robots'),
    };
    
    console.log('\n🇨🇳 Chinese Blog Page (zh/[slug]/page.tsx) Analysis:');
    if (results.files.chinesePage.hasGenerateMetadata) {
      console.log('✅ Has generateMetadata function');
      results.successes.push('Chinese page has generateMetadata');
    } else {
      console.log('❌ Missing generateMetadata function');
      results.issues.push('Chinese page missing generateMetadata');
    }
    
    if (results.files.chinesePage.hasLanguageAlternates) {
      console.log('✅ Has language alternates');
      results.successes.push('Chinese page has language alternates');
    } else {
      console.log('❌ Missing language alternates');
      results.issues.push('Chinese page missing language alternates');
    }
    
    if (results.files.chinesePage.hasJsonLd) {
      console.log('✅ Has JSON-LD structured data');
      results.successes.push('Chinese page has JSON-LD');
    } else {
      console.log('❌ Missing JSON-LD structured data');
      results.issues.push('Chinese page missing JSON-LD');
    }
    
  } catch (error) {
    console.log('❌ Could not analyze Chinese blog page:', error.message);
    results.issues.push(`Chinese page analysis failed: ${error.message}`);
  }
  
  // Summary
  console.log('\n📊 OVERALL SEO ANALYSIS SUMMARY');
  console.log('='.repeat(50));
  console.log(`✅ Successes: ${results.successes.length}`);
  console.log(`❌ Issues: ${results.issues.length}`);
  
  if (results.successes.length > 0) {
    console.log('\n🎉 WHAT\'S WORKING:');
    results.successes.forEach(success => console.log(`  • ${success}`));
  }
  
  if (results.issues.length > 0) {
    console.log('\n⚠️ ISSUES TO ADDRESS:');
    results.issues.forEach(issue => console.log(`  • ${issue}`));
  } else {
    console.log('\n🎉 No critical issues found! SEO implementation looks solid.');
  }
  
  // Save results
  const outputPath = path.join(__dirname, '../static-seo-analysis.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n💾 Detailed analysis saved to: ${outputPath}`);
  
  return results;
}

// Deployment Analysis
function analyzeDeployment() {
  console.log('\n🚀 DEPLOYMENT ANALYSIS');
  console.log('='.repeat(50));
  
  const deployment = {
    framework: 'Next.js',
    currentHost: 'Netlify', // from README
    buildCommand: null,
    outputDirectory: null,
    hasNetlifyToml: false,
    hasVercelJson: false,
    hasGithubActions: false,
  };
  
  // Check for deployment configs
  const rootDir = path.join(__dirname, '..');
  
  try {
    // Check for netlify.toml
    if (fs.existsSync(path.join(rootDir, 'netlify.toml'))) {
      deployment.hasNetlifyToml = true;
      console.log('✅ Found netlify.toml configuration');
    } else {
      console.log('❌ No netlify.toml found');
    }
    
    // Check for vercel.json
    if (fs.existsSync(path.join(rootDir, 'vercel.json'))) {
      deployment.hasVercelJson = true;
      console.log('✅ Found vercel.json configuration');
    } else {
      console.log('❌ No vercel.json found');
    }
    
    // Check for GitHub Actions
    if (fs.existsSync(path.join(rootDir, '.github', 'workflows'))) {
      deployment.hasGithubActions = true;
      console.log('✅ Found GitHub Actions workflows');
    } else {
      console.log('❌ No GitHub Actions found');
    }
    
    // Check package.json for build scripts
    const packageJsonPath = path.join(__dirname, '../package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      deployment.buildCommand = packageJson.scripts?.build || null;
      console.log(`📦 Build command: ${deployment.buildCommand || 'Not found'}`);
      
      if (packageJson.scripts?.export) {
        console.log('✅ Has export script (static export)');
        deployment.hasExportScript = true;
      } else {
        console.log('❌ No export script (SSR/dynamic)');
        deployment.hasExportScript = false;
      }
    }
    
  } catch (error) {
    console.log('❌ Error analyzing deployment:', error.message);
  }
  
  return deployment;
}

// Main execution
async function main() {
  const seoResults = analyzeStaticSEO();
  const deploymentResults = analyzeDeployment();
  
  console.log('\n🎯 RECOMMENDATIONS FOR PRODUCTION DEPLOYMENT:');
  console.log('='.repeat(50));
  
  // Jekyll to Next.js migration recommendations
  console.log('📝 Since you\'re migrating from Jekyll:');
  console.log('  • Jekyll used static site generation - Next.js can do the same with `next export`');
  console.log('  • Make sure your build process generates static HTML files');
  console.log('  • Update your deployment configuration to build the Next.js app');
  console.log('  • Set up proper redirects for any changed URL structures');
  
  console.log('\n🔗 For pushing to main branch:');
  console.log('  1. Ensure your hosting platform (Netlify) builds from the my-app/ directory');
  console.log('  2. Update build command to: cd my-app && npm run build');
  console.log('  3. Set publish directory to: my-app/out (if using static export) or my-app/.next');
  console.log('  4. Test the build locally first with: npm run build');
  
  return { seoResults, deploymentResults };
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { analyzeStaticSEO, analyzeDeployment };