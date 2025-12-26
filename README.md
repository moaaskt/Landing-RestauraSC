# 🏢 RestauraSC

> **Landing Page de Alta Conversão para Serviços de Restauração de Fachadas e Vidros**

Transforme a primeira impressão em conversão. Uma experiência visual imersiva que demonstra o poder da restauração profissional através de tecnologia avançada, animações fluidas e integração direta com WhatsApp.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18.2-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 🚀 Sobre o Projeto

**RestauraSC** é uma landing page moderna e performática desenvolvida com foco em **conversão e experiência do usuário**. O projeto foi arquitetado seguindo princípios de **Mobile First**, garantindo uma experiência fluida em todos os dispositivos.

### Objetivo

Demonstrar de forma visual e interativa os serviços de restauração de vidros e fachadas, destacando:
- **Tecnologia avançada** de remoção de chuva ácida
- **Processo rápido** e não invasivo
- **Resultados visuais** através de comparações interativas
- **Conversão direta** via WhatsApp com formulário inteligente

### Diferenciais Técnicos

- ⚡ **Performance otimizada** com Vite e code splitting
- 🎨 **Animações fluidas** com Framer Motion
- 📱 **Design responsivo** Mobile First
- 🎯 **Foco em conversão** com CTA estratégicos
- 🔒 **TypeScript** para type safety
- 🎨 **Tailwind CSS v4** com tema customizado

---

## ✨ Funcionalidades Principais

### 🎯 Componentes de Conversão

#### **Smart Floating WhatsApp**
Componente flutuante inteligente com:
- **Efeito Radar/Pulsante** animado (keyframes CSS customizado)
- **Ícone SVG nativo** do WhatsApp (vetorizado e nítido)
- **Janela de chat** com animações spring (Framer Motion)
- **Formulário pré-preenchido** que redireciona para WhatsApp Web/App
- **Design inspirado no WhatsApp** com background pattern autêntico
- **Validação de campos** e feedback visual

#### **Hero Section**
- Vídeo de fundo com overlay gradiente
- Animações de entrada escalonadas
- Badge de destaque animado
- CTA principal com hover effects
- Efeitos de glow e ambient light

#### **Seção de Serviços (Carrossel Drag)**
- **Carrossel arrastável** (drag & drop) com Framer Motion
- Cards com hover effects e glow borders
- Ícones Lucide React
- Layout responsivo com scroll horizontal
- Feedback visual durante o arraste

#### **Comparador Antes/Depois**
- **Slider interativo** para comparar imagens
- Suporte a mouse e touch events
- Labels dinâmicos (ANTES/DEPOIS)
- Transições suaves
- Aspect ratio responsivo

#### **Navbar Inteligente**
- **Scroll detection** com Framer Motion
- Background blur dinâmico ao rolar
- Menu mobile com animações
- Logo premium com gradiente animado
- Links com hover underline effect

### 🎨 Sistema de Design

- **Tema customizado** via Tailwind CSS v4 (`@theme`)
- Cores brand: `brand-dark`, `brand-surface`, `brand-primary`
- Gradientes premium (ouro/ciano)
- Utilitários customizados (`.text-gradient`)
- Tipografia Inter (Google Fonts)

---

## 🛠 Tech Stack

### Core Dependencies

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | `^19.2.0` | Biblioteca UI declarativa |
| **TypeScript** | `~5.9.3` | Type safety e DX |
| **Vite** | `^7.2.4` | Build tool e dev server |
| **Tailwind CSS** | `v4` | Framework CSS utility-first |
| **Framer Motion** | `^11.18.2` | Biblioteca de animações |
| **Lucide React** | `^0.562.0` | Ícones SVG otimizados |

### Dev Dependencies

| Ferramenta | Versão | Uso |
|------------|--------|-----|
| **@vitejs/plugin-react** | `^5.1.1` | Plugin React para Vite |
| **ESLint** | `^9.39.1` | Linter e code quality |
| **TypeScript ESLint** | `^8.46.4` | Regras TypeScript para ESLint |
| **tailwind-merge** | `^3.4.0` | Merge inteligente de classes Tailwind |
| **clsx** | `^2.1.1` | Utilitário para classes condicionais |

