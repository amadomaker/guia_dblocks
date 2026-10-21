import { useEffect, useState } from 'react';

/** Devolve o id da seção que está no topo da área visível (para o "Nesta página"). */
export function useSecaoAtiva(ids: string[]) {
  const [ativa, setAtiva] = useState(ids[0]);

  useEffect(() => {
    setAtiva(ids[0]);
    if (!ids.length) return;
    const alvos = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);

    const atualizar = () => {
      // Linha de corte um pouco abaixo da navbar fixa.
      const corte = 160;
      let atual = ids[0];
      for (const el of alvos) if (el.getBoundingClientRect().top - corte <= 0) atual = el.id;
      // No fim da página, a última seção pode nunca chegar ao topo.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) atual = ids[ids.length - 1];
      setAtiva(atual);
    };

    atualizar();
    window.addEventListener('scroll', atualizar, { passive: true });
    window.addEventListener('resize', atualizar);
    return () => {
      window.removeEventListener('scroll', atualizar);
      window.removeEventListener('resize', atualizar);
    };
  }, [ids]);

  return ativa;
}
