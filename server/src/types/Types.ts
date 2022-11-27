// attribute types
export type district = string;
export type id = string;
export type green = number;
export type name = string;
export type office = string;
export type party = string;
export type state = string;

// object attributes
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

// DynamoDB API responses
export interface CommieInfoResponse {
  COMM_ID: id,
  committeeTable: commieInfoItem[],
}
