'use client'

import React from "react";
import {useRouter} from "next/navigation";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

export function BackButton() {
  const router = useRouter();

  return (
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
    ">
      <div className="flex text-3xl text-white">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </button>
  )
}