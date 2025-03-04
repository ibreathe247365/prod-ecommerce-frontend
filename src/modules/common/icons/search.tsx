import React from "react"

import { IconProps } from 'types/icon'

export const SearchIcon = (props: IconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Search icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.66667 3.125C6.32995 3.125 3.625 5.82995 3.625 9.16667C3.625 12.5034 6.32995 15.2083 9.66667 15.2083C13.0034 15.2083 15.7083 12.5034 15.7083 9.16667C15.7083 5.82995 13.0034 3.125 9.66667 3.125ZM2.375 9.16667C2.375 5.13959 5.63959 1.875 9.66667 1.875C13.6937 1.875 16.9583 5.13959 16.9583 9.16667C16.9583 13.1937 13.6937 16.4583 9.66667 16.4583C5.63959 16.4583 2.375 13.1937 2.375 9.16667Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9747 13.4747C14.2188 13.2306 14.6145 13.2306 14.8586 13.4747L18.4419 17.0581C18.686 17.3021 18.686 17.6979 18.4419 17.9419C18.1979 18.186 17.8021 18.186 17.5581 17.9419L13.9747 14.3586C13.7306 14.1145 13.7306 13.7188 13.9747 13.4747Z"
        fill="currentColor"
      />
    </svg>
  )
}
