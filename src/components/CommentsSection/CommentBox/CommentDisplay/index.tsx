import * as React from "react";
import { Box } from "@chakra-ui/react";
import { DesktopCommentsDisplay } from "./DesktopCommentsDisplay";
import { MobileCommentsDisplay } from "./MobileCommentsDisplay";

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
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 613;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Box w="100%">
      {width <= breakpoint ? (
        <MobileCommentsDisplay
          id={id}
          score={score}
          username={username}
          date={date}
          content={content}
          replyingTo={replyingTo}
          avatar={avatar}
        />
      ) : (
        <DesktopCommentsDisplay
          id={id}
          score={score}
          username={username}
          date={date}
          content={content}
          replyingTo={replyingTo}
          avatar={avatar}
        />
      )}
    </Box>
  );
}
