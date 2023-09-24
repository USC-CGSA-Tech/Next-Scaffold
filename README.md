This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Known issues

Running the project with `pnpm dev` will result in the following error:

```
 ⨯ Internal error: TypeError [ERR_INVALID_STATE]: Invalid state: ReadableStream is already closed
    at new NodeError (node:internal/errors:405:5)
    at ReadableByteStreamController.enqueue (node:internal/webstreams/readablestream:1157:13)
    at D:\Git\next-scaffold\node_modules\.pnpm\next@13.5.2_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:1:461602
    at ut (D:\Git\next-scaffold\node_modules\.pnpm\next@13.5.2_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:1:461652)
    at ct (D:\Git\next-scaffold\node_modules\.pnpm\next@13.5.2_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:1:460930)
    at Timeout._onTimeout (D:\Git\next-scaffold\node_modules\.pnpm\next@13.5.2_react-dom@18.2.0_react@18.2.0\node_modules\next\dist\compiled\next-server\app-page.runtime.dev.js:1:458100)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
```

This is a known issue with Next.js and is being tracked in [this issue](https://github.com/vercel/next.js/issues/55608). It does not affect the functionality of the project, but it does make the development experience less pleasant.
