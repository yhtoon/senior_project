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

import {analyticsIndividualItem} from 'types';

interface AnalyticsIndividualTableProps {
  CAND_ID: string,
}

const AnalyticsIndividualTable: React.FC<AnalyticsIndividualTableProps> = ({
  CAND_ID,
}) => {
  const [tableItems, setTableItems] = useState<analyticsIndividualItem[]>();
  const [curryItems, setCurryItems] = useState<analyticsIndividualItem[]>();
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [curryPage, setCurryPage] = useState<number>(1);
  
  // gets items to display from dynamoDB
  useEffect(() => {
    fetch(`/getAnalyticsIndividual/${CAND_ID}`).then(
      response => response.json()
    ).then(
      data => { 
        setPageTotal(Math.floor(data.Item.individualTable.length / 10) + ((data.Item.individualTable.length % 10) ? 1 : 0));
        setTableItems(data.Item.individualTable);
      }
    )
  }, [CAND_ID]);
  
  // pagination: updates the current 10 of all items to display
  useEffect(() => {
    setCurryItems(tableItems?.slice((curryPage - 1) * 10, (curryPage - 1) * 10 + 10));
  }, [curryPage, tableItems]);

  const resourceName = {
    singular: 'Top individual donor',
    plural: 'Top individual donors',
  };

  // sets the current table items
  const rowMarkup = curryItems && curryItems.map(
    (
      {
        CITY,
        INDIVIDUAL,
        OCCUPATION,
        STATE,
        TOTAL,
        ZIP_CODE,
      }, index
    ) => (
      <IndexTable.Row
        id={CAND_ID}
        key={CAND_ID}
        position={index}
      >
        <IndexTable.Cell>{index + 1 + (curryPage * 10 - 10)}</IndexTable.Cell>
        <IndexTable.Cell>{'$' + TOTAL}</IndexTable.Cell>

        {/* TODO: Link to analytics page for this candidate */}
        <IndexTable.Cell>
          <TextStyle variation="strong">{INDIVIDUAL}</TextStyle>
        </IndexTable.Cell>

        <IndexTable.Cell>{OCCUPATION}</IndexTable.Cell>
        <IndexTable.Cell>{CITY}</IndexTable.Cell>
        <IndexTable.Cell>{STATE}</IndexTable.Cell>
        <IndexTable.Cell>{ZIP_CODE}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
  
  // if table is empty
  const emptyStateMarkup = (
    <EmptySearchResult
      title={'No individual found'}
      description={'No individual donated :('}
    />
  );

  return (
    <Box background="surface-hovered-dark" borderRadius="2" paddingTop="3" shadow="card">
      <Card>
        <Box padding="3">
          <Stack>
            <Stack.Item fill>
              <Heading>
                <Text variant="headingXl" as="h1" truncate>
                    Top individual donors ({tableItems ? tableItems.length : 0})
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
            {title: 'Occupation'},
            {title: 'City'},
            {title: 'State'},
            {title: 'ZIP code'},
          ]}
          loading={!tableItems}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Box>
  );
}

export default AnalyticsIndividualTable;