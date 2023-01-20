"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const Rater_1 = require("../Rater");
const icon_reply_svg_1 = __importDefault(require("../../../../images/svg/icon-reply.svg"));
const icon_edit_svg_1 = __importDefault(require("../../../../images/svg/icon-edit.svg"));
const context_1 = require("../../../../context");
const DeleteComment_1 = require("../../DeleteComment");
function CommentDisplay({ id, score, username, date, content, replyingTo, avatar, }) {
    const { replyID, setReplyID } = React.useContext(context_1.ReplyContext);
    const { setReplyToUsername } = React.useContext(context_1.ReplyToUsernameContext);
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", bgColor: "white", rounded: "10px", w: "100%", h: "200px", padding: "20px", marginBottom: "20px" }, { children: [(0, jsx_runtime_1.jsx)(Rater_1.Rater, { score: score }), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "column", w: "100%" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "15px" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", w: "50%" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: require("../../../../images/avatars/".concat(avatar)), alt: "avatar", h: "50px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "black", fontWeight: "500" }, { children: username })), username === "juliusomo" ? ((0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ bgColor: "#5457B6", color: "white", fontSize: "14px", fontWeight: "500", paddingBlock: "1px", paddingInline: "8px" }, { children: "you" }))) : null, (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: date }))] })), (0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row" }, { children: username === "juliusomo" ? ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(DeleteComment_1.DeleteComment, { id: id }), (0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_edit_svg_1.default, alt: "delete", marginRight: "10px", marginLeft: "20px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "500" }, { children: "Edit" }))] }))) : ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", onClick: () => {
                                        replyID === id ? setReplyID(0) : setReplyID(id);
                                        setReplyToUsername(username);
                                    } }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_reply_svg_1.default, alt: "reply", marginRight: "10px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "500" }, { children: "Reply" }))] }))) }))] })), (0, jsx_runtime_1.jsx)(react_1.Box, { children: replyingTo ? ((0, jsx_runtime_1.jsx)(react_1.Box, { children: (0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ as: "span", color: "#67727E", fontWeight: "400", wordBreak: "break-word" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ as: "span", color: "#5457B6", fontWeight: "500" }, { children: ["@", replyingTo.concat(" ")] })), content] })) })) : ((0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: content }))) })] }))] })));
}
exports.CommentDisplay = CommentDisplay;
