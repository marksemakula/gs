import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://www.goodshepherd.ac.ug';

/**
 * Breadcrumb – renders semantic breadcrumb nav + injects BreadcrumbList JSON-LD.
 *
 * Props:
 *   crumbs  – array of { name: string, href: string }
 *             The first item should always be { name: 'Home', href: '/' }.
 *             The last item is the current page (rendered as plain text, not a link).
 *
 * Example:
 *   <Breadcrumb crumbs={[
 *     { name: 'Home', href: '/' },
 *     { name: 'About Us', href: '/about' },
 *   ]} />
 */
const Breadcrumb = ({ crumbs = [] }) => {
  // Inject / update BreadcrumbList JSON-LD
  useEffect(() => {
    const id = 'breadcrumb-jsonld';
    let tag = document.getElementById(id);
    if (!tag) {
      tag = document.createElement('script');
      tag.id = id;
      tag.type = 'application/ld+json';
      document.head.appendChild(tag);
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${BASE_URL}${crumb.href}`,
      })),
    };
    tag.textContent = JSON.stringify(schema);

    return () => {
      // Remove on unmount so the next page can set its own schema
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [crumbs]);

  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <ol
          className="flex flex-wrap items-center gap-x-1 text-sm text-gray-600"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li
                key={crumb.href}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {/* Separator (not shown for first item) */}
                {index > 0 && (
                  <span className="mx-1 text-gray-400 select-none" aria-hidden="true">
                    /
                  </span>
                )}

                {isLast ? (
                  <span
                    className="font-medium text-gray-800"
                    aria-current="page"
                    itemProp="name"
                  >
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    to={crumb.href}
                    className="hover:text-secondary hover:underline transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{crumb.name}</span>
                  </Link>
                )}

                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
