import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

const GroupChat = () => {
  return (
    <Link to={"/groupchat"} className='flex items-center gap-3 p-2 lg:p-4 border border-transparent border-b-slate-200 hover:border hover:border-primary rounded cursor-pointer'>
        <div >
            <Avatar
                width={50}
                height={50}
                name={"Group Chat"}
                userId={"no_id"}
                imageUrl={"https://www.freeiconspng.com/thumbs/group-png/group-of-people-icon-22.png"}
            />
        </div>
        <div>
            <div className='font-semibold text-ellipsis line-clamp-1'>
                {"GROUPCHAT"}
            </div>
        </div>
    </Link>
  )
}

export default GroupChat