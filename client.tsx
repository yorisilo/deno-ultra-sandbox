import hydrate from "ultra/hydrate.js";
import App from "./src/app.tsx";

const ClientApp = () => {
  return <App />;
};

hydrate(document, <ClientApp />);
