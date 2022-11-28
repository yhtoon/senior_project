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
  import {CommieInfoModal} from 'types';

  interface TitleProps {
    COMM_ID: string
  }
  const Title: React.FC<TitleProps> = ({COMM_ID}) => {
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
  