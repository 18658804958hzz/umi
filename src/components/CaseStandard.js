import React from 'react';
import { Form, Row, Col, Input } from 'antd';

import './CaseStandard.css'

const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component {

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        className="ant-advanced-search-form1"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>
            <Col span={12}>
                <FormItem label='责任部门'>
                    {getFieldDecorator('caseCode', {
                    rules: [{
                        required: false,
                        message: 'Input something!',
                    }],
                    })(
                    <Input />
                    )}
                </FormItem>
            </Col>
            <Col span={12}>
                <FormItem label='处置条件'>
                    {getFieldDecorator('caseCode', {
                    rules: [{
                        required: false,
                        message: 'Input something!',
                    }],
                    })(
                    <Input />
                    )}
                </FormItem>
            </Col>
            <Col span={12}>
                <FormItem label='处置时限'>
                    {getFieldDecorator('caseCode', {
                    rules: [{
                        required: false,
                        message: 'Input something!',
                    }],
                    })(
                    <Input />
                    )}
                </FormItem>
            </Col>
            <Col span={24}>
                <FormItem label='责任主体'>
                    {getFieldDecorator('caseCode', {
                    rules: [{
                        required: false,
                        message: 'Input something!',
                    }],
                    })(
                    <Input />
                    )}
                </FormItem>
            </Col>
            <Col span={24}>
                <FormItem label='执行依据'>
                    {getFieldDecorator('caseCode', {
                    rules: [{
                        required: false,
                        message: 'Input something!',
                    }],
                    })(
                    <Input />
                    )}
                </FormItem>
            </Col>
            <Col span={24}>
                <FormItem label='立案标准'>
                    {getFieldDecorator('caseCode', {
                    rules: [{
                        required: false,
                        message: 'Input something!',
                    }],
                    })(
                    <Input />
                    )}
                </FormItem>
            </Col>
            <Col span={24}>
                <FormItem label='结案标准'>
                    {getFieldDecorator('caseCode', {
                    rules: [{
                        required: false,
                        message: 'Input something!',
                    }],
                    })(
                    <Input />
                    )}
                </FormItem>
            </Col>
            <Col span={24}>
                <FormItem label='备注'>
                    {getFieldDecorator('caseCode', {
                    rules: [{
                        required: false,
                        message: 'Input something!',
                    }],
                    })(
                    <Input />
                    )}
                </FormItem>
            </Col>
        </Row>
      </Form>
    );
  }
}

const CaseStandard = Form.create()(AdvancedSearchForm);

export default CaseStandard;