import { cx } from "./Container";

const COLOR = {
  red: "text-red-600",
  default: "text-gray-500",
  yellow: "text-yellow-600",
  green: "text-green-700",
  blue: "text-blue-600",
  orange: "text-orange-700",
  purple: "text-purple-600",
  gray: "text-gray-700",
  brown: "text-brown-600",
};

type TProps = {
  tag: {
    color: keyof typeof COLOR;
    name: string;
    id: string;
  };
};

const Tag = ({ tag }: TProps) => {
  return (
    <span
      className={cx(
        "inline-block mt-5 text-xs font-medium tracking-wider uppercase ",
        COLOR[tag.color] || COLOR["default"],
      )}
    >
      {tag.name}
    </span>
  );
};

export default Tag;
