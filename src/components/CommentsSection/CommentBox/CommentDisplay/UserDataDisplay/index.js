import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Img, Text } from "@chakra-ui/react";
export function UserDataDisplay({ username, date, avatar, }) {
    return (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", w: { base: "100%", sm: "330px", md: "340px" } }, { children: [_jsx(Img, { src: require("../../../../../images/avatars/".concat(avatar)), alt: "avatar", h: "50px" }), _jsx(Text, Object.assign({ color: "black", fontWeight: "500" }, { children: username })), username === "juliusomo" ? (_jsx(Box, Object.assign({ bgColor: "#5457B6", color: "white", fontSize: "14px", fontWeight: "500", paddingBlock: "1px", paddingInline: "8px" }, { children: "you" }))) : null, _jsx(Text, Object.assign({ color: "#67727E" }, { children: date }))] })));
}
