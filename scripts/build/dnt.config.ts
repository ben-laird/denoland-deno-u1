// See https://deno.land/x/dnt@0.39.0 for more info and configuration

import { BuildOptions } from "https://deno.land/x/dnt@0.39.0/mod.ts";

export const outDir = "./build";

const name = "your-deno-package";

export const options: BuildOptions = {
  entryPoints: ["./src/index.ts", {
    name: "./lib",
    path: "./src/lib.ts",
  }, {
    name,
    path: "./main.ts",
    kind: "bin",
  }],
  outDir,

  package: {
    name,
    version: Deno.args[0],
    description: "Put your description here!",
    keywords: ["Put", "keywords", "here"],
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/start-labs/deno.git",
    },
    bugs: {
      url: "https://github.com/start-labs/deno/issues",
    },
  },

  async postBuild() {
    const files = ["LICENSE.md", "README.md"];

    await Promise.all(files.map(copyToOutDir));
  },

  scriptModule: "cjs",
  packageManager: "pnpm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
};

async function copyToOutDir(path: string) {
  await Deno.copyFile(path, `${outDir}/${path}`);
}
