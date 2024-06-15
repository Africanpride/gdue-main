/* eslint-disable @next/next/no-img-element */
import React from 'react';

type EventCardProps = {
  date: {
    month: string;
    day: number;
    time: string;
  };
  event: {
    title: string;
    description: string;
    image: string;
    venue: string;
    logo: string;
  };
};

const EventCard: React.FC<EventCardProps> = ({ date, event }) => {
  return (
    <section className="mx-auto bg-gray-700 h-screen flex items-center justify-center px-8">
      <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
        <div
          className="w-full h-64 bg-top bg-cover rounded-t"
          style={{ backgroundImage: `url(${event.image})` }}
        ></div>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl">{date.month}</div>
            <div className="md:text-6xl">{date.day}</div>
            <div className="md:text-xl">{date.time}</div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
              {event.title}
            </h1>
            <p className="leading-normal">{event.description}</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="w-1/2">{event.venue}</div>
              <div className="w-1/2 flex justify-end">
                <img src={event.logo} alt="event logo" className="w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
