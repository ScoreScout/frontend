import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

const Application = (): React.ReactElement => <App />;
export default Application;

let rootElement: ReactDOM.Root;

export const mount = (Component, element = document.getElementById("app")): void => {
  if (element == null) {
    return;
  }
  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(<Component />);

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (module.hot) {
    module.hot.accept("./app", () => {
      rootElement.render(<Component />);
    });
  }
};

export const unmount = (): void => {
  rootElement.unmount();
};
