const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(
  path.join(__dirname, "../app/tutorials/page.js"),
  "utf8",
);
const m = src.match(/html=\{`([\s\S]*?)`\}/);
if (!m) {
  console.error("no match");
  process.exit(1);
}
const html = m[1];
const start = html.indexOf('<section class="tutorial-hero">');
const end = html.indexOf('<div id="footer-placeholder">');
if (start === -1 || end === -1) {
  console.error("markers not found", start, end);
  process.exit(1);
}
const body = html.slice(start, end);
const styles = (html.match(/<style[\s\S]*?<\/style>/gi) || []).join("\n");
const out =
  "export const TUTORIALS_STYLES = " +
  JSON.stringify(styles) +
  ";\nexport const TUTORIALS_BODY = " +
  JSON.stringify(body) +
  ";\n";
fs.mkdirSync(path.join(__dirname, "../content"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "../content/tutorials-content.js"), out);
console.log("Extracted", body.length, "chars body,", styles.length, "chars styles");
