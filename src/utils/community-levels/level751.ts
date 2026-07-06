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
  path: "/community-level/751",
  size: 11,
  colorRegions: [
    ["I", "I", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "J", "J", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "J", "J", "A", "A"],
    ["D", "D", "F", "F", "F", "J", "J", "J", "J", "J", "J"],
    ["D", "G", "G", "F", "F", "J", "E", "E", "E", "J", "K"],
    ["D", "G", "G", "G", "F", "E", "E", "E", "E", "K", "K"],
    ["B", "G", "G", "F", "F", "E", "E", "E", "E", "C", "K"],
    ["B", "B", "B", "E", "E", "E", "C", "C", "C", "C", "C"],
    ["E", "E", "B", "B", "B", "E", "E", "C", "C", "H", "C"],
    ["E", "E", "E", "E", "E", "E", "C", "C", "C", "H", "H"],
    ["E", "E", "E", "C", "C", "C", "C", "C", "C", "C", "C"],
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
