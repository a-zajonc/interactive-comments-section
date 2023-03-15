import { Box } from "@chakra-ui/react";
import { DeleteComment } from "../../../DeleteComment";
import { UserDataDisplay } from "../UserDataDisplay";
import { Rater } from "../../Rater";
import { ReplyToComment } from "../ReplyToComment";
import { ContentDisplay } from "../ContentDisplay";
import { EditButton } from "../../../Buttons/EditButton";

type MobileCommentsDisplayProps = {
  id: number;
  score: number;
  username: string;
  date: string;
  content: string;
  replyingTo?: string;
  avatar: string;
};

export function MobileCommentsDisplay({
  id,
  score,
  username,
  date,
  content,
  replyingTo,
  avatar,
}: MobileCommentsDisplayProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgColor="white"
      rounded="10px"
      w="100%"
      minH="200px"
      maxH="100%"
      padding="20px"
      marginBottom="20px"
      justifyContent="space-between"
    >
      <UserDataDisplay username={username} avatar={avatar} date={date} />
      <ContentDisplay id={id} content={content} replyingTo={replyingTo} />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginTop="10px"
      >
        <Rater score={score} />
        {username === "juliusomo" ? (
          <Box display="flex" flexDirection="row" alignItems="center">
            <DeleteComment id={id} />
            <EditButton id={id} />
          </Box>
        ) : (
          <ReplyToComment id={id} username={username} />
        )}
      </Box>
    </Box>
  );
}
