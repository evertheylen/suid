
# How to port a component from MUI to SUID

In this folder you'll find files and documentation to port an imaginary 'FooBar' component
from MUI to SUID. Steps:

  1. Find the MUI source here: https://github.com/mui/material-ui/blob/master/packages/mui-material/src/
  2. Start with the small files with no dependencies:
    
      - Needed if MUI has a similar file (delete otherwise):

          - `useFooBarContext.ts`
          - `FooBarContext.ts`
          - `fooBarClasses.ts`

      - `FooBarProps.ts`: Always needed unless you aren't really creating a component (TODO?). This file
        has no counterpart in MUI (but it depends heavily on `FooBar.d.ts`)
  
  3. Then, the big one: `FooBar.tsx`: this is the main component.
  4. Now complete `index.ts`.
  5. Write docs etc... (TODO)



