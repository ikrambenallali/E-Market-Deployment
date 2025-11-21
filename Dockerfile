# Étape 1 : Image de base
FROM node:20-alpine

# Étape 2 : Dossier de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers package.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste du code source
COPY . .

# Étape 6 : Exposer le port sur lequel tourne ton app
EXPOSE 3000

# Étape 7 : Commande de démarrage
CMD ["npm", "start"]
