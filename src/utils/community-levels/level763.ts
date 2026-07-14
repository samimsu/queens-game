import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/763",
  size: 9,
  colorRegions: [
    ["G", "G", "G", "A", "A", "A", "E", "E", "E"],
    ["G", "A", "A", "A", "A", "A", "A", "A", "E"],
    ["H", "I", "I", "I", "A", "A", "B", "B", "B"],
    ["H", "I", "A", "A", "A", "A", "A", "B", "D"],
    ["H", "I", "I", "A", "A", "A", "A", "A", "D"],
    ["H", "H", "F", "F", "F", "A", "A", "A", "D"],
    ["F", "F", "F", "A", "A", "A", "A", "D", "D"],
    ["C", "C", "C", "C", "C", "A", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  solutionsCount: 1,
  createdBy: "l2fleisc",
  creatorLink: "https://linkedin.com/levifleischer",
};

export default level;
