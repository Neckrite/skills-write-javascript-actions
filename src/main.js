import * as core from '@actions/core';
import { getDadJoke } from './joke.js';

async function run() {
  const joke = await getDadJoke();
  core.setOutput('joke', joke);
}

run();
