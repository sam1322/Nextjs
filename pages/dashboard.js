import React from "react";
import beautiful from "/public/beautiful.jpg";
import selfie from '/public/selfie2.jpg'
import Image from "next/image";

function Dashboard() {
  return (
    <div>
      <div className="bg">
        <Image
          src={beautiful}
          fill={true}
          alt={"Background Image"}
          // objectFit="cover"
        />
      </div>
      <div className="body">
        <div className="head">FRONT END DEVELOPER</div>
        <div className="img">
          <Image src={selfie} alt="sriram" width={225} height={225} style={{borderRadius:"50%"}}/>
        </div>
        <div className="name">SRIRAM M. PANT</div>
      </div>

      <style jsx>{`
        .bg {
          // position:relative;
          object-fit: contain;
          // background: url('/public/beautiful.jpg');
          z-index: -1;
        }
        .body {
          position: relative;
          z-index: 10;
        }
        .head{
          color:white;
          font-size:50px;
        }
        .name{
          color:white;
          font-weight:500;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
