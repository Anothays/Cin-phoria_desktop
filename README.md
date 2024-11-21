# STUDI - ECF fin 2024 - Cinéphoria

Cette application de bureautique est liée à l'api suivante ==> https://github.com/Anothays/Cin-phoria_api.git

## Pour utiliser en local

- cloner le projet sur votre machine

  ```bash
  git clone https://github.com/Anothays/Cin-phoria_desktop.git
  ```

- enlever l'extension .dist au fichier .env.dist

- attribuer une autre valeur à la variable d'environnment API_BASE_URL par l'url de votre api en local si vous préférez.

- installer les dépendances

  ```bash
  npm install
  ```

- lancer le serveur en local

  ```bash
  npm run dev
  ```

## Pour faire un build de l'application

⚠️ La commande build n'est pas opérationnelle pour le moment. Work in progress ! ⚠️

```bash
npm run build
```

## Technologies utilisées

TypeScript
ElectronJS
React
Vite
