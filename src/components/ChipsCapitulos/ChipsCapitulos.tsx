import { categoriaDoCapitulo, corDaCategoria, numeroDoCapitulo } from '../../data/catalogo';
import { useT } from '../../i18n/contexto';
import styles from './ChipsCapitulos.module.css';

/** "Usa os capítulos" + chips com a cor da categoria. Usado sobre fundo escuro. */
export function ChipsCapitulos({ capitulos }: { capitulos: number[] }) {
  const t = useT();
  return (
    <div className={styles.chips}>
      <span className={styles.rotulo}>{t.comum.usaOsCapitulos}</span>
      {capitulos.map((numero) => {
        const categoria = categoriaDoCapitulo(numero);
        // O grafite da categoria "código" some no fundo escuro; o Figma usa o cinza-400.
        const cor = categoria === 'codigo' ? 'var(--neutro-cinza-400)' : corDaCategoria(categoria);
        return (
          <span key={numero} className={styles.chip}>
            <span className={styles.ponto} style={{ background: cor }} />
            {numeroDoCapitulo(numero)} {t.chipsCapitulos[numero]}
          </span>
        );
      })}
    </div>
  );
}
