
// This file is easy!
// Just copy everything from MUI/fooBarClasses.ts, and replace the top imports with:
import { generateUtilityClass, generateUtilityClasses } from "@suid/base";

// The rest of the file is here as an example:

export interface FooBarClasses {
  /** Styles applied to the root element */
  root: string;
  /** Styles applied to the root element if `variant="cheese"` */
  cheese: string;
  /** Styles applied to the root element if `variant="ham"` */
  ham: string;
  /** Styles applied if foo='Obiwan' */
  fooObiwan: string;
  /** Styles applied if foo='Windu' */
  fooWindu: string;
  /** Styles applied to the sub element */
  subElement: string;
}

export type FooBarClassKey = keyof FooBarClasses;

export function getFooBarUtilityClass(slot: string): string {
  return generateUtilityClass("MuiFooBar", slot);
}

const fooBarClasses: FooBarClasses = generateUtilityClasses("MuiFooBar", [
  "root",
  "cheese",
  "ham",
  "fooObiwan",
  "fooWindu",
  "subElement"
]);

export default fooBarClasses;
