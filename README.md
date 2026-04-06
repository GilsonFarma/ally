# Ally — Site Psicóloga Premium

Site institucional desenvolvido em **React + Vite**, criado para psicólogas que desejam uma presença digital elegante, responsiva e fácil de personalizar.

🔗 **Demo ao vivo:** [https://allanyrodrigues.vercel.app/](https://allanyrodrigues.vercel.app/)

---

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS customizado
- Deploy via [Vercel](https://vercel.com/)

---

## Fontes utilizadas

- **Playfair Display** — títulos e destaques
- **Mulish** — textos corridos

---

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/GilsonFarma/ally.git
cd ally

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

---

## Como gerar a versão de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---

## Personalização

Troque os arquivos abaixo para adaptar o site à psicóloga real:

| Arquivo | O que alterar |
|---|---|
| `public/logo-placeholder.svg` | Logo da profissional |
| `public/hero-placeholder.svg` | Foto principal (hero) |
| `src/App.jsx` | Textos, WhatsApp, Instagram e e-mail |
| `src/styles.css` | Cores, espaçamentos e tipografia |

---

## Estrutura do projeto

```
ally/
├── public/
│   └── images/
├── src/
│   ├── App.jsx
│   └── styles.css
├── docs/
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

---

## Observações

- O projeto já está **totalmente responsivo**
- Não inclui seção de valores, queixas ou traumas (por escolha de design)
- Versão do Node recomendada definida em `.nvmrc`

---

## Deploy

O projeto está configurado para deploy automático via **Vercel**. Basta conectar o repositório na plataforma e o `vercel.json` cuida do restante.

---

## Autor

Desenvolvido por [GilsonFarma](https://github.com/GilsonFarma).
