// attribute types
export type district = number;
export type id = string;
export type green = number;
export type name = string;
export type office = string;
export type party = string;
export type state = string;

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
