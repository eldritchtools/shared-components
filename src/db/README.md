## db

IndexedDB wrapper used to save and load data. Replaces local storage due to the possibility of keys clashing between tools and data going over the 5MB limit of local storage.

Import with `import { db } from '@eldritchtools/shared-components';` then call any of the following functions:

- `db.setItem(dbName, key, value)`
- `db.getItem(dbName, key)`
- `db.removeItem(dbName, key)`
- `db.clear(dbName)`
- `db.keys(dbName)`

Note that `dbName` must be unique across tools, otherwise you risk data clashing between different tools.

These are all `async` functions, so use `await` or `.then()` as applicable.

A hook `useDBState(dbName, key, defaultValue, settings = {})` is also provided to create a state variable with `useState` that automatically hydrates itself from IndexedDB and updates the value in IndexedDB whenever it is updated. The following optional settings are provided:

- `debounced` - Time in milliseconds to wait since the last update to save this variable. Particularly useful for big states so you don't batter IndexedDB with constant updates. Defaults to 0.