import { Metadata } from "next"
// import { ProgressBar } from '@modules/common/components/progress-bar'

import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        {/* <ProgressBar /> */}
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
