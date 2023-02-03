import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Img, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { EditContext } from "../../../context";
import imgEdit from "../../../images/svg/icon-edit.svg";
export function EditComment({ id }) {
    const { editID, setEditID } = useContext(EditContext);
    return (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", onClick: () => (editID === id ? setEditID(0) : setEditID(id)) }, { children: [_jsx(Img, { src: imgEdit, alt: "delete", marginRight: "10px", marginLeft: "20px" }), _jsx(Text, Object.assign({ color: "#5457B6", fontWeight: "500" }, { children: "Edit" }))] })));
}
