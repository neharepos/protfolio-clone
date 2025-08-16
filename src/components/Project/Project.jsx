import React from 'react'
import Heading from '../Heading/Heading';
import Cards from '../Cards/Cards'


const projects = [
  {
    title: "Banking Management System",
    date: "Jan 2024",
    description: "A Java-based project for managing customer accounts, transactions, and loans in a banking environment.",
  },
  {
    title: "Fraud Detection in Financial Transactions",
    date: "Mar 2024",
    description: "A machine learning model to detect fraudulent activities in real-time financial transactions.",
  },
  {
    title: "Real-time Digital Clock",
    date: "Jun 2024",
    description: "A JavaScript-based clock that displays the current time dynamically with live updates.",
  },
  {
    title: "Networking Fundamentals Quiz App",
    date: "Aug 2024",
    description: "A React application with MCQs to help students practice networking fundamentals.",
  },
  {
    title: "Portfolio Website",
    date: "Oct 2024",
    description: "A responsive portfolio website built with React and Tailwind CSS to showcase personal projects and skills.",
  },
];


const Project = () => {
  return (
    <div>
        <div>
            <Heading heading="Projects" description="List of my best projects"/>
            
            {projects.map((projects, index) => (
            <Cards 
            key={index}
            title={projects.title}
            date={projects.date}
            description={projects.description}
            />
            ))}
        </div>
    </div>
  )
}

export default Project