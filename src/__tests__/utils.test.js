// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    expect(pointsForWord(word)).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    expect(pointsForWord(word)).toBe(7);
  });
});
