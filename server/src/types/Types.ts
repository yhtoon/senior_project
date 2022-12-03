// attribute types
export type city = string;
export type district = string;
export type entity = string;
export type ici = string;
export type id = string;
export type green = number;
export type name = string;
export type occupation = string;
export type office = string;
export type party = string;
export type state = string;
export type heatmap = number[];
export type year = string;
export type zipcode = string;
export type design = string;
export type org = string;
export type cmttp = string;

// table schemas
export interface analyticsCommieItem {
  CMTE_NM: name,
  CMTID_DONOR: id,
  ENTITY_TP: entity,
  TOTAL: green,
}

export interface analyticsIndividualItem {
  CITY: city,
  INDIVIDUAL: name,
  OCCUPATION: occupation,
  STATE: state,
  TOTAL: green,
  ZIP_CODE: zipcode,
}

export interface analyticsStateItem {
  COMMITTEE: green,
  INDIVIDUAL: green,
  STATE: state,
  TOTAL: green,
}

export interface commieInfoItem {
  CAND_ID: id,
  CAND_NAME: name,
  CAND_OFFICE: office,
  CAND_OFFICE_DISTRICT: district,
  CAND_OFFICE_ST: state,
  CAND_PCC: id,
  CAND_PTY_AFFILIATION: party,
  DONATION_AMT: green,
}

export interface competitorItem {
  CAND_ID: id,
  CAND_NAME: name,
  CAND_PTY_AFFILIATION: party,
  COMMIE: green,
  INDIV: green,
}

export interface exploreItem {
  CAND_ELECTION_YR: year,
  CAND_ICI: ici,
  CAND_ID: id,
  CAND_NAME: name,
  CAND_OFFICE: office,
  CAND_OFFICE_DISTRICT: district,
  CAND_OFFICE_ST: state,
  CAND_PCC: id,
}

// DynamoDB API responses
export interface AnalyticsCommieResponse {
  CAND_ID: id,
  committeeTable: analyticsCommieItem[],
  heatmap: heatmap[],
}

export interface AnalyticsIndividualResponse {
  CAND_ID: id,
  heatmap: heatmap[],
  individualTable: analyticsIndividualItem[],
}

export interface AnalyticsStateResponse {
  CAND_ID: id,
  stateTable: analyticsStateItem[],
}

export interface CommieInfoResponse {
  COMM_ID: id,
  committeeTable: commieInfoItem[],
}

export interface CommieInfoModal {
  COMM_ID: id,
  CMTE_NM: name, 
  TRES_NM: name, 
  CMTE_CITY: city, 
  CMTE_ST: state, 
  CMTE_DSGN: design, 
  CMTE_TP: cmttp, 
  CMTE_PTY_AFFILIATION: party, 
  ORG_TP: org,
  CONNECTED_ORG_NM: name, 
}

export interface CAND_INFO {
  CAND_ID: id,
  CAND_NAME: name,
  CAND_ICI: ici,
  CAND_OFFICE_ST: state,
  CAND_PCC: id, 
  CAND_OFFICE: office,
  CAND_OFFICE_DISTRICT: district, 
  CAND_ELECTION_YR: year, 
  CAND_PTY_AFFILIATION: party,
}

export interface doraResp {
  info: {
    [key: string]: CAND_INFO
};
}

export interface CompetitorResponse {
  COMP_ID: id,
  committeeTable: competitorItem[],
}

export interface ExploreResponse {
  CID: id,
  candidate: exploreItem[],
}
