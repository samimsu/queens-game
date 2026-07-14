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
  path: "/community-level/762",
  size: 7,
  colorRegions: [
    ["B", "A", "C", "F", "F", "A", "A"],
    ["A", "D", "D", "G", "D", "D", "A"],
    ["C", "D", "A", "D", "A", "D", "A"],
    ["F", "G", "G", "A", "G", "G", "E"],
    ["F", "D", "A", "D", "A", "D", "B"],
    ["A", "D", "D", "G", "D", "B", "A"],
    ["A", "A", "A", "E", "B", "A", "A"],
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
  createdBy: "VictorBandoiu",
  creatorLink: "https://www.instagram.com/victorban72/",
};

export default level;
