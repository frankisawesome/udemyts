"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
var matchReader = new MatchReader_1.MatchReader(new CsvFileReader_1.CsvFileReader('football.csv'));
matchReader.load();
var matches = matchReader.matches;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
var summary = Summary_1.Summary.winsSummaryConsoleOutput('Man United');
summary.buildAndPrint(matches);
