import { Box } from "@chakra-ui/react";
import { DeleteComment } from "../../../DeleteComment";
import { EditComment } from "../../../EditComment";
import { UserDataDisplay } from "../UserDataDisplay";
import { Rater } from "../../Rater";
import { ReplyToComment } from "../ReplyToComment";
import { ContentDisplay } from "../ContentDisplay";

type DesktopCommentsDisplayProps = {
  id: number;
  score: number;
  username: string;
  date: string;
  content: string;
  replyingTo?: string;
  avatar: string;
};

export function DesktopCommentsDisplay({
  id,
  score,
  username,
  date,
  content,
  replyingTo,
  avatar,
}: DesktopCommentsDisplayProps) {
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
      <Rater score={score} />
      <Box display="flex" flexDirection="column" w="100%" h="100%">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="15px"
        >
          <UserDataDisplay username={username} avatar={avatar} date={date} />
          <Box display="flex" flexDirection="row">
            {username === "juliusomo" ? (
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row", md: "row" }}
                alignItems="center"
              >
                <DeleteComment id={id} />
                <EditComment id={id} />
              </Box>
            ) : (
              <ReplyToComment id={id} username={username} />
            )}
          </Box>
        </Box>
        <ContentDisplay id={id} content={content} replyingTo={replyingTo} />
      </Box>
    </Box>
  );
}
