# Use uma imagem do Node.js como base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "hello.js"]
