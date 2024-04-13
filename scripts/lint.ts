function sources(sources: string[]): [string, ...string[]] {
  if (sources.length === 0) {
    return ["src"];
  }
  return sources as [string, ...string[]];
}

const denoLint = new Deno.Command("deno", {
  args: ["lint", ...sources(Deno.args)],
});

const biomeLint = new Deno.Command("deno", {
  args: ["run", "-A", "npm:@biomejs/biome", "lint", ...sources(Deno.args)],
});

denoLint.spawn();

biomeLint.spawn();
