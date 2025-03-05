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
      <header className="relative h-28 mx-auto duration-200 bg-navbar-gradient border-ui-fg-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-base flex items-center justify-between w-full h-20 text-small-regular relative">
          <div className="flex-1 basis-0 h-full flex items-center">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
              <SideMenu regions={regions} />
              <span>Menu</span>
            </button>
          </div>

          {/* Ellipse with Babies text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white px-14 py-4 rounded-full md:rounded-lg">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-blue-800 hover:text-blue-900"
              data-testid="nav-store-link"
            >
              babies
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100">
                  <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  <SearchIcon className='w-6 h-6' />
                  <span>Search</span>
                </LocalizedClientLink>
                </button>
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

        {/* Categories Section */}
        <div className="w-full bg-white py-3 shadow-md border-t border-gray-200">
          <div className="content-container flex justify-center gap-8 text-gray-700">
            <LocalizedClientLink href="/nutrition" className="hover:text-blue-700">Nutrition</LocalizedClientLink>
            <LocalizedClientLink href="/diapers" className="hover:text-blue-700">Diapers</LocalizedClientLink>
            <LocalizedClientLink href="/toys" className="hover:text-blue-700">Toys</LocalizedClientLink>
            <LocalizedClientLink href="/strollers" className="hover:text-blue-700">Strollers</LocalizedClientLink>
            <LocalizedClientLink href="/clothing" className="hover:text-blue-700">Clothing</LocalizedClientLink>
            <LocalizedClientLink href="/pharmacy" className="hover:text-blue-700">Pharmacy</LocalizedClientLink>
            <LocalizedClientLink href="/books" className="hover:text-blue-700">Books</LocalizedClientLink>
          </div>
        </div>
      </header>
    </div>
  )
}
