import { useState, type FC } from "react";
import PhoneInput from "react-phone-input-2";

import { ArrowButton } from "./ArrowButton";
import { getUserId } from "../../utils";

import classes from "./Phone.module.css";
import "react-phone-input-2/lib/style.css";

export const Phone: FC<{
  error?: string;
}> = ({ error }) => {
  const [value, setValue] = useState("");

  return (
    <div className={classes.phone}>
      <div className={classes.left}>
        <PhoneInput
          enableAreaCodes
          country="ru"
          value={value}
          onChange={setValue}
          containerClass={classes.container}
          inputClass={classes.input}
          buttonClass={classes.button}
          dropdownClass={classes.dropdown}
          searchClass={classes.search}
        />
        {Boolean(error) && <div className={classes.errorText}>{error}</div>}
      </div>
      <div className={classes.right}>
        <ArrowButton
          onClick={async () => {
            if (!value) return;

            const url = new URL(
              "/api/v1/phone",
              process.env["REACT_APP_BACKEND_URL"],
            );
            await fetch(url, {
              method: "POST",
              body: JSON.stringify({
                user_id: getUserId() ?? 350570845,
                phone: value,
              }),
            });

            const Telegram = Reflect.get(window, "Telegram");
            Telegram.WebApp.close();
          }}
        />
      </div>
    </div>
  );
};
