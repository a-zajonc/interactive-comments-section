import * as React from "react"
import { Box } from "@chakra-ui/react";
import { CommentBox } from "./CommentBox";
import { PostingComment } from "./PostingComment";
import { ReplyComment } from "./ReplyComment";

export function CommentSection() {
    return <Box>
        <CommentBox />
        <PostingComment />
        <ReplyComment/>
    </Box>
}