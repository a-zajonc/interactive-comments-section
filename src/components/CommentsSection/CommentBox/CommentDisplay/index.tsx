import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import { Rater } from "../Rater";
import imgReply from "../../../../images/svg/icon-reply.svg";
import imgDelete from "../../../../images/svg/icon-delete.svg";
import imgEdit from "../../../../images/svg/icon-edit.svg";
import { ReplyContext } from "../../../../context";

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

  return (
    <Box
      display="flex"
      flexDirection="row"
      bgColor="white"
      rounded="10px"
      w={replyingTo ? "650px" : "780px"}
      h="200px"
      padding="20px"
      marginBottom="20px"
    >
      <Rater score={score} />
      <Box display="flex" flexDirection="column" marginLeft="10px">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          w="100%"
          marginBottom="15px"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            w="50%"
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
                <Img src={imgDelete} alt="delete" marginRight="10px" />
                <Text color="#ED6468" fontWeight="500">
                  Delete
                </Text>
                <Img
                  src={imgEdit}
                  alt="delete"
                  marginRight="10px"
                  marginLeft="20px"
                />
                <Text color="#5457B6" fontWeight="500">
                  Edit
                </Text>
              </Box>
            ) : (
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                onClick={() => {
                  replyID === id ? setReplyID(0) : setReplyID(id);
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
          ) : (
            <Text color="#67727E">{content}</Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}
