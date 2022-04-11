import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const SearchBar = ({ searchUser, setOpen }) => {
  const [input, setInput] = useState('')
  useEffect(() => {
    if (!input) {
      setOpen(false)
    }
  }, [input])
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-md bg-[#1F2A46] px-6">
      <label className="flex h-full w-full items-center gap-x-3">
        <AiOutlineSearch className="text-3xl text-[#1B59A5]" />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              searchUser(input)
            }
          }}
          type="text"
          className="h-full w-full  bg-transparent text-white outline-none"
          placeholder="Search GitHub username..."
        />
      </label>
      <button
        onClick={() => {
          searchUser(input)
        }}
        className="ml-6 rounded-md bg-[#0378FC] px-6 py-3 text-white"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
