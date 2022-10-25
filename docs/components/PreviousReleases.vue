<script>

import { Octokit } from "https://cdn.skypack.dev/octokit";
import siteConfig from "../../config";

export default {
  async setup() {
    const octokit = new Octokit();
    const releases = await octokit.request('GET /repos/{owner}/{repo}/releases', siteConfig.githubRepo);
    console.log(releases.data[0])

    return {
      releases: releases.data.slice(1)
    }
  }
}
</script>

<template>

  <table>
    <thead>
      <tr>
        <th>Version</th>
        <th>Date</th>
        <th>Assets</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="release in releases">
        <td valign="top">{{ release.name }}</td>
        <td valign="top">{{ release.created_at.substring(0, "2020-01-01".length) }}</td>
        <td valign="top">
            <span v-for="asset in release.assets.filter(f => f.name.endsWith('.zip'))">
              <a :href="asset.browser_download_url">{{ asset.name }}</a> ({{ Math.round(asset.size / 1024) }} kb)<br />
            </span>
        </td>
      </tr>
    </tbody>

  </table>

</template>
