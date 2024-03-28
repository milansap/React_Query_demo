/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Checkbox, Form, Input, message } from "antd";

import { fetchData } from "../../Apis/testApis";

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

const FormData = ({ error, isError }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: fetchData,
    onSuccess: (data) => {
      console.log(data);
      message.success("Submit Successfully");
      //for refetching to get data
      queryClient.invalidateQueries({ queryKey: ["fetchData"] });
    },
    onError: (error) => message.error(error.response.data),
  });
  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log("Success:", data);
  };
  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        paddingLeft: "20px",
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
      autoComplete="off"
    >
      {isError && <div>{error}</div>}
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormData;
