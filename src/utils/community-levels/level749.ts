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
  path: "/community-level/749",
  size: 7,
  colorRegions: [
    ["A", "F", "F", "C", "C", "B", "B"],
    ["A", "A", "A", "C", "B", "B", "G"],
    ["D", "D", "A", "B", "B", "G", "G"],
    ["E", "E", "A", "A", "A", "D", "D"],
    ["G", "G", "B", "B", "A", "E", "E"],
    ["B", "B", "B", "C", "A", "A", "A"],
    ["B", "B", "C", "C", "F", "F", "A"],
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
  createdBy: "opeydopey",
  creatorLink: "",
};

export default level;
