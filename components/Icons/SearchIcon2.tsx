import { IconSvgProps } from "@/types";

export const SearchIcon2: React.FC<IconSvgProps> = ({
  size = 18,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      width={size || width}
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        className="stroke-default-400"
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="stroke-default-400"
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
