import React from 'react';

const LatestItem = () => {
    return (
        <div>
            <div className="p-3 pt-0">
                <div className="card card-side bg-base-100 shadow-xl rounded-none h-14">
                    <div className="basis-1/4">
                        <img src="https://placeimg.com/200/280/arch" alt="Movie" className='h-14 w-full' />
                    </div>
                    <div className="card-body p-0 basis-3/4">
                        <p className='pl-2'>Click the button to watch on Jetflix app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestItem;