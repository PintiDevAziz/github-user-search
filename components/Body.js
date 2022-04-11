import React, { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { BsBuilding } from 'react-icons/bs'
import Link from 'next/link'
const Body = ({ firstData, open }) => {
  return (
    <div
      className={`flex h-auto min-h-[24rem]  gap-x-10 rounded-md bg-[#1F2A48] p-6  ${
        open ? ' visible  static opacity-100 ' : 'invisible absolute opacity-0'
      }`}
    >
      {firstData?.message !== 'Not Found' ? (
        <>
          <div>
            <img
              src={firstData?.avatar_url}
              alt=""
              className="h-28 w-28 rounded-full object-cover "
            />
          </div>
          <div className="w-[70%]">
            <div className="mb-4 flex items-center justify-between text-[#CFD5E6]">
              <p className="text-2xl">{firstData?.login}</p>
              <p className="text-[#7E869F]">
                {firstData?.created_at.slice(0, 10)}
              </p>
            </div>
            <div className="mb-8 text-[#7E869F]">
              {firstData?.bio ? firstData.bio : 'This Profile has no bio'}
            </div>
            <div className="mb-8 flex h-20 items-center justify-around rounded-md bg-[#131D2F]">
              <label className="flex flex-col items-center">
                <p className="mb-2 text-[#7E869F]">Repoes</p>
                <p className="text-xl font-semibold text-[#CFD5E6]">
                  {firstData?.public_repos}
                </p>
              </label>
              <label className="flex flex-col items-center">
                <p className="mb-2 text-[#7E869F]">Followers</p>
                <p className="text-xl font-semibold text-[#CFD5E6]">
                  {firstData?.followers}
                </p>
              </label>
              <label className="flex flex-col items-center">
                <p className="mb-2 text-[#7E869F]">Following</p>
                <p className="text-xl font-semibold text-[#CFD5E6]">
                  {firstData?.following}
                </p>
              </label>
            </div>
            <div className="grid  h-16 grid-cols-2 gap-6">
              <div className="flex items-center gap-x-2 text-xl text-[#7E869F]">
                <HiLocationMarker className="text-2xl  text-[#CFD5E6]" />
                <p>{firstData?.location}</p>
              </div>
              <div className="flex items-center gap-x-2 text-xl text-[#7E869F]">
                <AiOutlineTwitter className="text-2xl  text-[#CFD5E6]" />
                <p>
                  {firstData?.twitter_username
                    ? firstData?.twitter_username
                    : 'Not Aviable'}
                </p>
              </div>
              <div className="flex items-center gap-x-2 text-xl text-[#7E869F]">
                <BiLink className="text-2xl  text-[#CFD5E6]" />
                <Link href={`https://${firstData?.blog}`}>
                  <a target={'_blank'}>{firstData?.blog}</a>
                </Link>
              </div>
              <div className="flex items-center gap-x-2 text-xl text-[#7E869F]">
                <BsBuilding className="text-2xl  text-[#CFD5E6]" />
                <p>{firstData?.company ? firstData?.company : 'Null'}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mx-auto my-auto animate-pulse text-2xl text-white">
          This User doesn't exists
        </div>
      )}
    </div>
  )
}

export default Body
