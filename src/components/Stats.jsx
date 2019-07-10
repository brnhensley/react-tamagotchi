import React from 'react';

let tamagotchi = {
  food: {
    min: 0,
    max: 100,
    current: 100
  },
  mood: {
    min: 0,
    max: 100,
    current: 100
  },
  poop: {
    min: 0,
    max: 100,
    current: 0
  }
};


class Stats extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {tamagotchi: tamagotchi};
    this.decrementStats = this.decrementStats.bind(this);
  }

  componentDidMount() {
    setInterval(this.decrementStats, 1000);
  }

  decrementStats() {
    let newTamagotchi = tamagotchi;

    newTamagotchi.food.current--;
    console.log(newTamagotchi.food.current);

    newTamagotchi.mood.current--;
    console.log(newTamagotchi.mood.current);

    newTamagotchi.poop.current++;
    console.log(newTamagotchi.poop.current);
    
    console.log(newTamagotchi);
    
    this.setState({tamagotchi: newTamagotchi});

  }

  render() {
    return (
      <div>
        <h3>Food: {this.state.tamagotchi.food.current}</h3>
        <h3>Mood: {this.state.tamagotchi.mood.current}</h3>
        <h3>Poop: {this.state.tamagotchi.poop.current}</h3>
        {/* <h3>{this.state.timeNotDead}</h3> */}
      </div>
    );
  }
}

export default Stats;