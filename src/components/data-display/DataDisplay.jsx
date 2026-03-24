import { useState } from 'react';
import styles from './DataDisplay.module.css';

export const Carousel = ({ slides, withText = true }) => {
  const [idx, setIdx] = useState(0);
  const slide = slides[idx];
  return (
    <section className={styles.carousel}>
      <img src={slide.image} alt={slide.title} />
      {withText && <div><h4>{slide.title}</h4><p>{slide.text}</p></div>}
      <div className={styles.controls}>
        <button type="button" onClick={() => setIdx((idx - 1 + slides.length) % slides.length)}>←</button>
        <button type="button" onClick={() => setIdx((idx + 1) % slides.length)}>→</button>
      </div>
    </section>
  );
};

export const Tabs = () => {
  const [tab, setTab] = useState('Preview');
  return <div><div className={styles.tabs}>{['Preview', 'Code'].map((t) => <button type="button" key={t} className={tab === t ? styles.active : ''} onClick={() => setTab(t)}>{t}</button>)}</div><p>{tab === 'Preview' ? 'Vista de componente.' : '<Button variant="solid" />'}</p></div>;
};

export const SimpleTable = () => (
  <table className={styles.table}><thead><tr><th>Componente</th><th>Estado</th></tr></thead><tbody><tr><td>Button</td><td>Estable</td></tr><tr><td>Calendar</td><td>Beta</td></tr></tbody></table>
);

export const Pagination = () => <nav className={styles.pagination} aria-label="pagination">{[1, 2, 3].map((n) => <button type="button" key={n}>{n}</button>)}</nav>;
export const Avatar = () => <img className={styles.avatar} src="https://i.pravatar.cc/80?img=11" alt="avatar" />;
export const FeatureList = () => <ul className={styles.features}><li>Tokens centralizados</li><li>Themes por variables CSS</li><li>JavaScript moderno</li></ul>;
