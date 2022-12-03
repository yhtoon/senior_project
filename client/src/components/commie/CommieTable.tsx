import React, { useEffect, useState } from 'react';
import {
  IndexTable,
  Box,
  Card,
  EmptySearchResult,
  Heading,
  Pagination,
  Stack,
  Text,
  TextStyle,
} from '@shopify/polaris';

import {commieInfoItem} from 'types';

interface CommieTableProps {
  COMM_ID: string,
}

const CommieTable: React.FC<CommieTableProps> = ({
  COMM_ID,
}) => {
  const [tableItems, setTableItems] = useState<commieInfoItem[]>();
  const [curryItems, setCurryItems] = useState<commieInfoItem[]>();
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [curryPage, setCurryPage] = useState<number>(1);
  
  // gets items to display from dynamoDB
  useEffect(() => {
    setCurryPage(1);
    fetch(`/getCommieInfo/${COMM_ID}`).then(
      response => response.json()
    ).then(
      data => { 
        setPageTotal(Math.floor(data.Item.committeeTable.length / 10) + ((data.Item.committeeTable.length % 10) ? 1 : 0));
        setTableItems(data.Item.committeeTable);
      }
    )
  }, [COMM_ID]);
  
  // pagination: updates the current 10 of all items to display
  useEffect(() => {
    setCurryItems(tableItems?.slice((curryPage - 1) * 10, (curryPage - 1) * 10 + 10));
  }, [curryPage, tableItems]);

  const resourceName = {
    singular: 'candidate',
    plural: 'candidates',
  };

  // sets the current table items
  const rowMarkup = curryItems && curryItems.map(
    (
      {
        CAND_ID,
        CAND_NAME,
        CAND_OFFICE,
        CAND_OFFICE_DISTRICT,
        CAND_OFFICE_ST,
        CAND_PTY_AFFILIATION,
        DONATION_AMT
      }, index
    ) => (
      <IndexTable.Row
        id={CAND_ID}
        key={CAND_ID}
        position={index}
      >
        <IndexTable.Cell>{index + 1 + (curryPage * 10 - 10)}</IndexTable.Cell>
        <IndexTable.Cell>{'$' + DONATION_AMT}</IndexTable.Cell>

        {/* TODO: Link to analytics page for this candidate */}
        <IndexTable.Cell>
          <TextStyle variation="strong">{CAND_NAME}</TextStyle>
        </IndexTable.Cell>

        <IndexTable.Cell>{CAND_PTY_AFFILIATION}</IndexTable.Cell>
        <IndexTable.Cell>{CAND_OFFICE}</IndexTable.Cell>
        <IndexTable.Cell>{CAND_OFFICE_ST}</IndexTable.Cell>
        <IndexTable.Cell>{CAND_OFFICE_DISTRICT}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
  
  // if table is empty
  const emptyStateMarkup = (
    <EmptySearchResult
      title={'No candidate found'}
      description={'Committee did not donate within the select timeframe.'}
    />
  );

  return (
    <Box background="surface-hovered-dark" borderRadius="2" padding="3" shadow="card">
      <Card>
        <Box padding="3">
          <Stack>
            <Stack.Item fill>
              <Heading>
                <Text variant="headingXl" as="h1" truncate>
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
            {title: 'Rank'},
            {title: 'Donations'},
            {title: 'Name'},
            {title: 'Party'},
            {title: 'Office'},
            {title: 'State'},
            {title: 'District'},
          ]}
          loading={!tableItems}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Box>
  );
}

export default CommieTable;