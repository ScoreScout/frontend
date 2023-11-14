import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

export default () => <App />;

let rootElement: ReactDOM.Root;

export const mount = (Component: React.ComponentType, element : Element | null = document.getElementById("app")) => {
  if (!element) {
    throw new Error("Root element not found");
  }

  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(<Component />);

  if (module.hot) {
    module.hot.accept("./app", () => {
      rootElement.render(<Component />);
    });
  }
};

export const unmount = () => {
    rootElement.unmount();
};
