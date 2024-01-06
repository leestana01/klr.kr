import React from 'react';
import BannerDomain from './BannerDomain';
import ShortcutMenus from './ShortcutMenus';
import ContainerColumn from '../../Components/Container/ContainerColumn';


export default function Component() {
  return (
    <ContainerColumn>
      <BannerDomain/>
      <ShortcutMenus/>
    </ContainerColumn>
  );
}
