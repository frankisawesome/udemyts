import fs from 'fs';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { doesNotMatch, match } from 'assert';
import { Summary } from './Summary';
import { WinsAnalysis } from './Analysers';
import { ConsoleReport } from './OutputTargets';

const matchReader = new MatchReader(new CsvFileReader('football.csv'));
matchReader.load();
const matches = matchReader.matches;
export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const summary = Summary.winsSummaryConsoleOutput('Man United');

summary.buildAndPrint(matches);
