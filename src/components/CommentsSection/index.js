import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { CommentBox } from "./CommentBox";
import { PostingComment } from "./PostingComment";
import { CommentsContext } from "../../context";
import { MutatingDots } from "react-loader-spinner";
export function CommentSection() {
    const { comments } = React.useContext(CommentsContext);
    return (_jsx(Box, { children: comments.length < 1 ? (_jsxs(Box, Object.assign({ display: "flex", flexDir: "column", alignItems: "center" }, { children: [_jsx(MutatingDots, { height: "100", width: "100", color: "#5457B6", secondaryColor: "#5457B6", radius: "12.5", ariaLabel: "mutating-dots-loading", wrapperStyle: {}, wrapperClass: "", visible: true }), _jsx(Text, Object.assign({ textTransform: "uppercase", color: "#5457B6" }, { children: "Loading" }))] }))) : (_jsxs(Box, { children: [_jsx(CommentBox, {}), _jsx(PostingComment, { defaultValue: "", replyMode: false })] })) }));
}
