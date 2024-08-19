import React from "react";
import Link from "next/link"; // Assuming you're using Next.js for routing

interface MenuItem {
  label: string;
  href: string;
  isHighlighted?: boolean; // Optional property for highlighting a menu item
}

const SubMenu = ({ title, menuItems }: { title: string; menuItems: MenuItem[] }) => {
  return (
    <div>
      <h4 className="text-sm md:text-md  font-semibold text-gray-900 uppercase dark:text-neutral-100">
        {title}
      </h4>

      <div className="mt-3 grid space-y-3 text-sm">
        {menuItems.map((item) => (
          <p key={item.label}>
            <Link
              href={item.href}
              className={`font-ibm font-thin inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 ${
                item.isHighlighted ? "text-blue-600 dark:text-blue-500" : ""
              }`}
            >
              {item.label}
              {item.isHighlighted && (
                <span className="inline text-blue-600 dark:text-blue-500">
                  — We&apos;re hiring
                </span>
              )}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SubMenu;