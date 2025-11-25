// Q5 — Pipeline stages (1s each)
function stage(name, cb) {
  setTimeout(() => {
    console.log(`Stage: ${name}`);
    cb && cb();
  }, 1000);
}

// 1) Nested callbacks (callback hell)
function pipelineWithCallbacks() {
  console.log("Pipeline (callbacks) start");
  stage("design", () => {
    stage("build", () => {
      stage("test", () => {
        stage("deploy", () => {
          stage("celebrate", () => {
            console.log("Pipeline (callbacks) done");
          });
        });
      });
    });
  });
}

// 2) Clean version using Promises + async/await
function stagePromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Stage: ${name}`);
      resolve(name);
    }, 1000);
  });
}

async function pipelineAsync() {
  try {
    console.log("Pipeline (async/await) start");
    await stagePromise("design");
    await stagePromise("build");
    await stagePromise("test");
    await stagePromise("deploy");
    await stagePromise("celebrate");
    console.log("Pipeline (async/await) done");
  } catch (e) {
    console.error("Pipeline failed:", e);
  }
}

/*
Why async/await improves readability:
- Removes deep nesting (no pyramid).
- Flow reads top-to-bottom like synchronous code.
- Error handling becomes centralized with try/catch.
*/

// Run both for demonstration:
pipelineWithCallbacks();
setTimeout(() => pipelineAsync(), 7000); // delay start to avoid interleaving logs
