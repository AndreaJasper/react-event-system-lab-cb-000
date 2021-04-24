import React from 'react'

class EyesOnMe extends React.Component {
  
  
  render() {
    return(
      <div>
        <button>
          
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