"use client";

import { Icon as IconifyIcon, IconProps } from "@iconify/react";

interface AppIconProps extends Omit<IconProps, "icon"> {
  icon: string;
  className?: string;
}

export default function Icon({ icon, className = "", ...props }: AppIconProps) {
  return <IconifyIcon icon={icon} className={`inline-block shrink-0 ${className}`} {...props} />;
}
