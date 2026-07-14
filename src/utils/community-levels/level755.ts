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
  path: "/community-level/755",
  size: 10,
  colorRegions: [
    ["I", "A", "C", "D", "D", "D", "D", "C", "A", "G"],
    ["A", "C", "D", "D", "D", "D", "D", "D", "G", "A"],
    ["C", "A", "I", "H", "H", "H", "H", "G", "A", "C"],
    ["C", "D", "A", "D", "A", "A", "G", "A", "D", "D"],
    ["D", "D", "J", "A", "B", "G", "A", "F", "D", "D"],
    ["D", "D", "J", "A", "G", "B", "A", "F", "D", "D"],
    ["D", "D", "A", "G", "A", "A", "B", "A", "D", "D"],
    ["C", "A", "G", "E", "E", "E", "E", "I", "A", "C"],
    ["A", "C", "D", "D", "D", "D", "D", "D", "C", "A"],
    ["C", "A", "C", "D", "D", "D", "D", "C", "A", "I"],
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
