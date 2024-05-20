function AuthButton({
  children,
  type = "button",
  className = "",
  onclick,
  ...props
}) {
  return (
    <button
      type={type}
      className={` ${className} `}
      onClick={onclick}
      {...props}>
      {children}
    </button>
  );
}

export default AuthButton;
