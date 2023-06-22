'use client'

import React from 'react'
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Title({
  children,
  showBack
}: {
  children: React.ReactNode,
  showBack: boolean
}) {
  const router = useRouter();

  return (
    <div className="bg-white shadow">
      <div className="mx-auto p-6 flex items-center">
        {
          showBack &&
            <button
              type="button"
              onClick={() => router.back()}
              className="
                rounded-sm
                bg-gray-800
                mr-3
                py-1
                px-2
                hover:bg-amber-600
              "
            >
              <div className="flex text-3xl text-white">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </button>
        }
        <h1 className="text-3xl font-bold text-gray-900">{children}</h1>
      </div>
    </div>
  )
}

export default Title