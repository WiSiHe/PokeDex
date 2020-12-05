export default function getWidth(width) {
  switch (width) {
    /**
     * Whole
     */
    case "one-whole":
      return "100%";

    /**
     * Halves
     */
    case "one-half":
    case "two-quarters":
    case "three-sixths":
    case "four-eighths":
    case "five-tenths":
    case "six-twelfths":
      return "50%";

    /**
     * Thirds
     */
    case "one-third":
    case "two-sixths":
    case "four-twelfths":
      return "33.333%";

    case "two-thirds":
    case "four-sixths":
    case "eight-twelfths":
      return "66.666%";

    /**
     * Quarters
     */
    case "one-quarter":
    case "two-eighths":
    case "three-twelfths":
      return "25%";

    case "three-quarters":
    case "six-eighths":
    case "nine-twelfths":
      return "75%";

    /**
     * Fifths
     */
    case "one-fifth":
    case "two-tenths":
      return "20%";

    case "two-fifths":
    case "four-tenths":
      return "40%";

    case "three-fifths":
    case "six-tenths":
      return "60%";

    case "four-fifths":
    case "eight-tenths":
      return "80%";

    /**
     * Sixths
     */
    case "one-sixth":
    case "two-twelfths":
      return "16.666%";

    case "five-sixths":
    case "ten-twelfths":
      return "83.333%";

    /**
     * Eighths
     */
    case "one-eighth":
      return "12.5%";

    case "three-eighths":
      return "37.5%";

    case "five-eighths":
      return "62.5%";

    case "seven-eighths":
      return "87.5%";

    /**
     * Tenths
     */
    case "one-tenth":
      return "10%";

    case "three-tenths":
      return "30%";

    case "seven-tenths":
      return "70%";

    case "nine-tenths":
      return "90%";

    /**
     * Twelfths
     */
    case "one-twelfth":
      return "8.333%";

    case "five-twelfths":
      return "41.666%";

    case "seven-twelfths":
      return "58.333%";

    case "eleven-twelfths":
      return "91.666%";

    default:
      return "100%";
  }
}
