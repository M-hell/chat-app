import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const VideoCall = () => {
  return (
    <Link to={"/create-meeting-page"} className='flex items-center gap-3 p-2 lg:p-4 border border-transparent border-b-slate-200 hover:border hover:border-primary rounded cursor-pointer bg-blue-100'>
        <div >
            <Avatar
                width={50}
                height={50}
                name={"Video Call"}
                imageUrl={"https://cdn-icons-png.flaticon.com/512/4518/4518518.png"}
            />
        </div>
        <div>
            <div className='font-semibold text-ellipsis line-clamp-1'>
                {"Create a Meeting"}
            </div>
        </div>
    </Link>
  )
}

export default VideoCall