import React from 'react';
import BannerDomain from './BannerDomain';
import ShortcutMenus from './ShortcutMenus';
import ContainerColumn from '../../Components/Container/ContainerColumn';
import BannerOne from './BannerOne';
import BannerTwo from './BannerTwo';
import BannerThree from './BannerThree';
import BannerLikelion from './BannerLikelion'


export default function Component() {
  return (
    <ContainerColumn>
      <BannerDomain/>
      <ShortcutMenus/>
      <BannerOne/>
      <BannerTwo/>
      <BannerThree/>
      <BannerLikelion/>
    </ContainerColumn>
  );
}
