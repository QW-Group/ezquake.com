# ezQuake

> https://ezquake.com

## Development

### Stack

ezQuake.com is built using [VitePress](https://vitepress.vuejs.org/).

### External data

**from ezQuake source repo**

* [help_cmdline_params.json](https://github.com/QW-Group/ezquake-source/blob/master/help_cmdline_params.json)
* [help_commands.json](https://github.com/QW-Group/ezquake-source/blob/master/help_commands.json)
* [help_macros.json](https://github.com/QW-Group/ezquake-source/blob/master/help_macros.json)
* [help_variables.json](https://github.com/QW-Group/ezquake-source/blob/master/help_variables.json)

### Setup

```shell
# clone repo
git clone git@github.com:QW-Group/ezquake.com.git
cd ezquake.com

# install dependencies
pnpm install

# start dev server
pnpm dev
```

dev server is hosted at http://localhost:5173

### Commands

| Command      | Description                                       |
|--------------|---------------------------------------------------|
| `pnpm dev`   | Start development server at http://localhost:5173 |
| `pnpm build` | Build site to `/dist`                             |
| `pnpm serve` | Serve `/dist` at http://localhost:4173            |
