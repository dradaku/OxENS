This is a Next.js based app to help users learn more about web3 by playing with resolving ENS domains.

## Getting Started

This has been built with:

- [Next.js](https://nextjs.org/)
- [Thorin](https://thorin.ens.domains/)
- [Styled Components](https://styled-components.com/)
- [Viem](https://viem.sh/)
- [Wagmi](https://wagmi.sh/)
- [RainbowKit](https://www.rainbowkit.com/)
- [ReOwn](https://cloud.walletconnect.com/sign-in)

## How to use

Install dependencies:

```bash
yarn install
```

A [ReOwn](https://cloud.walletconnect.com/sign-in) was created and our Project ID was added to `.env.local`:

```bash
cp .env.example .env.local
```

We then started the development server:

```bash
yarn dev
```

Then [http://localhost:3000](http://localhost:3000) was opened with our browser to see the result.

The frontend was edited by modifying `pages/index.tsx`. 

## Deployed on Vercel

Furthermore, the project was deployed with Vercel [![Deploy with Vercel](https://vercel.com/button)](https://ox-k6f8s65q6-dradakus-projects.vercel.app)
