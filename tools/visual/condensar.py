"""Condensa a saída do get_design_context (JSX + Tailwind) num esboço legível.
Uso: python3 condensar.py <arquivo.txt|json>  -> imprime o esboço
"""
import json, re, sys, html

raw = open(sys.argv[1], encoding='utf-8').read()
try:
    code = json.loads(raw)[0]['text']
except Exception:
    code = raw

assets = dict(re.findall(r'const (\w+) = "https://www\.figma\.com/api/mcp/asset/([^"]+)";', code))

# Classes que interessam para reproduzir o visual
KEEP = re.compile(
    r'^(gap-|p[trblxy]?-|w-\[|h-\[|size-\[|rounded|bg-|border(-[trbl])?(-\d)?$|border-\[|text-\[|leading-\[|tracking-|font-\[|shadow|flex-col|flex-wrap|items-|justify-|rotate|opacity|grid|col|absolute|left-|top-|right-|bottom-|underline|line-through|italic)'
)
SIMPLIFY = [
    (r"font-\['Mulish:(\w+)'\]", r'\1'),
    (r'text-\[color:var\(--[^,]+,(#[0-9a-fA-F]+|white)\)\]', r'c\1'),
    (r'bg-\[var\(--[^,]+,(#[0-9a-fA-F]+|white)\)\]', r'bg\1'),
    (r'border-\[var\(--[^,]+,(#[0-9a-fA-F]+)\)\]', r'bd\1'),
    (r'\[|\]', ''),
]

def simplify(cls):
    out = []
    for c in cls.split():
        if c in ('relative', 'shrink-0', 'content-stretch', 'overflow-clip', 'flex', 'block', 'border-solid', 'min-w-px', 'whitespace-nowrap', 'cursor-pointer'):
            continue
        if c.startswith(('font-bold', 'font-semibold', 'font-normal', 'font-extrabold', '[word-break', 'decoration', '[text-underline')):
            continue
        if not KEEP.match(c) and not c.startswith('text-['):
            continue
        for a, b in SIMPLIFY:
            c = re.sub(a, b, c)
        out.append(c)
    return ' '.join(out)

depth = 0
lines = []
pos = 0
token = re.compile(r'<(/?)(\w+)((?:[^>"]|"[^"]*"|\{[^}]*\})*?)(/?)>|([^<]+)')
for m in token.finditer(code[code.index('return ('):]):
    close, tag, attrs, selfc, text = m.groups()
    if text is not None:
        t = html.unescape(text.strip())
        t = re.sub(r'^\{`|`\}$', '', t)
        if t and t not in (');', '}', ')', '(') and not t.startswith(('return', ');')):
            lines.append('  ' * depth + '«' + t + '»')
        continue
    if close:
        depth -= 1
        continue
    name = re.search(r'data-name="([^"]*)"', attrs or '')
    cls = re.search(r'className="([^"]*)"', attrs or '')
    src = re.search(r'src=\{(\w+)\}', attrs or '')
    href = re.search(r'href="([^"]*)"', attrs or '')
    parts = [tag]
    if name:
        parts.append(f'[{name.group(1)}]')
    if cls:
        s = simplify(cls.group(1))
        if s:
            parts.append('{' + s + '}')
    if src:
        parts.append(f'IMG={src.group(1)}')
    if href:
        parts.append(f'href={href.group(1)}')
    if tag in ('span', 'p', 'div', 'a', 'button', 'img') and len(parts) == 1:
        pass
    else:
        lines.append('  ' * depth + ' '.join(parts))
    if not selfc:
        depth += 1

# Pula subárvores de template (iguais em todos os capítulos), guardando só a descrição.
PULAR = ('[Trilha de navegação]', '[Etiquetas]', '[Meta]', '[Fim do capítulo]')
filtradas, pular_ate = [], None
for l in lines:
    d = len(l) - len(l.lstrip(' '))
    if pular_ate is not None:
        if d > pular_ate:
            continue
        pular_ate = None
    if any(x in l for x in PULAR):
        pular_ate = d
        continue
    filtradas.append(l)
lines = filtradas

print('ASSETS:')
for k, v in assets.items():
    if not v.endswith('.svg'):
        print(f'  {k} = {v}')
print()
print('\n'.join(lines))
