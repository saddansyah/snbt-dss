# Simple DSS SNBT

## How to clone and run development server
0. Clone this project
1. Use your favorite package manager: `npm`, `yarn`, `pnpm`, or `bun` (mine is using `bun`). Besides, make sure you have installed `git` on your machine
2. Install dependencies 
```js
bun install 
// or
npm install
// or
yarn install
// or
pnpm install
```
3. Start development server 
```js
bun run dev 
// or
npm run dev
// or
yarn run dev
// or
pnpm run dev
```

## How to build to Docker Image and run it
0. Make sure you have installed Docker on your machine
1. Build image
```docker
docker build -t snbt-dss:0.0.1 .
```
2. Run Docker container 
docker run -d -p 3000:80 --rm --name snbt-dss-container snbt-dss:0.0.1

3. Access at `http://localhost:3000`

---
_2025 - @saddansyah_
