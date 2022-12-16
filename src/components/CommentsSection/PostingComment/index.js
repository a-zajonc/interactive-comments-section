"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostingComment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const image_juliusomo_png_1 = __importDefault(require("../../../images/avatars/image-juliusomo.png"));
function PostingComment() {
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ bgColor: "white", rounded: "10px", padding: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: image_juliusomo_png_1.default, alt: "avatar" }), (0, jsx_runtime_1.jsx)(react_1.Textarea, { placeholder: "Add a comment...", variant: "outline", w: "100%", minH: "100px", marginLeft: "10px", marginRight: "10px", resize: "none", rounded: "10px", padding: "10px", paddingLeft: "20px", focusBorderColor: "#324152", borderWidth: "1px", color: "#324152" }), (0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ rounded: "10px", bgColor: "#5457B6", textTransform: "uppercase", color: "white", fontWeight: "700", padding: "10px", w: "20%", _hover: { opacity: "0.5" } }, { children: "Send" }))] })));
}
exports.PostingComment = PostingComment;
