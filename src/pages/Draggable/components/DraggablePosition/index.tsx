import React, { useEffect } from 'react';
import { nanoid } from 'nanoid'
import './index.css';
import DraggableCard from '../DraggableCard';
import DraggableCanvas from '../DraggableCanvas'

interface mapArray {
  name: string;
  id: string;
  children: Array<mapArray>;
}

const DraggablePosition: React.FC = () => {

  let listMap : Array<mapArray> = [
    {
      name: '主体',
      id: 'eudPJOUoexug9g2dPm9G9',
      children: [
        {
          name: 'React',
          id: 'SxAgduFt0PEQSRy9nXUXa',
          children: [
            {
              name: 'TSX',
              id: 'fxsuNznxjjeyje7sk46pa',
              children: [],
            },
          ],
        },
        {
          name: 'Vue',
          id: 'ZwkPo2tlrngjTIRW0czqb',
          children: [],
        },
        {
          name: 'JavaScript',
          id: 'OWlnGjzHQ0UvDH2CXMZQJ',
          children: [],
        },
        {
          name: 'ES6',
          id: 'dxXw9oRaUgx8bohTeprSl',
          children: [],
        },
      ]
    }
  ];

  let colors = ['#12ff26', '#FFB812FF', '#1271FFFF', '#D278FBFF', '#FF1222FF'];

  let offsetTop = 0;
  let offsetLeft = 0;
  let topElement1 = null;
  let topElement2 = null;
  let leftElement = null;
  let parentElement = null;

  const initElement = () => {
    topElement1 = document.getElementsByClassName('ant-page-header')[0];
    topElement2 = document.getElementsByClassName('ant-pro-global-header')[0];
    leftElement = document.getElementsByClassName('ant-layout-sider-children')[0];
    parentElement = document.getElementsByClassName('draggable-content')[0];
    offsetTop =
      topElement1?.clientHeight + topElement2?.clientHeight + (parentElement.scrollTop ?? 0);
    offsetLeft = leftElement?.clientWidth + (parentElement?.scrollLeft ?? 0) + 40;
  };

  const setup = (list: Array<mapArray>, id: any) : any => {
    return list.map(({ name, children, id }, index) => {
      let color_index = Math.ceil(Math.random() * 5) - 1;
      return list.length ? (
        <>
          <DraggableCard
            text={name}
            key={index}
            offsetTop={offsetTop}
            offsetLeft={offsetLeft}
            initElement={initElement}
            parentId={id}
          >
            <i className="icon" id={`line${index}`} style={{ '--i': colors[color_index] }}></i>
          </DraggableCard>
          {setup(children, id)}
        </>
      ) : null;
    });
  };

  useEffect(() => {
    initElement();
  }, []);

  return <div className="draggable-content">
    <DraggableCanvas></DraggableCanvas>
    {setup(listMap, null)}
  </div>;
};

export default DraggablePosition;
