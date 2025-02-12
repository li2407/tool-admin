import React, { useEffect } from 'react';
import './index.css';
import DraggableCard from '../DraggableCard';

interface mapArray {
  name: string;
  children: mapArray[];
  id: number;
}

const DraggableContent: React.FC = () => {
  let listMap = [
    {
      name: '主体',
      id: 1,
      children: [
        {
          name: 'React',
          id: 101,
          children: [
            {
              name: 'TSX',
              id: 201,
              children: [],
            },
          ],
        },
        {
          name: 'Vue',
          id: 102,
          children: [],
        },
        {
          name: 'JavaScript',
          id: 103,
          children: [],
        },
        {
          name: 'TS',
          id: 104,
          children: [],
        },
        {
          name: 'ES6',
          id: 105,
          children: [],
        },
      ],
    },
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

  const setup = (list: Array<mapArray>): JSX.Element[] => {
    return list
      .map(({ name, children, id }) => {
        let color_index = Math.ceil(Math.random() * 5) - 1;
        return list.length ? (
          <React.Fragment key={id}>
            <DraggableCard
              text={name}
              key={id}
              offsetTop={offsetTop}
              offsetLeft={offsetLeft}
              initElement={initElement}
            >
              <i
                className="icon"
                id={`line${id}`}
                style={{ '--i': colors[color_index] } as React.CSSProperties}
              ></i>
            </DraggableCard>
            {setup(children)}
          </React.Fragment>
        ) : null;
      })
      .filter((element): element is JSX.Element => element !== null);
  };

  useEffect(() => {
    initElement();
  }, []);
  return <div className="draggable-content">{setup(listMap)}</div>;
};

export default DraggableContent;
