import * as React from "react";

export type Context = {
  editID: number | undefined;
  setEditID: (newEditID: number) => void;
};

export const EditContext = React.createContext<Context>({
  editID: undefined,
  setEditID: () => undefined,
});

export const useEditID = () => {
  return React.useContext(EditContext);
};
