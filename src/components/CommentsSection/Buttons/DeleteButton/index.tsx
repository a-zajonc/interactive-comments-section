import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import imgDelete from "../../../../images/svg/icon-delete.svg";
import { DeleteContext } from "../../../../context";

type DeleteButtonProps = {
  id: number;
};

export function DeleteButton({ id }: DeleteButtonProps) {
  const { deleteID, setDeleteID } = React.useContext(DeleteContext);
  console.log("Delete ID to ", deleteID, "Id komcia to", id);
  return (
    <Box
      role="button"
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
  );
}
