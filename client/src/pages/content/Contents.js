import "./Content.css";
import { RightOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Image } from 'antd';
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjects, fetchTopics, fetchContents } from "../../store/slices/SubjectSlice";
import NavBar from "../../conponents/navbar/NavBar";
import { Divider, Typography } from 'antd';
import Card from "antd/es/card/Card";
import SuggestMenu from "./SuggestMenu";

// const { Title, Paragraph, Text, Link } = Typography;
const Contents = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const dispatch = useDispatch();
  const topicData = useSelector((state) => state.subjectReducer.topics);
  const subjectData = useSelector((state) => state.subjectReducer.subjects);
  const contentData = useSelector((state) => state.subjectReducer.contents);
  const [topicId, setTopicId] = useState(1);
  // let topicId = 1;
  useEffect(() => {
    dispatch(fetchContents({ topic_id: topicId }));
    dispatch(fetchTopics({ subject_id: 1000 }));
    dispatch(fetchSubjects({ id: 200 }));
  }, [dispatch, topicId]);

  console.log("topicName is: ", topicData)
  console.log("subdata is : ", subjectData);
  console.log("contentdata is : ", contentData);

  const { Content, Sider } = Layout;
  const data = topicData;

  return (
    <Layout
      style={{ height: "100%" }}>
      <Layout>
        <SuggestMenu />
      </Layout>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={subjectData.map((item, index) => {
              return {
                key: index,
                icon: <RightOutlined />,
                label: item.subject,
                children: data.map((item, index) => {
                  return {
                    key: index,
                    label: item.name,
                    onClick: (click)=>{
                      setTopicId(item.id);
                      console.log("workig as hell : ", item.id);
                    }
                  };
                }),
              };
            })}
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
            {/* started Fetching content here  */}

            {
              contentData.map((data, id) => {

                return <Card key={id}>
                  {/*--------------- Main Title --------------*/}
                  {
                    topicData.map((data, id) => {
                      var temp;
                      if (topicId === id+1) {
                          temp = data.name;
                      }
                      return <div key={id}>
                        <Typography.Title>{temp}</Typography.Title> 
                      </div>
                    })}
                  <Divider plain />
                  {/*------------------ image------------------*/}
                  <Image
                    width={200}
                    src={data.image.url}
                  />
                  {/* // -------------introduction  -----------*/}
                  <Typography.Paragraph>{data.intro}</Typography.Paragraph>
                  {
                    // _--------adding subtitle and its para--------
                    data.content.map((subData, id1) => {
                      return <div key={id1}>
                        <Typography.Title level={3}>{subData.heading}</Typography.Title>
                        <Typography.Paragraph>{subData.about}</Typography.Paragraph>
                      </div>
                    })
                  }
                  {/*--------------adding Advantages-------------- */}
                  <ul>
                    <Typography.Title level={3}>Advantages :-</Typography.Title>
                    {
                      data.advantages.map((subData, id1) => {
                        return <div key={id1}>
                          <li key={id1}>{subData.points}</li>
                        </div>
                      })
                    }
                  </ul>
                  {/* -------------adding Disadvantages------------- */}
                  <ul>
                    <Typography.Title level={3}>Disadvantages :-</Typography.Title>
                    {
                      data.disadvantages.map((subData, id1) => {
                        return <div key={id1}>
                          <li key={id1}>{subData.points}</li>
                        </div>
                      })
                    }
                  </ul>

                </Card>

              })
            }
          </Content>
        </Layout>
      </Layout>
    </Layout >
  );
};
export default Contents;