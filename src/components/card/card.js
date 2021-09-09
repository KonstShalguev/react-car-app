import React from "react";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default class Card extends React.Component {
  showConfirm = () => {
    const ths = this;
    confirm({
      icon: <ExclamationCircleOutlined />,
      title: 'Вы хотите удалить этот элемент?',
      content: 'Элемент удаляется локально',
      cancelText: 'Нет',
      okText: 'Да',
      onOk() {
        ths.props.delete(ths.props.data.id);
      }
    });
  }

  render() {
    return (
      <div className={'card'}>
        <h2 className={'card__title'}>{this.props.data.title}</h2>
        <p className={'card__text'}>{this.props.data.text}</p>
          <div className={'card__delete-button'}
               onClick={() => this.showConfirm()}>
          </div>
      </div>
    );
  }
}
