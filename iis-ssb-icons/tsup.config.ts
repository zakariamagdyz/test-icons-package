import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/generated/index.ts"], // where your icons' index lives
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ["cjs", "esm"],
  outDir: "dist",
  external: ["react", "react-dom"],
  // minify: true,
});
