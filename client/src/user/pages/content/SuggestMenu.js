import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'DSA',
    key: 'mail',
  },
  {
    label: 'JAVA',
    key: 'app',
  },
  {
    label: '1st Year',
    key: '1',
    children: [
      {
        type: 'group',
        label: 'Sem 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Sem 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: "2nd Year",
    key: '2',
    children: [
      {
        type: 'group',
        label: 'Sem 3',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Sem 4',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: "3rd Year",
    key: '3',
    children: [
      {
        type: 'group',
        label: 'Sem 5',
        children: [
          {
            label: 'Option 1',
            key: 'setting:5',
          },
          {
            label: 'Option 2',
            key: 'setting:6',
          },
        ],
      },
      {
        type: 'group',
        label: 'Sem 6',
        children: [
          {
            label: 'Option 3',
            key: 'setting:7',
          },
          {
            label: 'Option 4',
            key: 'setting:8',
          },
        ],
      },
    ],
  },
  {
    label: "4nd Year",
    key: '4',
    children: [
      {
        type: 'group',
        label: 'Sem 7',
        children: [
          {
            label: 'Option 1',
            key: 'setting:9',
          },
          {
            label: 'Option 2',
            key: 'setting:10',
          },
        ],
      },
      {
        type: 'group',
        label: 'Sem 8',
        children: [
          {
            label: 'Option 3',
            key: 'setting:11',
          },
          {
            label: 'Option 4',
            key: 'setting:12',
          },
        ],
      },
    ],
  }
];
const SuggestMenu = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default SuggestMenu;