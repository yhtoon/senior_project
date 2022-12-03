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

import {analyticsStateItem} from 'types';

interface AnalyticsStateTableProps {
  CAND_ID: string,
}

const AnalyticsStateTable: React.FC<AnalyticsStateTableProps> = ({
  CAND_ID,
}) => {
  const [tableItems, setTableItems] = useState<analyticsStateItem[]>();
  const [curryItems, setCurryItems] = useState<analyticsStateItem[]>();
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [curryPage, setCurryPage] = useState<number>(1);
  
  // gets items to display from dynamoDB
  useEffect(() => {
    setCurryPage(1);
    fetch(`/getAnalyticsState/${CAND_ID}`).then(
      response => response.json()
    ).then(
      data => { 
        setPageTotal(Math.floor(data.Item.stateTable.length / 10) + ((data.Item.stateTable.length % 10) ? 1 : 0));
        setTableItems(data.Item.stateTable);
      }
    )
  }, [CAND_ID]);
  
  // pagination: updates the current 10 of all items to display
  useEffect(() => {
    setCurryItems(tableItems?.slice((curryPage - 1) * 10, (curryPage - 1) * 10 + 10));
  }, [curryPage, tableItems]);

  const resourceName = {
    singular: 'Top State donor',
    plural: 'Top State donors',
  };

  // sets the current table items
  const rowMarkup = curryItems && curryItems.map(
    (
      {
        COMMITTEE,
        INDIVIDUAL,
        STATE,
        TOTAL,
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
          <TextStyle variation="strong">{STATE}</TextStyle>
        </IndexTable.Cell>

        <IndexTable.Cell>{'$' + INDIVIDUAL}</IndexTable.Cell>
        <IndexTable.Cell>{'$' + COMMITTEE}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
  
  // if table is empty
  const emptyStateMarkup = (
    <EmptySearchResult
      title={'No state found'}
      description={'Nobody donated :('}
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
                  Top state donors ({tableItems ? tableItems.length : 0})
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
            {title: 'Total donations'},
            {title: 'State'},
            {title: 'Individual donations'},
            {title: 'Committee donations'},
          ]}
          loading={!tableItems}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Box>
  );
}

export default AnalyticsStateTable;