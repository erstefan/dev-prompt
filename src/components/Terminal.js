import React from 'react';
import InlineEdit from './InlineEdit';
import { CommandInput, FieldRow, TermIconButton } from '../styles/project';
import { Form, Icon } from 'semantic-ui-react';
import { brand } from '../styles/colors';
import PropTypes from 'prop-types';
import { TwitterPicker } from 'react-color';

class Terminal extends React.Component {
  state = {
    showPicker: false,
  };

  showColorPicker = () => {
    this.setState({ showPicker: !this.state.showPicker });
  };
  hideColorPicker = () => {
    this.setState({ showPicker: false });
  };
  colorSelected = (color, event) => {
    let index = this.props.index;
    this.props.handleTerminalColorChange(index, color);
    this.setState({
      showPicker: false,
    });
  };
  render() {
    const {
      index,
      terminal,
      handleTerminalNameChange,
      handleRemoveTerminal,
      handleTerminalCommandChange,
    } = this.props;
    return (
      <Form.Field>
        <InlineEdit
          activeClassName="editing"
          text={terminal.name}
          paramName="name"
          change={handleTerminalNameChange(index)}
          style={{ ...styles.titleBar, backgroundColor: terminal.color }}
        />

        {/*Remove terminal button */}
        <TermIconButton
          onClick={handleRemoveTerminal(index)}
          termColor={terminal.color}
        >
          <Icon className="cancel" />
        </TermIconButton>

        {/*Open color picker button*/}
        <TermIconButton
          onClick={this.showColorPicker}
          hasMarginRight={true}
          termColor={terminal.color}
        >
          <Icon className="tint" />
        </TermIconButton>

        <FieldRow>
          <Icon className={'terminal'} />
          <CommandInput
            value={terminal.command}
            placeholder={`Command #${index + 1}`}
            termColor={terminal.color}
            onChange={handleTerminalCommandChange(index)}
          />
        </FieldRow>

        {/*Colorpicker*/}
        {this.state.showPicker && (
          <TwitterPicker
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 999,
            }}
            onChangeComplete={this.colorSelected}
          />
        )}
      </Form.Field>
    );
  }
}

Terminal.propTypes = {
  handleTerminalNameChange: PropTypes.func.isRequired,
  handleRemoveTerminal: PropTypes.func.isRequired,
  handleTerminalCommandChange: PropTypes.func.isRequired,
  handleTerminalColorChange: PropTypes.func.isRequired,
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
