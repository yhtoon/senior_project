import React, { useEffect, useState } from 'react';
// import {
//   testResponse,
// } from 'types';
import {
  IndexTable,
  Button, 
  Box,
  Card,
  Heading,
  Pagination,
  RadioButton,
  Stack,
  Text,
  TextStyle,
} from '@shopify/polaris';

import {commieInfoItem} from 'types';

interface CommieTableProps {
  COMM_ID: string
}

const CommieTable: React.FC<CommieTableProps> = ({
  COMM_ID,
}) => {
  const [tableItems, setTableItems] = useState<commieInfoItem[]>();
  const [pageTotal, setPageTotal] = useState<number>(); // * pagination not done
  const [curryPage, setCurryPage] = useState<number>(1);
  
  useEffect(() => {
    fetch(`/getCommieInfo/${COMM_ID}`).then(
      response => response.json()
    ).then(
      data => { 
        setTableItems(data.Item.committeeTable);
        setPageTotal(tableItems ? tableItems.length / 10 + tableItems.length % 3 ? 1 : 0 : 0); // *
      }
    )
  }, [COMM_ID]);

  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };
  
  const rowMarkup = tableItems && tableItems.map(
    ({
        CAND_ID,
        CAND_NAME,
        CAND_OFFICE,
        CAND_OFFICE_DISTRICT,
        CAND_OFFICE_ST,
        CAND_PTY_AFFILIATION,
        DONATION_AMT
      }, index) => (
      <IndexTable.Row
        id={CAND_ID}
        key={CAND_ID}
        position={index}
      >
        <IndexTable.Cell>{index + 1}</IndexTable.Cell>
        <IndexTable.Cell>{DONATION_AMT}</IndexTable.Cell>
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

  return (
    <Box background="surface-hovered-dark" borderRadius="2" padding="3" shadow="card">
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
              <Pagination //*
                label="1"
                hasPrevious
                onPrevious={() => {
                  setCurryPage(curryPage - 1)
                  console.log('Previous');
                }}
                hasNext
                onNext={() => {
                  setCurryPage(curryPage + 1)
                  console.log('Next');
                }}
              />
            </Stack.Item>
          </Stack>
        </Box>
        <IndexTable
          resourceName={resourceName}
          itemCount={tableItems ? tableItems.length : 0}
          selectable={false}
          headings={[
            {title: 'Rank'},
            {title: 'Donation'},
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