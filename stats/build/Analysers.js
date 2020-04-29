"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.team && match[5] === index_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === index_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return this.team + " had " + wins + " wins last season!";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
