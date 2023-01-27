import { useQuery } from '@tanstack/react-query';
import React from 'react';
import LatestItem from '../../LatestItem/LatestItem';
import MainItem from '../../MainItem/MainItem';

const Home = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '52f6ae52d6mshd0444edb79c678bp195a94jsn8b52b2c677d8',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));



    const API_KEY = process.env.REACT_APP_apiKey;
    // console.log(API_KEY);

    const { data: sliders = [], isLoading } = useQuery({
        queryKey: ['sliders'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);
            const data = await res.json();
            return data.results;
        }
    })

    // console.log(sliders);

    if (isLoading) {
        return (
            <div className='bg-white flex items-end justify-center h-[200px]'>
                <h1 className='text-2xl font-semibold text-slate-600'>Loading...</h1>
            </div>
        )
    }

    return (
        <div className='mx-auto max-w-7xl py-5 px-4'>
            <div className="">
                <p>Total items: {sliders.length}</p>
            </div>
            <div className="flex flex-row justify-between gap-8">
                <div className="basis-3/4">
                    <MainItem></MainItem>
                </div>
                <div className="basis-1/4">
                    <h1 className='bg-[#0070e8] text-white px-2 py-3 font-semibold mb-3'>LATEST EPISODES</h1>
                    <LatestItem></LatestItem>
                </div>
            </div>
        </div>
    );
};

export default Home;