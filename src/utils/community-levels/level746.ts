import {
  altoMain,
  atomicTangerine,
  bittersweet,
  celadon,
  emerald,
  lavenderRose,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/746",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "F", "G", "E"],
    ["F", "F", "F", "A", "F", "G", "E"],
    ["F", "C", "A", "A", "E", "E", "E"],
    ["F", "C", "C", "C", "B", "E", "B"],
    ["F", "F", "F", "D", "B", "E", "B"],
    ["F", "E", "E", "D", "B", "E", "B"],
    ["D", "D", "E", "D", "B", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: emerald,
    C: atomicTangerine,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: lavenderRose,
  },
  solutionsCount: 1,
  createdBy: "Lea",
  creatorLink: "",
};

export default level;
