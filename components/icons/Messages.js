import * as React from "react";

const SvgMessages = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#656565" d="M0 0h25v24H0z" />
    <path
      d="M20.052 3.018H4.948c-1.58 0-2.865 1.234-2.865 2.752v12.495c0 1.518 1.285 2.753 2.865 2.753h15.104c1.58 0 2.865-1.235 2.865-2.753V5.77c0-1.518-1.285-2.752-2.865-2.752Zm-15.104 1.5h15.104c.719 0 1.302.56 1.302 1.25v.714l-8.385 5.367a.873.873 0 0 1-.938-.002L3.646 6.482v-.714c0-.69.583-1.25 1.302-1.25Zm15.104 14.998H4.948c-.719 0-1.302-.56-1.302-1.25V8.24l7.542 4.83a2.43 2.43 0 0 0 2.624.001l7.542-4.83v10.022c0 .69-.583 1.25-1.302 1.25v.003Z"
      fill="#fff"
    />
  </svg>
);

export default SvgMessages;
