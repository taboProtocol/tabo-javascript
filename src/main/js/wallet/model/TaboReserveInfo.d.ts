export = TaboReserveInfo;
/**
 * Tabo reserve info, contains the network reserve info at current height
 */
declare class TaboReserveInfo {
  constructor(stateOrAmount: any, assetType: any);
  state: {};
  toJson(): any;
  setAssetSupply(asset: any, supply: any): void;
  toDict(): {};
  toArray(): any;
  toString(indent?: number): string;
}