### Ferramentas de Build

- **Vite**: Build tool ultra-rápido
- **TypeScript**: Compilação type-safe
- **PostCSS**: Processamento CSS (via Vite)
- **ESLint**: Code linting

---

## 📸 Screenshots

### Hero Section
![Hero Section](./docs/screenshots/hero-section.png)
*Seção principal com vídeo de fundo e CTA destacado*

### Comparador Antes/Depois
![Before/After Comparison](./docs/screenshots/comparison-slider.png)
*Slider interativo para comparar resultados*

### Carrossel de Serviços
![Services Carousel](./docs/screenshots/services-carousel.png)
*Carrossel arrastável com cards de serviços*

### Floating WhatsApp
![Floating WhatsApp](./docs/screenshots/floating-whatsapp.png)
*Botão flutuante com efeito radar e janela de chat*

### Mobile View
![Mobile View](./docs/screenshots/mobile-view.png)
*Layout responsivo otimizado para mobile*

---

## 🏁 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** >= 18.x
- **npm** >= 9.x (ou **yarn** >= 1.22.x / **pnpm** >= 8.x)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/restaura-sc.git
   cd restaura-sc
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento (Vite) |
| `npm run build` | Gera build de produção (`dist/`) |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Executa ESLint |

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---

## 📂 Estrutura de Pastas

```
restaura-sc/
├── public/                 # Assets estáticos
│   └── vite.svg
├── src/
│   ├── assets/            # Recursos (imagens, vídeos)
│   │   ├── images/        # Imagens (before.png, after.png)
│   │   └── video/         # Vídeos (hero1.mp4)
│   ├── components/        # Componentes React
│   │   ├── layout/        # Componentes de layout
│   │   │   └── Navbar.tsx # Navbar com scroll detection
│   │   ├── sections/     # Seções da landing page
│   │   │   ├── Hero.tsx           # Hero com vídeo
│   │   │   ├── Services.tsx      # Carrossel de serviços
│   │   │   └── Comparison.tsx     # Comparador antes/depois
│   │   └── ui/            # Componentes UI reutilizáveis
│   │       ├── Button.tsx         # Botão customizado
│   │       └── FloatingWhatsApp.tsx # Chat WhatsApp
│   ├── lib/               # Utilitários
│   │   └── utils.ts       # Funções auxiliares
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais (Tailwind + tema)
├── .gitignore
├── package.json
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
└── README.md
```

### Convenções de Código

- **Componentes**: PascalCase (`FloatingWhatsApp.tsx`)
- **Arquivos de utilidade**: camelCase (`utils.ts`)
- **Alias de import**: `@/` aponta para `src/`
- **Organização**: Separação por feature (layout, sections, ui)

---

## 🎨 Customização

### Cores do Tema

Edite as variáveis CSS em `src/index.css`:

```css
@theme {
  --color-brand-dark: #09090b;
  --color-brand-surface: #18181b;
  --color-brand-primary: #06b6d4;
  --color-brand-secondary: #3b82f6;
  --color-brand-glow: rgba(6, 182, 212, 0.5);
}
```

### Número do WhatsApp

Configure o número no componente `FloatingWhatsApp.tsx`:

```typescript
const phoneNumber = "554899999999" // Apenas números
```

---

## 📝 Licença

Este projeto é privado e proprietário. Todos os direitos reservados.

---

## 👥 Contribuindo

Este é um projeto privado. Para sugestões ou melhorias, entre em contato com a equipe de desenvolvimento.

---

## 📧 Contato

**RestauraSC** - Especialistas em Restauração de Fachadas e Vidros

---

<div align="center">

**Desenvolvido com ❤️ usando React, TypeScript e Vite**

[⬆ Voltar ao topo](#-restaurasc)

</div>
