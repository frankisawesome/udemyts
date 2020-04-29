import { MatchData } from './MatchData';
import { MatchResult } from '.';
import { WinsAnalysis } from './Analysers';
import { ConsoleReport } from './OutputTargets';

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private analyser: Analyser, private outputTarget: OutputTarget) {}

  buildAndPrint(matches: MatchData[]): void {
    this.outputTarget.print(this.analyser.run(matches));
  }

  static winsSummaryConsoleOutput(team: string) {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
}
