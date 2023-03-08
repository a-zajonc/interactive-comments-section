import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { UpdateComment } from "../../../UpdateComment";
import { EditContext } from "../../../../../context";

type ContentDisplayProps = {
  id: number;
  content: string;
  replyingTo?: string;
};

export function ContentDisplay({
  id,
  content,
  replyingTo,
}: ContentDisplayProps) {
  const { editID } = React.useContext(EditContext);

  return (
    <Box>
      {replyingTo ? (
        editID === id ? (
          <UpdateComment content={content} replyingTo={replyingTo} />
        ) : (
          <Box>
            <Text
              as="span"
              color="#67727E"
              fontWeight="400"
              wordBreak="break-word"
            >
              <Text as="span" color="#5457B6" fontWeight="500">
                @{replyingTo.concat(" ")}
              </Text>
              {content}
            </Text>
          </Box>
        )
      ) : editID === id ? (
        <UpdateComment content={content} replyingTo={replyingTo} />
      ) : (
        <Text color="#67727E">{content}</Text>
      )}
    </Box>
  );
}
