import cn from 'classnames'
import React from 'react'

import { Page } from '../../components/Page'
import { FAQ } from './FAQ'
import { Hero } from './Hero'

import classes from './Main.module.css'
import { MediaList } from './MediaList'
import { RatingsList } from './RatingsList'
import { Samopiar } from './Samopiar'
import { Webinars } from './Webinars'

type Props = {
  onStartOnboarding: () => void
  phone: string | undefined
}

export const Main = ({ onStartOnboarding, phone }: Props) => (
  <Page>
    <div className={classes.heroWrapper}>
      <Hero phone={phone} onStartOnboarding={onStartOnboarding}/>
    </div>
    <div className={classes.webinarsWrapper}>
      <Webinars phone={phone}/>
    </div>
    <div className={classes.separator}/>
    <div className={classes.block}>
      <div className={classes.blockHeader}>О токене MAIN</div>
      <div className={classes['video-player']}>

      </div>
      <Samopiar/>
    </div>
    <div className={cn(classes.block, classes.mediaWrapper)}>
      <div className={cn(classes.blockHeader, classes.mediaHeader)}>
        О MAIN пишут
      </div>
      <MediaList className={classes.mediaList}/>
    </div>
    <div className={cn(classes.block, classes.ratingsWrapper)}>
      <div className={cn(classes.blockHeader, classes.ratingsHeader)}>
        Крипто рейтинги
      </div>
      <RatingsList className={classes.ratingsList}/>
    </div>
    <div className={cn(classes.block, classes.faqWrapper)}>
      <div className={classes.blockHeader}>FAQ</div>
      <FAQ/>
    </div>
  </Page>
)
