import FooBar from "@suid/material/FooBar";
import ComponentInfo from "~/components/ComponentInfo";

const FooBarExample = () => (
  <>
    <FooBar foo="Obiwan"></FooBar>
    <FooBar foo="Windu"></FooBar>
    <FooBar foo="Obiwan" quuz={false} variant="ham"></FooBar>
  </> 
)

export default function FooBarPage() {
  return (
    <ComponentInfo
      name={FooBar.name}
      examples={[
        {
          bgcolor: "example",
          component: FooBarExample,
        },
      ]}
      docsName="foo-bar"
    />
  );
}
