import { store } from "./store";
import { Provider } from "react-redux";

// custom provider
export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}