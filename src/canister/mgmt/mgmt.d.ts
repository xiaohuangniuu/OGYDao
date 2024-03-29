import type { Principal } from '@dfinity/principal';
export interface Announcement {
  'id' : bigint,
  'title' : string,
  'content' : string,
  'endTime' : Time,
  'operator' : Principal,
  'createTime' : Time,
  'releaseTime' : Time,
}
export interface AnnouncementInit {
  'title' : string,
  'content' : string,
  'endTime' : Time,
  'releaseTime' : Time,
}
export interface Proxy {
  'addAnnouncements' : (arg_0: AnnouncementInit) => Promise<undefined>,
  'addBucket' : (arg_0: Array<Principal>) => Promise<undefined>,
  'addCanister' : (arg_0: Principal) => Promise<Result_1>,
  'addCanisterController' : (arg_0: Principal, arg_1: Principal) => Promise<
    undefined
    >,
  'addCreator_whitelist' : (arg_0: Array<Principal>) => Promise<undefined>,
  'addOperation' : (arg_0: Array<Principal>) => Promise<undefined>,
  'allApply' : () => Promise<Array<Array<number>>>,
  'apply' : (arg_0: Array<number>) => Promise<boolean>,
  'availableCycles' : () => Promise<bigint>,
  'claim' : (arg_0: Principal) => Promise<Result_1>,
  'claimCanister' : (arg_0: Principal) => Promise<Result>,
  'clearApply' : () => Promise<boolean>,
  'delAnnouncement' : (arg_0: bigint) => Promise<undefined>,
  'delApply' : (arg_0: Array<number>) => Promise<boolean>,
  'delCanisters' : (arg_0: Principal) => Promise<Array<Principal>>,
  'delCreator_whitelist' : (arg_0: Array<Principal>) => Promise<undefined>,
  'delOperation' : (arg_0: Array<Principal>) => Promise<undefined>,
  'getAnnouncements' : () => Promise<Array<Announcement>>,
  'getAnnouncementsAll' : () => Promise<Array<Announcement>>,
  'getBucket' : () => Promise<Principal>,
  'getBucketOwner' : () => Promise<Principal>,
  'getBuckets' : () => Promise<Array<Principal>>,
  'getCanisterStatus' : (arg_0: Principal) => Promise<
    {
      'status' : { 'stopped' : null } |
        { 'stopping' : null } |
        { 'running' : null },
      'memory_size' : bigint,
      'cycles' : bigint,
      'settings' : definite_canister_settings,
      'module_hash' : [] | [Array<number>],
    }
    >,
  'getCanisters' : () => Promise<Array<Principal>>,
  'getClaimedCanisters' : () => Promise<Array<[Principal, Principal]>>,
  'getCreator_whitelist' : () => Promise<Array<Principal>>,
  'getMemory' : () => Promise<bigint>,
  'getOperations' : () => Promise<Array<Principal>>,
  'setBucket' : (arg_0: Principal) => Promise<undefined>,
  'setBucketOwner' : (arg_0: Principal) => Promise<undefined>,
  'updateAnnouncement' : (arg_0: Announcement) => Promise<undefined>,
}
export type Result = { 'ok' : Principal } |
  { 'err' : string };
export type Result_1 = { 'ok' : null } |
  { 'err' : string };
export type Time = bigint;
export interface definite_canister_settings {
  'freezing_threshold' : bigint,
  'controllers' : [] | [Array<Principal>],
  'memory_allocation' : bigint,
  'compute_allocation' : bigint,
}
export interface _SERVICE extends Proxy {}
