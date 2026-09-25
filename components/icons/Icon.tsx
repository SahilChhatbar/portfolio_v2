"use client";

import { type IconName } from "@/constants/tokens/icons";
import { Icon as IconifyIcon, type IconProps } from "@iconify/react";
import { getBundledIcon } from "./icon-data";

export interface AppIconProps extends Omit<IconProps, "icon"> {
  name?: IconName;
  icon?: IconName | string;
  className?: string;
}

export default function Icon({
  name,
  icon,
  className = "",
  ...props
}: AppIconProps) {
  const target = name || icon;
  const iconData = getBundledIcon(target);

  return (
    <IconifyIcon
      icon={iconData}
      className={`inline-block shrink-0 ${className}`}
      {...props}
    />
  );
}
