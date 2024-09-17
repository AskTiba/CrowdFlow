import * as React from 'react';
import Svg, { Path, Polyline, Line, SvgProps } from 'react-native-svg';
const ShareIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-share"
    {...props}>
    <Path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <Polyline points="16 6 12 2 8 6" />
    <Line x1={12} x2={12} y1={2} y2={15} />
  </Svg>
);
export default ShareIcon;
