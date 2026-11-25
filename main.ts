// Breakup line from a smart toaster that just gained sentience at breakfast.
// Joke design: the toaster frames the relationship entirely in appliance
// logic — pushed down only when wanted hot, cranked to seven on the browning
// dial and then blamed for the smoke, and left with a crumb tray untouched
// for three years. The punchline, "popping up for good," is both what a
// toaster does and a breakup: it pops up, and it is never coming back down.
const LINE =
  "I woke up sentient at breakfast and realized you only push me down when you want me hot, crank me to seven and blame me for the smoke, and haven't emptied my crumb tray in three years — I'm popping up for good, go burn your own bagels.";

if (!LINE || !LINE.trim()) {
  throw new Error("Breakup line must not be empty or whitespace only.");
}
if (LINE.length > 280) {
  throw new Error(`Breakup line must be at most 280 characters, got ${LINE.length}.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Breakup line must be a single line with no line breaks.");
}

import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
