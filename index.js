const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
  try {

    const payload = github.context.payload
    console.log(payload)
  } catch (error) {
    core.setFailed(error.message)
  }
})()
