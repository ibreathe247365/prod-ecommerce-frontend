import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { SearchIcon } from "@modules/common/icons/search"
import { BagIcon } from "@modules/common/icons/bag"
import { UserIcon } from "@modules/common/icons/profile"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-navbar-gradient border-ui-fg-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-base flex items-center justify-between w-full h-full text-small-regular relative">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* White oval with Babies text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-blue-800 hover:text-blue-900 uppercase"
              data-testid="nav-store-link"
            >
              Babies
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  <SearchIcon className='w-6 h-6' />
                </LocalizedClientLink>
              )}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <UserIcon className='w-6 h-6' />
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <BagIcon className='w-6 h-6' />
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
