export enum Actions {
  FETCH_LAUNCHES = "FETCH_LAUNCHES",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}
export interface IFeedState {
  launches: ILaunchData[],
  history: ILaunchData[],
  successful: boolean,
  isLoading: boolean,
}
export interface ILaunchData {
  flight_number: number,
  mission_name: string,
  launch_success: "FAILURE" | "SUCCESS" | "UNKNOWN",
  launch_date_utc: string,
  details: string,
  links: {
    mission_patch: string,
    article_link: string,
    video_link: string,
  },
}

export interface IFetchAction {
  type: string;
  payload: number;
}

export interface ILaunchesActionPayload {
  launchData: IFeedState['launches'];
  historyData: IFeedState['history'];
}

export interface ILaunchesAction {
  type: string;
  payload: ILaunchesActionPayload;
}
