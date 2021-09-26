import './card.scss';

import React from "react";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export const Card  = ({ data, remove }) => {
  const showConfirm = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      title: 'Вы хотите удалить этот элемент?',
      content: 'Элемент удаляется локально',
      cancelText: 'Нет',
      okText: 'Да',
      onOk() {
        remove(data.id);
      }
    });
  }

  return (
    <div className={'card'}>
      <h2 className={'card__title'}>{data.brand}</h2>
      <p className={'card__text'}>Модель: <span>{data.model}</span></p>
      <p className={'card__text'}>Цвет: <span>{data.color}</span></p>
      <div className={'card__delete-button'}
           onClick={() => showConfirm()}>
      </div>
    </div>
  );
}
