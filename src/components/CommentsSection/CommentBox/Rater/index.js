"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rater = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const icon_plus_svg_1 = __importDefault(require("../../../../images/svg/icon-plus.svg"));
const icon_minus_svg_1 = __importDefault(require("../../../../images/svg/icon-minus.svg"));
function Rater({ score }) {
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ bgColor: "#EAECF1", rounded: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", h: "90%", w: "8%", padding: "10px" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_plus_svg_1.default, alt: "plus" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "700" }, { children: score })), (0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_minus_svg_1.default, alt: "minus" })] })));
}
exports.Rater = Rater;
