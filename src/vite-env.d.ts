/// <reference types="vite/client" />

// For CSS imports
declare module '*.css' {
    const content: string;
    export default content;
  }