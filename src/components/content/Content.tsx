import styles from './Content.module.css';

export const Heading = ({ size, children }: { size: 'sm'|'md'|'lg'; children: string }) => {
  const Tag = size === 'lg' ? 'h1' : size === 'md' ? 'h2' : 'h3';
  return <Tag className={styles[`heading${size}`]}>{children}</Tag>;
};

export const Paragraph = ({ children }: { children: string }) => <p className={styles.p}>{children}</p>;
export const Highlight = ({ children }: { children: string }) => <span className={styles.highlight}>{children}</span>;

export const Card = ({ title, text, image }: { title: string; text: string; image?: string }) => (
  <article className={styles.card}>
    {image && <img src={image} alt={title} className={styles.image} />}
    <h4>{title}</h4>
    <p>{text}</p>
  </article>
);

export const HeroBlock = () => (
  <section className={styles.hero}>
    <div>
      <Heading size="lg">Librería UI para productos reales</Heading>
      <Paragraph>Arquitectura preparada para escalar con themes, variantes y componentes reutilizables.</Paragraph>
    </div>
    <img src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1000" alt="hero" />
  </section>
);

export const PricingCard = () => (
  <article className={styles.pricing}><h4>Pro</h4><p className={styles.price}>$24/mes</p><ul><li>Todos los componentes</li><li>Soporte prioritario</li></ul></article>
);

export const TestimonialCard = () => (
  <article className={styles.card}><p>“Aceleramos nuestro design system en semanas.”</p><strong>María, Product Lead</strong></article>
);
