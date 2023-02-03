import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { Popover, Text, Img, PopoverTrigger, PopoverHeader, PopoverContent, PopoverBody, PopoverArrow, PopoverCloseButton, PopoverFooter, ButtonGroup, Button, Box, } from "@chakra-ui/react";
import imgDelete from "../../../images/svg/icon-delete.svg";
import { CommentsContext, DeleteContext } from "../../../context";
export function DeleteComment({ id }) {
    const { deleteID, setDeleteID } = React.useContext(DeleteContext);
    const { comments, setComments } = React.useContext(CommentsContext);
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
    return (_jsx(Popover, { children: ({ onClose }) => (_jsxs(_Fragment, { children: [_jsx(PopoverTrigger, { children: _jsxs(Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", onClick: () => {
                            deleteID === id ? setDeleteID(0) : setDeleteID(id);
                        } }, { children: [_jsx(Img, { src: imgDelete, alt: "delete", marginRight: "10px" }), _jsx(Text, Object.assign({ color: "#ED6468", fontWeight: "500" }, { children: "Delete" }))] })) }), _jsxs(PopoverContent, Object.assign({ w: "350px", padding: "10px", borderColor: "#D0d2d6" }, { children: [_jsx(PopoverArrow, {}), _jsx(PopoverCloseButton, {}), _jsx(PopoverHeader, Object.assign({ color: "#324152", fontWeight: "700", fontSize: "24px" }, { children: "Delete comment" })), _jsx(PopoverBody, Object.assign({ color: "#67727E" }, { children: "Are you sure you want to delete this comment? This will remove the comment and can't be undone." })), _jsx(PopoverFooter, Object.assign({ display: "flex", justifyContent: "space-around" }, { children: _jsxs(ButtonGroup, Object.assign({ size: "sm" }, { children: [_jsx(Button, Object.assign({ bgColor: "#67727E", textTransform: "uppercase", color: "white", padding: "22px", rounded: "5px", onClick: onClose }, { children: "No, cancel" })), _jsx(Button, Object.assign({ bgColor: "#ED6468", textTransform: "uppercase", color: "white", padding: "22px", rounded: "5px", onClick: () => findDeletedCommentIndex() }, { children: "Yes, delete" }))] })) }))] }))] })) }));
}
