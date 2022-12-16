"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const Rater_1 = require("./Rater");
const image_amyrobson_png_1 = __importDefault(require("../../../images/avatars/image-amyrobson.png"));
const icon_reply_svg_1 = __importDefault(require("../../../images/svg/icon-reply.svg"));
function CommentBox() {
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", bgColor: "white", rounded: "10px", w: "650px", h: "200px", padding: "20px" }, { children: [(0, jsx_runtime_1.jsx)(Rater_1.Rater, {}), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "column", marginLeft: "10px" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", w: "100%", marginBottom: "15px" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", w: "50%" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: image_amyrobson_png_1.default, alt: "avatar", h: "50px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "black", fontWeight: "500" }, { children: "amyrobson" })), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: "1 month ago" }))] })), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_reply_svg_1.default, alt: "reply", marginRight: "10px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "700" }, { children: "Reply" }))] }))] })), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well." }))] }))] })));
}
exports.CommentBox = CommentBox;
