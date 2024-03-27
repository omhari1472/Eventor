import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function MyComponent({ event, user }) {

  const [venue, setVenue] = useState(null);

  // Extract venueId from event or set it to an empty string if event is null
  const venueId = event ? event.venueID : '';
  console.log('dhshddsbd',venueId);
  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/auth/venue/${venueId}`);
        setVenue(response.data.venue);
        console.log("Venue", response.data.venue); // Log the venue here
      } catch (error) {
        console.error('Error fetching venue:', error);
      }
    };

    fetchVenue();
  }, [venueId]);

  return (
    <div id="invoice-container" style={{padding:'1rem'}} className="flex flex-col justify-center bg-slate-50 max-w-[595px] h-auto">
      {/* Invoice header */}
      <div className="flex gap-5 justify-between uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold leading-8 text-zinc-900">
            Invoice
          </div>
          <div className="text-xs font-medium tracking-wide leading-4 text-gray-500">
            #AB2324-01
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1cda5d87ea6791e2ce9d54aed323f9cd59491dfd5ff9fe26cbcd5d21d174995?"
          className="shrink-0 w-12 aspect-square"
        />
      </div>
      
      {/* Invoice details */}
      <div className="flex gap-5 items-start mt-12 text-xs font-semibold leading-4 text-gray-500 max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col flex-1 self-stretch text-zinc-900">
          <div>Issued</div>
          <div className="mt-1.5 text-gray-500">{new Date().toLocaleString()}</div>
          <div className="mt-4">Due</div>
          <div className="mt-1.5 text-gray-500">{new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000).toLocaleString()}</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-zinc-900">Billed to</div>
          <div className="mt-1.5">{user ? user.username : ''}</div>
          <div className="leading-4">{user ? user.email : ''}</div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-zinc-900">From</div>
          <div className="mt-1.5" style={{ color: 'rebeccapurple', fontSize: '1.3rem', marginBottom: '5px' }}>Eventor</div>
          <div className="leading-4">
            Boys Hostel Nie North
            <br />
            Mysuru, Karnataka, India, 570018
          </div>
        </div>
      </div>
      
      {/* Event details */}
      <div className="mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-xs font-semibold leading-4 text-zinc-900 max-md:mt-10">
              <div>Booking</div>
              <div className="flex gap-1.5 mt-2 text-gray-500">
                <div className="grow">Event</div>
                <div className="text-xs font-light leading-4 text-center text-zinc-400">
                  •
                </div>
                <div className='mr-2'>Event Date</div>
                <div>Event Time</div>
              </div>
              <div className="flex gap-1.5 mt-2 text-gray-500">
                <div className="grow">{event ? event.eventType : ''}</div>
                <div className="text-xs font-light leading-4 text-center text-zinc-400">
                  •
                </div>
                <div className='mr-5'>{event ? event.eventDate : ''}</div>
                <div>{event ? event.eventTime : ''}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-xs leading-4 max-md:mt-10">
              {/* Invoice details */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Invoice footer */}
      <div className="flex gap-5 justify-between self-end py-2.5 mt-2.5 text-xs font-bold leading-4 border-violet-500 border-solid border-y-2">
        <div className="text-violet-600">Amount due</div>
        <div className="flex gap-0.5 justify-end text-right text-violet-600 whitespace-nowrap">
          <div className="grow">US$</div>
          <div>400.00</div>
        </div>
      </div>
      <div className="flex relative flex-col items-start px-10 mt-52 w-full text-xs leading-4 text-gray-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="font-semibold text-zinc-900">
            Thank you for the booking!
          </div>
          <div className="flex gap-1.5 mt-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6684b639ab9486dc783528c9c165cc8cffc432a1d3dd3e321a77e249e8cc7e0?"
              className="shrink-0 my-auto w-2.5 aspect-square fill-zinc-400"
            />
            <div className="flex-auto">
              Please pay within 15 days of receiving this invoice.
            </div>
          </div>
          <div className="flex gap-5 self-stretch mt-11 font-medium max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-auto gap-4">
              <div className="flex-auto">EVENTOR, IN</div>
              <div>+91 70917 58222</div>
            </div>
            <div>omhari1472@gmail.com</div>
          </div>
        </div>


    </div>
  );
}

function Review() {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const eventDataString = localStorage.getItem("eventData");
  const event = eventDataString ? JSON.parse(eventDataString) : null;
  console.log("djna",event);

  const handleDownloadBill = () => {
    const input = document.getElementById('invoice-container');

    html2canvas(input, { scrollX: 0, scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('bill.pdf');
    });
  };

  return (
    <div>
      <MyComponent event={event} user={user} />
      <Button variant="contained" color="primary" onClick={handleDownloadBill} style={{ marginTop: '20px' }}>
        Download Invoice
      </Button>
    </div>
  );
}

export default Review;
