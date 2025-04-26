import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Space, message } from 'antd';
import type { FormRule } from 'antd';
import { AddCardParamsProps } from '../../interface/types';
import { generateRandomCardNumber, generateRandomCVV, generateRandomExpiryDate } from '../../utils';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCard: (card: AddCardParamsProps) => void;
}

const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose, onAddCard }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isOpen) {
      form.setFieldsValue({
        cardNumber: generateRandomCardNumber(),
        expiryDate: generateRandomExpiryDate(),
        cvv: generateRandomCVV(),
      });
    } else {
      form.resetFields();
    }
  }, [isOpen, form]);

  const onFinish = (values: any) => {
    const newCard = {
      name: values.cardName.trim(),
      number: values.cardNumber,
      expiry: values.expiryDate,
      cvv: values.cvv,
    };

    onAddCard(newCard);
    message.success('Card added successfully!');
    onClose();
  };

  const cardNumberRules: FormRule[] = [
    { required: true, message: 'Please input card number!' },
    {
      validator: (_, value) => {
        if (/^\d{4} \d{4} \d{4} \d{4}$/.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Format: XXXX XXXX XXXX XXXX'));
      },
    },
  ];

  const cvvRules: FormRule[] = [
    { required: true, message: 'Please input CVV!' },
    { pattern: /^\d{3,4}$/, message: 'CVV must be 3 or 4 digits' },
  ];

  const expiryDateRules: FormRule[] = [
    { required: true, message: 'Please input expiry date!' },
    { pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/, message: 'Invalid expiry date format (MM/YY)' },
  ];

  const formatCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    }
    return value;
  };

  return (
    <Modal
      title="Add New Card"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnClose
    >
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Card Name"
          name="cardName"
          rules={[{ required: true, message: 'Please input card name!' }]}
        >
          <Input placeholder="Enter card name" />
        </Form.Item>

        <Form.Item label="Card Number" name="cardNumber" rules={cardNumberRules}>
          <Input
            placeholder="0000 0000 0000 0000"
            maxLength={19}
            onChange={(e) => {
              const formattedValue = formatCardNumber(e);
              form.setFieldsValue({ cardNumber: formattedValue });
            }}
          />
        </Form.Item>

        <Form.Item label="Expiry Date (MM/YY)" name="expiryDate" rules={expiryDateRules}>
          <Input placeholder="MM/YY" maxLength={5} />
        </Form.Item>

        <Form.Item label="CVV" name="cvv" rules={cvvRules}>
          <Input.Password placeholder="Enter CVV" maxLength={4} />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Add Card
            </Button>
            <Button htmlType="button" onClick={onClose}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCardModal;
