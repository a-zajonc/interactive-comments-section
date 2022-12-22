import { Box, Img, Text } from "@chakra-ui/react";
import { Rater } from "../Rater";
import avatar from "../../../../images/avatars/image-amyrobson.png";
import imgReply from "../../../../images/svg/icon-reply.svg";

export function CommentDisplay({
  score,
  username,
  date,
  content,
  replyingTo,
}: {
  score: number;
  username: string;
  date: string;
  content: string;
  replyingTo?: string;
}) {
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
      marginLeft={replyingTo ? "65px" : "0px"}
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
            <Img src={avatar} alt="avatar" h="50px"></Img>
            <Text color="black" fontWeight="500">
              {username}
            </Text>
            <Text color="#67727E">{date}</Text>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Img src={imgReply} alt="reply" marginRight="10px" />
            <Text color="#5457B6" fontWeight="700">
              Reply
            </Text>
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
