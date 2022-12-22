"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const components_1 = require("./components/");
function App() {
    return ((0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ display: "flex", justifyContent: "center", marginBlock: "80px" }, { children: (0, jsx_runtime_1.jsx)(components_1.CommentSection, {}) })));
}
exports.default = App;
