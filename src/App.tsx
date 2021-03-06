import React from 'react';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import { Stpwtch } from './components/Stpwtch/Stpwtch'

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          width: '960px',
          margin: '0 auto',
          textAlign: 'center',
          color: '#605e5c'
        }
      }}
      gap={15}
    >
      <Stpwtch />
    </Stack>
  );
};
