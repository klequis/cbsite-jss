import React from 'react'
import TriValleyCoders from 'ui/TriValleyCoders'
import MorganStanley from 'ui/MorganStanley'
import ThomsonReuters from 'ui/ThomsonReuters'
import Riding from 'ui/Riding'
import HKNC from 'ui/HKNC'
import CACF from 'ui/CACF'
import Skills from 'ui/Skills'
import WPFSilverlight from 'ui/WPFSilverlight'
import ThePast from 'ui/ThePast'
import Footer from 'ui/Footer'
import Title from 'ui/Title'
// import Try from 'ui/try'
// import Breakpoints from 'components/Breakpoint'

const Home = () => {
  return (
    <div>
      {/* <Breakpoints /> */}
      <Title />
      {/* <Try /> */}
      <Skills />
      {/* <RestOfSkills /> */}
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