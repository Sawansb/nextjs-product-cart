"use client";

import { Provider } from "react-redux"; // ✅ this is a value, not a type
import { store } from "./store";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
