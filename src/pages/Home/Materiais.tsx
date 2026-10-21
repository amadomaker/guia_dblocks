import { Icon } from '../../components/Icon/Icon';
import { Link } from 'react-router-dom';
import { materiais, type Material } from '../../data/materiais';
import { useRota, useT } from '../../i18n/contexto';
import styles from './Materiais.module.css';

export function Materiais() {
  const t = useT();
  return (
    <section id="materiais" className={styles.secao}>
      <div className="container">
        <header className={styles.cabecalho}>
          <h2 className={styles.titulo}>{t.materiaisSecao.titulo}</h2>
          <p className={styles.subtitulo}>{t.materiaisSecao.subtitulo}</p>
        </header>
        <ul className={styles.lista}>
          {materiais.map((m) => (
            <li key={m.chave}>
              <CardMaterial material={m} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CardMaterial({ material: m }: { material: Material }) {
  const t = useT();
  const rota = useRota();
  const textos = t.materiaisSecao.itens[m.chave];
  return (
    <article className={styles.card}>
      <div className={styles.topo}>
        <span className={styles.icone} style={{ background: m.fundo, color: m.cor }}>
          <Icon name={m.icone} size={26} />
        </span>
        <span className={styles.tipo}>{textos.tipo}</span>
      </div>
      <h3 className={styles.nome}>{textos.titulo}</h3>
      <p className={styles.resumo}>{textos.resumo}</p>
      {m.href.startsWith('/') ? (
        <Link to={rota(m.href)} className={styles.acao}>
          {textos.acao}
          <Icon name={m.acaoIcone} size={18} />
        </Link>
      ) : (
        <a href={m.href} target="_blank" rel="noreferrer" className={styles.acao}>
          {textos.acao}
          <Icon name={m.acaoIcone} size={18} />
          {m.download && <span className="visually-hidden"> {t.materiaisSecao.pdf}</span>}
        </a>
      )}
    </article>
  );
}
