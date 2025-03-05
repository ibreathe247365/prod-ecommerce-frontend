import { Suspense } from "react"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { SearchIcon } from "@modules/common/icons/search"
import { BagIcon } from "@modules/common/icons/bag"
import { UserIcon } from "@modules/common/icons/profile"
import { getCollectionsList} from "@lib/data"
import InteractiveLink from "@modules/common/components/interactive-link"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)
  const { collections } = await getCollectionsList(0, 3)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-24 mx-auto duration-200 bg-navbar-gradient border-ui-fg-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-base flex items-center justify-between w-full h-20 text-small-regular relative">
          <div className="flex-1 basis-0 h-full flex items-center">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-full border-gray-300 hover:bg-gray-100">
              <SideMenu regions={regions} />
              <span>Menu</span>
            </button>
          </div>

          {/* Ellipse with Babies text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-[50%_/_50%]">
          <LocalizedClientLink
            href="/"
            className="text-4xl font-bold text-transparent bg-clip-text bg-blue-300 font-[Fredoka] tracking-wider rotate-[-2deg]"
            data-testid="nav-store-link"
          >
            babies
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
                <button className="flex items-center gap-2 px-4 py-2 border rounded-full border-gray-300 hover:bg-gray-100">
                  <SearchIcon className='w-6 h-6' />
                  <span className="ml-2">Search</span>
                </button>
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
        
        <div className="w-full bg-navbar-start py-2 shadow-md border-t border-gray-200">
          <div className="content-container flex justify-center gap-12 text-ui-fg-base">
          {
          collections.map((collection)=>(
            <InteractiveLink key={collection.id} href={`/collections/${collection.handle}`}>{collection.title}</InteractiveLink>
          ))
        }
          </div>
        </div>
      </header>
      <div className="mt-6"></div>
    </div>
  )
}
