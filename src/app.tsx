import '../styles.css';

export const App = () => {
  return (
    <div className="dark min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold text-green-500 dark:text-green-400 mb-4">
        Hi there! 😊
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md">
        I'm Amy, a dental student at the University of Michigan. I'm excited to share what I'm learning and building along the way!
      </p>
      <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition">
        Let's get started!
      </button>
    </div>
  );
};
