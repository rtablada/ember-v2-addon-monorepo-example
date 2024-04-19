# Embroider PNPM Monorepo with Addons Example

This application is a learning ground for setting up a new Ember monorepo with the latest build tools and using addons to share and split code into smaller understandable modules.

### Steps to get to this point

1. Create project with base `pnpm-workspace.yaml` and private package.json (initialize git)
2. `mkdir apps`
3. `mkdir addons`
4. `mkdir test-packages`
5. `ember new @my-co/admin --welcome-false -pnpm --directory apps/admin --typescript --skip-git --embroider` (setup embroider app in apps/admin)
6. `ember addon @my-co/shared-ui -b @embroider/addon-blueprint --typescript --skip-git --pnpm --skip-npm --addon-location="addons/shared-ui" --test-app-name="test-app-for-shared-ui" --test-app-location="test-packages/shared-ui"`

### Issues to resolve
* [ ] Live reload is not triggering when code changes in `addons/shared-ui`?