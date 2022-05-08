export interface TabItem {
  IsFocusTab: boolean;
  IsVisitTab: boolean;
  NumberShow: string;
  TabID: number;
  TabName: string;
}

export interface ListTabResponse {
  ListTab: TabItem[];
}

export interface RegionItem {
  RegionID: number;
  ParentID: number;
  RegionCode: string;
  RegionName: string;
  RegionLevel: number;
  IsActive: boolean;
  Order: number;
}

export interface RegionResponse {
  ListRegion: RegionItem[];
}
