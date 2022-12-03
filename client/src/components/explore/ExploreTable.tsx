import React, { useEffect, useState } from 'react';
import {
  IndexTable,
  Box,
  Button,
  Card,
  EmptySearchResult,
  Heading,
  Pagination,
  Stack,
  Text,
} from '@shopify/polaris';

import {exploreItem} from 'types';
import Filter from '../common/Filter';
import { ICIKeys } from '../../constants/abbreviationKeys';
import {
  CandIciMap,
  OfficeMap,
  StateMap,
} from '../../constants/hashes';

interface ExploreTableProps {
  CID: string,
  getCandId: Function,
}

const ExploreTable: React.FC<ExploreTableProps> = ({
  CID,
  getCandId,
}) => {
  const [tableItems, setTableItems] = useState<exploreItem[]>();
  const [curryItems, setCurryItems] = useState<exploreItem[]>();
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [curryPage, setCurryPage] = useState<number>(1);
  // const [office, setParty] = useState<string>('-');
  const [yoe, setYOE] = useState<string>('-');
  const [ici, setICI] = useState<string>('-');

  let YoeMap = new Map<string, string>();

  YoeMap.set('-', '-');
  if (tableItems) {
    tableItems.forEach( item => YoeMap.set(item.CAND_ELECTION_YR, item.CAND_ELECTION_YR));
  }
  
  // gets items to display from dynamoDB
  useEffect(() => {
    setCurryPage(1);
    fetch(`/getExplore/${CID}`).then(
      response => response.json()
    ).then(
      data => { 
        setPageTotal(Math.floor(data.Item.candidate.length / 10) + ((data.Item.candidate.length % 10) ? 1 : 0));
        setTableItems(data.Item.candidate);
      }
    )
  }, [CID]);
  
  // pagination: updates the current 10 of all items to display
  useEffect(() => {
    setCurryItems(tableItems?.filter(item => (yoe !== '-' ? item.CAND_ELECTION_YR === yoe : true) && (ici !== '-' ? item.CAND_ICI === ici : true)).slice((curryPage - 1) * 10, (curryPage - 1) * 10 + 10));
  }, [yoe, ici, curryPage, tableItems]);

  const resourceName = {
    singular: 'candidate',
    plural: 'candidates',
  };

  // sets the current table items
  const rowMarkup = curryItems && curryItems.map(
    (
      {
        CAND_ELECTION_YR,
        CAND_ICI,
        CAND_ID,
        CAND_NAME,
        CAND_OFFICE,
        CAND_OFFICE_DISTRICT,
        CAND_OFFICE_ST,
        CAND_PCC,
      }, index
    ) => (
      <IndexTable.Row
        id={CAND_ID}
        key={CAND_ID}
        position={index}
      >
        <IndexTable.Cell>
          <Button
            plain
            removeUnderline
            onClick={() => getCandId(CAND_ID)}
          >
            {CAND_NAME}
          </Button>
        </IndexTable.Cell>

        <IndexTable.Cell>{OfficeMap.get(CAND_OFFICE)}</IndexTable.Cell>
        <IndexTable.Cell>{StateMap.get(CAND_OFFICE_ST)}</IndexTable.Cell>
        <IndexTable.Cell>{CAND_OFFICE_DISTRICT}</IndexTable.Cell>
        <IndexTable.Cell>{CAND_ELECTION_YR}</IndexTable.Cell>
        <IndexTable.Cell>{CandIciMap.get(CAND_ICI)}</IndexTable.Cell>
        <IndexTable.Cell>{CAND_PCC}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
  
  // if table is empty
  const emptyStateMarkup = (
    <EmptySearchResult
      title={'No candidates found'}
      description={'How is this possible lmao change your filters or something.. jk api isnt working'}
    />
  );

  return (
    <Box background="surface-hovered-dark" borderRadius="2" padding="3" shadow="card">
      {/* <Filter
        name={'Party affiliation'}
        content={PartyKeys}
        getFunction={setParty}
      /> */}
      <Box paddingBottom='3'>
        <Filter
          name={'Year of election'}
          content={YoeMap}
          getFunction={setYOE}
        />
        <Filter
          name={'Challenger status'}
          content={ICIKeys}
          getFunction={setICI}
        />
      </Box>
      <Card>
        <Box padding="3">
          <Stack>
            <Stack.Item fill>
              <Heading>
                <Text variant="heading2xl" as="h1" truncate>
                  Candidates ({tableItems ? tableItems.length : 0})
                </Text>
              </Heading>
            </Stack.Item>
            <Stack.Item>
              <Pagination
                label={curryPage}
                hasPrevious={curryPage > 1}
                onPrevious={() => {
                  setCurryPage(curryPage - 1);
                }}
                hasNext={curryPage < pageTotal}
                onNext={() => {
                  setCurryPage(curryPage + 1);
                }}
              />
            </Stack.Item>
          </Stack>
        </Box>
        <IndexTable
          resourceName={resourceName}
          itemCount={tableItems ? tableItems.length : 0}
          selectable={false}
          emptyState={emptyStateMarkup}
          headings={[
            {title: 'Name'},
            {title: 'Office'},
            {title: 'State'},
            {title: 'District'},
            {title: 'Year of election'},
            {title: 'Incumbent challenger status'},
            {title: 'Principal campaign committee'},
          ]}
          loading={!tableItems}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Box>
  );
}

export default ExploreTable;