import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { buscar } from '../../data/busca';
import { useIdioma, useRota, useT } from '../../i18n/contexto';
import styles from './Busca.module.css';

const ehMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

export function Busca() {
  const [termo, setTermo] = useState('');
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const caixaRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const listaId = useId();
  const idioma = useIdioma();
  const rota = useRota();
  const t = useT();

  const resultados = useMemo(() => buscar(termo, idioma).slice(0, 8), [termo, idioma]);

  useEffect(() => {
    const atalho = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };
    const clicarFora = (e: MouseEvent) => {
      if (!caixaRef.current?.contains(e.target as Node)) setAberto(false);
    };
    document.addEventListener('keydown', atalho);
    document.addEventListener('mousedown', clicarFora);
    return () => {
      document.removeEventListener('keydown', atalho);
      document.removeEventListener('mousedown', clicarFora);
    };
  }, []);

  useEffect(() => setAtivo(0), [termo]);

  const irPara = (destino: string) => {
    setAberto(false);
    setTermo('');
    navigate(rota(destino));
  };

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const escolhido = resultados[ativo];
    if (escolhido) irPara(escolhido.rota);
    else inputRef.current?.focus();
  };

  const teclas = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!resultados.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setAberto(true);
      setAtivo((i) => (i + 1) % resultados.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setAtivo((i) => (i - 1 + resultados.length) % resultados.length);
    } else if (e.key === 'Escape') {
      setAberto(false);
    }
  };

  const mostrarLista = aberto && termo.trim().length > 0;

  return (
    <form className={styles.caixa} role="search" onSubmit={enviar} ref={caixaRef}>
      <div className={styles.campo}>
        <Icon name="search" size={24} className={styles.lupa} />
        <label htmlFor={`${listaId}-input`} className="visually-hidden">
          {t.busca.rotulo}
        </label>
        <input
          id={`${listaId}-input`}
          ref={inputRef}
          type="search"
          className={styles.input}
          placeholder={t.busca.placeholder}
          value={termo}
          autoComplete="off"
          role="combobox"
          aria-expanded={mostrarLista}
          aria-controls={listaId}
          aria-activedescendant={mostrarLista && resultados[ativo] ? `${listaId}-${ativo}` : undefined}
          onChange={(e) => {
            setTermo(e.target.value);
            setAberto(true);
          }}
          onFocus={() => setAberto(true)}
          onKeyDown={teclas}
        />
        <kbd className={styles.atalho}>{ehMac ? '⌘  K' : 'Ctrl  K'}</kbd>
        <button type="submit" className={styles.botao}>
          {t.busca.botao}
        </button>
      </div>

      {mostrarLista && (
        <ul id={listaId} role="listbox" className={styles.lista}>
          {resultados.length === 0 ? (
            <li className={styles.vazio}>{t.busca.vazio(termo)}</li>
          ) : (
            resultados.map((r, i) => (
              <li
                key={r.rota}
                id={`${listaId}-${i}`}
                role="option"
                aria-selected={i === ativo}
                className={styles.item}
                onMouseEnter={() => setAtivo(i)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  irPara(r.rota);
                }}
              >
                <span className={styles.itemIcone} style={{ background: r.cor }}>
                  <Icon name={r.icone} size={18} />
                </span>
                <span className={styles.itemTexto}>
                  <span className={styles.itemTitulo}>{r.titulo}</span>
                  <span className={styles.itemContexto}>{r.contexto}</span>
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </form>
  );
}
