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
      className={`bg-teal-400 px-4 py-2 rounded-md text-white hover:bg-teal-500 ${className} `}
      onClick={onclick}
      {...props}>
      {children}
    </button>
  );
}

export default AuthButton;
