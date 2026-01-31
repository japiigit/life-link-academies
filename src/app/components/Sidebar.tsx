// src/components/Sidebar.tsx
'use client';

import { useState, useEffect } from 'react';

interface SidebarItem {
  id: string;
  title: string;
}

interface SidebarProps {
  items: SidebarItem[];
  activeId: string;
  onItemSelect: (id: string) => void;
  title: string;
}

export default function Sidebar({ items, activeId, onItemSelect, title }: SidebarProps) {
  return (
    <aside className="w-60 bg-accent-500 text-white flex-shrink-0 p-6">
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <nav className="space-y-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemSelect(item.id)}
            className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
              activeId === item.id
                ? 'bg-accent-600 font-medium'
                : 'hover:bg-accent-600/70'
            }`}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}