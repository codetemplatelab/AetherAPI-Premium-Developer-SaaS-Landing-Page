import { useEffect } from 'react';

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
};

const ensureMetaTag = (attr: 'name' | 'property', value: string) => {
  let tag = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, value);
    document.head.appendChild(tag);
  }
  return tag;
};

const ensureLinkTag = (rel: string) => {
  let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  return tag;
};

export const usePageMeta = ({ title, description, path, image, type }: PageMeta) => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.title = title;

    ensureMetaTag('name', 'description').setAttribute('content', description);
    ensureMetaTag('name', 'robots').setAttribute('content', 'index, follow');

    const url = new URL(path ?? window.location.pathname, window.location.origin).toString();
    ensureLinkTag('canonical').setAttribute('href', url);

    ensureMetaTag('property', 'og:title').setAttribute('content', title);
    ensureMetaTag('property', 'og:description').setAttribute('content', description);
    ensureMetaTag('property', 'og:url').setAttribute('content', url);
    ensureMetaTag('property', 'og:type').setAttribute('content', type ?? 'website');
    ensureMetaTag('property', 'og:site_name').setAttribute('content', 'AetherAPI');

    const imageUrl = new URL(image ?? '/og-image.svg', window.location.origin).toString();
    ensureMetaTag('property', 'og:image').setAttribute('content', imageUrl);

    ensureMetaTag('name', 'twitter:card').setAttribute('content', 'summary_large_image');
    ensureMetaTag('name', 'twitter:title').setAttribute('content', title);
    ensureMetaTag('name', 'twitter:description').setAttribute('content', description);
    ensureMetaTag('name', 'twitter:image').setAttribute('content', imageUrl);
  }, [description, image, path, title, type]);
};
