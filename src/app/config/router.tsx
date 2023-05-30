import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./router.config";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
};
