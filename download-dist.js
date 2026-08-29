const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const repo = 'DkHrR/shadowgrid';
const artifactName = 'build-artifacts';

function fetchJson(url, callback) {
  https.get(url, { headers: { 'User-Agent': 'node.js', 'Accept': 'application/vnd.github.v3+json' } }, res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => callback(JSON.parse(data)));
  }).on('error', err => console.error(err));
}

console.log('Fetching latest workflow run...');
fetchJson(\https://api.github.com/repos/\/actions/runs?per_page=1\, data => {
  const run = data.workflow_runs[0];
  console.log(\Latest run: \ (\)\);
  
  if (run.status !== 'completed') {
    console.log('Wait for CI to complete before downloading.');
    return;
  }

  fetchJson(run.artifacts_url, data => {
    const artifact = data.artifacts.find(a => a.name === artifactName);
    if (!artifact) {
      console.log('Artifact not found!');
      return;
    }
    console.log(\Found artifact: \, size: \ bytes. Download URL: \\);
    console.log('To download this artifact, you can click the link in the GitHub UI.');
    // GitHub API requires authentication to download artifacts directly, so we just point the user to it.
    // Or we can use github CLI!
  });
});
