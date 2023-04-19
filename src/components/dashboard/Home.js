import { Divider, Dropdown, Layout, Menu, message, Icon } from "antd";
import { BrowserRouter as Routes, Route, useHistory } from "react-router-dom";
import { RightOutlined, UserOutlined } from "@ant-design/icons";
import SuperAdmin from "./SuperAdmin";
import About from "./About";
import Dashboard from "./index";
import { Col, Row } from "antd";
import LogoImage from "../../sharedComponents/LogoImage";
import { Footer } from "antd/es/layout/layout";
import { MenuProps } from "antd";
import Item from "antd/es/list/Item";
const Home = () => {
  return (
    <>
      <Layout hasSider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "10vh",
          }}
        >
          <Header />
          <Divider
            type="vertical"
            style={{ height: "100px", borderColor: "black" }}
            dashed
          />
          <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
            <SideMenu />
            <Content />
          </div>
          <Footer style={{ textAlign: "center" }}>
            Copyright @ 2023 wfrlee-admin
          </Footer>
        </div>
      </Layout>
    </>
  );
};

const SideMenu = () => {
  let history = useHistory();
  return (
    <>
      <Menu
        onClick={({ key }) => {
          history.push(key);
          window.location.reload(false);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Dashboard", key: "/dashboard", className: "dashboard" },
          {
            label: "Super Admin",
            key: "/super-Admin",
            icon: <UserOutlined />,
          },
          {
            label: "About",
            key: "/about-us",
            icon: <RightOutlined />,
          },
          {
            label: "Super Admin",
            key: "/super-Adminwwwww",
            icon: <RightOutlined />,
            children: [
              {
                label: "active users",
                key: "/active-users",
              },
              {
                label: "Absent users",
                key: "/absent-users",
              },
            ],
          },
          {
            label: "Super Admin",
            key: "/super-Adminww",
            icon: <RightOutlined />,
            children: [
              {
                label: "active users",
                key: "/active-users",
              },
              {
                label: "Absent users",
                key: "/absent-users",
              },
            ],
          },
          {
            label: "Super Admin",
            key: "/super-Adminssss",
            icon: <RightOutlined />,
            children: [
              {
                label: "active users",
                key: "/active-users",
              },
              {
                label: "Absent users",
                key: "/absent-users",
              },
            ],
          },
          {
            label: "Super Admin",
            key: "/super-Adminsss",
            icon: <RightOutlined />,
            children: [
              {
                label: "active users",
                key: "/active-users",
              },
              {
                label: "Absent users",
                key: "/absent-users",
              },
            ],
          },
          {
            label: "Super Admin",
            key: "/super-Adminsswss",
            icon: <RightOutlined />,
            children: [
              {
                label: "active users",
                key: "/active-users",
              },
              {
                label: "Absent users",
                key: "/absent-users",
              },
            ],
          },
          {
            label: "Super Admin",
            key: "/super-Adminss",
            icon: <RightOutlined />,
            children: [
              {
                label: "active users",
                key: "/active-users",
              },
              {
                label: "Absent users",
                key: "/absent-users",
              },
            ],
          },
          {
            label: "Super Admin",
            key: "/super-Admins",
            icon: <RightOutlined />,
            children: [
              {
                label: "active users",
                key: "/active-users",
              },
              {
                label: "Absent users",
                key: "/absent-users",
              },
            ],
          },
        ]}
      ></Menu>
    </>
  );
};

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/super-Admin">
          <SuperAdmin />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
      </Routes>
    </div>
  );
};

const Header = () => {
  let history = useHistory();
  const overlay = () => (
    <Menu
      className="items-menu"
      onClick={({ key }) => {
        history.push(key);
        window.location.reload(false);
      }}
      defaultSelectedKeys={[window.location.pathname]}
    >
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="/secure-panel/updatePassword">Password Update</Menu.Item>
      <Menu.Item key="3">Set Tune</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Row>
        <Col span={18} push={6}>
          <div className="usericon">
            <Dropdown overlay={overlay()} trigger={["click"]}>
              <UserOutlined />
            </Dropdown>
          </div>
        </Col>
        <Col span={6} pull={18}>
          <LogoImage />
        </Col>
      </Row>
    </>
  );
};

export default Home;
