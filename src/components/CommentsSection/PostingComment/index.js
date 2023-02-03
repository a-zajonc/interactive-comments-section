import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import avatar from "../../../images/avatars/image-juliusomo.png";
import { CommentsContext, ReplyContext, ReplyToUsernameContext, } from "../../../context";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { DesktopPostingComment } from "./DesktopPostingComment";
import { MobilePostingComment } from "./MobilePostingComment";
export function PostingComment({ defaultValue, replyMode, }) {
    const { replyToUsername } = React.useContext(ReplyToUsernameContext);
    const [content, setContent] = React.useState("");
    const { comments, setComments } = React.useContext(CommentsContext);
    const { replyID, setReplyID } = React.useContext(ReplyContext);
    const [lengthError, setLengthError] = React.useState(false);
    function repliesLength(comments) {
        return comments.map((comment) => {
            return comment.replies.length;
        });
    }
    const commentsIdSetter = comments &&
        comments.length +
            1 +
            repliesLength(comments).reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
            }, 0);
    const addedComment = {
        id: commentsIdSetter,
        content: content,
        createdAt: formatDistanceToNow(new Date()),
        replyingTo: replyToUsername,
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
    const handleSubmit = (event) => {
        event.preventDefault();
        function addReplyToReply() {
            const replyToReplyId = comments
                .map((singleComment, commentIndex) => {
                return singleComment.replies
                    .map((reply, replyIndex) => {
                    if (reply.id === replyID) {
                        return [commentIndex, replyIndex];
                    }
                })
                    .filter((element) => {
                    return element !== undefined;
                });
            })
                .flat(3);
            comments[replyToReplyId[0]].replies.splice(replyToReplyId[1] + 1, 0, addedComment);
            return [...comments];
        }
        !content || content.length < 5
            ? setLengthError(true)
            : setComments((comments) => {
                if (replyMode === false) {
                    return [...comments, addedComment];
                }
                if (comments.find((singleComment) => singleComment.id === replyID) !== undefined) {
                    return comments.map((singleComment) => {
                        if (singleComment.id === replyID) {
                            return Object.assign(Object.assign({}, singleComment), { replies: singleComment.replies.concat(addedComment) });
                        }
                        return singleComment;
                    });
                }
                else {
                    return addReplyToReply();
                }
            });
        if (content.length >= 5) {
            setLengthError(false);
            setContent("");
            event.target.reset();
        }
        else {
            setLengthError(true);
        }
        if (replyMode === true && content.length >= 5) {
            setReplyID(0);
        }
        if (replyMode === true && content.length >= 5) {
        }
    };
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 613;
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return (_jsx("form", Object.assign({ onSubmit: handleSubmit }, { children: width <= breakpoint ? (_jsx(MobilePostingComment, { avatar: avatar, lengthError: lengthError, replyToUsername: replyToUsername, defaultValue: defaultValue, replyMode: replyMode, setContent: setContent })) : (_jsx(DesktopPostingComment, { avatar: avatar, lengthError: lengthError, replyToUsername: replyToUsername, defaultValue: defaultValue, replyMode: replyMode, setContent: setContent })) })));
}
