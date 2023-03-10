import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://api.cartql.com",
  documents: ["app/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        persistedDocuments: true,
      },
    },
  },
};

export default config;
