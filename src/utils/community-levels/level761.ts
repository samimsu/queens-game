import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/761",
  size: 6,
  colorRegions: [
    ["D", "D", "B", "B", "D", "D"],
    ["D", "C", "D", "D", "C", "D"],
    ["E", "A", "C", "C", "A", "E"],
    ["F", "A", "C", "C", "A", "F"],
    ["F", "C", "D", "D", "C", "F"],
    ["D", "D", "B", "B", "E", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "VictorBandoiu",
  creatorLink: "https://www.instagram.com/victorban72/",
};

export default level;
