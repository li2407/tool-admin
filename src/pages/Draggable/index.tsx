import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import DraggableContent from './components/DraggableContent';

const Draggable: React.FC = ({}) => {
  return (
    <PageContainer>
      <DraggableContent></DraggableContent>
    </PageContainer>
  );
};

export default Draggable;
