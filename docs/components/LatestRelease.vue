<script>

export default {
  async setup() {
    const latestReleaseResponse = await fetch("https://api.github.com/repos/qw-group/ezquake-source/releases/latest");
    const latestRelease = await latestReleaseResponse.json()

    return {
      latestRelease
    }
  }
}

</script>

<template>

  <h3>ezQuake {{ latestRelease.name }}</h3>
  <p>Released on {{ latestRelease.created_at.substring(0, "2001-01-01".length) }}</p>

  <div v-if="latestRelease.assets.length">
    <strong>Assets</strong>
    <ul>
      <li v-for="asset in latestRelease.assets">
        <a :href="asset.browser_download_url">{{ asset.name }}</a> - {{ Math.round(asset.size / 1024) }} kb
      </li>
    </ul>
  </div>

  <div style="margin: 1em 0" v-if="latestRelease.body">
    <strong>Notes</strong><br />
    {{ latestRelease.body }}
  </div>

  <a :href="latestRelease.html_url">View release on GitHub</a>

</template>
