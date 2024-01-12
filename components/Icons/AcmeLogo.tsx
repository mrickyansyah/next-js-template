import { IconSvgProps } from "@/types";

export const AcmeLogo: React.FC<IconSvgProps> = ({
  size = 42,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    width={size || width}
    height={size || height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect className="fill-background" height="100%" rx="16" width="100%" />
    <path
      className="fill-default-400"
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
