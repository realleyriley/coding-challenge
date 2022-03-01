import { gql, useQuery, useMutation } from "@apollo/client";
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
    const [addUserForm] = Form.useForm();
    const [queryParams, setQueryParams] = useState('')

    const onFinish = (rawValues) => {
        var queryParams = ''
        for (const [key, value] of Object.entries(rawValues)) {
            if (value) {
                queryParams += key + ': "' + value + '", '
            }
        }

        setQueryParams(queryParams)
    };

    const onReset = () => {
        setQueryParams('')
        addUserForm.resetFields();
    };

    const closeModal = () => {
        setQueryParams('')
        setModalVisible(false)
        addUserForm.resetFields()
    }

    return (
        <>
            <Button type='primary' size='large' onClick={() => setModalVisible(true)}>
                Add Users
            </Button>
            <Modal title='Search Launch History' visible={modalVisible} onCancel={closeModal} onOk={closeModal}>
                <div id='add user form'>
                    <Form form={addUserForm} name="control-hooks" onFinish={onFinish}>
                        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter a name for the user' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="twitter" label="Twitter Handle" rules={[{ required: true, message: 'Please enter a twitter username' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Add
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                {queryParams && (
                    <div>
                        <QueryResults queryParams={queryParams} />
                    </div>
                )}
            </Modal>
        </>
    )
}

const QueryResults = ({ queryParams }) => {
    const queryString = gql`
        mutation {
            insert_users(objects: {${queryParams}}) {
                affected_rows
            }
        }
    `

    const [mutation, { data, loading, error }] = useMutation(queryString)
    console.log(mutation);
    console.log(data, loading, error)

    return (
        <div>
            {loading ? (
                "loading"
            ) : error ? (
                error.message
            ) : (
                "success" + { data }
            )}
        </div>
    )

}

export default UserCRUD