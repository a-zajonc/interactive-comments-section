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
exports.DeleteComment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const icon_delete_svg_1 = __importDefault(require("../../../images/svg/icon-delete.svg"));
const context_1 = require("../../../context");
function DeleteComment({ id }) {
    const { deleteID, setDeleteID } = React.useContext(context_1.DeleteContext);
    const { comments, setComments } = React.useContext(context_1.CommentsContext);
    function findDeletedCommentIndex() {
        const index = comments.findIndex((singleComment) => {
            return singleComment.id === id;
        });
        return index >= 0
            ? comments.splice(index, 1) && setComments([...comments])
            : comments[replyCommentIndex[0]].replies.splice(replyCommentIndex[1], 1) && setComments([...comments]);
    }
    const replyCommentIndex = comments
        .map((singleComment, singleCommentIndex) => {
        return singleComment.replies
            .map((reply, replyIndex) => {
            if (reply.id === id) {
                return [singleCommentIndex, replyIndex];
            }
        })
            .filter((element) => {
            return element !== undefined;
        });
    })
        .filter((element) => element.length > 0)
        .flat(2);
    return ((0, jsx_runtime_1.jsx)(react_1.Popover, { children: ({ onClose }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.PopoverTrigger, { children: (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", onClick: () => {
                            deleteID === id ? setDeleteID(0) : setDeleteID(id);
                        } }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_delete_svg_1.default, alt: "delete", marginRight: "10px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#ED6468", fontWeight: "500" }, { children: "Delete" }))] })) }), (0, jsx_runtime_1.jsxs)(react_1.PopoverContent, Object.assign({ w: "350px", padding: "10px", borderColor: "#D0d2d6" }, { children: [(0, jsx_runtime_1.jsx)(react_1.PopoverArrow, {}), (0, jsx_runtime_1.jsx)(react_1.PopoverCloseButton, {}), (0, jsx_runtime_1.jsx)(react_1.PopoverHeader, Object.assign({ color: "#324152", fontWeight: "700", fontSize: "24px" }, { children: "Delete comment" })), (0, jsx_runtime_1.jsx)(react_1.PopoverBody, Object.assign({ color: "#67727E" }, { children: "Are you sure you want to delete this comment? This will remove the comment and can't be undone." })), (0, jsx_runtime_1.jsx)(react_1.PopoverFooter, Object.assign({ display: "flex", justifyContent: "space-around" }, { children: (0, jsx_runtime_1.jsxs)(react_1.ButtonGroup, Object.assign({ size: "sm" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ bgColor: "#67727E", textTransform: "uppercase", color: "white", padding: "22px", rounded: "5px", onClick: onClose }, { children: "No, cancel" })), (0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ bgColor: "#ED6468", textTransform: "uppercase", color: "white", padding: "22px", rounded: "5px", onClick: () => findDeletedCommentIndex() }, { children: "Yes, delete" }))] })) }))] }))] })) }));
}
exports.DeleteComment = DeleteComment;
