import { fileURLToPath } from "url";
import EsmUrlPlugin from "./plugins/EsmUrlPlugin.cjs";

export default {
  target: "web",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: fileURLToPath(new URL("./dist", import.meta.url).href),
  },
  mode: "development",
  plugins: [new EsmUrlPlugin()],
  externalsPresets: {
    web: false,
  },
};
