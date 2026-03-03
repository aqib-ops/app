import { useEffect } from 'react';

interface PageMetaOptions {
  keywords?: string[];
  path?: string;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
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

export function usePageMeta(title: string, description: string, options: PageMetaOptions = {}) {
  const {
    keywords = [],
    path,
    image = '/aqib.png',
    noindex = false,
    type = 'website',
  } = options;
  const keywordsKey = keywords.join(', ');

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = 'en';

    const descriptionMeta = getOrCreateMeta('meta[name="description"]', 'name', 'description');
    descriptionMeta.setAttribute('content', description);

    const keywordsMeta = getOrCreateMeta('meta[name="keywords"]', 'name', 'keywords');
    keywordsMeta.setAttribute('content', keywordsKey);

    const robotsMeta = getOrCreateMeta('meta[name="robots"]', 'name', 'robots');
    robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    const currentPath = path ?? window.location.pathname;
    const canonicalUrl = `${window.location.origin}${currentPath}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const imageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;

    const ogTitle = getOrCreateMeta('meta[property="og:title"]', 'property', 'og:title');
    ogTitle.setAttribute('content', title);

    const ogDescription = getOrCreateMeta('meta[property="og:description"]', 'property', 'og:description');
    ogDescription.setAttribute('content', description);

    const ogType = getOrCreateMeta('meta[property="og:type"]', 'property', 'og:type');
    ogType.setAttribute('content', type);

    const ogUrl = getOrCreateMeta('meta[property="og:url"]', 'property', 'og:url');
    ogUrl.setAttribute('content', canonicalUrl);

    const ogImage = getOrCreateMeta('meta[property="og:image"]', 'property', 'og:image');
    ogImage.setAttribute('content', imageUrl);

    const twitterCard = getOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');

    const twitterTitle = getOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title');
    twitterTitle.setAttribute('content', title);

    const twitterDescription = getOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description');
    twitterDescription.setAttribute('content', description);

    const twitterImage = getOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image');
    twitterImage.setAttribute('content', imageUrl);
  }, [title, description, keywordsKey, path, image, noindex, type]);
}
