"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rater = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const icons_1 = require("@chakra-ui/icons");
function Rater({ score }) {
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
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ bgColor: "#EAECF1", rounded: "10px", display: "flex", flexDirection: { base: "row", sm: "column" }, alignItems: "center", justifyContent: "space-evenly", h: { base: "40px", sm: "130px" }, w: { base: "130px", sm: "40px" }, marginRight: { sm: "10px", md: "20px" } }, { children: [(0, jsx_runtime_1.jsx)(react_1.IconButton, { bgColor: "#EAECF1", _hover: { bgColor: "#EAECF1", color: "#5457B6" }, _focus: { bgColor: "#EAECF1" }, padding: "10px", "aria-label": "Rate with plus", color: "#C5C6EF", icon: (0, jsx_runtime_1.jsx)(icons_1.AddIcon, {}), onClick: () => {
                    setNewScore(newScore + 1);
                }, isDisabled: isDisabled("plus") }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "700", padding: "10px" }, { children: newScore })), (0, jsx_runtime_1.jsx)(react_1.IconButton, { bgColor: "#EAECF1", _hover: { bgColor: "#EAECF1", color: "#5457B6" }, _focus: { bgColor: "#EAECF1" }, padding: "10px", "aria-label": "Rate with plus", color: "#C5C6EF", icon: (0, jsx_runtime_1.jsx)(icons_1.MinusIcon, {}), onClick: () => {
                    setNewScore(newScore - 1);
                }, isDisabled: isDisabled("minus") })] })));
}
exports.Rater = Rater;
