import { type FC } from "react";

import classes from "./FAQ.module.css";

export const FAQ: FC = () => (
  <div className={classes.faqBlock}>
    <div className={classes.faqItem}>
      <div className={classes.faqTitle}>Как сделать свой криптокошелек?</div>
      <div className={classes.faqText}>
        Мы предоставим видеоинструкцию по тому, как его сделать
      </div>
    </div>
    <div className={classes.faqItem}>
      <div className={classes.faqTitle}>Вы меня не забудете?</div>
      <div className={classes.faqText}>
        Ваш уникальный идентификатор это ваш кошелек, мы проверим его перед тем
        как его привязать и планировать на него вашу покупку токена
      </div>
    </div>
  </div>
);
