import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Video_Room = () => {
  const { id } = useParams();

  const meeting = async (element) => {
    const appID = 1716687884;
    const serverSecret = 'cd8bb2a0450c48562f575f80f306a4da';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      'Rakesh'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url: `http://localhost:5173/room/${id}`, // make sure this matches your dev URL
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return <div ref={meeting} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Video_Room;
