import { type AnchorHTMLAttributes } from "react";

export type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
};

export function Link({ to, ...props }: AppLinkProps) {
  return <a href={to} {...props} />;
}
