export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const AnnouncementInit = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'endTime' : Time,
    'releaseTime' : Time,
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : IDL.Principal, 'err' : IDL.Text });
  const Announcement = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'endTime' : Time,
    'operator' : IDL.Principal,
    'createTime' : Time,
    'releaseTime' : Time,
  });
  const definite_canister_settings = IDL.Record({
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'memory_allocation' : IDL.Nat,
    'compute_allocation' : IDL.Nat,
  });
  const Proxy = IDL.Service({
    'addAnnouncements' : IDL.Func([AnnouncementInit], [], []),
    'addBucket' : IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    'addCanister' : IDL.Func([IDL.Principal], [Result_1], []),
    'addCanisterController' : IDL.Func(
      [IDL.Principal, IDL.Principal],
      [],
      ['oneway'],
    ),
    'addCreator_whitelist' : IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    'addOperation' : IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    'allApply' : IDL.Func([], [IDL.Vec(IDL.Vec(IDL.Nat8))], ['query']),
    'apply' : IDL.Func([IDL.Vec(IDL.Nat8)], [IDL.Bool], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'claim' : IDL.Func([IDL.Principal], [Result_1], []),
    'claimCanister' : IDL.Func([IDL.Principal], [Result], []),
    'clearApply' : IDL.Func([], [IDL.Bool], []),
    'delAnnouncement' : IDL.Func([IDL.Nat], [], []),
    'delApply' : IDL.Func([IDL.Vec(IDL.Nat8)], [IDL.Bool], []),
    'delCanisters' : IDL.Func([IDL.Principal], [IDL.Vec(IDL.Principal)], []),
    'delCreator_whitelist' : IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    'delOperation' : IDL.Func([IDL.Vec(IDL.Principal)], [], []),
    'getAnnouncements' : IDL.Func([], [IDL.Vec(Announcement)], ['query']),
    'getAnnouncementsAll' : IDL.Func([], [IDL.Vec(Announcement)], ['query']),
    'getBucket' : IDL.Func([], [IDL.Principal], []),
    'getBucketOwner' : IDL.Func([], [IDL.Principal], []),
    'getBuckets' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getCanisterStatus' : IDL.Func(
      [IDL.Principal],
      [
        IDL.Record({
          'status' : IDL.Variant({
            'stopped' : IDL.Null,
            'stopping' : IDL.Null,
            'running' : IDL.Null,
          }),
          'memory_size' : IDL.Nat,
          'cycles' : IDL.Nat,
          'settings' : definite_canister_settings,
          'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
        }),
      ],
      [],
    ),
    'getCanisters' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getClaimedCanisters' : IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Principal))],
      ['query'],
    ),
    'getCreator_whitelist' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getMemory' : IDL.Func([], [IDL.Nat], ['query']),
    'getOperations' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'setBucket' : IDL.Func([IDL.Principal], [], []),
    'setBucketOwner' : IDL.Func([IDL.Principal], [], []),
    'updateAnnouncement' : IDL.Func([Announcement], [], []),
  });
  return Proxy;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
