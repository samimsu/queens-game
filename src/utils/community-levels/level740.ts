import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/740",
  size: 11,
  colorRegions: [
    ["G", "G", "G", "C", "C", "C", "B", "B", "B", "B", "A"],
    ["H", "H", "H", "C", "C", "B", "B", "B", "K", "A", "A"],
    ["H", "H", "H", "C", "B", "B", "B", "J", "A", "A", "A"],
    ["H", "H", "H", "B", "B", "B", "J", "A", "A", "A", "A"],
    ["H", "H", "B", "B", "B", "K", "A", "A", "A", "A", "A"],
    ["H", "B", "B", "B", "I", "A", "A", "A", "A", "A", "H"],
    ["B", "B", "B", "I", "A", "A", "A", "A", "A", "H", "H"],
    ["F", "H", "H", "A", "A", "A", "A", "A", "E", "E", "E"],
    ["F", "H", "A", "A", "A", "A", "A", "D", "D", "D", "D"],
    ["F", "A", "A", "A", "A", "A", "D", "D", "D", "D", "D"],
    ["A", "A", "A", "A", "A", "D", "D", "D", "D", "D", "H"],
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
    J: halfBaked,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "VictorBandoiu",
  creatorLink: "https://www.instagram.com/victorban72/",
};

export default level;
