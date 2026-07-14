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
} from "../colors";

const level = {
  path: "/community-level/759",
  size: 10,
  colorRegions: [
    ["A", "A", "H", "J", "J", "J", "J", "J", "J", "B"],
    ["H", "A", "C", "H", "J", "J", "I", "F", "J", "J"],
    ["H", "A", "C", "G", "G", "G", "E", "E", "J", "J"],
    ["J", "H", "C", "C", "G", "G", "E", "G", "J", "J"],
    ["J", "J", "G", "G", "G", "D", "G", "G", "J", "J"],
    ["J", "J", "G", "G", "D", "G", "G", "G", "J", "J"],
    ["J", "J", "G", "E", "G", "G", "C", "C", "H", "J"],
    ["J", "J", "E", "E", "G", "G", "G", "C", "A", "H"],
    ["J", "J", "F", "I", "J", "J", "H", "C", "A", "H"],
    ["B", "J", "J", "J", "J", "J", "J", "H", "D", "A"],
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
  },
  solutionsCount: 1,
  createdBy: "VictorBandoiu",
  creatorLink: "https://www.instagram.com/victorban72/",
};

export default level;
