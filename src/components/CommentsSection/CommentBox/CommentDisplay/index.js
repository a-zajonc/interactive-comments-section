"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const Rater_1 = require("../Rater");
const image_amyrobson_png_1 = __importDefault(require("../../../../images/avatars/image-amyrobson.png"));
const icon_reply_svg_1 = __importDefault(require("../../../../images/svg/icon-reply.svg"));
function CommentDisplay({ score, username, date, content, replyingTo, }) {
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", bgColor: "white", rounded: "10px", w: replyingTo ? "650px" : "780px", h: "200px", padding: "20px", marginBottom: "20px", marginLeft: replyingTo ? "65px" : "0px" }, { children: [(0, jsx_runtime_1.jsx)(Rater_1.Rater, { score: score }), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "column", marginLeft: "10px" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", w: "100%", marginBottom: "15px" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", w: "50%" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: image_amyrobson_png_1.default, alt: "avatar", h: "50px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "black", fontWeight: "500" }, { children: username })), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: date }))] })), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_reply_svg_1.default, alt: "reply", marginRight: "10px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "700" }, { children: "Reply" }))] }))] })), (0, jsx_runtime_1.jsx)(react_1.Box, { children: replyingTo ? ((0, jsx_runtime_1.jsx)(react_1.Box, { children: (0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ as: "span", color: "#67727E", fontWeight: "400", wordBreak: "break-word" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ as: "span", color: "#5457B6", fontWeight: "500" }, { children: ["@", replyingTo.concat(" ")] })), content] })) })) : ((0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: content }))) })] }))] })));
}
exports.CommentDisplay = CommentDisplay;
