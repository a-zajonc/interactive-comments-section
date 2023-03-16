import * as React from "react";

export type Context = {
  replyToUsername: string | undefined;
  setReplyToUsername: (newReplyToUsername: string) => void;
};

export const ReplyToUsernameContext = React.createContext<Context>({
  replyToUsername: undefined,
  setReplyToUsername: () => undefined,
});

export const useReplyToUsername = () => {
  return React.useContext(ReplyToUsernameContext);
};
