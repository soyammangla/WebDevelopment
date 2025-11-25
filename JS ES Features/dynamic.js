// Q1_dynamicDataParser.js
(() => {
  "use strict";

  const apiData = [
    "25",
    "true",
    "false",
    "NaN",
    " ",
    "100px",
    "3.14",
    null,
    undefined,
  ];

  const validNumbers = [];
  const invalidNumbers = [];
  const converted = [];

  function isValidNumericString(s) {
    // only numeric strings that fully parse to finite numbers
    if (typeof s !== "string") return false;
    const trimmed = s.trim();
    if (trimmed === "") return false;
    const num = Number(trimmed);
    return (
      (Number.isFinite(num) && String(num) === trimmed) ||
      (!Number.isNaN(num) && !/[^\d.+-eE]/.test(trimmed))
    );
  }

  for (let i = 0; i < apiData.length; i++) {
    const original = apiData[i];

    // Convert to String
    const asString = String(original);

    // Convert to Boolean (JS rules)
    const asBoolean = Boolean(original);

    // Convert to Number if valid; otherwise mark invalid
    const candidate = Number(original);
    const isValidNumber =
      Number.isFinite(candidate) &&
      (typeof original !== "string" || original.trim() !== "") &&
      !/px$/i.test(String(original).trim());

    converted.push({
      index: i,
      original,
      asNumber: candidate,
      asBoolean,
      asString,
      isValidNumber,
    });

    if (isValidNumber) {
      validNumbers.push(candidate);
    } else {
      invalidNumbers.push({
        original,
        reason:
          original === null
            ? "null"
            : original === undefined
            ? "undefined"
            : `invalid number "${original}"`,
      });
    }
  }

  // Detailed report
  console.log("=== Dynamic Data Parser Report ===");
  for (const item of converted) {
    console.log(
      `Index ${item.index}: original=${JSON.stringify(
        item.original
      )} | Number=${item.asNumber} | Boolean=${item.asBoolean} | String="${
        item.asString
      }" | validNumber=${item.isValidNumber}`
    );
  }

  console.log("\nValid numeric data array:", validNumbers);
  console.log("Invalid numeric entries (skipped):", invalidNumbers);

  // Also provide conditional formatting (simple)
  console.log("\nFormatted Summary:");
  converted.forEach((it) => {
    if (it.isValidNumber) {
      console.log(
        `%c[VALID]  ${JSON.stringify(it.original)} -> ${it.asNumber}`,
        "color:green"
      );
    } else {
      console.log(
        `%c[INVALID] ${JSON.stringify(it.original)} -> skipped`,
        "color:orange"
      );
    }
  });
})();
