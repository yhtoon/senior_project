import React, { useEffect, useState } from 'react';
import {
  testResponse,
} from 'types';
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

const WTable: React.FC = () => {
  const [stuff, setStuff] = useState<testResponse>();

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setStuff(data);
      }
    )
  }, []);

  const customers = [
      {
        id: 'S2CA00000',
        name: 'First Middle Lastname',
        received: '$9,999,999,999.99',
        party_affiliation: 'Independent',
        committee: 'Committee Name 1',
      },
      {
        id: 'S2CA00011',
        name: 'Firm Mango',
        received: '$9,999,999.99',
        party_affiliation: 'Democrat',
        committee: 'Committee Name 2',
      },
      {
        id: 'S2CA00000',
        name: 'First Middle Lastname',
        received: '$9,999,999,999.99',
        party_affiliation: 'Independent',
        committee: 'Committee Name 1',
      },
      {
        id: 'S2CA00011',
        name: 'Firm Mango',
        received: '$9,999,999.99',
        party_affiliation: 'Democrat',
        committee: 'Committee Name 2',
      },
      {
        id: 'S2CA00000',
        name: 'First Middle Lastname',
        received: '$9,999,999,999.99',
        party_affiliation: 'Independent',
        committee: 'Committee Name 1',
      },
      {
        id: 'S2CA00011',
        name: 'Firm Mango',
        received: '$9,999,999.99',
        party_affiliation: 'Democrat',
        committee: 'Committee Name 2',
      },
      {
        id: 'S2CA00000',
        name: 'First Middle Lastname',
        received: '$9,999,999,999.99',
        party_affiliation: 'Independent',
        committee: 'Committee Name 1',
      },
      {
        id: 'S2CA00011',
        name: 'Firm Mango',
        received: '$9,999,999.99',
        party_affiliation: 'Democrat',
        committee: 'Committee Name 2',
      },
      {
        id: 'S2CA00000',
        name: 'First Middle Lastname',
        received: '$9,999,999,999.99',
        party_affiliation: 'Independent',
        committee: 'Committee Name 1',
      },
      {
        id: 'S2CA00011',
        name: 'Firm Mango',
        received: '$9,999,999.99',
        party_affiliation: 'Democrat',
        committee: 'Committee Name 2',
      },
    ];

    const resourceName = {
      singular: 'customer',
      plural: 'customers',
    };
  
    const rowMarkup = customers.map(
      ({id, name, received, party_affiliation, committee}, index) => (
        <IndexTable.Row
          id={id}
          key={id}
          position={index}
        >
          <IndexTable.Cell>
            <RadioButton label='' labelHidden/>
          </IndexTable.Cell>
          <IndexTable.Cell>
            <TextStyle variation="strong">{name}</TextStyle>
          </IndexTable.Cell>
          <IndexTable.Cell>{received}</IndexTable.Cell>
          <IndexTable.Cell>{party_affiliation}</IndexTable.Cell>
          <IndexTable.Cell>{committee}</IndexTable.Cell>
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
                    Candidates ({customers.length})
                </Text>
              </Heading>
            </Stack.Item>
            <Stack.Item>
              <Pagination
                label="1"
                hasPrevious
                onPrevious={() => {
                  console.log('Previous');
                }}
                hasNext
                onNext={() => {
                  console.log('Next');
                }}
              />
            </Stack.Item>
            <Stack.Item>
              <Button primary>
                RUN
              </Button>
            </Stack.Item>
          </Stack>
        </Box>
        <IndexTable
          resourceName={resourceName}
          itemCount={customers.length}
          selectable={false}
          headings={[
            {title: ''},
            {title: 'Name'},
            {title: 'Total received'},
            {title: 'Party Affiliation'},
            {title: 'Committee ID'},
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Box>
  );
}

export default WTable;