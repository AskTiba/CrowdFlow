import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const ChevronRight = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
    {...props}>
    <Path d="m9 18 6-6-6-6" />
  </Svg>
);
export default ChevronRight;
