function Events() {
  return (
    <>
      <div
        id="events"
        className="flex flex-col items-center lg:my-20 my-12 gap-12"
      >
        <h1 className="text-2xl font-bold uppercase">Upcoming Events</h1>

        <Event
          image="./assets/Events.jpg"
          title="Ferrari Event"
          date="1.2.2023"
          location="Italy"
          description="
          This event will be held in tallinn, it is very nice
          This event will be held in tallinn, it is very nice
          This event will be held in tallinn, it is very nice
          This event will be held in tallinn, it is very nice
          "
          descriptionTwo="
          This event will be heltallinn, it is very nice
          This event will be held in tallinn, it is very nice
          This event will be held in tallinn, it is very nice
          This event will be held in tallinn, it is very nice
          This event will be held in tallinn, it is very nice
          This event will be held in tallinn, it is very nice
          This event will be held in tallinn, it is very nice
          "
        ></Event>
      </div>
    </>
  );
}

import { useEffect, useRef } from 'react';

function Event({ image, title, date, location, description, descriptionTwo }) {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const adjustImageHeight = () => {
      const eventDetailsHeight = document.getElementById('eventDetails').offsetHeight;
      if (imageContainerRef.current) {
        imageContainerRef.current.style.height = eventDetailsHeight + 8 + 'px';
      }
    };

    adjustImageHeight();

    // Adjust image height on window resize
    window.addEventListener('resize', adjustImageHeight);

    return () => {
      window.removeEventListener('resize', adjustImageHeight);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 bg-neutral-50 rounded-2xl w-2/3 max-w-6xl min-h-20 shadow-lg shadow-neutral-200/60">
        <div ref={imageContainerRef} className="flex-shrink-0 h-60 lg:h-auto lg:w-1/3 overflow-hidden rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl">
          <img
            className="h-full w-full object-cover object-center"
            src={image}
            alt=""
            loading="eager"
          />
        </div>
        <div id="eventDetails" className="flex flex-col gap-1 p-4 text-sm lg:w-2/3 lg:mt-2">
          <div className="font-bold text-base md:text-xl lg:text-2xl">{title}</div>
          <div className="flex gap-1">
            <div className="font-bold">{date}</div>
            <div> — </div>
            <div className="">{location}</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className="text-pretty">{description}</div>
            <div className="text-pretty">{descriptionTwo}</div>
          </div>
        </div>
      </div>
    </>
  );
}



export default Events;
