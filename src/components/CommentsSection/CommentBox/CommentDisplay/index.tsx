import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import { Rater } from "../Rater";
import imgReply from "../../../../images/svg/icon-reply.svg";
import {
  EditContext,
  ReplyContext,
  ReplyToUsernameContext,
} from "../../../../context";
import { DeleteComment } from "../../DeleteComment";
import { EditComment } from "../../EditComment";
import { UpdateComment } from "../../UpdateComment";

export function CommentDisplay({
  id,
  score,
  username,
  date,
  content,
  replyingTo,
  avatar,
}: {
  id: number;
  score: number;
  username: string;
  date: string;
  content: string;
  replyingTo?: string;
  avatar: string;
}) {
  const { replyID, setReplyID } = React.useContext(ReplyContext);
  const { setReplyToUsername } = React.useContext(ReplyToUsernameContext);
  const { editID } = React.useContext(EditContext);

  return (
    <Box
      display="flex"
      flexDirection="row"
      bgColor="white"
      rounded="10px"
      w="100%"
      minH="200px"
      maxH="100%"
      padding="20px"
      marginBottom="20px"
    >
      <Rater score={score} username={username} />
      <Box display="flex" flexDirection="column" w="100%" h="100%">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="15px"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            w="340px"
          >
            <Img
              src={require("../../../../images/avatars/".concat(avatar))}
              alt="avatar"
              h="50px"
            ></Img>
            <Text color="black" fontWeight="500">
              {username}
            </Text>
            {username === "juliusomo" ? (
              <Box
                bgColor="#5457B6"
                color="white"
                fontSize="14px"
                fontWeight="500"
                paddingBlock="1px"
                paddingInline="8px"
              >
                you
              </Box>
            ) : null}
            <Text color="#67727E">{date}</Text>
          </Box>
          <Box display="flex" flexDirection="row">
            {username === "juliusomo" ? (
              <Box display="flex" flexDirection="row" alignItems="center">
                <DeleteComment id={id} />
                <EditComment id={id} />
              </Box>
            ) : (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                onClick={() => {
                  replyID === id ? setReplyID(0) : setReplyID(id);
                  setReplyToUsername(username);
                }}
              >
                <Img src={imgReply} alt="reply" marginRight="10px" />
                <Text color="#5457B6" fontWeight="500">
                  Reply
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        <Box>
          {replyingTo ? (
            editID === id ? (
              <UpdateComment content={content} replyingTo={replyingTo} />
            ) : (
              <Box>
                <Text
                  as="span"
                  color="#67727E"
                  fontWeight="400"
                  wordBreak="break-word"
                >
                  <Text as="span" color="#5457B6" fontWeight="500">
                    @{replyingTo.concat(" ")}
                  </Text>
                  {content}
                </Text>
              </Box>
            )
          ) : editID === id ? (
            <UpdateComment content={content} replyingTo={replyingTo} />
          ) : (
            <Text color="#67727E">{content}</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}
