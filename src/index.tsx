import * as React from 'react';
import { render } from 'react-dom';
import DropdownInput from './components/dropdownInput';
import Checkbox from './components/checkbox';
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
      <div>
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
        <Checkbox onChange={value => console.log(value)} title="checkbox" />
        <Checkbox onChange={console.log} title="checkbox" disabled={true} />
      </div>
    );
  }
}

render(<Preview />, document.getElementById('root'));
