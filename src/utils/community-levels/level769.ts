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
  path: "/community-level/769",
  size: 10,
  colorRegions: [
    ["C", "C", "A", "A", "A", "A", "A", "A", "D", "D"],
    ["C", "G", "B", "B", "A", "A", "A", "B", "G", "D"],
    ["A", "B", "G", "H", "J", "J", "H", "G", "A", "A"],
    ["A", "B", "I", "G", "F", "F", "G", "I", "J", "A"],
    ["A", "A", "H", "G", "I", "I", "G", "G", "J", "A"],
    ["A", "A", "H", "G", "I", "I", "G", "I", "J", "A"],
    ["A", "A", "I", "G", "E", "E", "G", "I", "J", "A"],
    ["A", "B", "G", "G", "J", "J", "G", "G", "J", "A"],
    ["D", "A", "A", "A", "J", "J", "J", "J", "G", "C"],
    ["D", "D", "D", "A", "A", "A", "A", "A", "C", "C"],
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
