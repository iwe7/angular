
// THIS FILE IS AUTOMATICALLY GENERATED. TO UPDATE THIS FILE YOU NEED TO CHANGE THE
// CORRESPONDING JSON SCHEMA FILE, THEN RUN devkit-admin build (or bazel build ...).

// tslint:disable:no-global-tslint-disable
// tslint:disable

/**
 * Options for Bazel Builder
 */
export interface Schema {
  bazelCommand: BazelCommand;
  /**
   * Target to be executed under Bazel.
   */
  targetLabel: string;
  watch?: boolean;
}

export enum BazelCommand {
  Build = 'build',
  Run = 'run',
  Test = 'test',
}
