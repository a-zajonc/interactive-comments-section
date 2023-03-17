import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentDisplay } from "./CommentDisplay";
import { PostingComment } from "../PostingComment";
import { useReplyToUsername } from "../../../hooks/useReplyToUsername";
import { useReplyID } from "../../../hooks/useReply";
import { useCommentsData } from "../../../hooks/useCommentsData";
import { Comment } from "../../../hooks/useCommentsData";

export function CommentBox() {
  const { comments } = useCommentsData();
  const { replyID } = useReplyID();
  const { replyToUsername } = useReplyToUsername();

  return (
    <Box>
      {comments &&
        comments.map((singleComment: Comment, id: number) => {
          return (
            <Box
              key={id.toString()}
              w={{
                base: "300px",
                xs: "400px",
                sm: "600px",
                md: "650px",
                lg: "700px",
                xl: "780px",
              }}
            >
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
                <Box
                  bgColor="#D0d2d6"
                  w="1px"
                  marginLeft={{
                    xs: "20px",
                    sm: "35px",
                    md: "40px",
                    lg: "55px",
                    xl: "65px",
                  }}
                >
                  {singleComment.replies?.map((reply: Comment) => {
                    return (
                      <Box
                        key={reply.id}
                        w={{
                          base: "300px",
                          xs: "360px",
                          sm: "530px",
                          md: "570px",
                          lg: "590px",
                          xl: "650px",
                        }}
                        marginLeft={{
                          xs: "20px",
                          sm: "35px",
                          md: "40px",
                          lg: "55px",
                          xl: "65px",
                        }}
                      >
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
