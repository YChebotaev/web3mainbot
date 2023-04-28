import { type FC } from "react";
import PhoneInput from "react-phone-input-2";

import classes from "./Phone.module.css";
import "react-phone-input-2/lib/style.css";

export const Phone: FC<{
  value?: string
  error?: string
  onChange?(value: string): void
}> = ({ value, error, onChange }) => {
  return (
    <div className={classes.phone}>
      <PhoneInput
        enableAreaCodes
        country="ru"
        value={value}
        onChange={onChange}
        containerClass={classes.container}
        inputClass={classes.input}
        buttonClass={classes.button}
        dropdownClass={classes.dropdown}
        searchClass={classes.search}
      />
      {Boolean(error) && <div className={classes.errorText}>{error}</div>}
    </div>
  );
};
