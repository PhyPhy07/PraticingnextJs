This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Running the app

### Option 1: From Docker image (no Node.js required)

If you have [Docker](https://docs.docker.com/get-docker/) installed:

```bash
docker run -p 3000:3000 physneed7/interviewproject:latest
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To run in the background: `docker run -d -p 3000:3000 --name interview-app physneed7/interviewproject:latest`

### Option 2: From source

You need [Node.js](https://nodejs.org/) (v20+).

```bash
git clone https://github.com/PhyPhy07/PraticingnextJs.git
cd PraticingnextJs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Getting Started (development)

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


