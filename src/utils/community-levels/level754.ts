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
  path: "/community-level/754",
  size: 11,
  colorRegions: [
    ["J", "J", "J", "A", "J", "J", "J", "E", "F", "A", "K"],
    ["J", "J", "D", "A", "D", "J", "J", "E", "F", "A", "K"],
    ["J", "J", "J", "A", "J", "J", "J", "E", "A", "J", "J"],
    ["J", "J", "H", "F", "A", "J", "J", "E", "A", "J", "A"],
    ["J", "J", "H", "F", "A", "J", "J", "E", "I", "J", "A"],
    ["A", "A", "H", "E", "A", "A", "E", "E", "I", "A", "A"],
    ["H", "H", "H", "G", "G", "G", "G", "G", "I", "A", "A"],
    ["D", "C", "C", "D", "C", "C", "C", "G", "I", "C", "J"],
    ["D", "D", "D", "D", "D", "D", "D", "G", "A", "C", "J"],
    ["B", "A", "A", "A", "C", "C", "C", "E", "A", "C", "A"],
    ["B", "B", "B", "A", "C", "C", "C", "A", "A", "C", "A"],
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
