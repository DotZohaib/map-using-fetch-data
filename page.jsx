import React from 'react';

const ongFunc = () => {
  // Array of objects
  const data = [
    {
      Name: "Zohaib",
      Age: 22,
      Gender: "Male",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    },
    {
      Name: "Iqra",
      Age: 22,
      Gender: "Female",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    },
    {
      Name: "Laila",
      Age: 22,
      Gender: "Female",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    },
    {
      Name: "Zohaib",
      Age: 22,
      Gender: "Male",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    },
    {
      Name: "Iqra",
      Age: 22,
      Gender: "Female",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    },
    {
      Name: "Laila",
      Age: 22,
      Gender: "Female",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    },
    {
      Name: "Zohaib",
      Age: 22,
      Gender: "Male",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    },
    {
      Name: "Iqra",
      Age: 22,
      Gender: "Female",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    },
    {
      Name: "Laila",
      Age: 22,
      Gender: "Female",
      Occupation: "Software Engineer",
      Education: "Bachelor's Degree in Computer Science",
      WorkExperience: "2 years"
    }
  ];

  return data; // Return the array to use in the component
}

const Sapply = () => {
  const people = ongFunc(); // Get the data from the ongFunc function

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">People Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {people.map((person, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{person.Name}</h2>
            <p className="text-gray-600"><span className="font-medium">Age:</span> {person.Age}</p>
            <p className="text-gray-600"><span className="font-medium">Gender:</span> {person.Gender}</p>
            <p className="text-gray-600"><span className="font-medium">Occupation:</span> {person.Occupation}</p>
            <p className="text-gray-600"><span className="font-medium">Education:</span> {person.Education}</p>
            <p className="text-gray-600"><span className="font-medium">Work Experience:</span> {person.WorkExperience}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sapply;
