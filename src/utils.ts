import { Dzikr } from "./types";

export function getDzikrByTags(dzikrData: Dzikr[], tags: string[]) {
  return dzikrData.filter((dzikr) => {
    const resultsCheck: boolean[] = [];
    tags.forEach((tag) => {
      if (dzikr.tags.includes(tag)) {
        resultsCheck.push(true);
      } else {
        resultsCheck.push(false);
      }
    });
    return resultsCheck.every((item) => item === true);
  });
}
