import * as React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverFooter,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { CommentsContext } from "../../../context";
import { DeleteButton } from "../Buttons/DeleteButton";

type DeleteCommentProps = {
  id: number;
};

const findReplyCommentIndex = (comments: any, id: number) =>
  comments
    .map((singleComment: any, singleCommentIndex: any) => {
      return singleComment.replies
        .map((reply: any, replyIndex: any) => {
          if (reply.id === id) {
            return [singleCommentIndex, replyIndex];
          }
        })
        .filter((element: any) => {
          return element !== undefined;
        });
    })
    .filter((element: any) => element.length > 0)
    .flat(2);

export function DeleteComment({ id }: DeleteCommentProps) {
  const { comments, setComments } = React.useContext(CommentsContext);

  const removeComment = () => {
    const index: number = comments.findIndex((singleComment: any) => {
      return singleComment.id === id;
    });
    if (index >= 0) {
      return comments.splice(index, 1) && setComments([...comments]);
    } else {
      const replyIndex = findReplyCommentIndex(comments, id);
      return (
        comments[replyIndex[0]].replies.splice(replyIndex[1], 1) &&
        setComments([...comments])
      );
    }
  };

  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Box>
              <DeleteButton />
            </Box>
          </PopoverTrigger>
          <PopoverContent w="350px" padding="10px" borderColor="#D0d2d6">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader color="#324152" fontWeight="700" fontSize="24px">
              Delete comment
            </PopoverHeader>
            <PopoverBody color="#67727E">
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </PopoverBody>
            <PopoverFooter display="flex" justifyContent="space-around">
              <ButtonGroup size="sm">
                <Button
                  bgColor="#67727E"
                  textTransform="uppercase"
                  color="white"
                  padding="22px"
                  rounded="5px"
                  onClick={onClose}
                >
                  No, cancel
                </Button>
                <Button
                  bgColor="#ED6468"
                  textTransform="uppercase"
                  color="white"
                  padding="22px"
                  rounded="5px"
                  onClick={() => removeComment()}
                >
                  Yes, delete
                </Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
