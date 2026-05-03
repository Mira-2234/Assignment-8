import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1",
        title: "The Lost World | Clean Architecture | Sapiens | Dune | The Martian  ✨ Special Discount on Annual Memberships!  📚 Over 1,000 Books Available Now  🎉 New Sci-Fi Collection Just Added ",
    },
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between items-center gap-4 bg-blue-100 py-2 px-2 '>
    
            <Marquee pauseOnHover={true}>
                {news.map((n)=> {
                  return  <span key={n._id}> {n.title}</span>
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;