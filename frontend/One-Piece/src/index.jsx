
function App() {
  return (
    <div className="flex gap-4 p-4">
      <a
        href="/user"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        User
      </a>
      <a
        href="/admin"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Admin
      </a>
    </div>
  );
}

export default App;
