import { useState } from 'react';
import { Button } from '@/components/buttons/Button';
import { cn } from '@/utils/cn';
import styles from './Navigation.module.css';

export const Header = ({ items }: { items: string[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <strong>CompLibrary</strong>
      <nav className={cn(styles.nav, open && styles.open)} aria-label="Principal">
        {items.map((item) => <a key={item} href="#">{item}</a>)}
      </nav>
      <Button tone="secondary" variant="outline" onClick={() => setOpen((p) => !p)} aria-label="Toggle menu">☰</Button>
    </header>
  );
};

export const Sidebar = ({ collapsed = false }: { collapsed?: boolean }) => (
  <aside className={cn(styles.sidebar, collapsed && styles.collapsed)}>
    {['Dashboard', 'UI', 'Tokens', 'Docs'].map((i) => <a key={i} href="#">{i}</a>)}
  </aside>
);

export const Footer = () => <footer className={styles.footer}>© 2026 CompLibrary · React UI System</footer>;

export const Breadcrumbs = () => (
  <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
    <a href="#">Inicio</a><span>/</span><a href="#">UI</a><span>/</span><strong>Botones</strong>
  </nav>
);
