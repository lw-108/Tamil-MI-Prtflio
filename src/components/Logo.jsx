import clsx from "clsx";
import Link from "next/link";

const Logo = ({
  invert,
  href,
  className,
  children,
  fillOnHover,   // 👈 explicitly take it out
  ...props
}) => {
  const classes = clsx(
    "cursor-pointer text-2xl font-semibold duration-300",
    invert
      ? "text-white hover:text-blue-600"
      : "text-black hover:text-blue-600",
    fillOnHover && "hover:fill-blue-600",
    className
  );

  const inner = <span className="relative">{children}</span>;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <h2 className={classes} {...props}>
      {inner}
    </h2>
  );
};

export default Logo;
