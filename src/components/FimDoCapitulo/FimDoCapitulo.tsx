import { useEffect, useId, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { enviarMotivo, enviarResposta, novoId } from '../../data/feedback';
import { useIdioma, useRota, useT } from '../../i18n/contexto';
import styles from './FimDoCapitulo.module.css';

export type LinkNavegacao = { rotulo: string; titulo: string; para: string };

type Props = {
  tipo: 'capitulo' | 'projeto';
  /** Slug da página; também é a chave para lembrar a resposta neste navegador. */
  pagina: string;
  /** Texto da pergunta; o padrão é "Este capítulo ajudou?". */
  pergunta?: string;
  anterior: LinkNavegacao;
  proximo?: LinkNavegacao;
};

const TAMANHO_MAX_MOTIVO = 1000;

// Chave antiga dos capítulos era só o slug; mantida para não perguntar de novo a quem já respondeu.
const chaveDe = (tipo: Props['tipo'], pagina: string) => `guia:ajudou:${tipo === 'projeto' ? `projeto:${pagina}` : pagina}`;

const lerResposta = (chave: string) => {
  try {
    return localStorage.getItem(chave);
  } catch {
    return null;
  }
};

/** inicial → (sim) obrigado | (não) motivo opcional → obrigado */
type Etapa = 'pergunta' | 'motivo' | 'respondido';

export function FimDoCapitulo({ tipo, pagina, pergunta, anterior, proximo }: Props) {
  const t = useT();
  const rota = useRota();
  const idioma = useIdioma();
  const { pathname } = useLocation();
  const idCampo = useId();
  const chave = chaveDe(tipo, pagina);
  const [resposta, setResposta] = useState<string | null>(() => lerResposta(chave));
  const [etapa, setEtapa] = useState<Etapa>(() => (lerResposta(chave) ? 'respondido' : 'pergunta'));
  const [idResposta, setIdResposta] = useState('');
  const [motivo, setMotivo] = useState('');

  useEffect(() => {
    const salva = lerResposta(chave);
    setResposta(salva);
    setEtapa(salva ? 'respondido' : 'pergunta');
    setMotivo('');
  }, [chave]);

  const responder = (valor: 'sim' | 'nao') => {
    const id = novoId();
    setIdResposta(id);
    setResposta(valor);
    setEtapa(valor === 'nao' ? 'motivo' : 'respondido');
    try {
      localStorage.setItem(chave, valor);
    } catch {
      /* navegação privada: só não lembra a resposta */
    }
    // O "não" já vai agora: se a pessoa fechar a página sem escrever o motivo, a resposta não se perde.
    enviarResposta({ id, tipo, pagina, caminho: pathname, idioma, resposta: valor });
  };

  const enviarMotivoDigitado = (e: FormEvent) => {
    e.preventDefault();
    const texto = motivo.trim();
    if (texto) enviarMotivo(idResposta, texto);
    setEtapa('respondido');
  };

  return (
    <footer className={styles.fim}>
      <div className={`${styles.ajudou} ${etapa === 'motivo' ? styles.ajudouAberto : ''}`} aria-live="polite">
        {etapa === 'respondido' && (
          <p className={styles.pergunta}>{resposta === 'sim' ? t.fim.obrigadoSim : t.fim.obrigadoNao}</p>
        )}
        {etapa === 'pergunta' && (
          <>
            <p className={styles.pergunta}>{pergunta ?? t.fim.ajudou}</p>
            <div className={styles.botoes}>
              <button type="button" className={styles.botao} onClick={() => responder('sim')}>
                {t.fim.sim}
              </button>
              <button type="button" className={styles.botao} onClick={() => responder('nao')}>
                {t.fim.nao}
              </button>
            </div>
          </>
        )}
        {etapa === 'motivo' && (
          <form className={styles.motivo} onSubmit={enviarMotivoDigitado}>
            <label htmlFor={idCampo} className={styles.pergunta}>
              {t.fim.motivoPergunta}
            </label>
            <textarea
              id={idCampo}
              className={styles.campo}
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              maxLength={TAMANHO_MAX_MOTIVO}
              rows={3}
              placeholder={t.fim.motivoExemplo}
              aria-describedby={`${idCampo}-aviso`}
              autoFocus
            />
            <div className={styles.motivoRodape}>
              <p id={`${idCampo}-aviso`} className={styles.aviso}>
                {t.fim.motivoAviso}
              </p>
              <div className={styles.botoes}>
                <button type="button" className={styles.botao} onClick={() => setEtapa('respondido')}>
                  {t.fim.pular}
                </button>
                <button type="submit" className={styles.botaoPrincipal} disabled={!motivo.trim()}>
                  {t.fim.enviar}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      <nav className={styles.navegacao} aria-label={t.fim.anteriorEProximo}>
        <Link to={rota(anterior.para)} className={styles.anterior}>
          <span className={styles.rotulo}>{anterior.rotulo}</span>
          <span className={styles.titulo}>
            <Icon name="arrow" size={18} className={styles.setaAnterior} />
            {anterior.titulo}
          </span>
        </Link>
        {proximo ? (
          <Link to={rota(proximo.para)} className={styles.proximo}>
            <span className={styles.rotulo}>{proximo.rotulo}</span>
            <span className={styles.titulo}>
              {proximo.titulo}
              <Icon name="arrow" size={18} className={styles.seta} />
            </span>
          </Link>
        ) : (
          <span className={styles.vazio} />
        )}
      </nav>
    </footer>
  );
}
