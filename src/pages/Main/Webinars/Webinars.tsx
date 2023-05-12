import { useState, type FC, type CSSProperties } from "react";
import cn from "classnames";

import { Webinar } from "./Webinar";

import classes from "./Webinars.module.css";
import { Phone } from "../../../components/Phone";

export const Webinars: FC<{ className?: string; style?: CSSProperties }> = ({
  className,
  style,
}) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className={cn(classes.webinars, className)} style={style}>
      <div className={classes.title}>Мероприятия</div>
      <div className={classes.list}>
        <Webinar
          title="MAIN — это Фейсбук будущего. Что ждет Web3.0 в ближайшей перспективе?"
          time="10 марта в 19:00"
          kind="Онлайн-встреча инвесторов"
          description="Обсудим планы команды, проекта MAIN и ожидаемый рост пользователей и всего проекта. Как наша социальная сеть становится #1 web3 социальной сетью"
          onClickButton={() => setShowPhone(true)}
        />
      </div>
      {showPhone && (
        <div className={classes.block2}>
          <div className={classes.phoneLabel}>Введите ваш номер телефона:</div>
          <Phone />
        </div>
      )}
    </div>
  );
};
