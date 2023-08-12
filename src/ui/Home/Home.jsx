import React from 'react'
import Responsive from 'ui/Responsive'
import TriValleyCoders from 'ui/TriValleyCoders'
import MorganStanley from 'ui/MorganStanley'
import ThomsonReuters from 'ui/ThomsonReuters'
import Riding from 'ui/Riding'
import HKNC from 'ui/HKNC'
import CACF from 'ui/CACF'
import RestOfSkills from 'ui/RestOfSkills'
import WPFSilverlight from 'ui/WPFSilverlight'
import ThePast from 'ui/ThePast'
import Footer from 'ui/Footer'
import Title from 'ui/Title'

const Home = () => {
  return (
    <div>
      {/* <Breakpoints /> */}
      <Title />
      <Responsive />
      <RestOfSkills />
      <TriValleyCoders />
      <ThePast />
      <MorganStanley />
      <ThomsonReuters />
      <WPFSilverlight />
      <Riding />
      <HKNC />
      <CACF />
      <Footer />
    </div>
  )
}

export default Home