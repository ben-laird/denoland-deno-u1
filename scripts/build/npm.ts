import { build, emptyDir } from "https://deno.land/x/dnt@0.39.0/mod.ts";
import { options, outDir } from "./dnt.config.ts";

await emptyDir(outDir);

await build(options);
