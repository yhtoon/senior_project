// attribute types
export type city = string;
export type district = string;
export type entity = string;
export type id = string;
export type green = number;
export type name = string;
export type occupation = string;
export type office = string;
export type party = string;
export type state = string;
export type heatmap = number[];
export type zipcode = string;

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

export interface CompetitorResponse {
  COMP_ID: id,
  committeeTable: competitorItem[],
}