import React from 'react';
import { IoBookmarkSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";


const PostYourAd = () => {
  return (
    <>
    <section className="post-your-ad-sec">
        <div className="custom-container">
            <div className="pyad-wrapper d-flex">
                <div className="left-side d-flex">
                    <div className="pyad-icon">
                        <IoBookmarkSharp />
                    </div>
                    <div className="pyad-description">
                        <h2 className="fs-1 fw-bold">Advertise on Maevent for free!</h2>
                        <p>Add your listing to the <strong>FREE</strong> Platform dedicated to events service provider...</p>
                    </div>
                </div>
                <div className="right-side">
                    <a href="javascript:void(0)" className='rightNavLink postYourAd'><FaPlus /> Post your AD</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PostYourAd;