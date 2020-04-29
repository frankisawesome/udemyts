import fs from 'fs';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../index';

type MatchData = [Date, string, string, number, number, MatchResult, string];

abstract class CsvfileLocal<T> {
  data: T[] = [];
  parsed: string[][];
  constructor(filePath: string) {
    this.parsed = fs
      .readFileSync(filePath, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}

export class FootballCsvLocal extends CsvfileLocal<MatchData> {
  constructor(filePath: string) {
    super(filePath);
    this.data = this.parsed.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}
