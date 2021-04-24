import React from 'react'

class EyesOnMe extends React.Component {
  
  focus = () => {
    console.log('Good!');
  }
  
  blur = () => {
    console.log('Hey! Eyes on me!');
  }
  
  
  render() {
    return(
      <div>
        <button>
          { onFocus={this.focus}>Good! 
        </button>
      </div>
    );
  }
}

export default EyesOnMe;




import React from 'react'

class KeyPad extends React.Component {
  password = () => {
    console.log('Entering password...');
  }
  
  render() {
    return(
      <div>
        <input keyUp={this.password} type="password" />
      </div>
    );
  }
}

export default KeyPad;