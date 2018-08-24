import * as React from 'react';
import * as cn from 'classnames';
const s = require('./DropdownInput.styl');

import {
  IDropdownInputProps,
  IDropdownOptionalProps,
  IDropdownAllProps,
} from './DropdownInputTypes';
import { PropTypes } from '../../common/types';
import * as propTypes from 'prop-types';

class DropdownInput extends React.Component<IDropdownInputProps, any> {
  public static readonly defaultProps: IDropdownOptionalProps = {
    className: '',
    disabled: false,
  };

  public static propTypes: PropTypes<IDropdownAllProps> = {
    value: propTypes.node,
    isExpanded: propTypes.bool,
    onButtonClick: propTypes.func,
    onRequireClose: propTypes.func,
    children: propTypes.node,
    className: propTypes.string,
    title: propTypes.string,
    disabled: propTypes.bool,
  };

  protected handleBodyClick = (event: any) => {
    if (this.props.isExpanded && (this.rootNodeRef && !this.rootNodeRef.contains(event.target))) {
      this.props.onRequireClose();
    }
  };

  public focus() {
    this.rootNodeRef &&
      this.rootNodeRef.children &&
      this.rootNodeRef.children[0] &&
      (this.rootNodeRef.children[0] as HTMLButtonElement).focus();
  }

  public componentDidMount() {
    if (typeof window !== 'undefined') {
      window.document.body.addEventListener('click', this.handleBodyClick);
    }
  }

  public componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.document.body.removeEventListener('click', this.handleBodyClick);
    }
  }

  public rootNodeRef?: HTMLDivElement;

  protected saveRef = (ref: HTMLDivElement | null) => {
    if (ref && ref !== this.rootNodeRef) {
      this.rootNodeRef = ref;
    }
  };

  protected getProps(): IDropdownAllProps {
    return this.props as IDropdownAllProps;
  }

  public render() {
    const props = this.getProps();

    return (
      <div
        data-display-id="dropdown"
        className={cn(props.className, s.root, props.disabled ? `${s.disabled}` : null, {
          [s.expanded]: props.isExpanded,
        })}
        ref={this.saveRef}
      >
        <span
          className={cn(s.title, {
            [s.expanded]: props.isExpanded,
            [s.filled]: Boolean(props.value),
          })}
        >
          {props.title}
        </span>
        <button
          data-display-id="dropdown-button"
          type="button"
          className={cn(s.button, {
            [s.expanded]: props.isExpanded,
            [s.filled]: Boolean(props.value),
          })}
          onClick={props.onButtonClick}
          disabled={props.disabled}
        >
          {props.value}
        </button>
        {props.isExpanded ? <div className={s.popup}>{props.children}</div> : null}
      </div>
    );
  }
}

export default DropdownInput;

export * from './DropdownInputTypes';
