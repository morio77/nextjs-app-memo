import Image from "next/image";

export type LogoIconProps = {
  width?: string | number;
  height?: string | number;
};

export default function LogoIcon(props: LogoIconProps) {
  const { width, height } = { ...props };

  return (
    <Image
      src="/images/icon.png"
      width={width ?? 32}
      height={height ?? 32}
      alt="ロゴ"
    />
  );
}
