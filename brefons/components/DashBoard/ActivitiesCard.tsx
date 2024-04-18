import React from 'react';

const activities = [
    {
        title: "County Activities",
        activities: [
            {
                title: "Outdoor Adventure",
                activityname: "Turkana",
                activitycaption: "637 Activities",
                up: true,
                amount: 3
            },
            {
                title: "Cultural Experience",
                activityname: "Marsabit",
                activitycaption: "89 Activities",
                up: true,
                amount: 3
            },
            {
                title: "Wellness Retreat",
                activityname: "West Pokot",
                activitycaption: "88 Activities",
                up: false,
                amount: 2
            },
            {
                title: "Culinary Delight",
                activityname: "Baringo",
                activitycaption: "582 Activities",
                up: true,
                amount: 3

            },
            {
                title: "Thrilling Excursion",
                activityname: "Meru",
                activitycaption: "423 Activities",
                up: true,
                amount: 3
            }
        ]
    },
    {
        title: "Daily Activities",
        activities: [
            {
                title: "Outdoor Adventure",
                activityname: "Construction of boreholes",
                activitycaption: "52 Activities",
                up:true,
                amount:3
            },
            {
                title: "Cultural Experience",
                activityname: "Trainings",
                activitycaption: "45 Activities",
                up:true,
                amount:3
            },
            {
                title: "Wellness Retreat",
                activityname: "Extension Services",
                activitycaption: "64 Activities",
                up:true,
                amount:3
            },
            {
                title: "Culinary Delight",
                activityname: "Nutrition Services",
                activitycaption: "24 Activities",
                up:true,
                amount:3
            },
            {
                title: "Thrilling Excursion",
                activityname: "Farm Activities",
                activitycaption: "20 Activities",
                up:false,
                amount:1
            }
        ]
    }
];

const ActivitiesCard = () => {
    return (
        <div className='md:grid md:grid-cols-2 gap-4'>
            {activities.map((activity,index)=> (
                <div className='shadow-md my-2 rounded-md bg-[#182237] p-4  col-span-1 w-full' key={index}>
                    <h3 className='text-gray-500 font-medium text-lg'>{activity.title}</h3>

                    {activity?.activities?.map((activity, index) => (
                        <div className='ml-2' key={index}>

                            <div className='flex justify-between gap-2 mt-4'>
                                <div className='flex flex-col gap-2 items-start justify-start'>
                                    <p className='text-md font-bold text-white'>{activity.activityname}</p>
                                    <p className='text-md font-bold text-gray-500'>{activity.activitycaption}</p>
                                </div>

                                <div className=' flex flex-row justify-between items-center gap-2 text-white font-medium text-sm'>
                                    <p>{activity.amount}</p>
                                    {/* {activity.up ? (<FaCaretUp className='text-green-600' />) : <FaCaretDown className='text-red-600' />
                                    } */}

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    );
};

export default ActivitiesCard;
