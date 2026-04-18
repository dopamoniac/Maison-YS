import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parsePort(value: string | undefined, fallback: number) {
  const port = Number(value);
  return Number.isFinite(port) && port > 0 ? port : fallback;
}

function normalizeBasePath(value: string | undefined) {
  if (!value || value.trim() === "") return "/";
  const trimmed = value.trim();
  if (trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
}

export default defineConfig(async ({ command }) => {
  const devPort = parsePort(process.env.PORT, 5173);
  const previewPort = parsePort(process.env.PORT, 4173);
  const basePath = normalizeBasePath(process.env.BASE_PATH);

  const plugins = [react(), tailwindcss()];

  if (command === "serve") {
    plugins.push(runtimeErrorOverlay());

    if (process.env.REPL_ID) {
      const { cartographer } = await import("@replit/vite-plugin-cartographer");
      const { devBanner } = await import("@replit/vite-plugin-dev-banner");

      plugins.push(
        cartographer({
          root: path.resolve(__dirname, ".."),
        }),
      );
      plugins.push(devBanner());
    }
  }

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "..", "..", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: __dirname,
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },
    server: {
      port: devPort,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
    preview: {
      port: previewPort,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});