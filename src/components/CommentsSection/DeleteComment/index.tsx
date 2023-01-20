import * as React from "react";
import {
  Popover,
  Text,
  Img,
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
import imgDelete from "../../../images/svg/icon-delete.svg";
import { DeleteContext } from "../../../context";

export function DeleteComment({ id }: { id: number }) {
  const { deleteID, setDeleteID } = React.useContext(DeleteContext);

  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              onClick={() => {
                deleteID === id ? setDeleteID(0) : setDeleteID(id);
              }}
            >
              <Img src={imgDelete} alt="delete" marginRight="10px" />
              <Text color="#ED6468" fontWeight="500">
                Delete
              </Text>
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
                  onClick={() => console.log(deleteID)}
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
