import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentDisplay } from "./CommentDisplay";
import { CommentsContext } from "../../../context";

export function CommentBox() {
  const { comments } = React.useContext(CommentsContext);

  return (
    <Box>
      {comments &&
        comments.map((singleComment: any, id: number) => {
          return (
            <Box key={id}>
              <CommentDisplay
                score={singleComment.score}
                username={singleComment.user.username}
                date={singleComment.createdAt}
                content={singleComment.content}
                avatar={singleComment.user.image.png}
              />
              {singleComment.replies &&
              singleComment.replies.length < 1 ? null : (
                <Box bgColor="#D0d2d6" w="1px" marginLeft="65px">
                  {singleComment.replies.map((reply: any, id: number) => {
                    return (
                      <CommentDisplay
                        key={id}
                        score={reply.score}
                        username={reply.user.username}
                        date={reply.createdAt}
                        replyingTo={reply.replyingTo}
                        content={reply.content}
                        avatar={reply.user.image.png}
                      />
                    );
                  })}
                </Box>
              )}
            </Box>
          );
        })}
    </Box>
  );
}
