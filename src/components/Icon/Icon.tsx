import type { CSSProperties } from 'react';
import { icons, type IconName } from './icons';

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
  /** Texto para leitores de tela. Sem ele o ícone é decorativo. */
  label?: string;
};

export function Icon({ name, size = 24, className, style, label }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flexShrink: 0, ...style }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {icons[name].map((d) => (
        // No Figma o traço fica em 2px em qualquer tamanho do ícone.
        <path key={d} d={d} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

export type { IconName };
