import * as React from "react";

export type Context = {
  comments: Array<Comment> | undefined;
  setComments: (newComments: Array<Comment>) => void;
};

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
  replyingTo?: string;
}
export interface User {
  image: Image;
  username: string;
}
export interface Image {
  png: string;
  webp: string;
}

export const CommentsDataContext = React.createContext<Context>({
  comments: [],
  setComments: () => [],
});

export const useCommentsData = () => {
  return React.useContext(CommentsDataContext);
};
