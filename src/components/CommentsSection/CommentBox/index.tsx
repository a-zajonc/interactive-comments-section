import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentDisplay } from "./CommentDisplay";
import {
  CommentsContext,
  ReplyContext,
  ReplyToUsernameContext,
} from "../../../context";
import { PostingComment } from "../PostingComment";

export function CommentBox() {
  const { comments } = React.useContext(CommentsContext);
  const { replyID } = React.useContext(ReplyContext);
  const { replyToUsername } = React.useContext(ReplyToUsernameContext);

  return (
    <Box>
      {comments &&
        comments.map((singleComment: any, id: number) => {
          return (
            <Box key={id.toString()} w="780px">
              <CommentDisplay
                id={singleComment.id}
                score={singleComment.score}
                username={singleComment.user.username}
                date={singleComment.createdAt}
                content={singleComment.content}
                avatar={singleComment.user.image.png}
              />
              {replyID === singleComment.id ? (
                <PostingComment
                  defaultValue={`@${replyToUsername}, `}
                  replyMode={true}
                />
              ) : null}
              {singleComment.replies &&
              singleComment.replies.length < 1 ? null : (
                <Box bgColor="#D0d2d6" w="1px" marginLeft="65px">
                  {singleComment.replies.map((reply: any) => {
                    return (
                      <Box key={reply.id} w="650px" marginLeft="65px">
                        <CommentDisplay
                          id={reply.id}
                          score={reply.score}
                          username={reply.user.username}
                          date={reply.createdAt}
                          replyingTo={reply.replyingTo}
                          content={reply.content}
                          avatar={reply.user.image.png}
                        />
                        {replyID === reply.id ? (
                          <PostingComment
                            defaultValue={`@${replyToUsername}, `}
                            replyMode={true}
                          />
                        ) : null}
                      </Box>
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
