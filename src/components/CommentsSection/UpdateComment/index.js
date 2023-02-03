import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Textarea, Button, Text } from "@chakra-ui/react";
import { CommentsContext, EditContext } from "../../../context";
export function UpdateComment({ content, replyingTo, }) {
    const [updatedContent, setUpdatedContent] = React.useState(content);
    const { comments } = React.useContext(CommentsContext);
    const { editID, setEditID } = React.useContext(EditContext);
    const [lengthError, setLengthError] = React.useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        updatedContent.length < 5
            ? setLengthError(true)
            : comments.map((singleComment) => {
                if (singleComment.id === editID) {
                    return (singleComment.content = updatedContent);
                }
                singleComment.replies.map((reply) => {
                    if (reply.id === editID) {
                        return (reply.content = updatedContent);
                    }
                });
                setEditID(0);
                setLengthError(false);
            });
    };
    return (_jsx("form", Object.assign({ onSubmit: handleSubmit }, { children: _jsxs(Box, { children: [_jsx(Textarea, { defaultValue: replyingTo ? `@${replyingTo}, ${content}` : content, variant: "outline", w: "100%", minH: "100px", resize: "none", rounded: "10px", padding: "10px", paddingLeft: "20px", isInvalid: lengthError, onChange: (event) => setUpdatedContent(() => {
                        return replyingTo
                            ? event.target.value.replace(`@${replyingTo}, `, "")
                            : event.target.value;
                    }) }), lengthError === true ? (_jsx(Text, Object.assign({ color: "#ED6468" }, { children: "Comments must be at least 5 characters long." }))) : null, _jsx(Button, Object.assign({ rounded: "10px", bgColor: "#5457B6", textTransform: "uppercase", color: "white", fontWeight: "700", _hover: { opacity: "0.5" }, type: "submit", marginTop: "10px", float: "right", w: "100px" }, { children: "Update" }))] }) })));
}
