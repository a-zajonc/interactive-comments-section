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
exports.ReplyToComment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const icon_reply_svg_1 = __importDefault(require("../../../../../images/svg/icon-reply.svg"));
const context_1 = require("../../../../../context");
function ReplyToComment({ id, username, }) {
    const { replyID, setReplyID } = React.useContext(context_1.ReplyContext);
    const { setReplyToUsername } = React.useContext(context_1.ReplyToUsernameContext);
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", onClick: () => {
            replyID === id ? setReplyID(0) : setReplyID(id);
            setReplyToUsername(username);
        } }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_reply_svg_1.default, alt: "reply", marginRight: "10px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "500" }, { children: "Reply" }))] })));
}
exports.ReplyToComment = ReplyToComment;
