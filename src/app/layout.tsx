import { PropsWithChildren } from "react";
import "../styles/styles.css";

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html>
      <head>
        <title>Next.js App</title>
      </head>
      <body>
        <div>{props.children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
