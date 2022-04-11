import React, { useEffect, useState } from 'react'
import { HiSun } from 'react-icons/hi'
import SearchBar from '../components/SearchBar'
import Body from '../components/Body'
import Loader from '../components/Loader'
const Index = () => {
  const [firstData, setFirstdata] = useState()
  const [loading, setLoading] = useState()
  const [open, setOpen] = useState(false)
  const searchUser = async (usr) => {
    await setLoading(true)
    const req = await fetch(`https://api.github.com/users/${usr}`)
    const res = await req.json()
    await setFirstdata(res)
    await setLoading(false)
  }
  useEffect(() => {
    if (firstData) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [firstData])
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#141C2F]">
      <div className="flex w-[45rem] flex-col gap-y-8 font-semibold">
        <div className=" flex justify-between text-white">
          <h1 className=" text-xl">DevFinder</h1>
          <div className="flex cursor-pointer items-center gap-x-2">
            <p className=" uppercase tracking-wider">Light</p>{' '}
            <HiSun className="text-2xl" />
          </div>
        </div>
        <SearchBar searchUser={searchUser} setOpen={setOpen}  />
        {loading ? <Loader /> : <Body firstData={firstData} open={open} />}
      </div>
    </div>
  )
}
export default Index
