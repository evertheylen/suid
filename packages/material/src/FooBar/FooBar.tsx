import { FooBarTypeMap } from "./FooBarProps";
import styled, { skipRootProps } from "../styles/styled";
import capitalize from "../utils/capitalize";

import fooBarClasses, { getFooBarUtilityClass } from "./fooBarClasses";
import createComponentFactory from "@suid/base/createComponentFactory";
import { ComponentInProps } from "@suid/types";
import clsx from "clsx";
import { useContext } from "solid-js";

// Also import any "base" component you may rely on:
//   import FooBarBase from "../FooBarBase";

// This is sometimes used to type `styled`, it seems
type OwnerState = ComponentInProps<FooBarTypeMap>;

const $ = createComponentFactory<FooBarTypeMap>()({
  name: "MuiFooBar",
  selfPropNames: [
    // List all keys of FooBarTypeMap['selfProps'] here
    "children",
    "foo",
    "bar",
    "quuz",
    "variant"
  ],
  propDefaults: ({ set }) => {
    // This function should specify defaults for all keys mentioned in FooBarTypeMap["defaultPropNames"]
    // See the destructuring of props in the main component in MUI
    // Potentially import some context here
    // const someContext = useContext(FooBarParentContext);
    return set({
      variant: "cheese",
      bar: 123,
      quuz: true,
    })
  },
  utilityClass: getFooBarUtilityClass,
  slotClasses: (ownerState) => ({
    // These are all the CSS slot classes. All the possibilities are already listed in
    // `fooBarClasses.ts`, but now you have to apply the right classes based on properties.
    // Base yourself on the `overridesResolver` function, but instead of `styles.XYZ` write `"XYZ"`.
    // In contrast to MUI, you have to include the slots of other (sub-)components here.
    // For this, look at other components and their `overridesResolver`
    root: [
      "root",
      ownerState.variant,
      `foo${capitalize(ownerState.foo)}`
    ],
    subElement: ["subElement"]
  })
});

// Include a Root element if MUI has it
const FooBarRoot = styled('div', {
  // This in MUI:
  //   shouldForwardProp: (prop) => rootShouldForwardProp(prop) || props === 'blabla',
  // becomes (note the inverted condition!):
  skipProps: skipRootProps.filter(x => x !== 'blabla'),
  name: "MuiFooBar",
  slot: "Root",
  // Now do an exact copy paste of the overridesResolver method!
  // This looks a lot like slotClasses above
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    
    return [
      styles.root,
      styles[ownerState.variant],
      styles[capitalize(ownerState.foo)],
    ];
  },
})<OwnerState>(
  ({ theme, ownerState }) => ({
    // Copy this verbatim from MUI, except replace `(theme.vars || theme)` with `theme`
    color: ownerState.foo === 'Windu' ? 'purple' : 'blue',
    border: ownerState.variant === 'cheese' ? `5px dotted yellow` : `3px solid blue`,
    [`&.${fooBarClasses.cheese}`]: {
      boxShadow: theme.shadows[6]
    },
  }),
  // TODO: Sometimes there's another function here? Why?
)

const FooBarSubElement = styled('span', {
  name: "FooBar",  // Same name!
  slot: "SubElement",
  overridesResolver: (props, styles) => {
    // Can be more complex too like the above
    return [styles.subElement];
  }
})<OwnerState>(({ ownerState }) => ({
  backgroundColor: "pink",
  width: "10px",
  height: "10px",
}));


/**
 * Documentation here, like with MUI
 */
const FooBar = $.component(function FooBar({
  allProps,    // -> as the name suggest, all the props
  otherProps,  // -> a bunch of other props, includes "title", "style", "sx", "component", ...
  props,       // -> props foo, bar, quuz, variant, children,
  classes      // -> {root: string, subElement: string} (see the keys of `slotClasses` above)
}) {
  // const someCtx = useContext(...)
  return (
    <FooBarRoot
      ownerState={allProps}
      className={clsx(classes.root, otherProps.className)}
      // relevant props are written out (see above which props we actually use)
      // TODO: typescript could enforce this better I think?
      foo={props.foo}
      variant={props.variant}
      {...otherProps}
      // classes={props.classes} TODO?
    >
      <FooBarSubElement className={classes.subElement} ownerState={allProps}></FooBarSubElement>
      foo = {props.foo}, quuz = {props.quuz.toString()}, variant = {props.variant}
      {props.children}
    </FooBarRoot>
  );
});

export default FooBar;
