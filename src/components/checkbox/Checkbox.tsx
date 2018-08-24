import * as React from 'react';
import * as cn from 'classnames';
const s = require('./Checkbox.styl');

import { ICheckbox } from './CheckboxTypes';
import { PropTypes } from '../../common/types';
import * as propTypes from 'prop-types';

class Checkbox extends React.Component<ICheckbox> {
  public static propTypes: PropTypes<ICheckbox> = {
    onChange: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
    children: propTypes.node,
    className: propTypes.string,
    disabled: propTypes.bool,
    value: propTypes.bool,
  };
  onChange = ({ target: { checked } }) => {
    if (this.props.disabled) return;
    this.props.onChange(checked);
  };

  public render() {
    const { title, children, className, disabled, value } = this.props;
    const { onChange } = this;
    return (
      <div className={cn(s.root, className)}>
        <label
          className={cn(s.label, {
            [s.disabled]: disabled,
          })}
        >
          <input
            type="checkbox"
            className={s.checkbox}
            onClick={e => {
              if (disabled) e.preventDefault();
            }}
            onChange={onChange}
            checked={value}
          />
          <span className={s.fakeCheckbox} />
          <span className={s.title}>{title}</span>
        </label>
        <span className={s.children}>{children}</span>
      </div>
    );
  }
}

export default Checkbox;
