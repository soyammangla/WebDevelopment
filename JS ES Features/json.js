// Q9_jsonAudit.js
(() => {
  "use strict";

  const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    "{invalid}",
    '{"user":"Mina","age":"22"}',
  ];

  const clean = [];
  const errors = [];

  for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    try {
      let parsed;
      try {
        parsed = JSON.parse(line);
      } catch (parseErr) {
        throw new Error(`InvalidJSON at line ${i}: ${parseErr.message}`);
      }

      // Detect missing keys
      if (!("user" in parsed))
        throw new Error(`MissingKey 'user' at line ${i}`);
      if (!("age" in parsed)) throw new Error(`MissingKey 'age' at line ${i}`);

      // Convert age to number
      parsed.age = Number(parsed.age);
      if (!Number.isFinite(parsed.age))
        throw new Error(`InvalidAge at line ${i}`);

      clean.push(parsed);
    } catch (err) {
      errors.push({ line: i, raw: line, error: err.message });
    }
  }

  console.log("Clean entries:", clean);
  console.log("Errors:", errors);

  // Bonus: filter under-18
  const adults = clean.filter((u) => u.age >= 18);
  const minors = clean.filter((u) => u.age < 18);
  console.log("Adults:", adults);
  console.log("Minors:", minors);

  // Debugger hint to see control flow
  // Put breakpoint on the next line to see variables
  // debugger;
})();
