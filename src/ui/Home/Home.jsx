import React from 'react'
import injectSheet from 'react-jss'
import Responsive from 'ui/Responsive'
import TriValleyCoders from 'ui/TriValleyCoders'
import MorganStanley from 'ui/MorganStanley'
import ThomsonReuters from 'ui/ThomsonReuters'
import Riding from 'ui/Riding'
import HKNC from 'ui/HKNC'
import CACF from 'ui/CACF'
import MERNSkills from 'ui/MERNSkills'
import RestOfSkills from 'ui/RestOfSkills'
import WPFSilverlight from 'ui/WPFSilverlight'
import ThePast from 'ui/ThePast'

const Home = (props) => {
  return (
    <div>
      <MERNSkills />
      <Responsive />
      <TriValleyCoders />
      <RestOfSkills />
      <ThePast />
      <MorganStanley />
      <ThomsonReuters />
      <WPFSilverlight />
      <Riding />
      <HKNC />
      <CACF />
    </div>
  )
}

const styles = {
}

export default injectSheet(styles)(Home)