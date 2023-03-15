import { Box, Img, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { EditContext } from "../../../../context";
import imgEdit from "../../../../images/svg/icon-edit.svg";

type EditButtonProps = {
  id: number;
};

export function EditButton({ id }: EditButtonProps) {
  const { editID, setEditID } = useContext(EditContext);

  return (
    <Box
      role="button"
      display="flex"
      flexDirection="row"
      alignItems="center"
      onClick={() => (editID === id ? setEditID(0) : setEditID(id))}
    >
      <Img src={imgEdit} alt="delete" marginRight="10px" marginLeft="20px" />
      <Text color="#5457B6" fontWeight="500">
        Edit
      </Text>
    </Box>
  );
}
