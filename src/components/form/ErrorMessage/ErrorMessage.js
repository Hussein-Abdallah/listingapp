import React from 'react';
import AppText from '../../general/AppText';
import styles from './styles';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

export default ErrorMessage;
