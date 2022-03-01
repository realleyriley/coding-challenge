import { Form, Button, Drawer, Input, Select, Modal } from "antd"
import { useState } from "react"

const { Option } = Select;

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const UserCRUD = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const [form] = Form.useForm();

    const onFinish = (rawValues) => {
        console.log(rawValues);
        var query = ''
        for (const [key, value] of Object.entries(rawValues)) {
            if (value) {
                query += key + ': "' + value + '",'
            }
        }
        // setLaunchQueryParams(query)
        // setDrawerVisible(false)
    };

    const onReset = () => {
        form.resetFields();
    };

    const closeModal = () => setModalVisible(false)

    return (
        <>
            <Button type='primary' size='large' onClick={() => setModalVisible(true)}>
                Add, Search, or Delete Users
            </Button>
            <Modal title='Search Launch History' visible={modalVisible} onCancel={closeModal} onOk={closeModal}>
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

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default UserCRUD