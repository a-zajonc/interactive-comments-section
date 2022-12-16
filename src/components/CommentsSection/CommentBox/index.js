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
exports.CommentBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const Rater_1 = require("./Rater");
const image_amyrobson_png_1 = __importDefault(require("../../../images/avatars/image-amyrobson.png"));
const icon_reply_svg_1 = __importDefault(require("../../../images/svg/icon-reply.svg"));
const data_json_1 = __importDefault(require("../../../data.json"));
function CommentBox() {
    return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: data_json_1.default.comments.map((comment, id) => {
            return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", bgColor: "white", rounded: "10px", w: "700px", h: "200px", padding: "20px", marginBottom: "20px" }, { children: [(0, jsx_runtime_1.jsx)(Rater_1.Rater, { score: comment.score }), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "column", marginLeft: "10px" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", w: "100%", marginBottom: "15px" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", w: "50%" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: image_amyrobson_png_1.default, alt: "avatar", h: "50px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "black", fontWeight: "500" }, { children: comment.user.username })), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: comment.createdAt }))] })), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_reply_svg_1.default, alt: "reply", marginRight: "10px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "700" }, { children: "Reply" }))] }))] })), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: comment.content }))] }))] }), id));
        }) }));
}
exports.CommentBox = CommentBox;
