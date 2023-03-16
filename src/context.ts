import { createContext } from "react";

export const CommentsContext = createContext<any | undefined>([]);

export const ReplyContext = createContext<any | undefined>("");

export const EditContext = createContext<any | undefined>("");
