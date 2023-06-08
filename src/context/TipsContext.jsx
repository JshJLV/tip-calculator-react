import { createContext } from "react";

export const TipsContext = createContext();

export function TipsProvider({ children }) {
  return <TipsContext.Provider>{children}</TipsContext.Provider>;
}
