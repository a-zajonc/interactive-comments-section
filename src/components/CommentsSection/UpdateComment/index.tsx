import * as React from "react";
import { Box, Textarea, Button } from "@chakra-ui/react";
import { CommentsContext, EditContext } from "../../../context";

export function UpdateComment({
  content,
  replyingTo,
}: {
  content: string;
  replyingTo: string | undefined;
}) {
  const [updatedContent, setUpdatedContent] = React.useState(content);
  const { comments } = React.useContext(CommentsContext);
  const { editID, setEditID } = React.useContext(EditContext);

  const handleSubmit = (event: any | undefined) => {
    event.preventDefault();
    return comments.map((singleComment: any) => {
      if (singleComment.id === editID) {
        return (singleComment.content = updatedContent);
      }
      singleComment.replies.map((reply: any) => {
        if (reply.id === editID) {
          return (reply.content = updatedContent);
        }
      });
      setEditID(0);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Textarea
          defaultValue={replyingTo ? `@${replyingTo}, ${content}` : content}
          variant="outline"
          w="100%"
          minH="100px"
          resize="none"
          rounded="10px"
          padding="10px"
          paddingLeft="20px"
          focusBorderColor="#324152"
          borderWidth="1px"
          color="#324152"
          onChange={(event) =>
            setUpdatedContent(() => {
              return replyingTo
                ? event.target.value.replace(`@${replyingTo}, `, "")
                : event.target.value;
            })
          }
        ></Textarea>
        <Button
          rounded="10px"
          bgColor="#5457B6"
          textTransform="uppercase"
          color="white"
          fontWeight="700"
          _hover={{ opacity: "0.5" }}
          type="submit"
          marginTop="10px"
          float="right"
          w="100px"
        >
          Update
        </Button>
      </Box>
    </form>
  );
}
