export const OfficeKeys = new Map<string, string>([['President', 'P'], ['Senate', 'S'], ['House', 'H']]);

export const StateKeys = new Map<string, string>([
  ['-', '-'], ['Alabama', 'AL'], ['Alaska', 'AK'], ['Arizona', 'AZ'], ['Arkansas', 'AR'],
  ['California', 'CA'], ['Colorado', 'CO'], ['Connecticut', 'CT'], ['Delaware', 'DE'],
  ['Florida', 'FL'], ['Georgia', 'GA'], ['Hawaii', 'HI'], ['Idaho', 'ID'],
  ['Illinois', 'IL'], ['Indiana', 'IN'], ['Iowa', 'IA'], ['Kansas', 'KS'], ['Kentucky', 'KY'],
  ['Louisiana', 'LA'], ['Maine', 'ME'], ['Maryland', 'MD'], ['Massachusetts', 'MA'], ['Michigan', 'MI'],
  ['Minnesota', 'MN'], ['Mississippi', 'MS'], ['Missouri', 'MO'], ['Montana', 'MT'], ['Nebraska', 'NE'],
  ['Nevada', 'NV'], ['New Hampshire', 'NH'], ['New Jersey', 'NJ'], ['New Mexico', 'NM'], ['New York', 'NY'],
  ['North Carolina', 'NC'], ['North Dakota', 'ND'], ['Ohio', 'OH'], ['Oklahoma', 'OK'],
  ['Oregon', 'OR'], ['Pennsylvania', 'PA'], ['Rhode Island', 'RI'], ['South Carolina', 'SC'],
  ['South Dakota', 'SD'], ['Tennessee', 'TN'], ['Texas', 'TX'], ['Utah', 'UT'], ['Vermont', 'VT'],
  ['Virginia', 'VA'], ['Washington', 'WA'], ['West Virginia', 'WV'], ['Wisconsin', 'WI'],
  ['Wyoming', 'WY']
]);

export const DistrictKeys = new Map<string, number>([
  [ 'AL', 7], ['AK', 1], ['AZ', 9], ['AR', 4],
  ['CA', 52], ['CO', 8], ['CT', 5], ['DE', 1],
  ['FL', 28], ['GA', 14], ['HI', 2], ['ID', 2],
  ['IL', 17], ['IN', 9], ['IA', 4], ['KS', 4], ['KY', 6],
  ['LA', 6], ['ME', 2], ['MD', 8], ['MA', 9], ['MI', 13],
  ['MN', 8], ['MS', 4], ['MO', 8], ['MT', 2], ['NE', 3],
  ['NV', 4], ['NH', 2], ['NJ', 12], ['NM', 3], ['NY', 26],
  ['NC', 14], ['ND', 1], ['OH', 15], ['OK', 5],
  ['OR', 6], ['PA', 17], ['RI', 2], ['SC', 7],
  ['SD', 1], ['TN', 9], ['TX', 38], ['UT', 4], ['VT', 1],
  ['VA', 11], ['WA', 10], ['WV', 2], ['WI', 8],
  ['WY', 1]
]);

export const StateToCoord = new Map<string, number[]>([
  ['AL', [32.318231,-86.902298]], ['AK', [ 64.200841,-149.493673]], ['AZ', [34.048928,-111.093731]], ['AR', [ 34.557355,-92.28634]], ['AS', [-14.270972,-170.132217]],
  ['CA', [36.778261,-119.417932]], ['CO', [39.550051,-105.782067]], ['CT', [41.603221,-73.087749]], ['DE', [38.910833,-75.52767]], ['DC', [ 38.907192,-77.036871]],
  ['FL', [27.664827,-81.515753]], ['GA', [32.165622,-82.900075]], ['GU', [13.444304,144.793731]], ['HI', [19.896766,-155.582782]], ['ID', [44.068202,-114.742041]],
  ['IL', [40.633125,-89.398528]], ['IN', [ 40.267194,-86.134902]], ['IA', [41.878003,-93.097702 ]], ['KS', [39.011902,-98.484246]], ['KY', [37.839333,-84.270018]],
  ['LA', [30.984298,-91.962333]], ['ME', [45.253783,-69.445469]], ['MD', [39.045755,-76.641271]], ['MA', [42.407211,-71.382437]], ['MI', [44.314844,-85.602364]],
  ['MN', [46.729553,-94.6859]], ['MS', [32.354668,-89.398528]], ['MO', [37.964253,-91.831833]], ['MT', [46.879682,-110.362566]], ['NE', [41.492537,-99.901813]],
  ['NV', [38.80261,-116.419389]], ['NH', [43.193852,-71.572395]], ['NJ', [40.058324,-74.405661]], ['NM', [34.51994,-105.87009]], ['NY', [40.712775,-74.005973]],
  ['NC', [ 35.759573,-79.0193]], ['ND', [47.551493,-101.002012]], ['MP', [15.0979,145.6739]], ['OH', [40.417287,-82.907123]], ['OK', [35.007752,-97.092877]],
  ['OR', [43.804133,-120.554201]], ['PA', [ 41.203322,-77.194525]], ['PR', [18.220833,-66.590149]], ['RI', [41.580095,-71.477429]], ['SC', [33.836081,-81.163724]],
  ['SD', [43.969515,-99.901813]], ['TN', [35.517491,-86.580447]], ['TX', [31.968599,-99.901813]], ['UT', [39.32098,-111.093731]], ['VT', [44.558803,-72.577841]],
  ['VA', [ 37.431573,-78.656894]], ['VI', [18.335765,-64.896335 ]], ['WA', [ 47.751074,-120.740139]], ['WV', [38.597626,-80.454903]], ['WI', [43.78444,-88.787868]],
  ['WY', [43.075968,-107.290284 ]]]);

