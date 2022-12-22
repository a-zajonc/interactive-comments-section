import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentBox } from "./CommentBox";
import { PostingComment } from "./PostingComment";

export function CommentSection() {
  return (
    <Box>
      <CommentBox />
      <PostingComment />
    </Box>
  );
}
