// Q10 — Delivery pipeline: each step random 1-2s and may fail
function randomDelay(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStep(name, failChance = 0.15) {
  return function () {
    return new Promise((resolve, reject) => {
      const t = randomDelay();
      console.log(`Starting: ${name}`);
      setTimeout(() => {
        if (Math.random() < failChance) {
          console.log(`${name} -> FAILED`);
          return reject(`${name} failed`);
        }
        console.log(`${name} -> DONE`);
        resolve(`${name} completed`);
      }, t);
    });
  };
}

const takeOrder = createStep("Order taken", 0.1);
const prepare = createStep("Food prepared", 0.12);
const pack = createStep("Package ready", 0.08);
const dispatch = createStep("Out for delivery", 0.12);
const deliver = createStep("Delivery completed", 0.05);

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    await takeOrder();
    console.log("Step 1: Order taken");
    await prepare();
    console.log("Step 2: Food prepared");
    await pack();
    console.log("Step 3: Package ready");
    await dispatch();
    console.log("Step 4: Out for delivery");
    await deliver();
    console.log("Delivery completed!");
  } catch (err) {
    console.error("Pipeline failed!", err);
  }
}

/*
Comments:
- Each step returns a Promise that resolves/rejects after a random 1-2s delay.
- Using async/await here makes the pipeline flow linear and easy to read:
  we await each step in order, and any thrown rejection is caught in one place.
- The JS event loop runs the async callbacks using macrotasks/timeouts;
  microtasks (Promises resolved immediately) are prioritized between task switches.
*/

runPipeline();
