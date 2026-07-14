import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/760",
  size: 6,
  colorRegions: [
    ["B", "A", "A", "D", "D", "C"],
    ["B", "B", "A", "A", "F", "D"],
    ["D", "E", "A", "A", "E", "D"],
    ["D", "E", "A", "A", "E", "D"],
    ["D", "F", "A", "A", "F", "B"],
    ["C", "D", "D", "A", "A", "B"],
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
