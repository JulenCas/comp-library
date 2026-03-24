import type { ThemeName } from '@/types/ui';

export const themeLabels: Record<ThemeName, string> = {
  classic: 'Clásico limpio (Neomorfismo)',
  glass: 'Moderno Glassmorphism',
  organic: 'Fluido orgánico',
  editorial: 'Editorial contrastado',
};

export const themeOrder: ThemeName[] = ['classic', 'glass', 'organic', 'editorial'];
