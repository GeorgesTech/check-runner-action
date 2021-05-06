const core = require('@actions/core');
const github = require('@actions/github');

const SELF_HOSTED = 'self-hosted';
const UBUNTU_LATEST = 'ubuntu-latest';

(async () => {
  try {
    console.log(github.context.payload)
    console.log(github.context.payload.pull_request)
    console.log(github.context.payload.pull_request.labels)

    const labels = github.context.payload.pull_request.labels || []
    
    if (labels.some(label => label.name === SELF_HOSTED)) {
      core.setOutput('runner', SELF_HOSTED)
    } else {
      core.setOutput('runner', UBUNTU_LATEST)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
})()
