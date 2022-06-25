import * as React from "react";

const SvgProfilePicture = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#ProfilePicture_svg__a)" d="M0 0h24v24H0z" />
    <defs>
      <pattern
        id="ProfilePicture_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#ProfilePicture_svg__b" transform="scale(.01)" />
      </pattern>
      <image
        id="ProfilePicture_svg__b"
        width={100}
        height={100}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default SvgProfilePicture;
