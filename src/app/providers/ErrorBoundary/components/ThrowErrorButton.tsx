import React from "react";
import clx from "classnames";
import styles from "./ThrowErrorButton.module.scss";
import Button, { ButtonTheme } from "../../../../shared/ui/Button/Button";
import ErrorIcon from "../../../../shared/assets/icons/error-icon.svg";
import { Icon, IconTheme } from "../../../../shared/ui/Icon/Icon";

export function ThrowErrorButton() {
  const [error, setError] = React.useState(false);

  const onThrowError = () => setError(true);

  React.useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <Button theme={ButtonTheme.DEFAULT} onClick={onThrowError} title="Throw Error">
      <Icon theme={IconTheme.DEFAULT} Svg={ErrorIcon} />
    </Button>
  );
}
