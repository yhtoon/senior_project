/*
export const officeMap: Object = {'H': 'House', 'P': 'President', 'S': 'Senate'};

export const StateMap: Object = { 'AL':'Alabama', 'AK':'Alaska', 'ARIZ':'Arizona', 'AR':'Arkansas', 'AS':'American Samoa',
        'CA':'California', 'CO':'Colorado', 'CT':'Connecticut', 'DE':'Delaware', 'DC':'District of Columbia',
        'FL':'Florida', 'GA':'Georgia', 'GU':'Guam', 'HI':'Hawaii', 'ID':'Idaho',
        'IL':'Illinois', 'IN':'Indiana', 'IA':'Iowa', 'KS':'Kansas', 'KY':'Kentucky',
        'LA':'Louisiana', 'ME':'Maine', 'MD':'Maryland', 'MA':'Massachusetts', 'MI':'Michigan',
        'MN':'Minnesota', 'MS':'Mississippi', 'MO':'Missouri', 'MT':'Montana', 'NE':'Nebraska',
        'NV':'Nevada', 'NH':'New Hampshire', 'NJ':'New Jersey', 'NM':'New Mexico', 'NY':'New York',
        'NC':'North Carolina', 'ND':'North Dakota', 'MP':'Northern Mariana Islands', 'OH':'Ohio', 'OK':'Oklahoma',
        'OR':'Oregon', 'PA':'Pennsylvania', 'PR':'Puerto Rico', 'RI':'Rhode Island', 'SC':'South Carolina',
        'SD':'South Dakota', 'TN':'Tennessee', 'TX':'Texas', 'UT':'Utah', 'VT':'Vermont',
        'VA':'Virginia', 'VI':'Virgin Islands', 'WA':'Washington', 'WV':'West Virginia', 'WI':'Wisconsin',
        'WT':'Wyoming' };

export const EntityMap: Object = {'CAN': 'Candidate', 'CCM': 'Candidate Committee Master', 'COM': 'Committee', 
        'IND': 'Individual', 'ORG': 'Organization', 'PAC': 'Political Action Committee', 'PTY': 'Party Organization'};

export const CandIciMap: Object = {'C': 'Challenger', 'I': 'Incumbent', 'O': 'Open Seat'};

export const PartyMap: Object = {'ACE': 'Ace Party', 'AKI': 'Alaskan Independence Party', 'AIC': 'American Independence Conservative', 
        'AIP': 'American Independence Party', 'AMP': 'American Party', "APF": "American People's Freedom Party", 
        'AE': 'Americans Elect', "CIT": "Citizens' Party", 'CMD': 'Commandments Party', 
        'CMP': 'Commonwealth Party of the U.S.', 'COM': 'Communist Party', 'CNC': 'Concerned Citizens Party Of Connecticut', 
        'CRV': 'Conservative Party', 'CON': 'Constitution Party', 'CST': 'Constitutional', 'COU':'Country',
        'DCG': 'D.C. Statehood Green Party', 'DNL': 'Democratic -Nonpartisan League', 'DEM': 'Democratic Party', 'D/C':'Democratic/Conservative',
        'DFL': 'Democratic-Farmer-Labor', 'DGR': 'Desert Green Party', 'FED':'Federalist', 'FLP':'Freedom Labor Party','FRE':'Freedom Party',
        'GWP':'George Wallace Party', 'GRT':'Grassroots', 'GRE':'Green Party','GR':'Green-Rainbow','HRP':'Human Rights Party',
        'IDP':'Independence Party','IND':'Independent','IAP':'Independent American Party','ICD':'Independent Conservative Democratic',
        'IGR':'Independent Conservative Democratic','IP':'Independent Party','IDE':'Independent Party of Delaware','IGD':'Industrial Government Party',
        'JCN':'Jewish/Christian National','JUS':'Justice Party','LRU':'La Raza Unida','LBR':'Labor Party','LFT':'Less Federal Taxes',
        'LBL':'Liberal Party','LIB':'Libertarian Party','LBU':'Liberty Union Party','MTP':'Mountain Party','NDP':'National Democratic Party',
        'NLP':'Natural Law Party','NA':'New Alliance','NJC':'New Jersey Conservative Party','NPP':'New Progressive Party','NPA':'No Party Affiliation',
        'NOP':'No Party Preference','NNE':'None','N':'Nonpartisan','NON':'Non-Party','OE':'One Earth Party','OTH':'Other','PG':'Pacific Green',
        'PSL':'Party for Socialism and Liberation','PAF':'Peace And Freedom','PFP':'Peace And Freedom Party','PFD':'Peace Freedom Party',
        'POP':'People Over Politics','PPY':"People's Party", 'PCH':'Personal Choice Party','PPD':'Popular Democratic Party','PRO':'Progressive Party',
        'NAP':'Prohibition Party','PRI':'Puerto Rican Independence Party','RUP':'Raza Unida Party','REF':'Reform Party','REP':'Republican Party',
        'RES':'Resource Party','RTL':'Right To Life','SEP':'Socialist Equality Party','SLP':'Socialist Labor Party','SUS':'Socialist Party',
        'SOC':'Socialist Party U.S.A.','SWP':'Socialist Workers Party','TX':'Taxpayers','TWR':'Taxpayers Without Representation',
        'TEA':'Tea Party','THD':'Theo-Democratic','LAB':'U.S. Labor Party','USP':"U.S. People's Party",'UST':'U.S. Taxpayers Party',
        'UN':'Unaffiliated','UC':'United Citizen','UNI':'United Party','UNK':'Unknown','VET':'Veterans Party','WTP':'We the People',
        'W':'Write-In' };
*/
export const OfficeMap = new Map<string, string>([['H', 'House'], ['P', 'President'], ['S', 'Senate']]);

