import { main } from "./mod.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const exitCode = main();

  Deno.exit(exitCode);
}
