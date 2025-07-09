# NLW Agents - Server

Backend do projeto **NLW Agents** desenvolvido durante o evento NLW (Next Level Week) da Rocketseat.

## 🚀 Tecnologias

- **Fastify** - Framework web para Node.js
- **Drizzle ORM** - ORM TypeScript-first para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas
- **TypeScript** - Linguagem de programação
- **Biome** - Linter e formatter de código

## 📋 Pré-requisitos

- Node.js 18+
- pnpm
- Docker e Docker Compose

## 🛠️ Configuração

1. **Clone o repositório**
```bash
git clone https://github.com/HtmLuc/nlw-agents-back-end.git
cd back-end
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. **Inicie o banco de dados**
```bash
docker-compose up -d
```

5. **Execute as migrações**
```bash
pnpm drizzle-kit push
```

6. **Popule o banco com dados iniciais**
```bash
pnpm db:seed
```

## 🚀 Executando o projeto

**Desenvolvimento:**
```bash
pnpm dev
```

**Produção:**
```bash
pnpm start
```

O servidor estará disponível em `http://localhost:3333`

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts
│   ├── migrations/
│   ├── schema/
│   └── seed.ts
├── http/
│   └── routes/
├── env.ts
└── server.ts
```

## 🔧 Scripts Disponíveis

- `pnpm dev` - Executa o servidor em modo desenvolvimento
- `pnpm start` - Executa o servidor em modo produção
- `pnpm db:seed` - Popula o banco com dados iniciais

## 📝 Padrões do Projeto

- **Arquitetura**: API REST com Fastify
- **Validação**: Schemas com Zod
- **Banco de dados**: PostgreSQL com Drizzle ORM
- **Formatação**: Biome para linting e formatação
- **TypeScript**: Configurado com strict mode 