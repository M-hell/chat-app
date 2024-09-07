import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useSelector } from 'react-redux';

function MeetingRoom({ roomId }) {

  const userId = useSelector((state) => state?.user?._id);
  const name = useSelector((state) => state?.user?.name);
  const containerRef = useRef(null);


  const setupMeeting = async () => {
    if (containerRef.current) {
      const appID = 2015637161;
      const serverSecret = 'd1526bf4083e6756136e958c1323caab';
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, userId, name);

      const zc = ZegoUIKitPrebuilt.create(kitToken);

      zc.joinRoom({
        container: containerRef.current, // Use ref's current property
        sharedLinks: [
          {
            name: 'Copy Room Id',
            url: `${roomId}`, // Just the room ID as URL
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
        showScreenSharingButton: true,
      });
    }
  };

  useEffect(() => {
    setupMeeting();
  }, [roomId , userId, name]); // Dependencies to re-run setup if they change

  return (
    <div 
      className='meeting-room-overlay'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 1)', 
        zIndex: 9999, // High z-index to ensure it's on top
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div ref={containerRef}  />
    </div>
  );
}

export default MeetingRoom;
