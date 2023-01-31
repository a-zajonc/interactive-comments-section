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
exports.UpdateComment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const context_1 = require("../../../context");
function UpdateComment({ content, replyingTo, }) {
    const [updatedContent, setUpdatedContent] = React.useState(content);
    const { comments } = React.useContext(context_1.CommentsContext);
    const { editID, setEditID } = React.useContext(context_1.EditContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        return comments.map((singleComment) => {
            if (singleComment.id === editID) {
                return (singleComment.content = updatedContent);
            }
            singleComment.replies.map((reply) => {
                if (reply.id === editID) {
                    return (reply.content = updatedContent);
                }
            });
            setEditID(0);
        });
    };
    return ((0, jsx_runtime_1.jsx)("form", Object.assign({ onSubmit: handleSubmit }, { children: (0, jsx_runtime_1.jsxs)(react_1.Box, { children: [(0, jsx_runtime_1.jsx)(react_1.Textarea, { defaultValue: replyingTo ? `@${replyingTo}, ${content}` : content, variant: "outline", w: "100%", minH: "100px", resize: "none", rounded: "10px", padding: "10px", paddingLeft: "20px", focusBorderColor: "#324152", borderWidth: "1px", color: "#324152", onChange: (event) => setUpdatedContent(() => {
                        return replyingTo
                            ? event.target.value.replace(`@${replyingTo}, `, "")
                            : event.target.value;
                    }) }), (0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ rounded: "10px", bgColor: "#5457B6", textTransform: "uppercase", color: "white", fontWeight: "700", _hover: { opacity: "0.5" }, type: "submit", marginTop: "10px", float: "right", w: "100px" }, { children: "Update" }))] }) })));
}
exports.UpdateComment = UpdateComment;
