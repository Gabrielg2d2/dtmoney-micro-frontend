import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

export default function Root() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}
