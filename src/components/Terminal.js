import React from 'react';
import InlineEdit from './InlineEdit';
import { CommandInput, FieldRow } from '../styles/project';
import { Form, Icon } from 'semantic-ui-react';
import { brand } from '../styles/colors';
import PropTypes from "prop-types";

const Terminal = ({
  index,
  terminal,
  handleTerminalNameChange,
  handleRemoveTerminal,
  handleTerminalCommandChange,
}) => {
  console.log('indeeexxx', index);
  return (
    <Form.Field>
      <InlineEdit
        activeClassName="editing"
        text={terminal.name}
        paramName="name"
        change={handleTerminalNameChange(index)}
        style={styles.titleBar}
      />
      <button
        type={'button'}
        className="btn-remove-terminal"
        onClick={handleRemoveTerminal(index)}
      >
        <Icon className="cancel" />
      </button>
      <button className="btn-remove-terminal" style={{ marginRight: '2px' }}>
        <Icon className="tint" />
      </button>
      <FieldRow>
        <Icon className={'terminal'} />
        <CommandInput
          value={terminal.command}
          placeholder={`Command #${index + 1}`}
          onChange={handleTerminalCommandChange(index)}
        />
      </FieldRow>
    </Form.Field>
  );
};

Terminal.propTypes = {
  handleTerminalNameChange: PropTypes.func.isRequired,
  handleRemoveTerminal: PropTypes.func.isRequired,
  handleTerminalCommandChange: PropTypes.func.isRequired,
};

const styles = {
  titleBar: {
    backgroundColor: `${brand.primary}`,
    color: '#fff',
    display: 'inline-block',
    margin: 0,
    padding: '1px 12px',
    fontSize: 9,
    textTransform: 'uppercase',
    outline: 0,
    border: 0,
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
};

export default Terminal;
