import { assertEquals } from "https://deno.land/std@0.211.0/assert/mod.ts";
import { add } from "../mod.ts";

Deno.test("Lib", () => {
  assertEquals(add(2, 3), 5);
});
