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
exports.PostingComment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const image_juliusomo_png_1 = __importDefault(require("../../../images/avatars/image-juliusomo.png"));
const context_1 = require("../../../context");
function PostingComment() {
    const [content, setContent] = React.useState("");
    const { comments, setComments } = React.useContext(context_1.CommentsContext);
    const { replyID, setReplyID } = React.useContext(context_1.ReplyContext);
    function repliesLength(comments) {
        return comments.map((comment) => {
            return comment.replies.length;
        });
    }
    const commentsId = comments &&
        comments.length +
            1 +
            repliesLength(comments).reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
            }, 0);
    const addedComment = {
        id: commentsId,
        content: content,
        createdAt: "now",
        score: 0,
        user: {
            image: {
                png: "image-juliusomo.png",
                webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
        },
        replies: [],
    };
    let isError = false;
    const submit = (event) => {
        event.preventDefault();
        !content || content.length < 5
            ? console.log("To short!")
            : setComments((comments) => {
                if (replyID === 0) {
                    return [...comments, addedComment];
                }
                else {
                    return comments.map((singleComment) => {
                        if (singleComment.id === replyID) {
                            return Object.assign(Object.assign({}, singleComment), { replies: singleComment.replies.concat(addedComment) });
                        }
                        else {
                            return singleComment;
                        }
                    });
                }
            });
        setReplyID(0);
    };
    return ((0, jsx_runtime_1.jsx)("form", Object.assign({ onSubmit: submit }, { children: (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ bgColor: "white", rounded: "10px", padding: "20px", w: "100%", marginLeft: "0px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: image_juliusomo_png_1.default, alt: "avatar" }), (0, jsx_runtime_1.jsx)(react_1.FormControl, Object.assign({ isInvalid: isError, paddingInline: "10px" }, { children: (0, jsx_runtime_1.jsx)(react_1.Textarea, { placeholder: "Add a comment...", variant: "outline", w: "100%", minH: "100px", resize: "none", rounded: "10px", padding: "10px", paddingLeft: "20px", focusBorderColor: "#324152", borderWidth: "1px", color: "#324152", onChange: (event) => setContent(event.target.value) }) })), (0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ rounded: "10px", bgColor: "#5457B6", textTransform: "uppercase", color: "white", fontWeight: "700", padding: "10px", w: "20%", _hover: { opacity: "0.5" }, type: "submit" }, { children: "Send" }))] })) })));
}
exports.PostingComment = PostingComment;
