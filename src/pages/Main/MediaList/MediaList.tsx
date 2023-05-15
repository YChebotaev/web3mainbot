import { type ReactNode, type FC } from "react";
import cn from "classnames";

import classes from "./MediaList.module.css";

const Item: FC<{
  logoClassName?: string;
  href?: string;
  children?: ReactNode;
}> = ({ logoClassName, href, children }) => (
  <a href={href} className={classes.item} target="_blank" rel="noreferrer">
    <div className={classes.itemLogoWrapper}>
      <div className={cn(classes.itemLogo, logoClassName)} />
    </div>
    <div className={classes.itemTextWrapper}>
      <div className={classes.itemText}>{children}</div>
    </div>
  </a>
);

export const MediaList: FC<{ className?: string }> = ({ className }) => (
  <div className={cn(classes.mediaListWrapper, className)}>
    <div className={classes.mediaList}>
      <Item
        href="https://www.rbc.ru/crypto/news/6433be3e9a79471d61ee7329"
        logoClassName={classes.itemLogoRBK}
      >
        Зарождающийся тренд. Почему за децентрали- зованными соцсетями будущее
      </Item>
      <Item
        href="https://www.forbes.ru/rubriki-kanaly/video/438731-osnovatel-mdk-roberto-pancvidze-forbes-u-gosudarstva-vsegda-na-odnu-pulu-bol-se"
        logoClassName={classes.itemLogoForbes}
      >
        Основатель MDK Роберто Панчвидзе — Forbes: «У государства всегда на одну
        пулю больше»
      </Item>
      <Item
        href="https://snob.ru/interview/osnovatel-mdk-roberto-panchvidze-ochen-vazhno-sledit-za-svoej-reputaciej/"
        logoClassName={classes.itemLogoSnob}
      >
        Роберто Панчвидзе: Очень важно следить за своей репутацией
      </Item>
      <Item
        href="https://www.ridus.ru/vladelec-mdk-roberto-panchvidze-vozglavil-blogerskoe-agentstvo-invite-369270.html"
        logoClassName={classes.itemLogoRidus}
      >
        Владелец MDK Роберто Панчвидзе возглавил блогерское агентство INVITE
      </Item>
      <Item
        href="https://ysia.ru/osnovatel-mdk-roberto-panchvidze-blogery-yavlyayutsya-yadrom-kreativnoj-ekonomiki/"
        logoClassName={classes.itemLogoSahaMedia}
      >
        Основатель MDK Роберто Панчвидзе: блогеры являются ядром креативной
        экономики
      </Item>
      <Item
        href="https://texterra.ru/blog/intervyu-s-sozdatelem-mdk-roberto-panchvidze.html"
        logoClassName={classes.itemLogoTexTerra}
      >
        Хулиганы выросли и стали проджектами – интервью с создателем MDK
      </Item>
      <Item
        href="https://life.ru/p/1458816"
        logoClassName={classes.itemLogoLife}
      >
        Основатель MDK Панчвидзе возглавил блогерское агентство INVITE
      </Item>
      <Item
        href="https://www.fontanka.ru/2021/12/21/70330700/"
        logoClassName={classes.itemLogoFontanka}
      >
        Основатель MDK Панчвидзе возглавил блогерское агентство INVITE
      </Item>
      <Item
        href="https://adindex.ru/news/tendencies/2021/12/21/300987.phtml"
        logoClassName={classes.itemLogoAdIndex}
      >
        Основатель MDK вложится в influence-маркетинг
      </Item>
      <Item
        href="https://lenta.ru/news/2021/12/21/agentstvo/"
        logoClassName={classes.itemLogoLenta}
      >
        Основатель MDK возглавил блогерское агентство
      </Item>
    </div>
  </div>
);
