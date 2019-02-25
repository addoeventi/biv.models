"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_guid_1 = require("ts-guid");
var Outgo = /** @class */ (function () {
    function Outgo() {
        this.guid = ts_guid_1.newGuid();
        this.products = [];
    }
    return Outgo;
}());
exports.Outgo = Outgo;
