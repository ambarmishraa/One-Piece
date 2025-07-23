import './index.css';

function App() {
  return (
    <div className="flex gap-4 p-4">
      <a
        href="/learn-more"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        User
      </a>
      <a
        href="/get-started"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Admin
      </a>
    </div>
  );
}

export default App;
