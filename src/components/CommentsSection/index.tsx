import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { CommentBox } from "./CommentBox";
import { PostingComment } from "./PostingComment";
import { CommentsContext } from "../../context";
import { MutatingDots } from "react-loader-spinner";

export function CommentSection() {
  const { comments } = React.useContext(CommentsContext);

  return (
    <Box>
      {comments.length < 1 ? (
        <Box display="flex" flexDir="column" alignItems="center">
          <MutatingDots
            height="100"
            width="100"
            color="#5457B6"
            secondaryColor="#5457B6"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <Text textTransform="uppercase" color="#5457B6">
            Loading
          </Text>
        </Box>
      ) : (
        <Box>
          <CommentBox />
          <PostingComment defaultValue="" replyMode={false} />
        </Box>
      )}
    </Box>
  );
}
