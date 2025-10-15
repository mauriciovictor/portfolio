# 🚀 Portfólio Pessoal - Maurício Ferreira

<div align="center">

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Um portfólio moderno e responsivo construído com as mais recentes tecnologias web.

[Demo ao Vivo](#) • [Reportar Bug](../../issues) • [Solicitar Feature](../../issues)

</div>

---

## ✨ Features

- 🎨 **Design Moderno**: Interface elegante e minimalista inspirada em sites modernos
- 🌓 **Dark/Light Mode**: Suporte completo para tema claro e escuro com persistência
- 📱 **Responsivo**: Layout totalmente adaptável para todos os dispositivos
- 🎯 **Navegação Suave**: Ancoragem suave com destaque de seção ativa
- 🎭 **Animações**: Efeitos de levitação e transições suaves
- 🚀 **Performance**: Otimizado com Astro para carregamento ultra-rápido
- ⚡ **Componentes Vue**: Componentes reativos e reutilizáveis

## 🛠️ Tecnologias Utilizadas

### Core
- **[Astro](https://astro.build/)** - Framework web moderno
- **[Vue.js 3](https://vuejs.org/)** - Framework JavaScript progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript com tipagem

### Estilização
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Processador CSS

### Ferramentas
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes rápido
- **[Vite](https://vitejs.dev/)** - Build tool

## 📦 Instalação

### Pré-requisitos

- Node.js >= 18.0.0
- pnpm (recomendado) ou npm

### Passo a passo

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/portifolio.git
cd portifolio/frontend
```

2. Instale as dependências
```bash
pnpm install
# ou
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
pnpm dev
# ou
npm run dev
```

4. Abra [http://localhost:4321](http://localhost:4321) no navegador

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview

# Lint e verificação de tipos
pnpm check
```

## 📁 Estrutura do Projeto

```
frontend/
├── public/
│   └── images/           # Imagens estáticas
├── src/
│   ├── components/       # Componentes Vue
│   │   ├── NavBar.vue
│   │   ├── Hero.vue
│   │   ├── Stacks.vue
│   │   ├── EnterpriseProjects.vue
│   │   ├── PessoalProjects.vue
│   │   └── Footer.vue
│   ├── pages/            # Páginas Astro
│   │   └── index.astro
│   └── styles/           # Estilos globais
│       └── global.css
├── projetos.json         # Dados dos projetos
├── astro.config.mjs      # Configuração Astro
├── tailwind.config.js    # Configuração Tailwind
└── package.json
```

## 🎨 Personalização

### Alterar Informações Pessoais

Edite os componentes em `src/components/` para personalizar:
- **NavBar.vue**: Nome e navegação
- **Hero.vue**: Foto, nome, descrição e links sociais
- **Stacks.vue**: Suas tecnologias

### Adicionar Projetos

Edite o arquivo `projetos.json`:

```json
{
  "title": "Nome do Projeto",
  "description": "Descrição detalhada",
  "tecnologias": ["React", "Node.js", "MongoDB"],
  "link": "https://projeto.com"
}
```

### Personalizar Cores

Edite `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#FF5D01',
      secondary: '#4FC08D'
    }
  }
}
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
pnpm build
# Upload da pasta dist/
```

### Netlify

```bash
# Build command
pnpm build

# Publish directory
dist
```

### GitHub Pages

```bash
pnpm build
# Configure o GitHub Pages para usar a pasta dist/
```

## 📝 Configuração do Dark Mode

O tema é salvo no `localStorage` e aplicado automaticamente:

```javascript
// Modo escuro por padrão
localStorage.setItem('theme', 'dark');

// Modo claro
localStorage.setItem('theme', 'light');
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fork o projeto
2. Criar uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Maurício Ferreira**

- GitHub: [@mauricioferreira](https://github.com/mauricioferreira)
- LinkedIn: [Maurício Ferreira](https://linkedin.com/in/mauricioferreira)
- Email: contato@mauricioferreira.dev

## 🙏 Agradecimentos

- [Astro](https://astro.build/) pela incrível experiência de desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS
- [Vue.js](https://vuejs.org/) pela reatividade
- Inspiração de design: [mxb.dev](https://mxb.dev/)

---

<div align="center">

Feito com ❤️ por [Maurício Ferreira](https://github.com/mauricioferreira)

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>

