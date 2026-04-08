import { useEffect } from 'react';
import { siteIdentity } from '../lib/siteIdentity';

interface PageMetaOptions {
  keywords?: string[];
  path?: string;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
  includeBreadcrumbs?: boolean;
  includeDefaultSchemas?: boolean;
}

function getOrCreateMeta(selector: string, attrName: string, attrValue: string) {
  let meta = document.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  return meta;
}

function toBrandedTitle(title: string) {
  if (title.includes(siteIdentity.name)) {
    return title.replace(siteIdentity.name, siteIdentity.seoName);
  }
  return `${title} | ${siteIdentity.seoName}`;
}

function toBrandedDescription(description: string) {
  if (description.includes(siteIdentity.name)) {
    return description.replace(siteIdentity.name, siteIdentity.fullName);
  }
  return description;
}

function toPath(pathname: string) {
  if (!pathname.startsWith('/')) {
    return `/${pathname}`;
  }
  return pathname;
}

function toTitleCaseSegment(segment: string) {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildBreadcrumbSchema(origin: string, pathname: string) {
  if (pathname === '/') {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const items: Array<{ name: string; item: string }> = [{ name: 'Home', item: `${origin}/` }];

  let current = '';
  segments.forEach((segment) => {
    current += `/${segment}`;
    items.push({
      name: toTitleCaseSegment(segment),
      item: `${origin}${current}`,
    });
  });

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function usePageMeta(title: string, description: string, options: PageMetaOptions = {}) {
  const {
    keywords = [],
    path,
    image = siteIdentity.logoPath,
    noindex = false,
    type = 'website',
    structuredData,
    includeBreadcrumbs = !noindex,
    includeDefaultSchemas = !noindex,
  } = options;
  const mergedKeywords = Array.from(new Set([...(siteIdentity.keywords ?? []), ...keywords]));
  const keywordsKey = mergedKeywords.join(', ');

  useEffect(() => {
    const baseUrl = siteIdentity.defaultUrl ?? window.location.origin;
    const brandedTitle = toBrandedTitle(title);
    const brandedDescription = toBrandedDescription(description);
    const currentPath = toPath(path ?? window.location.pathname);
    const canonicalUrl = `${baseUrl}${currentPath}`;

    document.title = brandedTitle;
    document.documentElement.lang = siteIdentity.language;

    const descriptionMeta = getOrCreateMeta('meta[name="description"]', 'name', 'description');
    descriptionMeta.setAttribute('content', brandedDescription);

    const keywordsMeta = getOrCreateMeta('meta[name="keywords"]', 'name', 'keywords');
    keywordsMeta.setAttribute('content', keywordsKey);

    const robotsMeta = getOrCreateMeta('meta[name="robots"]', 'name', 'robots');
    robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const toAssetUrl = (asset: string) => (asset.startsWith('http') ? asset : `${baseUrl}${asset}`);
    const imageUrl = toAssetUrl(image);

    const ogTitle = getOrCreateMeta('meta[property="og:title"]', 'property', 'og:title');
    ogTitle.setAttribute('content', brandedTitle);

    const ogDescription = getOrCreateMeta('meta[property="og:description"]', 'property', 'og:description');
    ogDescription.setAttribute('content', brandedDescription);

    const ogType = getOrCreateMeta('meta[property="og:type"]', 'property', 'og:type');
    ogType.setAttribute('content', type);

    const ogUrl = getOrCreateMeta('meta[property="og:url"]', 'property', 'og:url');
    ogUrl.setAttribute('content', canonicalUrl);

    const ogSiteName = getOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name');
    ogSiteName.setAttribute('content', siteIdentity.fullName);

    const ogLocale = getOrCreateMeta('meta[property="og:locale"]', 'property', 'og:locale');
    ogLocale.setAttribute('content', siteIdentity.locale);

    const ogImage = getOrCreateMeta('meta[property="og:image"]', 'property', 'og:image');
    ogImage.setAttribute('content', imageUrl);

    const twitterCard = getOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');

    const twitterSite = getOrCreateMeta('meta[name="twitter:site"]', 'name', 'twitter:site');
    twitterSite.setAttribute('content', siteIdentity.twitterHandle);

    const twitterTitle = getOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title');
    twitterTitle.setAttribute('content', brandedTitle);

    const twitterDescription = getOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description');
    twitterDescription.setAttribute('content', brandedDescription);

    const twitterImage = getOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image');
    twitterImage.setAttribute('content', imageUrl);

    const author = getOrCreateMeta('meta[name="author"]', 'name', 'author');
    author.setAttribute('content', siteIdentity.fullName);

    const themeColor = getOrCreateMeta('meta[name="theme-color"]', 'name', 'theme-color');
    themeColor.setAttribute('content', '#05080a');

    let languageAlternate = document.querySelector<HTMLLinkElement>('link[rel="alternate"][hreflang="en"]');
    if (!languageAlternate) {
      languageAlternate = document.createElement('link');
      languageAlternate.setAttribute('rel', 'alternate');
      languageAlternate.setAttribute('hreflang', 'en');
      document.head.appendChild(languageAlternate);
    }
    languageAlternate.setAttribute('href', canonicalUrl);

    const schemaEntries: Record<string, unknown>[] = [];
    const alternateNames = siteIdentity.alias ? [siteIdentity.name, siteIdentity.alias] : undefined;

    if (includeDefaultSchemas) {
      schemaEntries.push({
        '@type': 'Organization',
        name: siteIdentity.fullName,
        ...(alternateNames ? { alternateName: alternateNames } : {}),
        url: baseUrl,
        logo: toAssetUrl(siteIdentity.logoPath),
        email: siteIdentity.email,
        sameAs: [siteIdentity.linkedinProfile, siteIdentity.xProfile, siteIdentity.whatsappProfile],
      });

      schemaEntries.push({
        '@type': 'WebSite',
        name: siteIdentity.fullName,
        ...(alternateNames ? { alternateName: alternateNames } : {}),
        url: baseUrl,
      });
    }

    if (includeBreadcrumbs) {
      const breadcrumb = buildBreadcrumbSchema(baseUrl, currentPath);
      if (breadcrumb) {
        schemaEntries.push(breadcrumb);
      }
    }

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        schemaEntries.push(...structuredData);
      } else {
        schemaEntries.push(structuredData);
      }
    }

    const schemaScriptId = 'page-jsonld';
    const existingSchemaScript = document.getElementById(schemaScriptId);

    if (schemaEntries.length > 0) {
      const graph = schemaEntries.map((entry) => {
        const normalized = { ...entry };
        if ('@context' in normalized) {
          delete normalized['@context'];
        }
        return normalized;
      });

      const payload =
        graph.length === 1
          ? { '@context': 'https://schema.org', ...graph[0] }
          : { '@context': 'https://schema.org', '@graph': graph };

      let schemaScript: HTMLScriptElement;
      if (existingSchemaScript instanceof HTMLScriptElement) {
        schemaScript = existingSchemaScript;
      } else {
        schemaScript = document.createElement('script');
        schemaScript.id = schemaScriptId;
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }

      schemaScript.textContent = JSON.stringify(payload);
    } else if (existingSchemaScript instanceof HTMLScriptElement) {
      existingSchemaScript.remove();
    }
  }, [
    title,
    description,
    keywordsKey,
    path,
    image,
    noindex,
    type,
    structuredData,
    includeBreadcrumbs,
    includeDefaultSchemas,
  ]);
}
