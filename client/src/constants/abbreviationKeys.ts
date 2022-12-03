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
  ['Wyoming', 'WT']
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
  ['WT', 1]
]);

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