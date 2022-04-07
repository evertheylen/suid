import { OverrideProps } from "../OverridableComponent";
import { ElementType, EventParam, OverridableStringUnion } from "@suid/types";
import { JSXElement } from "solid-js";

// Allows us to define other FooBar variants later, see the `variant` prop below
export interface FooBarPropsVariantOverrides {}

// Maybe inherit from another TypeMap. How? When?  -> TODO!
//   (e.g. should RadioGroup have a connection to FormGroup?)
export type FooBarTypeMap<
  P = {},  // -> TODO: Unsure what 'P' stands for exactly
  D extends ElementType = "div"
    // -> You can find the intended default component/html element in the `component = '...'`
    //    destructuring line of props in MUI/Foobar.js
    //    Or in the .d.ts file, just like this TypeMap
  // ...  -> more type arguments? When? Why? TODO!
> = {
  name: "MuiFooBar";
  defaultPropNames: "bar" | "quuz" | "variant"
  //   -> props that have a default, as defined in the destructuring in MUI/Foobar.js
  //      EXCEPT 'component' (see above)
  selfProps: {
    // Base yourself on MUI/FooBar.d.ts for this. Note:
    //   React.ReactNode --> JSXElement
    //   ... --> EventParam<HTMLElement, MouseEvent>
    //
    // Make sure to also copy the documentations, and make optional props optional (with `?:`)
    
    // Example, 
    children?: JSXElement;
    foo: "Obiwan" | "Windu",
    bar?: number,
    quuz?: boolean,
    variant?: OverridableStringUnion<
      "cheese" | "ham",
      FooBarPropsVariantOverrides
    >;
  };
  props: P & FooBarTypeMap<P, D /* more type args?... */>["selfProps"];
  defaultComponent: D;
}

export type FooBarProps<
  D extends ElementType = FooBarTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<FooBarTypeMap<P, D>, D>;

export default FooBarTypeMap;
