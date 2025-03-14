const colors = {
  reset: "\x1b[0m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  gray: "\x1b[90m"
};

const styles = {
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  blink: "\x1b[5m",
  inverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikethrough: "\x1b[9m"
};

type Color = keyof typeof colors;
type Style = keyof typeof styles;

export function colorText(
  message: string,
  color: Color = "reset",
  ...appliedStyles: Style[]
): string {
  const colorCode = colors[color] || "";
  const styleCodes = appliedStyles.map((style) => styles[style] || "").join("");
  return `${styleCodes}${colorCode}${message}${colors.reset}\n`;
}
