import { AnchorProps, Anchor as BarrelrollaAnchor } from "barrelrolla-ui";
import { ElementType } from "react";

export default function Anchor<E extends ElementType>({
  ...rest
}: AnchorProps<E>) {
  return (
    <BarrelrollaAnchor
      {...rest}
      underlined
      className="underline-offset-2 hover:underline-offset-1"
      hoverUnderline={false}
    />
  );
}
