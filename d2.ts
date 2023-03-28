import { parse } from 'https://deno.land/std@0.100.0/datetime/mod.ts';

const myDate = parse('04-07-21', 'dd-mm-yyyy');

console.log(myDate)