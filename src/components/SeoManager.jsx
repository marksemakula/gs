import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Good Shepherd School - Kawaala';
const BASE_URL = 'https://goodshepherd.ac.ug';

const SEO_BY_PATH = {
  '/': {
    title: 'Good Shepherd School - Kawaala, Kampala Uganda',
    description:
      'Good Shepherd School in Kawaala, Kampala offers quality education rooted in faith, character, and academic excellence.',
  },
  '/about': {
    title: 'About Good Shepherd School - Kawaala',
    description:
      'Learn about Good Shepherd School in Kawaala, our mission, values, history, and commitment to educational excellence.',
  },
  '/blog': {
    title: 'School Blog and News - Good Shepherd School',
    description:
      'Read the latest school news, events, STEM highlights, and community stories from Good Shepherd School.',
  },
  '/enroll': {
    title: 'Enroll Your Child - Good Shepherd School',
    description:
      'Start your child enrollment at Good Shepherd School in Kawaala, Kampala with our online admissions form.',
  },
  '/gallery': {
    title: 'Photo Gallery - Good Shepherd School',
    description:
      'Explore photos from academics, sports, STEM, arts, and school events at Good Shepherd School.',
  },
  '/donate': {
    title: 'Donate and Partner - Good Shepherd School',
    description:
      'Support Good Shepherd School through donations and partnerships that expand access to quality education.',
  },
  '/stem': {
    title: 'STEM Education Programme - Good Shepherd School',
    description:
      'Discover the STEM programme at Good Shepherd School with innovative learning in science, technology, engineering, and mathematics.',
  },
  '/events': {
    title: 'School Events and Calendar - Good Shepherd School',
    description:
      'View the latest school events, holiday schedules, and academic calendar updates at Good Shepherd School.',
  },
};

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertCanonical = (href) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', href);
};

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname || '/';
    const seo = SEO_BY_PATH[path] ?? {
      title: SITE_NAME,
      description:
        'Good Shepherd School in Kawaala, Kampala providing holistic and faith-based education.',
    };

    const canonicalUrl = `${BASE_URL}${path}`;
    document.title = seo.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    });

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index,follow',
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    });

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });

    upsertCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
}

export default SeoManager;