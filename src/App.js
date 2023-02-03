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
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const components_1 = require("./components/");
const context_1 = require("./context");
function App() {
    const [comments, setComments] = React.useState([]);
    const [replyID, setReplyID] = React.useState(0);
    const [replyToUsername, setReplyToUsername] = React.useState("");
    const [deleteID, setDeleteID] = React.useState(0);
    const [editID, setEditID] = React.useState(0);
    React.useEffect(() => {
        fetch("/api/comments")
            .then((res) => res.json())
            .then((commentsData) => {
            setComments(commentsData);
        });
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ display: "flex", justifyContent: "center", marginBlock: "80px" }, { children: (0, jsx_runtime_1.jsx)(context_1.CommentsContext.Provider, Object.assign({ value: { comments, setComments } }, { children: (0, jsx_runtime_1.jsx)(context_1.EditContext.Provider, Object.assign({ value: { editID, setEditID } }, { children: (0, jsx_runtime_1.jsx)(context_1.ReplyContext.Provider, Object.assign({ value: { replyID, setReplyID } }, { children: (0, jsx_runtime_1.jsx)(context_1.DeleteContext.Provider, Object.assign({ value: { deleteID, setDeleteID } }, { children: (0, jsx_runtime_1.jsx)(context_1.ReplyToUsernameContext.Provider, Object.assign({ value: { replyToUsername, setReplyToUsername } }, { children: (0, jsx_runtime_1.jsx)(components_1.CommentSection, {}) })) })) })) })) })) })));
}
exports.App = App;
exports.default = App;
