import * as React from "react";
import { Box, Textarea, Button, Text } from "@chakra-ui/react";
import { CommentsContext, EditContext } from "../../../context";

type UpdateCommentProps = {
  content: string;
  replyingTo: string | undefined;
};

export function UpdateComment({ content, replyingTo }: UpdateCommentProps) {
  const [updatedContent, setUpdatedContent] = React.useState(content);
  const { comments } = React.useContext(CommentsContext);
  const { editID, setEditID } = React.useContext(EditContext);
  const [lengthError, setLengthError] = React.useState(false);

  const handleSubmit = (event: any | undefined) => {
    event.preventDefault();
    updatedContent.length < 5
      ? setLengthError(true)
      : comments.map((singleComment: any) => {
          if (singleComment.id === editID) {
            return (singleComment.content = updatedContent);
          }
          singleComment.replies.map((reply: any) => {
            if (reply.id === editID) {
              return (reply.content = updatedContent);
            }
          });
          setEditID(0);
          setLengthError(false);
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
          isInvalid={lengthError}
          onChange={(event) =>
            setUpdatedContent(() => {
              return replyingTo
                ? event.target.value.replace(`@${replyingTo}, `, "")
                : event.target.value;
            })
          }
        ></Textarea>
        {lengthError === true ? (
          <Text color="#ED6468">
            Comments must be at least 5 characters long.
          </Text>
        ) : null}
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
