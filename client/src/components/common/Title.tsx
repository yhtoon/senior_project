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
  
  const Title: React.FC = () => {
    return (
      <Stack.Item>
        <TextContainer>
          <Text variant="headingMd" as="h2">
            Text here
          </Text>
          <p>
            The table below displays the top recepients from committee name here.
          </p>
        </TextContainer>
      </Stack.Item>
    );
  };
  
  export default Title;
  