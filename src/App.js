import 'antd/dist/antd.css';
import './components/card/card.css';
import './components/not-found/not-found.css';

import React from 'react';
import database from "./services/firebase";
import { Input } from 'antd';

import { Card } from './components/card/card';
import { NotFound } from "./components/not-found/not-found";

const { Search } = Input;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardArray: [],
      searchValue: ''
    }
    this.notFoundFlag = false;
  }

  componentDidMount() {
    database.ref('/cards').once('value').then(res => {
      if (res.val() !== null) {
        this.setState({
          cardArray: res.val()
        })
      }
    })
  }

  deleteCard = (id) => {
    let newArray = this.state.cardArray.filter((item) => {
      return item.id !== id
    })
    this.setState((state) => {
      return { cardArray: newArray }
    })
  }

  cardFilter = (value) => {
    return (
      this.state.cardArray.filter(item => {
        return (
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.text.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'search-wrap'}>
          <Search
            placeholder="введите текст для поиска"
            enterButton="Поиск"
            size="large"
            allowClear
            onSearch={(value) => {
              if (!this.notFoundFlag && this.cardFilter(value).length === 0) {
                this.notFoundFlag = !this.notFoundFlag;
              }
              if (this.notFoundFlag && this.cardFilter(value).length !== 0) {
                this.notFoundFlag = !this.notFoundFlag;
              }
              this.setState({ searchValue: value.toLowerCase() })
            }}
          />
        </div>
        <NotFound render={this.notFoundFlag}/>
        <div className={'card-wrap'}>
          {
            this.cardFilter(this.state.searchValue).map((item) => {
              return (
                <Card data={item}
                      key={item.id}
                      remove={this.deleteCard}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}
