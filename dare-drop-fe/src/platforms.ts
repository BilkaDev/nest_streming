export const twitch = {
  url: 'https://www.twitch.tv/',
  name: 'twitch'
} as const;
export const youtube = {
  url: 'https://www.youtube.com/',
  name: 'YouTube'
} as const;

export const tiktok = {
  url: 'https://www.tiktok.com//',
  name: 'TikTok'
} as const;
export const rumble = {
  url: 'https://rumble.com//',
  name: 'Rumble'
} as const;
export const kick = {
  url: 'https://kick.com/',
  name: 'Kick'
} as const;

export const availablePlatforms = {
  twitch,
  youtube,
  kick,
  rumble,
  tiktok
};

export const DEFAULT_PLATFORM = 'twitch';

export type AvailablePlatforms = keyof typeof availablePlatforms;
