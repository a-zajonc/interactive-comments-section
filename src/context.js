"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyToUsernameContext = exports.ReplyContext = exports.CommentsContext = void 0;
const react_1 = require("react");
exports.CommentsContext = (0, react_1.createContext)([]);
exports.ReplyContext = (0, react_1.createContext)("");
exports.ReplyToUsernameContext = (0, react_1.createContext)("");
