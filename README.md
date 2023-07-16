# Fun card game

## Run Locally

Clone the project


Go to the project directory

```bash
  cd card-game
```

Install dependencies

```bash
  npm install
```

Start in dev mode

```bash
  npm run dev
```
Build the app

```bash
  npm run build
```

## Docker deployment

Build the container image

```bash
  docker build -t card-game .
```

Start the container

```bash
  docker run -p 5174:5174 card-game
```

