import React from "react";
import cn from "clsx";
import s from "./Button.module.css";

const Buttun = (props) => {
  const {
    className,
    variant = "slim",
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = "button",
    ...rest
  } = props;

  const rootClassName = cn(
    s.root,
    {
      [s.ghost]: variant === "ghost",
      [s.flst]: variant === "flat",
      [s.naked]: variant === "naked",
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && <i className="pl-2 m-0 flex text-sm">Поиск...</i>}
    </Component>
  );
};

export default Buttun;
