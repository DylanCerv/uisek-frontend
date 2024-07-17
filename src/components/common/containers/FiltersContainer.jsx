import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";
import SearchInput from "../inputs/SearchInput";
import LinkFiltersList from "../list/LinkFiltersList";
import DropdownFilter from "../dropdowns/dropdownFilter";
import CheckFiltersList from "../list/CheckFiltersList";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/authContex";
import { RoleEnum } from "../../../enum/roleEnum";


export default function FiltersContainer({
  children,
  onClickButton,
  titleButton,
  title,

  filters,
  applyFilters,
}) {

  const { role } = useAuthContext();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const handleApplyFilters = (filters) => {
    applyFilters(filters); // Llama a la función applyFilters pasando los filtros aplicados
  };


  return (
    <div>
      {/* Mobile filter dialog */}
      <Dialog
        open={mobileFiltersOpen}
        onClose={setMobileFiltersOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              {filters.linkFilters && (
                <LinkFiltersList subCategories={filters.linkFilters} />
              )}

              {/* {filters.searchInput && <SearchInput />} */}

              {filters.checkFilters && (
                <CheckFiltersList filters={filters.checkFilters} />
              )}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>

          <div className="flex items-center gap-10">
            {titleButton && role == RoleEnum.ADMIN && 
              <button
                onClick={onClickButton}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                {titleButton}
              </button>
            }
            
            <Link
              to={`?`}
              className="text-gray-400 underline text-sm"
            >
              Limpiar filtros
            </Link>

            {filters.sortOptions && (
              <DropdownFilter sortOptions={filters.sortOptions} />
            )}

            {/* Icono de filtro para mobile */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <FunnelIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              {filters.linkFilters && (
                <LinkFiltersList subCategories={filters.linkFilters} />
              )}

              {/* {filters.searchInput && <SearchInput />} */}

              {filters.checkFilters && (
                <CheckFiltersList filters={filters.checkFilters} />
              )}
            </form>

            {/* Product grid */}
            <div className="lg:col-span-3">{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
