import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CheckFiltersList({filters}) {
    return (
        <>
            {filters.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-t border-gray-200 py-6 px-4 lg:px-0 ">

                    <h3 className="-mx-2 -my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                                <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                                <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                            </span>
                        </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                        <div className="space-y-6 lg:space-y-4">
                            {section.options.map((option, optionIdx) => (
                                <Link
                                    to={`?category=${option.value}`}
                                    key={option.value}
                                    className="flex items-center cursor-pointer"
                                >
                                    <div >
                                        {/* <input
                                            defaultValue={option.value}
                                            defaultChecked={option.checked}
                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        /> */}
                                        <label
                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                            className="ml-3 min-w-0 flex-1 text-gray-500 lg:text-sm cursor-pointer"
                                        >
                                            {option.label}
                                        </label>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            ))}
        </>
    )
}
