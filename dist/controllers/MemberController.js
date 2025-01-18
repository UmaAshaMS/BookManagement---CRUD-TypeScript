"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const ResponseModels_1 = require("../models/ResponseModels");
class MemberController {
    constructor(memberService) {
        this.memberService = memberService;
    }
    getAllMembers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const members = yield this.memberService.getAllMembers();
                res.json(new ResponseModels_1.ResponseModel(true, "Members retrieved successfully", members));
            }
            catch (error) {
                res.status(500).json(new ResponseModels_1.ResponseModel(false, 'An unexpected error occurred', null));
            }
        });
    }
}
exports.MemberController = MemberController;
