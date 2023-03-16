import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { EditComment } from "../../../EditComment/";
import { EditContext } from "../../../../../context";
import { useEditID } from "../../../../../hooks/useEdit";

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
  const { editID } = useEditID();

  return (
    <Box>
      {replyingTo ? (
        editID === id ? (
          <EditComment content={content} replyingTo={replyingTo} />
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
        <EditComment content={content} replyingTo={replyingTo} />
      ) : (
        <Text color="#67727E">{content}</Text>
      )}
    </Box>
  );
}
