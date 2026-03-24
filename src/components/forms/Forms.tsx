import { useMemo, useState } from 'react';
import type { Status } from '@/types/ui';
import styles from './Forms.module.css';

export const TextInput = ({ label, status='default' }: { label: string; status?: Status }) => (
  <label className={styles.field}>{label}<input className={styles[status]} placeholder="Escribe aquí" /></label>
);

export const DateInput = () => <label className={styles.field}>Fecha<input type="date" /></label>;
export const TextArea = () => <label className={styles.field}>Descripción<textarea rows={3} placeholder="Detalles" /></label>;
export const SearchBar = () => <label className={styles.field}>Buscar<input type="search" placeholder="Buscar componente..." /></label>;

export const Dropdown = () => <label className={styles.field}>Categoría<select><option>Forms</option><option>Layout</option></select></label>;

export const CheckRadioSwitch = () => (
  <div className={styles.inline}><label><input type="checkbox" /> Checkbox</label><label><input type="radio" name="r"/> Radio</label><label><input type="checkbox" role="switch"/> Switch</label></div>
);

export const NewsletterForm = () => <form className={styles.newsletter}><input placeholder="email@dominio.com" aria-label="Email"/><button>Suscribirme</button></form>;

export const Accordion = ({ items }: { items: { q: string; a: string }[] }) => (
  <div className={styles.accordion}>{items.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
);

export const Calendar = () => {
  const days = useMemo(() => Array.from({ length: 30 }, (_, i) => i + 1), []);
  const [active, setActive] = useState<number | null>(null);
  return <div className={styles.calendar}>{days.map((d) => <button key={d} className={active===d ? styles.active : ''} onClick={() => setActive(d)}>{d}</button>)}</div>;
};
