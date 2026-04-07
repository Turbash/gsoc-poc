import { PipelineOutput } from "./types.js";

const runs = new Map<string, PipelineOutput>();

export function saveRun(output: PipelineOutput): void {
  runs.set(output.source.id, output);
}

export function getRun(sourceId: string): PipelineOutput | undefined {
  return runs.get(sourceId);
}

export function listRuns(): Array<{
  sourceId: string;
  sourceName: string;
  totalEndpoints: number;
  generatedAt: string;
}> {
  return [...runs.values()].map((r) => ({
    sourceId: r.source.id,
    sourceName: r.source.name,
    totalEndpoints: r.report.totalEndpoints,
    generatedAt: r.report.generatedAt,
  }));
}
