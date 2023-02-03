import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { UpdateComment } from "../../../UpdateComment";
import { EditContext } from "../../../../../context";
export function ContentDisplay({ id, content, replyingTo, }) {
    const { editID } = React.useContext(EditContext);
    return (_jsx(Box, { children: replyingTo ? (editID === id ? (_jsx(UpdateComment, { content: content, replyingTo: replyingTo })) : (_jsx(Box, { children: _jsxs(Text, Object.assign({ as: "span", color: "#67727E", fontWeight: "400", wordBreak: "break-word" }, { children: [_jsxs(Text, Object.assign({ as: "span", color: "#5457B6", fontWeight: "500" }, { children: ["@", replyingTo.concat(" ")] })), content] })) }))) : editID === id ? (_jsx(UpdateComment, { content: content, replyingTo: replyingTo })) : (_jsx(Text, Object.assign({ color: "#67727E" }, { children: content }))) }));
}
