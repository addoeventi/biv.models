"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_guid_1 = require("ts-guid");
var ShoppingList = /** @class */ (function () {
    function ShoppingList() {
        this.guid = ts_guid_1.newGuid();
        this.products = [];
        this.discharges = [];
    }
    return ShoppingList;
}());
exports.ShoppingList = ShoppingList;
