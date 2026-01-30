interface ImportMetaEnv {
  readonly VITE_RAPID_API_ARTICLE_KEY: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
