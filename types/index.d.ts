interface IconSvgProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  opacity?: number | string;
  onClick?: (event: any) => void;
}

interface NavLinksProps {
  title: string;
  links: {
    name: string;
    route: string;
    icon?: React.JSX.Element;
  }[];
}
