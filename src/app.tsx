import '../styles.css';

export const App = () => {
  return (
    <div className="dark bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-green-400 mb-2">Amy Nguyen</h1>
          <p className="text-xl text-green-300">4th Year Dental Student | University of Michigan</p>
        </div>

        {/* Profile Summary */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <p className="text-gray-300 mb-4">
            Passionate dental student with a strong foundation in clinical skills, patient care, and academic excellence. 
            Seeking a residency position to further develop expertise in advanced dental procedures and contribute to the field of dentistry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-900 text-green-300 px-4 py-2 rounded-full text-sm">Leadership</span>
            <span className="bg-green-900 text-green-300 px-4 py-2 rounded-full text-sm">Clinical Excellence</span>
            <span className="bg-green-900 text-green-300 px-4 py-2 rounded-full text-sm">Patient Care</span>
            <span className="bg-green-900 text-green-300 px-4 py-2 rounded-full text-sm">Research</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};
