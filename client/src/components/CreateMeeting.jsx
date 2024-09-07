import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setRoomId } from '../redux/userSlice';
import MeetingRoom from './MeetingRoom';

function CreateMeeting() {
  const dispatch = useDispatch();
  const [joinid, setjoinid] = useState("");
  const [open,setopen]=useState(false)
  const roomId = useSelector((state) => state?.user?.roomId);
  const _id=useSelector((state) => state?.user?._id);

  const handlecreate = () => {
    const newRoomId = _id;
    dispatch(setRoomId(newRoomId));
    setopen(true)
  };

  const handlejoinroom = () => {
    if (joinid.trim() === "") {
      alert("Please enter a valid meeting ID.");
      return;
    }
    dispatch(setRoomId(joinid));
    setopen(true)
  };

  return (
    <>
      {open ? (
        <MeetingRoom roomId={roomId} />
      ) : (
        <div className='bg-white h-screen flex flex-col justify-center items-center gap-3'>
          <button 
            onClick={handlecreate}  
            className='bg-blue-400 border-solid border-2 border-black rounded-lg px-4 py-4 flex items-center justify-center gap-4'
          >
            <FaPlus /> Create New Meeting
          </button>
        {/* <input type='text' value={_id} className='border-solid border-2 border-black rounded-lg px-4 py-4 flex items-center justify-center' /> */}


          

          <input 
            type="text" 
            value={joinid}
            onChange={(e) => setjoinid(e.target.value)}
            placeholder='Enter meeting id to join room' 
            className='border-solid border-2 border-black rounded-lg px-4 py-4 flex items-center justify-center gap-4' 
          />
          <button onClick={handlejoinroom} className='bg-red-500 border-solid border-2 border-black rounded-lg px-2 py-2 flex items-center justify-center'> Join Room </button>
        </div>
      )}
    </>
  );
}

export default CreateMeeting;

// Define this function based on your needs
