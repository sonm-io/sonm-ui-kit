import * as React from 'react';
import { render } from 'react-dom';
import DropdownInput from './components/dropdownInput';
require('./commonStyles.styl');

class Preview extends React.Component {
  state = {
    inputDropdownValue: '',
    inputDropdownIsExpanded: false,
  };

  toggleDropdown = () => {
    this.setState((prevState: any) => ({
      inputDropdownIsExpanded: !prevState.inputDropdownIsExpanded,
    }));
  };
  setDropdownValue = inputDropdownValue => {
    this.setState({
      inputDropdownValue,
    });
  };

  render() {
    const { inputDropdownValue, inputDropdownIsExpanded } = this.state;
    const { toggleDropdown, setDropdownValue } = this;
    return (
      <DropdownInput
        onRequireClose={toggleDropdown}
        onButtonClick={toggleDropdown}
        value={inputDropdownValue}
        isExpanded={inputDropdownIsExpanded}
        title="selector"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map(e => (
          <div key={e} onClick={() => setDropdownValue(e)}>
            {e}
          </div>
        ))}
      </DropdownInput>
    );
  }
}

render(<Preview />, document.getElementById('root'));
