# IIS-SSB Icons

## **Description**

This package automatically generates ready-to-use JSX components from raw SVGs. It optimizes SVG files, ensuring they remain visually intact while reducing unnecessary metadata. Designed for both modern and legacy environments, it enables tree-shaking, TypeScript support, and flexible styling

## Installation & Usage

### Install the package

1️⃣ Install the package

```sh

cd iis-ssb-icons
npm install

```

2️⃣ Add Your SVGs

Place your raw SVG files inside:

```
bash

src/svg/

```

3️⃣ Build Your Icons
Generate the JSX components by running:

```sh

npm run build
```

4️⃣ Link the Package Locally

```sh

npm link

```

5️⃣ Use in Vite Playground
Navigate to your Vite Playground and link the package:

```sh

npm link @iis-ssb/icons

```

6️⃣ Import & Use Icons
Now, import the icons in your project:

```jsx
import { IconName } from "@iis-ssb/icons";

function App() {
  return <IconName />;
}
```

## Features

✅ **Optimized SVGs** – Removes redundant elements and metadata while preserving the original visual output.

✅ **Supports modern and legacy environments** – Compatible with older versions of Jest and Webpack.

✅ **Tree-shaking enabled** – Unused icons are automatically removed from the end-user bundle for better performance.

✅ **TypeScript support** – Ensures type safety and better developer experience.

✅ **Ref attribute support** – Allows DOM manipulation, measuring positions, and enabling dynamic animations.

✅ **Consistent class names** – Applies a generic `className` to all generated icons for easy styling.

✅ **Flexible color control** – Icons inherit color from their parent, simplifying theme consistency.

✅ **Scalable sizing** – Supports setting width/height manually or using `em` units for dynamic scaling, ensuring smooth alignment with responsive typography of MUI
