import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import { DesktopCommentsDisplay } from "./DesktopCommentsDisplay";
import { MobileCommentsDisplay } from "./MobileCommentsDisplay";
export function CommentDisplay({ id, score, username, date, content, replyingTo, avatar, }) {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 613;
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return (_jsx(Box, Object.assign({ w: "100%" }, { children: width <= breakpoint ? (_jsx(MobileCommentsDisplay, { id: id, score: score, username: username, date: date, content: content, replyingTo: replyingTo, avatar: avatar })) : (_jsx(DesktopCommentsDisplay, { id: id, score: score, username: username, date: date, content: content, replyingTo: replyingTo, avatar: avatar })) })));
}
