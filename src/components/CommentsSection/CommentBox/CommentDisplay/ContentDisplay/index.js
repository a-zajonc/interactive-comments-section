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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const UpdateComment_1 = require("../../../UpdateComment");
const context_1 = require("../../../../../context");
function ContentDisplay({ id, content, replyingTo, }) {
    const { editID } = React.useContext(context_1.EditContext);
    return ((0, jsx_runtime_1.jsx)(react_1.Box, { children: replyingTo ? (editID === id ? ((0, jsx_runtime_1.jsx)(UpdateComment_1.UpdateComment, { content: content, replyingTo: replyingTo })) : ((0, jsx_runtime_1.jsx)(react_1.Box, { children: (0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ as: "span", color: "#67727E", fontWeight: "400", wordBreak: "break-word" }, { children: [(0, jsx_runtime_1.jsxs)(react_1.Text, Object.assign({ as: "span", color: "#5457B6", fontWeight: "500" }, { children: ["@", replyingTo.concat(" ")] })), content] })) }))) : editID === id ? ((0, jsx_runtime_1.jsx)(UpdateComment_1.UpdateComment, { content: content, replyingTo: replyingTo })) : ((0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#67727E" }, { children: content }))) }));
}
exports.ContentDisplay = ContentDisplay;
