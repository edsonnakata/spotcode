import React, { Fragment } from 'react';
import NavbarFooter from '../../components/shared/navbar_footer';
import Albums from '../../components/albums';
import SectionWrapper from '../../components/shared/section_wrapper';

const AlbumScreen = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <Albums/>
        <NavbarFooter/>
      </SectionWrapper>
    </Fragment>
  )
}

export default AlbumScreen;