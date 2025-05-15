# Usar imagem oficial Node para build
FROM node:18-alpine AS builder

# Criar diretório da aplicação
WORKDIR /app

# Copiar package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar todo o código para dentro do container
COPY . .

# Build do projeto (gerar arquivos estáticos na pasta dist)
RUN npm run build

# Stage final: servidor leve para servir os arquivos estáticos
FROM nginx:alpine

# Copiar arquivos buildados para o diretório padrão do nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta 80
EXPOSE 80

# Iniciar nginx no foreground
CMD ["nginx", "-g", "daemon off;"]
