import React from 'react';
import Header from './components/Header.js';
import Facts from './components/Facts.js';
import FactAdder from './components/FactAdder';
import './App.css';
import CategorySelector from './components/CategorySelector.js';
import FactSaver from './components/FactSaver.js';

class App extends React.Component {
  state = {
    facts: {
      amazing: [
        { text: 'Lobsters are immortal', strike: false },
        { text: 'Jellyfish are immortal', strike: false }
      ],
      dubious: [
        { text: 'Crocodiles are immortal', strike: false },
        { text: "Sharks can't swim backwards", strike: false }
      ]
    },
    currentCategory: 'dubious'
  };

  render() {
    console.log('rendering...');
    const { currentCategory, facts } = this.state;
    const categories = Object.keys(facts);
    return (
      <div>
        <Header />
        <FactAdder addFact={this.addFact} />
        <CategorySelector
          categories={categories}
          changeCategory={this.changeCategory}
        />
        <Facts facts={facts[currentCategory]} deleteFact={this.deleteFact} />
        <FactSaver save={this.saveData} />
      </div>
    );
  }

  componentDidMount() {
    console.log('mounted');
    const state = localStorage.getItem('state');
    if (state) {
      this.setState(JSON.parse(state));
    }
  }

  deleteFact = factToDelete => {
    this.setState(state => {
      return {
        facts: {
          ...state.facts,
          [state.currentCategory]: state.facts[state.currentCategory].filter(
            fact => fact !== factToDelete
          )
        }
      };
    });
  };

  addFact = newFactText => {
    const newFact = { text: newFactText, strike: false };
    this.setState(state => {
      return {
        facts: {
          ...state.facts,
          [state.currentCategory]: [
            newFact,
            ...state.facts[state.currentCategory]
          ]
        }
      };
    });
  };

  changeCategory = category => {
    this.setState({
      currentCategory: category
    });
  };

  saveData = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  };
}

export default App;
