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
  path: "/community-level/744",
  size: 9,
  colorRegions: [
    ["G", "G", "G", "H", "B", "E", "E", "E", "E"],
    ["G", "G", "G", "H", "B", "E", "E", "D", "D"],
    ["G", "B", "G", "H", "B", "E", "C", "C", "D"],
    ["G", "B", "G", "H", "B", "C", "C", "D", "D"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["I", "D", "D", "D", "B", "A", "A", "F", "G"],
    ["I", "I", "I", "D", "B", "A", "A", "F", "G"],
    ["B", "I", "D", "D", "B", "F", "F", "F", "G"],
    ["B", "B", "B", "B", "B", "F", "G", "G", "G"],
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
  createdBy: "Katinka",
  creatorLink: "",
};

export default level;
