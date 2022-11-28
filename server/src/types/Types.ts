// attribute types
export type district = string;
export type id = string;
export type green = number;
export type name = string;
export type office = string;
export type party = string;
export type state = string;

export type ici = string; 
export type year = string;

// table schemas
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
export interface CommieInfoResponse {
  COMM_ID: id,
  committeeTable: commieInfoItem[],
}

export interface CompetitorResponse {
  COMP_ID: id,
  committeeTable: competitorItem[],
}

// object attributes
export interface commieInfoItem {
  CAND_PTY_AFFILIATION: party,
  CAND_OFFICE_ST: state,
  CAND_NAME: name,
  CAND_OFFICE: office,
  CAND_OFFICE_DISTRICT: district,
  DONATION_AMT: green,
  CAND_PCC: id,
  CAND_ID: id,
}

// DynamoDB API responses
export interface CommieInfoResponse {
  COMM_ID: id,
  committeeTable: commieInfoItem[],
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
}

export interface exploreResp {
  CID: id
  info: {
      [key: string]: CAND_INFO
  };
}

export interface doraResp {
  info: {
    [key: string]: CAND_INFO
};
}