import React from "react";
import { Spinner } from "./style";

export default function LoadingSpinner(): React.JSX.Element {
  return <Spinner data-testid="loading-spinner" />;
}
