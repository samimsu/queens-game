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
  path: "/community-level/747",
  size: 7,
  colorRegions: [
    ["F", "E", "G", "G", "G", "A", "A"],
    ["F", "E", "E", "G", "G", "G", "A"],
    ["F", "C", "C", "C", "G", "G", "G"],
    ["C", "C", "C", "G", "G", "G", "B"],
    ["C", "C", "G", "G", "G", "B", "B"],
    ["C", "G", "G", "G", "B", "B", "D"],
    ["G", "G", "G", "G", "D", "D", "D"],
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
