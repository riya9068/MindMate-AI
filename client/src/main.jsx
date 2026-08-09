// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConvexProvider ,ConvexReactClient } from "convex/react";
// import { ConvexProviderWithAuth } from "convex/react-auth";
import { ConvexAuthProvider} from "@convex-dev/auth/react";
const convex = new ConvexReactClient(
  import.meta.env.VITE_CONVEX_URL
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ConvexProvider client={convex}>
    <ConvexAuthProvider client={convex}>
      <App />
    </ConvexAuthProvider>
  </ConvexProvider>
  </StrictMode>
);