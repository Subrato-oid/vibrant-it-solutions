import * as React from 'react';

type ServiceProps = {}

const Service = ({}:ServiceProps) => (
    <div className="services">
        <h2>
          <span className="head1">Our</span>
          <span className="head2">Services</span>
        </h2>
        <div className="Scontainer">
          <div className="box">
            <img className="slogo" src="images/sd.svg" alt="Logo 1" />
            <h2>
              Software Development <img src="images/down-right 1.svg" alt="" />
            </h2>
            <p>
              Vibrant IT Solutions Pvt. Ltd. is well known for software’s
              end-to-end development that involves everything from business
              analysis to software delivery and support.
            </p>
          </div>

          <div className="box">
            <img className="slogo" src="images/wdi.svg" alt="Logo 2" />
            <h2>Web Development <img src="images/down-right 1.svg" alt="" /></h2>
            <p>
              VibrantIT solutions professionally create, design, and
              continuously provide customer support. We make different kinds of
              web software that people love using.
            </p>
          </div>

          <div className="box">
            <img
              className="slogo"
              src="images/Services Card Icon (2).svg"
              alt="Logo 3"
            />
            <h2>
              Software Testing <img src="images/down-right 1.svg" alt="" />
            </h2>
            <p>
              Our team has skilled testers who are always ready to take your
              project and test every bit of your project.
            </p>
          </div>

          <div className="box">
            <img className="slogo" src="images/it.svg" alt="Logo 4" />
            <h2>IT Outsourcing <img src="images/down-right 1.svg" alt="" /></h2>
            <p>
              VibrantIT Solutions manages the IT jobs you need help with and
              also collaborates with vendors you deliver those services.
            </p>
          </div>

          <div className="box">
            <img
              className="slogo"
              src="images/Services Card Icon (4).svg"
              alt="Logo 5"
            />
            <h2>IVRS and Q-SMS <img src="images/down-right 1.svg" alt="" /></h2>
            <p>
              VibrantIT Solutions offers improved communications services with
              the duo of IVRS and Q-SMS Services. We help manage calls and SMS
              queues efficiently and in organized ways.
            </p>
          </div>

          <div className="box">
            <img
              className="slogo"
              src="images/Services Card Icon (5).svg"
              alt="Logo 6"
            />
            <h2>
              Mobile App Development <img src="images/down-right 1.svg" alt="" />
            </h2>
            <p>
              We at VibrantIT provides comprehensive services covering the
              entire application lifecycle, from design and integration to
              management.
            </p>
          </div>

          <div className="box">
            <img className="slogo" src="images/Group (3).svg" alt="Logo 7" />
            <h2>
              E-Commerce Solutions <img src="images/down-right 1.svg" alt="" />
            </h2>
            <p>
              VibrantIT helps you create customized online shops, user-friendly
              and secure for transactions for customers.
            </p>
          </div>
          <div className="box">
            <img className="slogo" src="images/fnb.svg" alt="Logo 7" />
            <h2>
              Food & Beverages <img src="images/down-right 1.svg" alt="" />
            </h2>
            <p>
              At Vibrant Solutions Pvt Ltd, we specialize in using new
              technology to make special software and apps for the food and
              drink industry.
            </p>
          </div>
        </div>
      </div>
);

export default Service;