# Portfólio [rafa314]

Site estático (HTML + CSS). Os writeups são escritos em **Markdown** e convertidos em HTML pelo `blog.py`.

## Instalação (uma vez)

```bash
pip install markdown
```

## Criar e publicar um artigo

```bash
# 1. cria o rascunho (já vem com o esqueleto: Objetivo, Ambiente, Passo a passo, Evidências, Mitigação...)
python blog.py new "Tutorial curl" -c pentest -p "Info Gathering"

# 2. abra content/writeups/tutorial-curl.md, escreva o artigo e troque no topo:
#       status: draft      ->     status: published
#    (preencha também summary e tags, se quiser)

# 3. gera as páginas
python blog.py build
```

Depois é só dar commit/push (GitHub Pages) ou subir os arquivos.

## Comandos

| Comando | O que faz |
|---|---|
| `python blog.py new "Título" -c categoria [-p fase]` | cria um rascunho |
| `python blog.py plan` | cria rascunhos para tudo que está em `content/plano.txt` |
| `python blog.py list` | mostra o que está publicado e o que é rascunho |
| `python blog.py build` | gera `writeups.html`, `writeups/*.html` e o bloco "Do lab para o papel" da home |

## Categorias

`pentest` · `web` · `redes` · `ctf` · `tryhackme` · `azure` · `teoria`

(para criar outra, edite o dicionário `CATEGORIES` no topo do `blog.py`)

## Imagens nos artigos

Salve os prints em `assets/img/writeups/` e use no Markdown:

```markdown
![Saída do exiftool](img/exiftool-saida.png)
```

## Cabeçalho de cada artigo

```yaml
---
title: Tutorial curl
category: pentest
phase: Info Gathering      # opcional; agrupa os cards dentro da categoria
order: 2                   # posição na lista
status: draft              # draft = aparece como "EM BREVE" | published = vira página
date: 2026-10-29
summary: Uma frase que aparece no card e na meta description.
tags: curl, http, recon
---
```

Para esconder os rascunhos da listagem em vez de mostrar "EM BREVE", mude `SHOW_PLANNED = False` no `blog.py`.

## Estrutura

```
index.html, experience.html, projects.html, about.html   páginas manuais
writeups.html, writeups/*.html                           GERADOS (não edite à mão)
content/writeups/*.md                                    seus artigos
content/plano.txt                                        lista de temas planejados
blog.py                                                  gerador
assets/css/style.css, writeups.css                       estilos
assets/js/main.js, writeups.js                           scripts
assets/img/rafael.jpg                                    sua foto
```
