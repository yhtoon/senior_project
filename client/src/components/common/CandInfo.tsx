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
  

  
  const CandInfo: React.FC = () => {
    return (
        <Card>
          <Text variant="headingMd" as="h6">
            Candidate Information
          </Text>
          <Card.Section>
            <Text variant="headingSm" as="h6">
              Candidate Name
            </Text>
            Candidate Name here
            <p>
              <Text variant="headingSm" as="h6">
                Party Affiliation
              </Text>
            </p>
            <p>Party Affiliation here</p>
            <p>
              <Text variant="headingSm" as="h6">
                Year of Election
              </Text>
            </p>
            <p>Year of Election here</p>
            <p>
              <Text variant="headingSm" as="h6">
                Incumbent Challenger Status
              </Text>
            </p>
            <p>Incumbent Challenger Status here</p>
            <p>
              <Text variant="headingSm" as="h6">
                Candidate Status
              </Text>
            </p>
            <p>Candidate Status here</p>
            <p>
              <Text variant="headingSm" as="h6">
                Principal Campaign Committee
              </Text>
            </p>
            <p>Principal Campaign Committee here</p>
          </Card.Section>
        </Card>
    );
  };
  
  export default CandInfo;
  