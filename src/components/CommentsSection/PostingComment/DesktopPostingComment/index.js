"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopPostingComment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
function DesktopPostingComment({ avatar, lengthError, replyToUsername, defaultValue, replyMode, setContent, }) {
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ bgColor: "white", rounded: "10px", padding: "20px", w: "100%", marginLeft: "0px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: avatar, alt: "avatar" }), (0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDir: "column", w: "100%", paddingInline: "10px" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Textarea, { placeholder: "Add a comment...", variant: "outline", w: "100%", minH: "100px", resize: "none", rounded: "10px", padding: "10px", paddingLeft: "20px", focusBorderColor: "darkBlue", isInvalid: lengthError, onChange: (event) => setContent(() => event.target.value.replace(`@${replyToUsername}, `, "")), defaultValue: defaultValue }), lengthError === true ? ((0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#ED6468" }, { children: "Comments must be at least 5 characters long." }))) : null] })), (0, jsx_runtime_1.jsx)(react_1.Button, Object.assign({ rounded: "10px", bgColor: "#5457B6", textTransform: "uppercase", color: "white", fontWeight: "700", w: "100px", _hover: { opacity: "0.5" }, type: "submit" }, { children: replyMode === true ? "Reply" : "Send" }))] })));
}
exports.DesktopPostingComment = DesktopPostingComment;
