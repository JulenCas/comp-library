import { useState } from 'react';
import { themeLabels, themeOrder } from '@/themes/themeTokens';
import { navItems, carouselSlides, faqData } from '@/data/showcaseData';
import {
  Header, Sidebar, Footer, Breadcrumbs, Button, HeroBlock, Card, Heading, Paragraph, Highlight,
  TextInput, DateInput, Calendar, Carousel, Accordion, Dropdown, Tabs, AlertBanner, Badge, ChipList,
  CheckRadioSwitch, TextArea, SearchBar, Pagination, Avatar, ToastExample, SimpleTable, FeatureList,
  Skeleton, EmptyState, FAQSection, CTASection, NewsletterSection, PricingCard, TestimonialCard,
  TooltipDemo, Loader,
} from '@/components';
import styles from './Showcase.module.css';

const variants = ['solid', 'outline'];

export const Showcase = () => {
  const [theme, setTheme] = useState('classic');

  return (
    <div data-theme={theme} className={styles.page}>
      <Header items={navItems} />
      <main className={styles.layout}>
        <Sidebar />
        <section className={styles.content}>
          <div className={styles.topbar}>
            <Breadcrumbs />
            <div>{themeOrder.map((t) => <button type="button" key={t} onClick={() => setTheme(t)} className={theme === t ? styles.activeTheme : ''}>{themeLabels[t]}</button>)}</div>
          </div>
          <HeroBlock />
          <section className={styles.grid3}>
            {variants.map((v) => <Button key={`p-${v}`} variant={v} tone="primary">Primario {v}</Button>)}
            {variants.map((v) => <Button key={`s-${v}`} variant={v} tone="secondary">Secundario {v}</Button>)}
            {variants.map((v) => <Button key={`t-${v}`} variant={v} tone="tertiary" loading={v === 'outline'}>Terciario {v}</Button>)}
          </section>
          <section className={styles.grid2}><Card title="Card con imagen" text="Patrón para listados y highlights." image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600" /><Card title="Card sin imagen" text="Versión compacta para bloques informativos." /></section>
          <section className={styles.grid2}><Heading size="md">Tipografía</Heading><Paragraph>Texto base con <Highlight>resaltado</Highlight> para mensajes cortos.</Paragraph></section>
          <section className={styles.grid2}><Carousel slides={carouselSlides} withText /><Carousel slides={carouselSlides} withText={false} /></section>
          <section className={styles.grid3}><TextInput label="Nombre" /><TextInput label="Email válido" status="success" /><TextInput label="Email inválido" status="error" /><DateInput /><Dropdown /><SearchBar /><TextArea /><CheckRadioSwitch /><Calendar /></section>
          <section className={styles.grid3}><Tabs /><Pagination /><Avatar /><Badge text="Nuevo" /><ChipList /><AlertBanner /><AlertBanner kind="error" /><TooltipDemo /><Loader /></section>
          <section className={styles.grid2}><SimpleTable /><FeatureList /><Skeleton /><ToastExample /><EmptyState /><Accordion items={faqData} /></section>
          <section className={styles.grid3}><PricingCard /><TestimonialCard /><CTASection /></section>
          <section className={styles.grid2}><FAQSection items={faqData} /><NewsletterSection /></section>
        </section>
      </main>
      <Footer />
    </div>
  );
};
