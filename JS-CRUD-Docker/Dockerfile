# Use a imagem Alpine com Nginx como base
FROM nginx:alpine

# Remova a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie os arquivos do seu projeto para dentro do container
COPY CRUD_JavaScript/ /usr/share/nginx/html

# Exponha a porta 80 do container
EXPOSE 80

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
