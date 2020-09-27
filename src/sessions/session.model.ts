export interface Session {
  id: string;
  appInfo: AppInfo;
  quoteStatus: QuoteStatus;
}

export enum QuoteStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  BOUND = 'BOUND'
}

export interface AppInfo {
  landingPage: LandingPage;
}

export interface LandingPage {
  state: string;
  dateOfBirth: string;
  gender: string;
  healthy: string;
  nicotineUse: string;
}
