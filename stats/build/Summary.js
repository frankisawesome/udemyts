"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Analysers_1 = require("./Analysers");
var OutputTargets_1 = require("./OutputTargets");
var Summary = /** @class */ (function () {
    function Summary(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrint = function (matches) {
        this.outputTarget.print(this.analyser.run(matches));
    };
    Summary.winsSummaryConsoleOutput = function (team) {
        return new Summary(new Analysers_1.WinsAnalysis(team), new OutputTargets_1.ConsoleReport());
    };
    return Summary;
}());
exports.Summary = Summary;