export const EntityKeys = new Map<string, string>([['Candidate', 'CAN'], ['Candidate Committee Master', 'CCM'], ['Committee', 'COM'],
  ['Individual', 'IND'], ['Organization', 'ORG'], ['Political Action Committee', 'PAC'], ['Party Organization', 'PTY']
]);

export const ICIKeys = new Map<string, string>([['-', '-'], ['Challenger', 'C'], ['Incumbent', 'I'], ['Open Seat', 'O']]);

export const PartyKeys = new Map<string, string>([['-', '-'], ['Ace Party', 'ACE'], ['Alaskan Independence Party', 'AKI'], ['American Independence Conservative', 'AIC'],
  ['American Independence Party', 'AIP'], ['American Party', 'AMP'], ["American People's Freedom Party",  "APF"],
  ['Americans Elect', 'AE'], ["Citizens' Party",  "CIT"], ['Commandments Party', 'CMD'],
  ['Commonwealth Party of the U.S.', 'CMP'], ['Communist Party', 'COM'], ['Concerned Citizens Party Of Connecticut', 'CNC'],
  ['Conservative Party', 'CRV'], ['Constitution Party', 'CON'], ['Constitutional', 'CST'], ['Country', 'COU'],
  ['D.C. Statehood Green Party', 'DCG'], ['Democratic -Nonpartisan League', 'DNL'], ['Democratic Party', 'DEM'], ['Democratic/Conservative', 'D/C'],
  ['Democratic-Farmer-Labor', 'DFL'], ['Desert Green Party', 'DGR'], ['Federalist', 'Fed'], ['Freedom Labor Party', 'FLP'], ['Freedom Party', 'FRE'],
  ['George Wallace Party', 'GWP'], ['Grassroots', 'GRT'], ['Green Party', 'GRE'], ['Green-Rainbow', 'GR'], ['Human Rights Party', 'HRP'],
  ['Independence Party', 'IDP'], ['Independent', 'IND'], ['Independent American Party', 'IAP'], ['Independent Conservative Democratic', 'ICD'],
  ['Independent Conservative Democratic', 'IGR'], ['Independent Party', 'IP'], ['Independent Party of Delaware', 'IDE'], ['Industrial Government Party', 'IGD'],
  ['Justice Party', 'JCN'], ['Justice Party', 'JUS'], ['La Raza Unida', 'LRU'], ['Labor Party', 'LBR'], ['Less Federal Taxes', 'LFT'],
  ['Liberal Party', 'LBL'], ['Libertarian Party', 'LIB'], ['Libertarian Party', 'LBU'], ['Libertarian Party', 'MTP'], ['National Democratic Party', 'NDP'],
  ['National Democratic Party', 'NLP'], ['New Alliance', 'NA'], ['New Jersey Conservative Party', 'NJC'], ['New Progressive Party', 'NPP'], ['No Party Affiliation', 'NPA'],
  ['No Party Preference', 'NOP'], ['None', 'NNE'], ['Nonpartisan', 'N'], ['Non-Party', 'NON'], ['One Earth Party', 'OE'], ['Other', 'OTH'], ['Pacific Green', 'PG'],
  ['Party for Socialism and Liberation', 'PSL'], ['Peace And Freedom', 'PAF'], ['Peace And Freedom Party', 'PFP'], ['Peace Freedom Party', 'PFD'],
  ['People Over Politics', 'POP'], ["People's Party", "PPY"], ['Personal Choice Party', 'PCH'], ['Popular Democratic Party', 'PPD'], ['Progressive Party', 'PRO'],
  ['Prohibition Party', 'NAP'], ['Puerto Rican Independence Party', 'PRI'], ['Raza Unida Party', 'RUP'], ['Reform Party', 'REF'], ['Republican Party', 'REP'],
  ['Resource Party', 'RES'], ['Right To Life', 'RTL'], ['Socialist Equality Party', 'SEP'], ['Socialist Labor Party', 'SLP'], ['Socialist Party', 'SUS'],
  ['Socialist Party U.S.A.', 'SOC'], ['Socialist Workers Party', 'SWP'], ['Taxpayers', 'TX'], ['Taxpayers Without Representation', 'TWR'],
  ['Tea Party', 'TEA'], ['Theo-Democratic', 'THD'], ['U.S. Labor Party', 'LAB'], ["U.S. People's Party", "USP"], ['U.S. Taxpayers Party', 'UST'],
  ['Unaffiliated', 'UN'], ['United Citizen', 'UC'], ['United Party', 'UNI'], ['Unknown', 'UNK'], ['Veterans Party', 'VET'], ['We the People', 'WTP'],
  ['Write-In', 'W']
]);