/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL_FOR_WEB_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
