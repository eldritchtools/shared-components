## Shared Components

Just a repo for shared components for my projects.

Run `npm run build` before pushing updates to this project.

Add `"@eldritchtools/shared-components": "github:eldritchtools/shared-components"` to `dependencies` in `package.json` and run `npm install` to import this into other projects.

Provides the following:
- [Footer](src/Footer) - Footer for displaying social links and copyright disclaimer
- [db, useDBState](src/db) - IndexedDB wrapper
- [ProfileProvider, useProfiles](src/profileProvider) - React Context Provider for handling profiles, uses the IndexedDB wrapper above