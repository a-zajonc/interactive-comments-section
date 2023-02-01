import * as React from "react";
import { Box, Img, Button, Textarea, Text } from "@chakra-ui/react";
import avatar from "../../../images/avatars/image-juliusomo.png";
import {
  CommentsContext,
  ReplyContext,
  ReplyToUsernameContext,
} from "../../../context";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export function PostingComment({
  defaultValue,
  replyMode,
}: {
  defaultValue: string | any;
  replyMode: boolean;
}) {
  const { replyToUsername } = React.useContext(ReplyToUsernameContext);

  const [content, setContent] = React.useState<string>("");

  const { comments, setComments } = React.useContext(CommentsContext);

  const { replyID, setReplyID } = React.useContext(ReplyContext);

  const [lengthError, setLengthError] = React.useState(false);

  const ref = React.useRef<string | any>("");

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

    function addReplyToReply() {
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
            return addReplyToReply();
          }
        });
    if (content.length >= 5) {
      setLengthError(false);
      setContent("");
      ref.current.value = "";
    } else {
      setLengthError(true);
    }
    if (replyMode === true && content.length >= 5) {
      setReplyID(0);
    }
    if (replyMode === true && content.length >= 5) {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        bgColor="white"
        rounded="10px"
        padding="20px"
        w="100%"
        marginLeft="0px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        marginBottom="20px"
      >
        <Img src={avatar} alt="avatar" />
        <Box display="flex" flexDir="column" w="100%" paddingInline="10px">
          <Textarea
            placeholder="Add a comment..."
            variant="outline"
            w="100%"
            minH="100px"
            resize="none"
            rounded="10px"
            padding="10px"
            paddingLeft="20px"
            focusBorderColor="darkBlue"
            isInvalid={lengthError}
            ref={ref}
            onChange={(event) =>
              setContent(() =>
                event.target.value.replace(`@${replyToUsername}, `, "")
              )
            }
            defaultValue={defaultValue}
          />
          {lengthError === true ? (
            <Text color="#ED6468">
              Comments must be at least 5 characters long.
            </Text>
          ) : null}
        </Box>
        <Button
          rounded="10px"
          bgColor="#5457B6"
          textTransform="uppercase"
          color="white"
          fontWeight="700"
          w="100px"
          _hover={{ opacity: "0.5" }}
          type="submit"
        >
          {replyMode === true ? "Reply" : "Send"}
        </Button>
      </Box>
    </form>
  );
}
