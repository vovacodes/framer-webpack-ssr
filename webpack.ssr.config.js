import { fileURLToPath } from "url";
import EsmUrlPlugin from "./plugins/EsmUrlPlugin.cjs";

export default {
  target: "node",
  entry: "./src/ssr-entrypoint.js",
  output: {
    filename: "main.cjs",
    path: fileURLToPath(new URL("./dist-ssr", import.meta.url).href),
    publicPath: fileURLToPath(new URL("./dist-ssr", import.meta.url).href),
  },
  mode: "development",
  plugins: [new EsmUrlPlugin()],
  externalsPresets: {
    web: false,
  },
  // experiments: {
  //   outputModule: true,
  // },
};
