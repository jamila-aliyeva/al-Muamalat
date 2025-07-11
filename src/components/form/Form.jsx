import React from "react";
import "./Form.css";
import { Form, Input, Button, Checkbox, Select } from "antd";
import UzbFlag from "../../assets/images/uzb-flag.svg";
import UkFlag from "../../assets/images/uk-flag.svg";

const { Option } = Select;

const countryCodes = [
  {
    code: "+998",
    label: "Uzbekistan",
    flag: UzbFlag,
  },
  {
    code: "+44",
    label: "United Kingdom",
    flag: UkFlag,
  },
];
const FormPage = () => {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  const countrySelector = (
    <Form.Item name="prefix" noStyle initialValue="+998">
      <Select style={{ width: 100 }}>
        {countryCodes.map((country) => (
          <Option key={country.code} value={country.code}>
            <img
              src={country.flag}
              alt={country.label}
              style={{ width: 20, marginRight: 8 }}
            />
            {country.code}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <section className="form-section">
      <div className="container">
        <div className="form-content-total">
          <div className="form-content-left">
            <h3>Workshops and Spiritual Development</h3>
            <p>
              Participate in our weekly workshops focused on Islamic studies and
              spiritual growth. These sessions are designed to help you
              strengthen your connection with faith and acquire essential skills
              for daily life
            </p>
          </div>
          <div className="form-content-right">
            <h3>Free consultation</h3>
            <p>
              Leave your phone number, and we will reach out to provide you with
              complete information about our courses.
            </p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input addonBefore={countrySelector} placeholder="" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>
                  I agree to the use of my personal information for consultation
                  purposes.
                </Checkbox>
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" className="login-form-button">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
