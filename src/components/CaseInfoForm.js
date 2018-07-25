import React from 'react';
import { Form, Row, Col, Input} from 'antd';

import './CaseInfoForm.css'

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
    console.log(this.props.form);
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>
            <Col span={12}>
                <FormItem label='案卷编号'>
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
                <FormItem label='发生时间'>
                    {getFieldDecorator('time', {
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
                <FormItem label='问题来源'>
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
                <FormItem label='来源方式'>
                    {getFieldDecorator('time', {
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
                <FormItem label='  填报人'>
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
                <FormItem label='  举报人'>
                    {getFieldDecorator('time', {
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
                <FormItem label='所属区域'>
                    {getFieldDecorator('time', {
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
                <FormItem label='案件类型'>
                    {getFieldDecorator('time', {
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
                <FormItem label='位置描述'>
                    {getFieldDecorator('time', {
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
                <FormItem label='案件描述'>
                    {getFieldDecorator('time', {
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

const CaseInfoForm = Form.create()(AdvancedSearchForm);

export default CaseInfoForm;