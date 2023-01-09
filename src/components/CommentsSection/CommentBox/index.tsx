import * as React from "react";
import { Box } from "@chakra-ui/react";
import data from "../../../data.json";
import { CommentDisplay } from "./CommentDisplay";

export function CommentBox() {
  return (
    <Box>
      {data.comments.map((comment, id) => {
        return (
          <Box key={id}>
            <CommentDisplay
              score={comment.score}
              username={comment.user.username}
              date={comment.createdAt}
              content={comment.content}
              avatar={comment.user.image.png}
            />
            {comment.replies.length < 1 ? null : (
              <Box bgColor="#D0d2d6" w="1px" marginLeft="65px">
                {comment.replies.map((reply, id) => {
                  console.log(reply.user.image.png);
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
