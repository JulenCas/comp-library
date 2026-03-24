import styles from './Feedback.module.css';

export const AlertBanner = ({ kind='success' }: { kind?: 'success'|'error' }) => <div className={styles[kind]} role="status">{kind === 'success' ? 'Guardado correctamente' : 'Hubo un error de validación'}</div>;
export const Badge = ({ text }: { text: string }) => <span className={styles.badge}>{text}</span>;
export const ChipList = () => <div className={styles.chips}>{['React','TypeScript','A11y'].map((c) => <span key={c}>{c}</span>)}</div>;
export const TooltipDemo = () => <button className={styles.tooltip}>Hover me<span>Tooltip accesible</span></button>;
export const ToastExample = () => <div className={styles.toast}>✅ Cambios publicados.</div>;
export const Loader = () => <div className={styles.loader} aria-label="loading"/>;
export const Skeleton = () => <div className={styles.skeleton} aria-hidden />;
export const EmptyState = () => <div className={styles.empty}><h4>Sin resultados</h4><p>Prueba otro filtro o crea contenido nuevo.</p></div>;
