import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from "@chakra-ui/react";
import { DeleteComment } from "../../../DeleteComment";
import { EditComment } from "../../../EditComment";
import { UserDataDisplay } from "../UserDataDisplay";
import { Rater } from "../../Rater";
import { ReplyToComment } from "../ReplyToComment";
import { ContentDisplay } from "../ContentDisplay";
export function MobileCommentsDisplay({ id, score, username, date, content, replyingTo, avatar, }) {
    return (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "column", bgColor: "white", rounded: "10px", w: "100%", minH: "200px", maxH: "100%", padding: "20px", marginBottom: "20px", justifyContent: "space-between" }, { children: [_jsx(UserDataDisplay, { username: username, avatar: avatar, date: date }), _jsx(ContentDisplay, { id: id, content: content, replyingTo: replyingTo }), _jsxs(Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px" }, { children: [_jsx(Rater, { score: score, username: username }), username === "juliusomo" ? (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center" }, { children: [_jsx(DeleteComment, { id: id }), _jsx(EditComment, { id: id })] }))) : (_jsx(ReplyToComment, { id: id, username: username }))] }))] })));
}