export const StateMap = new Map<string, string>([[ 'AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'], ['AS', 'American Samoa'],
        ['CA', 'California'], ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'], ['DC', 'District of Columbia'],
        ['FL', 'Florida'], ['GA', 'Georgia'], ['GU', 'Guam'], ['HI', 'Hawaii'], ['ID', 'Idaho'],
        ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'],
        ['LA', 'Louisiana'], ['ME', 'Maine'], ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'],
        ['MN', 'Minnesota'], ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'],
        ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'], ['NY', 'New York'],
        ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['MP', 'Northern Mariana Islands'], ['OH', 'Ohio'], ['OK', 'Oklahoma'],
        ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['PR', 'Puerto Rico'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'],
        ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'],
        ['VA', 'Virginia'], ['VI', 'Virgin Islands'], ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'],
        ['WY', 'Wyoming']]);

export const EntityMap = new Map<string, string>([['CAN', 'Candidate'], ['CCM', 'Candidate Committee Master'], ['COM', 'Committee'],
        ['IND', 'Individual'], ['ORG', 'Organization'], ['PAC', 'Political Action Committee'], ['PTY', 'Party Organization']]);

export const CandIciMap = new Map<string, string>([['C', 'Challenger'], ['I', 'Incumbent'], ['O', 'Open Seat']]);

export const PartyMap = new Map<string, string>([['ACE', 'Ace Party'], ['AKI', 'Alaskan Independence Party'], ['AIC', 'American Independence Conservative'],
        ['AIP', 'American Independence Party'], ['AMP', 'American Party'], ["APF",  "American People's Freedom Party"],
        ['AE', 'Americans Elect'], ["CIT",  "Citizens' Party"], ['CMD', 'Commandments Party'],
        ['CMP', 'Commonwealth Party of the U.S.'], ['COM', 'Communist Party'], ['CNC', 'Concerned Citizens Party Of Connecticut'],
        ['CRV', 'Conservative Party'], ['CON', 'Constitution Party'], ['CST', 'Constitutional'], ['COU', 'Country'],
        ['DCG', 'D.C. Statehood Green Party'], ['DNL', 'Democratic -Nonpartisan League'], ['DEM', 'Democratic Party'], ['D/C', 'Democratic/Conservative'],
        ['DFL', 'Democratic-Farmer-Labor'], ['DGR', 'Desert Green Party'], ['FED', 'Federalist'], ['FLP', 'Freedom Labor Party'], ['FRE', 'Freedom Party'],
        ['GWP', 'George Wallace Party'], ['GRT', 'Grassroots'], ['GRE', 'Green Party'], ['GR', 'Green-Rainbow'], ['HRP', 'Human Rights Party'],
        ['IDP', 'Independence Party'], ['IND', 'Independent'], ['IAP', 'Independent American Party'], ['ICD', 'Independent Conservative Democratic'],
        ['IGR', 'Independent Conservative Democratic'], ['IP', 'Independent Party'], ['IDE', 'Independent Party of Delaware'], ['IGD', 'Industrial Government Party'],
        ['JCN', 'Jewish/Christian National'], ['JUS', 'Justice Party'], ['LRU', 'La Raza Unida'], ['LBR', 'Labor Party'], ['LFT', 'Less Federal Taxes'],
        ['LBL', 'Liberal Party'], ['LIB', 'Libertarian Party'], ['LBU', 'Liberty Union Party'], ['MTP', 'Mountain Party'], ['NDP', 'National Democratic Party'],
        ['NLP', 'Natural Law Party'], ['NA', 'New Alliance'], ['NJC', 'New Jersey Conservative Party'], ['NPP', 'New Progressive Party'], ['NPA', 'No Party Affiliation'],
        ['NOP', 'No Party Preference'], ['NNE', 'None'], ['N', 'Nonpartisan'], ['NON', 'Non-Party'], ['OE', 'One Earth Party'], ['OTH', 'Other'], ['PG', 'Pacific Green'],
        ['PSL', 'Party for Socialism and Liberation'], ['PAF', 'Peace And Freedom'], ['PFP', 'Peace And Freedom Party'], ['PFD', 'Peace Freedom Party'],
        ['POP', 'People Over Politics'], ['PPY', "People's Party"], ['PCH', 'Personal Choice Party'], ['PPD', 'Popular Democratic Party'], ['PRO', 'Progressive Party'],
        ['NAP', 'Prohibition Party'], ['PRI', 'Puerto Rican Independence Party'], ['RUP', 'Raza Unida Party'], ['REF', 'Reform Party'], ['REP', 'Republican Party'],
        ['RES', 'Resource Party'], ['RTL', 'Right To Life'], ['SEP', 'Socialist Equality Party'], ['SLP', 'Socialist Labor Party'], ['SUS', 'Socialist Party'],
        ['SOC', 'Socialist Party U.S.A.'], ['SWP', 'Socialist Workers Party'], ['TX', 'Taxpayers'], ['TWR', 'Taxpayers Without Representation'],
        ['TEA', 'Tea Party'], ['THD', 'Theo-Democratic'], ['LAB', 'U.S. Labor Party'], ['USP', "U.S. People's Party"], ['UST', 'U.S. Taxpayers Party'],
        ['UN', 'Unaffiliated'], ['UC', 'United Citizen'], ['UNI', 'United Party'], ['UNK', 'Unknown'], ['VET', 'Veterans Party'], ['WTP', 'We the People'],
        ['W', 'Write-In']]);