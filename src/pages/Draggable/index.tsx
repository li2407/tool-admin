import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import DraggablePosition from './components/DraggablePosition';

const Draggable: React.FC = ({}) => {
  return (
    <PageContainer>
      <DraggablePosition></DraggablePosition>
    </PageContainer>
  );
};

export default Draggable;
