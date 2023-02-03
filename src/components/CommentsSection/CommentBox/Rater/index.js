import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
export function Rater({ score }) {
    const [newScore, setNewScore] = React.useState(score);
    const initialScore = score;
    function isDisabled(type) {
        if (initialScore === newScore) {
            return false;
        }
        if (type === "minus") {
            if (newScore === initialScore - 1) {
                return true;
            }
        }
        if (type === "plus") {
            if (newScore === initialScore + 1) {
                return true;
            }
        }
    }
    return (_jsxs(Box, Object.assign({ bgColor: "#EAECF1", rounded: "10px", display: "flex", flexDirection: { base: "row", sm: "column" }, alignItems: "center", justifyContent: "space-evenly", h: { base: "40px", sm: "130px" }, w: { base: "130px", sm: "40px" }, marginRight: { sm: "10px", md: "20px" } }, { children: [_jsx(IconButton, { bgColor: "#EAECF1", _hover: { bgColor: "#EAECF1", color: "#5457B6" }, _focus: { bgColor: "#EAECF1" }, padding: "10px", "aria-label": "Rate with plus", color: "#C5C6EF", icon: _jsx(AddIcon, {}), onClick: () => {
                    setNewScore(newScore + 1);
                }, isDisabled: isDisabled("plus") }), _jsx(Text, Object.assign({ color: "#5457B6", fontWeight: "700", padding: "10px" }, { children: newScore })), _jsx(IconButton, { bgColor: "#EAECF1", _hover: { bgColor: "#EAECF1", color: "#5457B6" }, _focus: { bgColor: "#EAECF1" }, padding: "10px", "aria-label": "Rate with plus", color: "#C5C6EF", icon: _jsx(MinusIcon, {}), onClick: () => {
                    setNewScore(newScore - 1);
                }, isDisabled: isDisabled("minus") })] })));
}
