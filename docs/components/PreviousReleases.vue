<script>

export default {
  async setup() {
    const releasesResponse = await fetch("https://api.github.com/repos/qw-group/ezquake-source/releases");
    const releases = await releasesResponse.json()
    const prevReleaseLimit = 5;

    return {
      previousReleases: releases.slice(1, 1+prevReleaseLimit)
    }
  }
}

</script>

<template>

  <table style="font-size: 0.85em">
    <thead>
      <tr>
        <th>Version</th>
        <th>Date</th>
        <th>Assets</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="release in previousReleases">
        <td valign="top">{{ release.name }}</td>
        <td valign="top">{{ release.created_at.substring(0, "2020-01-01".length) }}</td>
        <td valign="top">
            <span v-for="asset in release.assets.filter(f => f.browser_download_url.includes('releases/download'))">
              <a :href="asset.browser_download_url">{{ asset.name }}</a> ({{ Math.round(asset.size / 1024) }} kb)<br />
            </span>
        </td>
      </tr>
    </tbody>
  </table>

</template>
