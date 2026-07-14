import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/766",
  size: 7,
  colorRegions: [
    ["A", "A", "C", "C", "C", "D", "D"],
    ["A", "B", "G", "G", "G", "D", "E"],
    ["A", "B", "G", "E", "E", "E", "E"],
    ["A", "B", "G", "G", "G", "F", "F"],
    ["A", "A", "A", "A", "G", "F", "F"],
    ["A", "A", "G", "G", "G", "F", "A"],
    ["A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "ege",
  creatorLink: "",
};

export default level;
