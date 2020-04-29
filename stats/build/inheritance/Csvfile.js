"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("../utils");
var CsvfileLocal = /** @class */ (function () {
    function CsvfileLocal(filePath) {
        this.data = [];
        this.parsed = fs_1.default
            .readFileSync(filePath, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map(function (row) { return row.split(','); });
    }
    return CsvfileLocal;
}());
var FootballCsvLocal = /** @class */ (function (_super) {
    __extends(FootballCsvLocal, _super);
    function FootballCsvLocal(filePath) {
        var _this = _super.call(this, filePath) || this;
        _this.data = _this.parsed.map(function (row) { return [
            utils_1.dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]; });
        return _this;
    }
    return FootballCsvLocal;
}(CsvfileLocal));
exports.FootballCsvLocal = FootballCsvLocal;
