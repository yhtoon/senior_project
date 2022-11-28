import {
    Button,
    Modal,
    Stack,
    DropZone,
    Checkbox,
    Badge,
    Text,
    Card,
    DataTable,
    TextContainer
  } from "@shopify/polaris";
  import React, { useState, useCallback, useEffect } from "react";
  
  // check flag in right.. separate right components dependent on 
  const CommieInfo: React.FC = () => {
    return (
      <Stack.Item>
        <Card>
          <TextContainer spacing="loose">
            <p>
              Manage your Shopify store on-the-go with real-time notifications,
              access to your dashboard, and order management, all from your
              smartphone.
            </p>
            <p>
              Shopify POS is the fastest and easiest way to start accepting Visa,
              Mastercard, American Express, and Discover right from your
              smartphone or tablet.
            </p>
          </TextContainer>
        </Card>
        <Card>
          <Text variant="headingMd" as="h6">
            Committee Information
          </Text>
          <Card.Section>
            <Text variant="headingSm" as="h6">
              Committee ID
            </Text>
            Committee ID here
            <p>
              <Text variant="headingSm" as="h6">
                Committee Name
              </Text>
            </p>
            <p>Committee Name here</p>
            <p>
              <Text variant="headingSm" as="h6">
                Treasurer's Name
              </Text>
            </p>
            <p>Treasurer's Name here</p>
            <p>
              <Text variant="headingSm" as="h6">
                Location
              </Text>
            </p>
            <p>Location here</p>
          </Card.Section>
        </Card>
      </Stack.Item>
    );
  };
  
  export default CommieInfo;
  