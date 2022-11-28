import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Card,
  EmptySearchResult,
  Heading,
  IndexTable,
  Pagination,
  Select,
  Stack,
  Text,
  TextStyle,
} from '@shopify/polaris';

import {competitorItem} from 'types';

interface CompetitorTableProps {
  COMP_ID: string,
  CAND_ID: string,
  getCompetitorID: Function,
}

const CompetitorTable: React.FC<CompetitorTableProps> = ({
  COMP_ID,
  CAND_ID,
  getCompetitorID,
}) => {
  const [tableItems, setTableItems] = useState<competitorItem[]>();
  const [curryItems, setCurryItems] = useState<competitorItem[]>();
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [curryPage, setCurryPage] = useState<number>(1);
  const [competitorId, setCompetitorId] = useState<string>('');
  
  // gets items to display from dynamoDB
  useEffect(() => {
    fetch(`/getCompetitor/${COMP_ID}`).then(
      response => response.json()
    ).then(
      data => { 
        setPageTotal(Math.floor(data.Item.competitors.length / 10) + ((data.Item.competitors.length % 10) ? 1 : 0));
        setTableItems(data.Item.competitors);
      }
    );
  }, [COMP_ID]);

  // pagination: updates the current 10 of all items to display
  useEffect(() => {
    setCurryItems(tableItems?.slice((curryPage - 1) * 10, (curryPage - 1) * 10 + 10));
  }, [curryPage, tableItems]);

  // send competitorId to parent
  useEffect(() => {
    getCompetitorID(competitorId);
  }, [competitorId]);
  
  const handleSelectChange = useCallback((value: string) => setCompetitorId(value), []);

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
        CAND_PTY_AFFILIATION,
        COMMIE,
        INDIV,
      }, index
    ) => (
      <IndexTable.Row
        id={CAND_ID}
        key={CAND_ID}
        position={index}
      >
        <IndexTable.Cell>{index + 1 + (curryPage * 10 - 10)}</IndexTable.Cell>
        <IndexTable.Cell>{'$' + (COMMIE + INDIV)}</IndexTable.Cell>

        {/* TODO: Link to analytics page for this candidate */}
        <IndexTable.Cell>
          <TextStyle variation="strong">{CAND_NAME}</TextStyle>
        </IndexTable.Cell>

        <IndexTable.Cell>{CAND_PTY_AFFILIATION}</IndexTable.Cell>
        <IndexTable.Cell>{'$' + INDIV}</IndexTable.Cell>
        <IndexTable.Cell>{'$' + COMMIE}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );
  
  // if table is empty
  const emptyStateMarkup = (
    <EmptySearchResult
      title={'No candidates found'}
      description={'This should be possible lmao'}
    />
  );

  // populate select list
  const selectOptions: { label: string, value: string }[] = tableItems && tableItems.length > 1 ? tableItems.filter(
    item => item.CAND_ID !== CAND_ID
  ).map(
    item => {
      return { label: item.CAND_NAME, value: item.CAND_ID };
    }
  ) : [];
  
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
            <Select
                label="Compare w/"
                labelInline
                disabled={tableItems ? tableItems.length < 1 : true}
                options={selectOptions}
                onChange={handleSelectChange}
                value={competitorId}
                placeholder={'Candidate(s)'}
              />
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
            {title: 'Name'},
            {title: 'Party'},
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

export default CompetitorTable;