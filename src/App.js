import React, { useState } from "react";
import { Input, Avatar } from "antd";
import "./App.css";
import { Upload, message, Button, Drawer } from "antd";
import {
  PlusOutlined,
  CaretLeftFilled,
  UnorderedListOutlined,
  SettingFilled,
  UserOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
function App() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <Button
        style={{ height: 70, width: 80 }}
        type="primary"
        icon={<UnorderedListOutlined />}
        onClick={() => showDrawer()}
      ></Button>

      {visible ? (
        <Drawer
          placement="right"
          closable={false}
          onClose={() => onClose()}
          visible={visible}
          style={{
            width: "5.2%",
            height: "100vh",
            position: "fixed",
            top: "9%",
            backgroundColor:"#ffffff",
          }}
        >
          <p style={{marginLeft:23}}><Avatar size="large" icon={<UserOutlined />} /></p>
          <p style={{marginLeft:5}}>Students</p>
          <p style={{marginLeft:23}}><AreaChartOutlined /></p>
          <p>Lesson Plan</p>
          <p style={{marginLeft:23}}><SettingFilled /></p>
          <p style={{marginLeft:5}}>Settings</p>
        </Drawer>
      ) : null}

      <div className="App-header">
        <br />
        <div style={{ marginLeft: 100, color: "#a1aef8", fontSize: 18 }}>
          <CaretLeftFilled />
          <b>Videos</b>
        </div>
        <Input
          style={{
            marginTop: 70,
            marginLeft: 250,
            width: 1000,
            height: 20,
            fontWeight: 100,
          }}
          placeholder="Insert URL here"
        />
        <p style={{ color: "black", marginLeft: 750, fontSize: 15 }}>
          <b>or</b>
        </p>
        <Upload {...props}>
          <Button
            style={{
              marginLeft: 250,
              backgroundColor: "white",
              height: 150,
              width: 150,
            }}
            icon={<PlusOutlined />}
          >
            Upload
          </Button>
        </Upload>
      </div>
    </div>
  );
}
export default App;
