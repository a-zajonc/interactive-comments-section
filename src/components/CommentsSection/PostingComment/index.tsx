import * as React from "react";
import avatar from "../../../images/avatars/image-juliusomo.png";
import {
  CommentsContext,
  ReplyContext,
  ReplyToUsernameContext,
} from "../../../context";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { DesktopPostingComment } from "./DesktopPostingComment";
import { MobilePostingComment } from "./MobilePostingComment";

type PostingCommentProps = {
  defaultValue: string | any;
  replyMode: boolean;
};

function addReplyToReply(comments: any, addedComment: any, replyID: number) {
  const replyToReplyId = comments
    .map((singleComment: any, commentIndex: number) => {
      return singleComment.replies
        .map((reply: any, replyIndex: number) => {
          if (reply.id === replyID) {
            return [commentIndex, replyIndex];
          }
        })
        .filter((element: any) => {
          return element !== undefined;
        });
    })
    .flat(3);
  comments[replyToReplyId[0]].replies.splice(
    replyToReplyId[1] + 1,
    0,
    addedComment
  );
  return [...comments];
}

export function PostingComment({
  defaultValue,
  replyMode,
}: PostingCommentProps) {
  const { replyToUsername } = React.useContext(ReplyToUsernameContext);
  const [content, setContent] = React.useState<string>("");
  const { comments, setComments } = React.useContext(CommentsContext);
  const { replyID, setReplyID } = React.useContext(ReplyContext);
  const [lengthError, setLengthError] = React.useState(false);

  function repliesLength(comments: any) {
    return comments.map((comment: any) => {
      return comment.replies.length;
    });
  }
  const commentsIdSetter: number =
    comments &&
    comments.length +
      1 +
      repliesLength(comments).reduce(function (
        previousValue: number,
        currentValue: number
      ) {
        return previousValue + currentValue;
      },
      0);

  const addedComment: Comment = {
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
  interface Comment {
    id: number;
    content: string | undefined;
    createdAt: string;
    score: number;
    user: User;
    replies?: Comment[];
    replyingTo?: string;
  }
  interface User {
    image: Image;
    username: string;
  }
  interface Image {
    png: string;
    webp: string;
  }

  const handleSubmit = (event: any | undefined) => {
    event.preventDefault();
    !content || content.length < 5
      ? setLengthError(true)
      : setComments((comments: any) => {
          if (replyMode === false) {
            return [...comments, addedComment];
          }
          if (
            comments.find(
              (singleComment: any) => singleComment.id === replyID
            ) !== undefined
          ) {
            return comments.map((singleComment: any) => {
              if (singleComment.id === replyID) {
                return {
                  ...singleComment,
                  replies: singleComment.replies.concat(addedComment),
                };
              }
              return singleComment;
            });
          } else {
            return addReplyToReply(comments, addedComment, replyID);
          }
        });
    if (content.length >= 5) {
      setLengthError(false);
      setContent("");
      event.target.reset();
    } else {
      setLengthError(true);
    }
    if (replyMode === true && content.length >= 5) {
      setReplyID(0);
    }
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 613;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {width <= breakpoint ? (
        <MobilePostingComment
          avatar={avatar}
          lengthError={lengthError}
          replyToUsername={replyToUsername}
          defaultValue={defaultValue}
          replyMode={replyMode}
          setContent={setContent}
        />
      ) : (
        <DesktopPostingComment
          avatar={avatar}
          lengthError={lengthError}
          replyToUsername={replyToUsername}
          defaultValue={defaultValue}
          replyMode={replyMode}
          setContent={setContent}
        />
      )}
    </form>
  );
}
