import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import imgReply from "../../../../../images/svg/icon-reply.svg";
import { ReplyContext, ReplyToUsernameContext } from "../../../../../context";
export function ReplyToComment({ id, username, }) {
    const { replyID, setReplyID } = React.useContext(ReplyContext);
    const { setReplyToUsername } = React.useContext(ReplyToUsernameContext);
    return (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", onClick: () => {
            replyID === id ? setReplyID(0) : setReplyID(id);
            setReplyToUsername(username);
        } }, { children: [_jsx(Img, { src: imgReply, alt: "reply", marginRight: "10px" }), _jsx(Text, Object.assign({ color: "#5457B6", fontWeight: "500" }, { children: "Reply" }))] })));
}
