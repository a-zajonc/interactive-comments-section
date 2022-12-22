"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSection = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const CommentBox_1 = require("./CommentBox");
const PostingComment_1 = require("./PostingComment");
function CommentSection() {
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, { children: [(0, jsx_runtime_1.jsx)(CommentBox_1.CommentBox, {}), (0, jsx_runtime_1.jsx)(PostingComment_1.PostingComment, {})] }));
}
exports.CommentSection = CommentSection;
