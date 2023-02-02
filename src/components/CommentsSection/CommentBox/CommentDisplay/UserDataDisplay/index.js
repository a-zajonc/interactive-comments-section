"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function UserDataDisplay({ username, date, avatar, }) {
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", w: { base: "100%", sm: "330px", md: "340px" } }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: require("../../../../../images/avatars/".concat(avatar)), alt: "avatar", h: "50px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "black", fontWeight: "500" }, { children: username })), username === "juliusomo" ? ((0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ bgColor: "#5457B6", color: "white", fontSize: "14px", fontWeight: "500", paddingBlock: "1px", paddingInline: "8px" }, { children: "you" }))) : null, (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: date }))] })));
}
exports.UserDataDisplay = UserDataDisplay;
