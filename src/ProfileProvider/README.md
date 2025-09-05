## ProfileProvider

Profile Provider used for keeping track of different sets of data (e.g. for people with multiple save files). Uses `src/db/db.js` for storing data.

### Setup

In `App.js` import with `import { ProfileProvider } from './profileProvider';` then wrap your entire App div with the provider:

```
<ProfileProvider dbName={"some name"} migrateProfile={migrateProfile} >
    <div className="App">
        ...
    </div>
</ProfileProvider>
```

Note that `dbName` must be unique across tools, otherwise you risk data clashing between different tools.

`migrateProfile` is a required function that is used to migrate data whenever the tool is updated. It should accept the current profile of any version of the tool and update it to the latest version. If nothing is passed into it, it should return the default profile of the latest version. Sample snippet:

```
function migrateProfile(profile = {}) {
    let latestVersion = "latestVersion" in profile ? profile.latestVersion : 0;
    let migratedProfile = {...profile};

    // On version 0
    if (latestVersion < 1) {
        migratedProfile["field1"] = {};
        migratedProfile["field2"] = 1;
        migratedProfile["latestVersion"] = 1;
    }

    // On version 1 or below
    if (latestVersion < 2) {
        migratedProfile["field1"] = someFunc(migratedProfile["field1"]);
        migratedProfile["field3"] = [];
        migratedProfile["latestVersion"] = 2;
    }

    return migratedProfile;
}
```

ProfileProvider also optionally takes a `debounceTimer` prop that defaults to `1000`. This sets the delay between profile data updates before it autosaves to IndexedDB.

### Usage

To use the profiles, import `useProfiles` in whichever component you need to use it in `import { useProfiles } from "../profileProvider";` then call `useProfiles()` which returns the context value containing the following data and functions:

- `profiles` - Array of all available profiles
- `currentProfile` - Name of currently active profile
- `profileData` - Data of currently active profile
- `setProfileData` - Function to update the data of the currently active profile 
- `addProfile(name)` - Function to create a new profile
- `switchProfile(name)` - Function to switch the currently active profile (automatically saves the current profile before switching)
- `copyProfile(oldName, newName)` - Function to copy the data in the profile `oldName` and creates a new profile `newName` with the same data
- `deleteProfile(name)` - Function to delete a profile
- `exportProfile(name, type)` - Function to export a profile. `type` defaults to `base64` but can also be set to `json`
- `importProfile(name, importedData, type)` - Function to import a profile. `type` defaults to `base64` but can also be set to `json`. Creates a new profile `name` with the data from `importedData`

Note that the functions are all `async` functions. Use `await` or `.then()` acordingly.

Sample snippet:

```
const { profileData, setProfileData } = useProfiles();

setProfileData(someUpdateFunc(profileData));
```