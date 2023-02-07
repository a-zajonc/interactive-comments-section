import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import imgReply from "../../../../../images/svg/icon-reply.svg";
import { ReplyContext, ReplyToUsernameContext } from "../../../../../context";

export function ReplyToComment({
  id,
  username,
}: {
  id: number;
  username: string;
}) {
  const { replyID, setReplyID } = React.useContext(ReplyContext);
  const { setReplyToUsername } = React.useContext(ReplyToUsernameContext);

  return (
    <Box
      role="button"
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
  );
}
