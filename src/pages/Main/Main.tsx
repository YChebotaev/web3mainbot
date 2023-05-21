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
        <div className="wistia_responsive_wrapper"
             style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%', borderRadius: '10px' }}>
          <div className="wistia_embed wistia_async_61i76t87pp seo=false videoFoam=true"
               style={{ height: '100%', position: 'relative', width: '100%', borderRadius: '10px' }}>
            <div className="wistia_swatch"
                 style={{
                   height: '100%',
                   left: 0,
                   opacity: 0,
                   overflow: 'hidden',
                   position: 'absolute',
                   top: 0,
                   transition: 'opacity 200ms',
                   width: '100%',
                   borderRadius: '10px',
                 }}>
              <img src="https://fast.wistia.com/embed/medias/61i76t87pp/swatch"
                   style={{
                     filter: 'blur(5px)',
                     height: '100%',
                     objectFit: 'contain',
                     width: '100%',
                     borderRadius: '10px',
                   }} alt=""
                   aria-hidden="true"
                // onLoad="this.parentNode.style.opacity=1;"
              />
            </div>
          </div>

        </div>
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
