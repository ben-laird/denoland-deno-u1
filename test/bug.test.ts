Deno.test("Temporal namespace should not throw ReferenceError", () => {
  // Throws, although lsp recognizes Temporal namespace
  const thisInstant = Temporal.Now.instant();

  console.log(thisInstant);
});

Deno.test("Iterator namespace does not exist", () => {
  // Throws, and lsp does not recognize Iterator namespace
  const s = Iterator.from();
});
