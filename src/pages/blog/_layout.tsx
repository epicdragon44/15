import { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return <div className="w-full lg:ml-12 prose">{children}</div>;
}
