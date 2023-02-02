"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCommentsDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const DeleteComment_1 = require("../../../DeleteComment");
const EditComment_1 = require("../../../EditComment");
const UserDataDisplay_1 = require("../UserDataDisplay");
const Rater_1 = require("../../Rater");
const ReplyToComment_1 = require("../ReplyToComment");
const ContentDisplay_1 = require("../ContentDisplay");
function MobileCommentsDisplay({ id, score, username, date, content, replyingTo, avatar, }) {
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "column", bgColor: "white", rounded: "10px", w: "100%", minH: "200px", maxH: "100%", padding: "20px", marginBottom: "20px", justifyContent: "space-between" }, { children: [(0, jsx_runtime_1.jsx)(UserDataDisplay_1.UserDataDisplay, { username: username, avatar: avatar, date: date }), (0, jsx_runtime_1.jsx)(ContentDisplay_1.ContentDisplay, { id: id, content: content, replyingTo: replyingTo }), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px" }, { children: [(0, jsx_runtime_1.jsx)(Rater_1.Rater, { score: score, username: username }), username === "juliusomo" ? ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(DeleteComment_1.DeleteComment, { id: id }), (0, jsx_runtime_1.jsx)(EditComment_1.EditComment, { id: id })] }))) : ((0, jsx_runtime_1.jsx)(ReplyToComment_1.ReplyToComment, { id: id, username: username }))] }))] })));
}
exports.MobileCommentsDisplay = MobileCommentsDisplay;
