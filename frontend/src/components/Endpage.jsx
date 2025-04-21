import React from "react";
import openTime from '../assets/opentime.gif'
import delivery from '../assets/delivery.gif'
import subscribe from '../assets/subscribe.gif'

function Endpage() {
  return (
    <section style={{backgroundColor: "black"}} className="endpage">
      <div className="containerE">
        <div className="boxes">
          <div className="miniboxes">
            <img
              src={delivery}
              alt="Delivery Icon"
              className="icon"
            />
            <p className="T">DELIVERY SERVICE</p>
            <span id="equalicon" className="material-symbols-outlined">
              =
            </span>
          </div>
          <div className="miniboxes">
            <p className="M">
              Ruby's Catering Unit 4 Wallrigate Rd <br />
              Greenford Middlex UB6 7LH <br />
              mail@rubyscatering.oo.uk
            </p>
          </div>
          <div className="miniboxes">
            <p className="L">020 8799 7180</p>
          </div>
        </div>

        <div className="boxes">
          <div className="miniboxes">
            <img
              src={openTime}
              alt="Opening Time Icon"
              className="icon"
            />
            <p className="T">OPENING TIME</p>
            <span id="equalicon" className="material-symbols-outlined">
              =
            </span>
          </div>

          <div className="miniboxes">
            <p className="T">Lunch Service</p>
            <p className="M">Friday-Sunday 12pm-1:30pm</p>
          </div>

          <div className="miniboxes">
            <p className="T">Dinner Service</p>
            <p className="M">Daily: Bookings available from 6pm-9:30pm</p>
          </div>
        </div>

        <div className="boxes">
          <div className="miniboxes">
            <img
              src={subscribe}
              alt="Subscribe Icon"
              className="icon"
            />
            <p className="T"> SUBSCRIBE US</p>
            <span id="equalicon" className="material-symbols-outlined">
              =
            </span>
          </div>

          <div className="miniboxes">
            <p className="M">
              Subscribe to the Ruby newsletter to get <br />
              regular updates about offers
            </p>
          </div>

          <div className="miniboxes">
            <form action="">
              <input type="text" className="email-input" placeholder="Put Your Email Address" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Endpage;
