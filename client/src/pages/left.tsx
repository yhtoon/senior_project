import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  Heading,
  Pagination,
  Stack,
  Text,
} from '@shopify/polaris';

const Left: React.FC = () => {
  return (
    <Box background="surface-hovered-dark" borderRadius="2" padding="3" shadow="card">
      <Card>
        <Box padding="3">
          <Stack>
            <Stack.Item fill>
              <Heading>
                <Text variant="heading2xl" as="h1" truncate>
                    Candidates
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
      </Card>
    </Box>
  );
}

export default Left;