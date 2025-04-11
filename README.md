# EduAÍ - Plataforma Educacional com IA

EduAÍ é uma plataforma educacional que utiliza inteligência artificial para auxiliar professores, alunos e pais no processo de ensino e aprendizagem.

## Resumo das Funcionalidades

### Painel do Professor
- **Planejamento de Aulas com IA**: Gera planos de aula personalizados com base no currículo e perfil da turma
- **Monitoramento de Presença**: Sistema de reconhecimento facial para registro automático de presença
- **Análise de Engajamento**: Monitora padrões de atenção e participação para insights valiosos

### Portal dos Pais
- **Acompanhamento de Desempenho**: Visualização detalhada do progresso do aluno
- **Relatórios Personalizados**: Informações sobre pontos fortes e áreas de melhoria
- **Comunicação Direta**: Canal de comunicação com professores e escola

### Recursos de IA
- **Geração de Conteúdo**: Criação de planos de aula, relatórios e análises
- **Reconhecimento Facial**: Identificação de alunos para registro de presença
- **Análise de Dados**: Processamento de informações para insights educacionais

## Instalação e Configuração

### Pré-requisitos
- Node.js 18 ou superior
- npm ou yarn

### Passo a Passo para Instalação

1. **Clone o repositório**
   \`\`\`bash
   git clone https://github.com/seu-usuario/eduai.git
   cd eduai
   \`\`\`

2. **Instale as dependências**
   \`\`\`bash
   npm install
   # ou
   yarn install
   \`\`\`

3. **Configure as variáveis de ambiente**
   - Crie um arquivo `.env.local` na raiz do projeto
   \`\`\`
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   # Adicione outras variáveis conforme necessário
   \`\`\`

4. **Execute o servidor de desenvolvimento**
   \`\`\`bash
   npm run dev
   # ou
   yarn dev
   \`\`\`

5. **Acesse a aplicação**
   - Abra seu navegador e acesse `http://localhost:3000`

### Configuração da IA (Ambiente de Produção)

1. **Obtenha chaves de API**
   - Crie uma conta em um provedor de IA (OpenAI, etc.)
   - Gere uma chave de API

2. **Configure as variáveis de ambiente para produção**
   \`\`\`
   AI_API_KEY=sua-chave-aqui
   AI_MODEL=gpt-4o
   \`\`\`

3. **Build para produção**
   \`\`\`bash
   npm run build
   # ou
   yarn build
   \`\`\`

4. **Inicie o servidor de produção**
   \`\`\`bash
   npm start
   # ou
   yarn start
   \`\`\`

### Credenciais de Demonstração
- **Professor**: usuário "professor", senha "professor"
- **Pais**: usuário "pai", senha "pai"

## Estrutura do Projeto

\`\`\`
eduai/
├── app/                  # Páginas e rotas da aplicação (Next.js App Router)
│   ├── page.tsx          # Página inicial
│   ├── professor/        # Área do professor
│   ├── pais/             # Portal dos pais
│   └── webinar/          # Página de webinar
├── components/           # Componentes React reutilizáveis
│   ├── ui/               # Componentes de UI (shadcn)
│   ├── feature-card.tsx  # Cards de funcionalidades
│   └── ...
├── public/               # Arquivos estáticos
└── ...
\`\`\`

## Tecnologias Utilizadas

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion
- **UI Components**: shadcn/ui
- **Integração IA**: OpenAI API (simulada na versão demo)
