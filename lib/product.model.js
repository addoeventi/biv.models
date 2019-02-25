"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_guid_1 = require("ts-guid");
var Product = /** @class */ (function () {
    function Product() {
        this.guid = ts_guid_1.newGuid();
    }
    return Product;
}());
exports.Product = Product;
