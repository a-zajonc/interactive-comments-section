import * as React from "react";

export type Context = {
  replyID: number | undefined;
  setReplyID: (newEditID: number) => void;
};

export const ReplyContext = React.createContext<Context>({
  replyID: undefined,
  setReplyID: () => undefined,
});

export const useReplyID = () => {
  return React.useContext(ReplyContext);
};
