import { Accordion, NewsletterForm } from '@/components/forms/Forms';
import { Button } from '@/components/buttons/Button';
import styles from './Sections.module.css';

export const FAQSection = ({ items }) => (
  <section className={styles.block}><h3>FAQ</h3><Accordion items={items} /></section>
);

export const CTASection = () => (
  <section className={styles.block}><h3>¿Listo para integrar?</h3><p>Empieza con los componentes base y escala gradualmente.</p><Button>Comenzar</Button></section>
);

export const NewsletterSection = () => (
  <section className={styles.block}><h3>Newsletter</h3><NewsletterForm /></section>
);
