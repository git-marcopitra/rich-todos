import { FC, SVGAttributes } from 'react';

const LogoSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 749 953" fill="none" {...props}>
    <rect width="534" height="953" rx="40" fill="#191747" />
    <rect x="29" y="330" width="480" height="179" rx="29" fill="#645FC6" />
    <rect x="29" y="736" width="480" height="179" rx="29" fill="#645FC6" />
    <rect
      x="39"
      y="41"
      width="460"
      height="159"
      rx="19"
      stroke="#645FC6"
      strokeWidth="20"
    />
    <rect x="269" y="533" width="480" height="179" rx="29" fill="#645FC6" />
  </svg>
);

export default LogoSVG;
