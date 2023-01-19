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
exports.CommentBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const CommentDisplay_1 = require("./CommentDisplay");
const context_1 = require("../../../context");
const PostingComment_1 = require("../PostingComment");
function CommentBox() {
    const { comments } = React.useContext(context_1.CommentsContext);
    const { replyID } = React.useContext(context_1.ReplyContext);
    const { replyToUsername } = React.useContext(context_1.ReplyToUsernameContext);
    return ((0, jsx_runtime_1.jsx)(react_1.Box, { children: comments &&
            comments.map((singleComment, id) => {
                return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ w: "780px" }, { children: [(0, jsx_runtime_1.jsx)(CommentDisplay_1.CommentDisplay, { id: singleComment.id, score: singleComment.score, username: singleComment.user.username, date: singleComment.createdAt, content: singleComment.content, avatar: singleComment.user.image.png }), replyID === singleComment.id ? ((0, jsx_runtime_1.jsx)(PostingComment_1.PostingComment, { defaultValue: `@${replyToUsername}, `, replyMode: true })) : null, singleComment.replies &&
                            singleComment.replies.length < 1 ? null : ((0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ bgColor: "#D0d2d6", w: "1px", marginLeft: "65px" }, { children: singleComment.replies.map((reply) => {
                                return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ w: "650px", marginLeft: "65px" }, { children: [(0, jsx_runtime_1.jsx)(CommentDisplay_1.CommentDisplay, { id: reply.id, score: reply.score, username: reply.user.username, date: reply.createdAt, replyingTo: reply.replyingTo, content: reply.content, avatar: reply.user.image.png }), replyID === reply.id ? ((0, jsx_runtime_1.jsx)(PostingComment_1.PostingComment, { defaultValue: `@${replyToUsername}, `, replyMode: true })) : null] }), reply.id));
                            }) })))] }), id.toString()));
            }) }));
}
exports.CommentBox = CommentBox;
