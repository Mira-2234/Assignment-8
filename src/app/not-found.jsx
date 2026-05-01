import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-5'>
            <h2 className='font-bold text-5xl text-red-700'>This page is not found..</h2>
        <Link href={"/"}>
        <button className='btn btn-primary'>Back to Home</button>
        </Link>
        </div>
    );
};

export default NotFound;