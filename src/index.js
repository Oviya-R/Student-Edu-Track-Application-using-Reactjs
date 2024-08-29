import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaUser, FaBook, FaEnvelope, FaClinicMedical, FaCalendarAlt } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import { IoMdContacts } from "react-icons/io";
import { IoDocumentsSharp } from "react-icons/io5";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { IoNewspaper } from "react-icons/io5";

import Logo from './images/logo (1).png';
import './index.css';

const Dashboard = () => {
  const [regularStudents, setRegularStudents] = useState(8);
  const [remedialStudents, setRemedialStudents] = useState(13);
  const [inPaidClubs, setInPaidClubs] = useState(0);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="logo"/>
        </div>
        <ul className="menu">
          <div className='icons' ><IoMdContacts /></div>
          <li>Student Management</li>
          <div className='icons' ><IoDocumentsSharp /></div>
          <li>Financial Management</li>
          <div className='icons' ><RiDiscountPercentFill /></div>
          <li>Quality Control</li>
          <div className='icons' ><IoNewspaper /></div>
          <li>Report Delivery</li>
          <div className='icons' ><BiSolidReport /></div>
          <li>Attendance</li>
        </ul>
      </div>
     
      <div className="main-content">
        <div className="header">
          <h2>Student Management</h2>
        </div>
        <div className="stats">
          <div className="stat-item red">
            <div className='icons' ><FaUser /></div>
            <h3>{regularStudents}</h3>
            <p>Regular Students</p>
          </div>
          <div className="stat-item purple">
          <div className='icons' ><GiTeacher /></div>
            <h3>{remedialStudents}</h3>
            <p>Remedial Students</p>
          </div>
          <div className="stat-item green">
          <div className='icons' ><MdSchool /></div>
            <h3>{inPaidClubs}</h3>
            <p>In Paid Clubs</p>
          
          </div>
         
        </div>
        
        <div className="menu-grid">
          <div className="menu-item" onClick={() => setRegularStudents(regularStudents + 1)}>
          <div className='icons' ><FaUser /></div>
            <p>Regular Enrollment</p>
          </div>
          <div className="menu-item" onClick={() => setRemedialStudents(remedialStudents + 1)}>
          <div className='icons' ><FaBook /></div>
            <p>Remedial Enrollment</p>
          </div>
          <div className="menu-item" onClick={() => setInPaidClubs(inPaidClubs + 1)}>
          <div className='icons' ><MdSchool /></div>
            <p>Club Management</p>
          </div>
          <div className="menu-item">
          <div className='icons' ><GiTeacher /></div>
            <p>Classroom Management</p>
          </div>
          <div className="menu-item">
          <div className='icons' ><FaEnvelope /></div>
            <p>SMS / EMAIL</p>
          </div>
          <div className="menu-item">
          <div className='icons' ><FaCalendarAlt /></div>
            <p>Attendance</p>
          </div>
          <div className="menu-item">
          <div className='icons' ><FaClinicMedical /></div>
            <p>Clinic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Dashboard/>,document.getElementById('root'));
