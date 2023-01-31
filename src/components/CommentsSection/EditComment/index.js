"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditComment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const context_1 = require("../../../context");
const icon_edit_svg_1 = __importDefault(require("../../../images/svg/icon-edit.svg"));
function EditComment({ id }) {
    const { editID, setEditID } = (0, react_2.useContext)(context_1.EditContext);
    return ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDirection: "row", alignItems: "center", onClick: () => (editID === id ? setEditID(0) : setEditID(id)) }, { children: [(0, jsx_runtime_1.jsx)(react_1.Img, { src: icon_edit_svg_1.default, alt: "delete", marginRight: "10px", marginLeft: "20px" }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ color: "#5457B6", fontWeight: "500" }, { children: "Edit" }))] })));
}
exports.EditComment = EditComment;
