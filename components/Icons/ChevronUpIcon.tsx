import { IconSvgProps } from "@/types";

export const ChevronUpIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        className="fill-default-400"
        d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
      ></path>
    </svg>
  );
};
