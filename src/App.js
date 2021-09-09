import 'antd/dist/antd.css';

import React from 'react';
import Card from './components/card/card';
import database from "./services/firebase";
import { Input } from 'antd';
import './components/card/card.css';

const { Search } = Input;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    database.ref('/cards').once('value').then(res => {
      if (res.val() !== null) {
        this.setState({
          cards: res.val()
        })
      }
    })
  }

  deleteCard = (id) => {
    let newArr = this.state.cards.filter((item) => {
      return item.id !== id
    })
    this.setState((state) => {
      return {cards: newArr}
    })
  }

  render() {
    const search = this.state.cards.filter(item => {
      return (
        item.title.toLowerCase().includes(this.state.searchValue) ||
        item.text.toLowerCase().includes(this.state.searchValue)
      );
    })

    return (
      <>
        <div className={'search-wrap'}>
          <Search
            placeholder="введите текст для поиска"
            enterButton="Поиск"
            size="large"
            allowClear
            onSearch={(value) => {
              this.setState({
                searchValue: value.toLowerCase()
              })
            }}
          />
        </div>
        <div className={'cards'}>
          {
            search.map((item) => {
              return (
                <Card data={item}
                      key={item.id}
                      delete={this.deleteCard}
                />
              )
            })
          }
        </div>
      </>
    );
  }
}
