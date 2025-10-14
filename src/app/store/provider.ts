import { ReactNode } from "react";
import store from "./store";

const {Provider} = require('react-redux');

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
      <html lang="en">
        <body>
          <Provider store={store}>{children}</Provider>
        </body>
      </html>
    );
  }