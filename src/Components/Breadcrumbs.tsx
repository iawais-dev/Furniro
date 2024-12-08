'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="text-gray-600 text-sm py-4">
      <ul className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link href={item.href}>
              <p
                className={`${
                  index === items.length - 1
                    ? 'font-semibold text-gray-900'
                    : 'hover:text-gray-800'
                }`}
              >
                {item.label}
              </p>
            </Link>
            {index < items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
