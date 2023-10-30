import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com/",
  overwrite: true,
  documents: "./src/**/*.gql",
  generates: {
    "./generates.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        {
          add: {
            content: `type RequestInit = {
  headers:
    | (HeadersInit & {
        next?: NextFetchRequestConfig;
      })
    | { next?: NextFetchRequestConfig };
};`,
          },
        },
      ],
      config: {
        reactQueryVersion: 5,
        legacyMode: false,
        exposeFetcher: true,
        exposeQueryKeys: true,
        fetcher: "./fetcher.ts#fetcher",
      },
    },
  },
};
export default config;
