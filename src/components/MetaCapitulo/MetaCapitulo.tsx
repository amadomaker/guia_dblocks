import { Icon } from '../Icon/Icon';
import type { Nivel } from '../../data/catalogo';
import { useT } from '../../i18n/contexto';
import styles from './MetaCapitulo.module.css';

type Props = {
  minutos: number;
  nivel: Nivel;
  /** "escuro" é usado sobre o fundo azul-escuro da seção de projetos. */
  tema?: 'claro' | 'escuro';
};

export function MetaCapitulo({ minutos, nivel, tema = 'claro' }: Props) {
  const t = useT();
  return (
    <div className={`${styles.meta} ${tema === 'escuro' ? styles.escuro : ''}`}>
      <span className={styles.item}>
        <Icon name="clock" size={16} className={styles.icone} />
        <span>
          {minutos} {t.comum.min}
        </span>
      </span>
      <span className={styles.item}>
        <Icon name="level" size={16} className={styles.icone} />
        <span>{t.comum.niveis[nivel]}</span>
      </span>
    </div>
  );
}
