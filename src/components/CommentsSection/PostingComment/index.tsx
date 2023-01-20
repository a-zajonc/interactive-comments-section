import * as React from "react";
import {
  Box,
  Img,
  Button,
  Textarea,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import avatar from "../../../images/avatars/image-juliusomo.png";
import {
  CommentsContext,
  ReplyContext,
  ReplyToUsernameContext,
} from "../../../context";

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

  const ref = React.useRef<string | any>("");

  function repliesLength(comments: any) {
    return comments.map((comment: any) => {
      return comment.replies.length;
    });
  }
  const commentsId: number =
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
    id: commentsId,
    content: content,
    createdAt: "now",
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

  let isError = false;
  const handleSubmit = (event: any | undefined) => {
    event.preventDefault();
    !content || content.length < 5
      ? console.log("To short!")
      : setComments((comments: any) => {
          if (replyMode === false) {
            return [...comments, addedComment];
          } else {
            return comments.map((singleComment: any) => {
              if (singleComment.id === replyID) {
                return {
                  ...singleComment,
                  replies: singleComment.replies.concat(addedComment),
                };
              } else {
                return singleComment;
              }
            });
          }
        });
    ref.current.value = "";
    return replyMode === true ? setReplyID(0) : null;
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
        <FormControl isInvalid={isError} paddingInline="10px">
          <Textarea
            placeholder="Add a comment..."
            variant="outline"
            w="100%"
            minH="100px"
            resize="none"
            rounded="10px"
            padding="10px"
            paddingLeft="20px"
            focusBorderColor="#324152"
            borderWidth="1px"
            color="#324152"
            ref={ref}
            onChange={(event) =>
              setContent(() =>
                event.target.value.replace(`@${replyToUsername}, `, "")
              )
            }
            defaultValue={defaultValue}
          />
        </FormControl>
        <Button
          rounded="10px"
          bgColor="#5457B6"
          textTransform="uppercase"
          color="white"
          fontWeight="700"
          padding="10px"
          w="20%"
          _hover={{ opacity: "0.5" }}
          type="submit"
        >
          Send
        </Button>
      </Box>
    </form>
  );
}
