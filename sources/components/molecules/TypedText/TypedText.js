import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
}));

/**
 * Component to display the typed animated texts
 *
 * @param {Object} props
 */
const TypedText = props => {
  const { className, typedProps, ...rest } = props;

  const classes = useStyles();

  return (
    <Typography
      className={clsx('typed-text', classes.root, className)}
      {...rest}
    >
      <Typed className="typed-text__item" {...typedProps} />
    </Typography>
  );
};

TypedText.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * react-typed properties. For more info visit https://www.npmjs.com/package/react-typed
   */
  typedProps: PropTypes.object.isRequired,
};

export default TypedText;
