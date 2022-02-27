import { Form, Button, Drawer, Input, Select } from "antd"
import { useState } from "react"

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LaunchSearch = ({ setLaunchQueryParams }) => {
    const [drawerVisible, setDrawerVisible] = useState(false)

    const [form] = Form.useForm();

    const onFinish = (rawValues) => {
        console.log(rawValues);
        var query = ''
        for (const [key, value] of Object.entries(rawValues)) {
            if (value) {
                query += key + ': "' + value + '",'
            }
        }
        setLaunchQueryParams(query)
        setDrawerVisible(false)
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <>
            <Button type='primary' size='large' onClick={() => setDrawerVisible(true)}>
                Search with Filters
            </Button>
            <Drawer title='Search Launch History' visible={drawerVisible} onClose={() => setDrawerVisible(false)}>
                <Form form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item
                        name="rocket_name"
                        label="Rocket Name"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="launch_success" label="Launch Success" >
                        <Select allowClear>
                            <Option value="true">True</Option>
                            <Option value="false">False</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('gender') === 'other' ? (
                                <Form.Item
                                    name="customizeGender"
                                    label="Customize Gender"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            ) : null
                        }
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}

export default LaunchSearch