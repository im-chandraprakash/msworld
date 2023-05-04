import "./Content.css";
import { LaptopOutlined, NotificationOutlined, UserOutlined, RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects, fetchTopics } from "../../store/slices/SubjectSlice";
import NavBar from "../../conponents/navbar/NavBar";

const Contents = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dispatch = useDispatch();
  const topicData = useSelector((state) => state.subjectReducer.topics);
  const subjectData = useSelector((state) => state.subjectReducer.subjects)

  useEffect(()=>{
    dispatch(fetchTopics({subject_id:400}));
    dispatch(fetchSubjects({id:400}));
  },[dispatch]);
  
  console.log("fetch :",subjectData);
console.log("data is : " , subjectData);

const { Header, Content, Sider } = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: <RightOutlined />,
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((name, id) => {
      const subKey = name;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const data = topicData;
const items3 = subjectData.map((item, index) => {
  const key = String(index + 1);
  return {
    key: item.id,
    icon: <RightOutlined />,
    label: item.subject,
    children: data.map((item, index) => {
      const key = String(index + 1);
      return {
        key: item.id,
        label: item.name,
      };
    }),
  };
});

  return (
    <Layout 
    style={{height: "100%"}}>
      {/* <Header className="header"> */}
        {/* <NavBar /> */}
      {/* </Header> */}
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items3}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Contents;