"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const data_json_1 = __importDefault(require("../../../data.json"));
const CommentDisplay_1 = require("./CommentDisplay");
function CommentBox() {
    return ((0, jsx_runtime_1.jsx)(react_1.Box, { children: data_json_1.default.comments.map((comment, id) => {
            return ((0, jsx_runtime_1.jsxs)(react_1.Box, { children: [(0, jsx_runtime_1.jsx)(CommentDisplay_1.CommentDisplay, { score: comment.score, username: comment.user.username, date: comment.createdAt, content: comment.content, avatar: comment.user.image.png }), comment.replies.length < 1 ? null : ((0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ bgColor: "#D0d2d6", w: "1px", marginLeft: "65px" }, { children: comment.replies.map((reply, id) => {
                            console.log(reply.user.image.png);
                            return ((0, jsx_runtime_1.jsx)(CommentDisplay_1.CommentDisplay, { score: reply.score, username: reply.user.username, date: reply.createdAt, replyingTo: reply.replyingTo, content: reply.content, avatar: reply.user.image.png }, id));
                        }) })))] }, id));
        }) }));
}
exports.CommentBox = CommentBox;
