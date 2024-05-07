import { Title } from "@solidjs/meta";
import { mergeProps, ParentComponent } from "solid-js";

import { Header } from "~/components/header";

type LayoutProps = {
  title?: string;
};

export const Layout: ParentComponent<LayoutProps> = (props) => {
  const mergedProps = mergeProps({ title: "Solid Todo" }, props);

  return (
    <div>
      <Title>{mergedProps.title}</Title>
      <Header />
      {mergedProps.children}
    </div>
  );
};
