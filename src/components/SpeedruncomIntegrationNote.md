# Speedrun.com Integration - Implementation Note

The speedrun.com API integration has been created in `/src/lib/speedruncom.ts` but is not currently active in the Series Info page to avoid making external API calls during the static build process.

## To Enable Runner Avatars and Country Flags:

1. **Option A: Client-Side Fetching (Recommended)**
   - Create a React/Vue/Svelte component that fetches runner data after page load
   - This avoids build-time API calls and keeps the site static
   - Use the `fetchMultipleRunnerProfiles` function from speedruncom.ts

2. **Option B: Build-Time Fetching**
   - Modify the series-info.astro page to fetch runner profiles during build
   - Add caching to avoid hitting API rate limits
   - Consider storing results in a JSON file

3. **Option C: Manual Data Entry**
   - Manually gather runner avatars and country codes
   - Store in a static data file
   - Most reliable but requires manual updates

## Example Integration (Client-Side):

```astro
<!-- In series-info.astro -->
<RunnerGrid runners={seriesInfoData.runnerHistory} client:load />
```

```tsx
// RunnerGrid.tsx
import { fetchMultipleRunnerProfiles, getCountryFlag } from '../lib/speedruncom';

export default function RunnerGrid({ runners }) {
  const [profiles, setProfiles] = useState(new Map());
  
  useEffect(() => {
    const runnerNames = runners.map(r => r.name);
    fetchMultipleRunnerProfiles(runnerNames).then(setProfiles);
  }, [runners]);
  
  // Render runners with avatars and flags
}
```

## Current Implementation
The page currently uses generated avatars based on the runner's name, which provides a good fallback and keeps the build process fast and reliable.