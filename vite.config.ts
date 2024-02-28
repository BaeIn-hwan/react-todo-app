import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig((payload) => {
  console.log("payload", payload);

  return {
    plugins: [react()],
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".css", ".scss"],
      alias: {
        "@": "/src",
      },
    },
  };
});
