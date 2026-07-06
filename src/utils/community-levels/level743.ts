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
  path: "/community-level/743",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "D", "D", "D", "D", "D", "D", "D", "B"],
    ["A", "D", "G", "G", "H", "H", "H", "D", "B"],
    ["A", "D", "G", "I", "I", "I", "H", "D", "B"],
    ["A", "D", "G", "I", "I", "I", "H", "D", "B"],
    ["A", "E", "F", "I", "I", "I", "H", "D", "B"],
    ["C", "E", "F", "F", "F", "H", "H", "D", "B"],
    ["C", "E", "E", "E", "D", "D", "D", "D", "B"],
    ["C", "C", "C", "B", "B", "B", "B", "B", "B"],
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
  createdBy: "Lavalette",
  creatorLink: "https://www.instagram.com/laval33t/",
};

export default level;
