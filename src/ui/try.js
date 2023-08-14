import React from 'react'
import Section from 'components/Section'

const styles = {
  outer: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'black'
  },
  left: {
    backgroundColor: 'red',
    // alignSelf: 'stretch'
    flexGrow: 1
  },
  right: {
    backgroundColor: 'green',
    // alignSelf: 'stretch'
    flexGrow: 1
  }
}

const Try = () => {
  return (
    <Section style={styles.outer} flexDirection='row'>
      <div style={styles.left}>Left</div>
      <div style={styles.right}>Right</div>
    </Section>
  );
}

export default Try