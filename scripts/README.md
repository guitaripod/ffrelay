# Runner Data Update Scripts

This directory contains scripts for maintaining and updating the runner data used in the FFRelay application.

## Available Scripts

### 1. `update-runners-comprehensive.ts`
The main script for updating runner data. It combines manual knowledge with optional API fetching.

**Usage:**
```bash
# Update using only known/manual data (fast, no API calls)
npm run update-runners

# Update using known data + speedrun.com API (slower, more comprehensive)
npm run update-runners-api
```

**Features:**
- Preserves existing data when API fails
- Uses a curated list of known runner countries
- Handles rate limiting properly
- Only updates fields that have changed
- Adds speedrun.com profile links for runners

### 2. `update-runners.ts`
The original update script that fetches from speedrun.com API. Has issues with:
- Defaults to US flag when API fails
- Takes very long due to API rate limits
- Doesn't preserve existing correct data well

### 3. `update-runners-fast.ts`
A quick update script that only applies known runner data without API calls.

## Known Runner Data

The scripts maintain a list of known runners with correct country codes, particularly for:
- **AwesomeWaves** - Ireland (IE) 🇮🇪
- **Cereth** - Canada (CA) 🇨🇦
- **Rossy** - United Kingdom (GB) 🇬🇧
- And many others from the speedrunning community

## Data Format

Runner data is stored in `/src/data/runnerData.ts` with the following structure:
```typescript
{
  "RunnerName": {
    countryCode: "XX",
    flag: "🏳️",
    name: "RunnerName",
    speedrunProfile: "speedrun_username" // optional
  }
}
```

## Best Practices

1. **Regular Updates**: Run `npm run update-runners` periodically to apply known corrections
2. **API Updates**: Use `npm run update-runners-api` sparingly due to rate limits
3. **Manual Corrections**: Add new known runners to the `knownRunners` object in the comprehensive script
4. **Preserve Data**: The scripts are designed to never lose existing correct data

## Adding New Known Runners

To add a new known runner, edit `update-runners-comprehensive.ts` and add to the `knownRunners` object:
```typescript
"RunnerName": { countryCode: "XX", speedrunProfile: "their_speedrun_username" },
```

Country codes should be ISO 3166-1 alpha-2 codes (e.g., US, GB, IE, CA, JP, etc.).