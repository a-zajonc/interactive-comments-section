import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@chakra-ui/react";
import { DeleteComment } from "../../../DeleteComment";
import { EditComment } from "../../../EditComment";
import { UserDataDisplay } from "../UserDataDisplay";
import { Rater } from "../../Rater";
import { ReplyToComment } from "../ReplyToComment";
import { ContentDisplay } from "../ContentDisplay";
export function DesktopCommentsDisplay({ id, score, username, date, content, replyingTo, avatar, }) {
    return (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "row", bgColor: "white", rounded: "10px", w: "100%", minH: "200px", maxH: "100%", padding: "20px", marginBottom: "20px" }, { children: [_jsx(Rater, { score: score, username: username }), _jsxs(Box, Object.assign({ display: "flex", flexDirection: "column", w: "100%", h: "100%" }, { children: [_jsxs(Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "15px" }, { children: [_jsx(UserDataDisplay, { username: username, avatar: avatar, date: date }), _jsx(Box, Object.assign({ display: "flex", flexDirection: "row" }, { children: username === "juliusomo" ? (_jsxs(Box, Object.assign({ display: "flex", flexDirection: { xs: "column", sm: "row", md: "row" }, alignItems: "center" }, { children: [_jsx(DeleteComment, { id: id }), _jsx(EditComment, { id: id })] }))) : (_jsx(ReplyToComment, { id: id, username: username })) }))] })), _jsx(ContentDisplay, { id: id, content: content, replyingTo: replyingTo })] }))] })));
}
