import { describe, expect, it } from "vitest";
import { getDzikrByTags } from "./utils";
import { Dzikr } from "./types";

describe("getDzikrByTags", () => {
  const dzikrData: Dzikr[] = [
    {
      title: "Dzikr 1",
      repeat: 1,
      tags: ["morning-dzikr", "evening-dzikr", "sughro", "kubro"],
      children: [],
    },
    {
      title: "Dzikr 2",
      repeat: 1,
      tags: ["morning-dzikr", "evening-dzikr", "kubro"],
      children: [],
    },
    {
      title: "Dzikr 3",
      repeat: 1,
      tags: ["morning-dzikr", "sughro", "kubro"],
      children: [],
    },
    {
      title: "Dzikr 4",
      repeat: 1,
      tags: ["evening-dzikr", "kubro"],
      children: [],
    },
  ];

  it("should return dzikr with matching tags", () => {
    const tags = ["morning-dzikr", "sughro"];
    const result = getDzikrByTags(dzikrData, tags);
    expect(result).toEqual([
      {
        title: "Dzikr 1",
        repeat: 1,
        tags: ["morning-dzikr", "evening-dzikr", "sughro", "kubro"],
        children: [],
      },
      {
        title: "Dzikr 3",
        repeat: 1,
        tags: ["morning-dzikr", "sughro", "kubro"],
        children: [],
      },
    ]);
  });

  it("should return dzikr with all matching tags", () => {
    const tags = ["evening-dzikr", "kubro"];
    const result = getDzikrByTags(dzikrData, tags);
    expect(result).toEqual([
      {
        title: "Dzikr 1",
        repeat: 1,
        tags: ["morning-dzikr", "evening-dzikr", "sughro", "kubro"],
        children: [],
      },
      {
        title: "Dzikr 2",
        repeat: 1,
        tags: ["morning-dzikr", "evening-dzikr", "kubro"],
        children: [],
      },
      {
        title: "Dzikr 4",
        repeat: 1,
        tags: ["evening-dzikr", "kubro"],
        children: [],
      },
    ]);
  });
});
