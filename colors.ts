import { red, green, bgYellow, bgWhite, bold } from "https://deno.land/std/fmt/colors.ts";

console.log(bgYellow(bold(red("hello deno"))))
console.log(bgWhite(bold(green("hello deno"))))