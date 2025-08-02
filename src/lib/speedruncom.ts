
interface SpeedrunUser {
  id: string;
  names: {
    international: string;
    japanese?: string;
  };
  weblink: string;
  location?: {
    country?: {
      code: string;
      names: {
        international: string;
        japanese?: string;
      };
    };
  };
  twitch?: {
    uri: string;
  };
  twitter?: {
    uri: string;
  };
  youtube?: {
    uri: string;
  };
  assets?: {
    icon?: {
      uri: string;
    };
    image?: {
      uri: string;
    };
  };
}

interface SpeedrunUserResponse {
  data: SpeedrunUser;
}

interface RunnerProfile {
  name: string;
  avatar?: string;
  countryCode?: string;
  countryName?: string;
  profileUrl?: string;
  socials?: {
    twitch?: string;
    twitter?: string;
    youtube?: string;
  };
}

const runnerCache = new Map<string, RunnerProfile>();

const SPEEDRUN_API_BASE = 'https://www.speedrun.com/api/v1';

let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 100; // Rate limiting to avoid hitting API limits

async function rateLimitedFetch(url: string): Promise<Response> {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await new Promise(resolve => setTimeout(resolve, MIN_REQUEST_INTERVAL - timeSinceLastRequest));
  }
  
  lastRequestTime = Date.now();
  return fetch(url);
}

export async function fetchRunnerProfile(runnerName: string): Promise<RunnerProfile | null> {
  if (runnerCache.has(runnerName)) {
    return runnerCache.get(runnerName)!;
  }
  
  try {
    const searchUrl = `${SPEEDRUN_API_BASE}/users?name=${encodeURIComponent(runnerName)}`;
    const response = await rateLimitedFetch(searchUrl);
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    
    if (!data.data || data.data.length === 0) {
      const profile: RunnerProfile = { name: runnerName };
      runnerCache.set(runnerName, profile);
      return profile;
    }
    
    const user = data.data[0] as SpeedrunUser;
    
    const profile: RunnerProfile = {
      name: user.names.international,
      avatar: user.assets?.image?.uri || user.assets?.icon?.uri,
      countryCode: user.location?.country?.code,
      countryName: user.location?.country?.names.international,
      profileUrl: user.weblink,
      socials: {
        twitch: user.twitch?.uri,
        twitter: user.twitter?.uri,
        youtube: user.youtube?.uri
      }
    };
    
    runnerCache.set(runnerName, profile);
    
    return profile;
  } catch (error) {
    const profile: RunnerProfile = { name: runnerName };
    runnerCache.set(runnerName, profile);
    return profile;
  }
}

export async function fetchMultipleRunnerProfiles(runnerNames: string[]): Promise<Map<string, RunnerProfile>> {
  const profiles = new Map<string, RunnerProfile>();
  
  const uncachedRunners = runnerNames.filter(name => !runnerCache.has(name));
  
  for (const name of runnerNames) {
    if (runnerCache.has(name)) {
      profiles.set(name, runnerCache.get(name)!);
    }
  }
  
  for (const name of uncachedRunners) {
    const profile = await fetchRunnerProfile(name);
    if (profile) {
      profiles.set(name, profile);
    }
  }
  
  return profiles;
}

export function getCountryFlag(countryCode?: string): string {
  if (!countryCode || countryCode.length !== 2) return '';
  
  // Convert country code to emoji flag using Unicode regional indicators
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  
  return String.fromCodePoint(...codePoints);
}

export function getDefaultAvatar(runnerName: string): string {
  // Generate consistent hash from runner name for color selection
  let hash = 0;
  for (let i = 0; i < runnerName.length; i++) {
    hash = runnerName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const hue = Math.abs(hash) % 360;
  const saturation = 70;
  const lightness = 50;
  
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='hsl(${hue}, ${saturation}%25, ${lightness}%25)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='sans-serif' font-size='20' font-weight='bold'%3E${runnerName.charAt(0).toUpperCase()}%3C/text%3E%3C/svg%3E`;
}

export function getAvatarUrl(profile: RunnerProfile | undefined, runnerName: string): string {
  return getDefaultAvatar(runnerName);
}

export function clearRunnerCache() {
  runnerCache.clear();
}

export function getCachedRunnerCount(): number {
  return runnerCache.size;
}