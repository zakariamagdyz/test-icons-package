// scripts/build-icons.ts

import { transform } from "@svgr/core";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory where the raw SVG icons live
const ICONS_DIR = path.join(__dirname, "../src/svgs");

// Directory for the generated TSX icon components
const OUT_DIR = path.join(__dirname, "../src/generated");

async function buildIcons() {
  // Make sure output directory exists
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  // Read the SVG files
  const files = fs
    .readdirSync(ICONS_DIR)
    .filter((file) => file.endsWith(".svg"));

  for (const file of files) {
    const svgPath = path.join(ICONS_DIR, file);
    const svgSource = fs.readFileSync(svgPath, "utf-8");

    //  Convert SVG to a React TSX component with SVGR
    const componentName = getComponentName(file); // e.g. "HomeIcon" from "home.svg"
    const componentCode = await transform(
      svgSource,
      {
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],

        icon: true,
        typescript: true,
        ref: true,
        jsxRuntime: "automatic",
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "removeAttrs",
              params: {
                attrs: "(fill|stroke)", // Remove existing fill and stroke attributes
              },
            },
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ fill: "currentColor" }], // Set fill to currentColor
              },
            },
          ],
        },
      },
      { componentName }
    );

    // Write the component to the output directory
    const tsxPath = path.join(OUT_DIR, `${componentName}.tsx`);
    fs.writeFileSync(tsxPath, componentCode, "utf-8");
    console.log(`Generated ${componentName}.tsx`);
  }

  // Generate an `index.ts` that exports all icons
  generateIndexFile();
}

function getComponentName(fileName: string) {
  // e.g. "home.svg" => "HomeIcon"
  const baseName = path.basename(fileName, ".svg");
  return (
    baseName.charAt(0).toUpperCase() +
    baseName.slice(1).replace(/-(\w)/g, (_, c) => c.toUpperCase())
  );
}

function generateIndexFile() {
  const files = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".tsx"));
  let exportStatements = "";
  for (const file of files) {
    const componentName = path.basename(file, ".tsx");
    exportStatements += `export { default as ${componentName} } from './${componentName}';\n`;
  }
  fs.writeFileSync(path.join(OUT_DIR, "index.ts"), exportStatements, "utf-8");
}

buildIcons().catch((err) => {
  console.error(err);
  process.exit(1);
});
