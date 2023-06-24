export enum AppRoute {
  streamer = '/'
}

export const getSingleStreamerUrl = (streamerId: string) => `/${streamerId}`;
