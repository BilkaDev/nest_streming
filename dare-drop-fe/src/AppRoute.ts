export enum AppRoute {
  streamer = '/'
}

export const getSingleStreamerUrl = (streamerId: string) =>
  `${AppRoute.streamer}/${streamerId}`;
