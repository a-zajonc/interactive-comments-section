import { Box, Img, Text } from "@chakra-ui/react";
import { useEditID } from "../../../../hooks/useEdit";
import imgEdit from "../../../../images/svg/icon-edit.svg";

type EditButtonProps = {
  id: number;
};

export function EditButton({ id }: EditButtonProps) {
  const { editID, setEditID } = useEditID();
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
