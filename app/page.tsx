import Header from "./components/Header"

export default function Home() {
  return (
    <div className="min-h-screen flex text-gray-800 flex-col bg-gray-100">
      <Header/>
      <div className="mt-5 text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Explore Knowledge Across Various Topics
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to a hub of diverse knowledge and insights. Explore articles, guides, and more on a wide range of topics.
        </p>
        <a
          href="/blog" // Replace with the actual link to your blog page
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 inline-block"
        >
          Explore Blog
        </a>
      </div>
      {/* Add other sections or content promoting different blog categories/topics */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Topics</h2>
        <div className="flex flex-wrap justify-center">
          {/* Example topic cards */}
          <div className="m-4 p-4 bg-white shadow-lg rounded-lg w-64">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Science & Technology</h3>
            <p className="text-gray-600">
              Discover the latest advancements and innovations in the world of science and technology.
            </p>
          </div>
          <div className="m-4 p-4 bg-white shadow-lg rounded-lg w-64">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Travel & Adventure</h3>
            <p className="text-gray-600">
              Embark on exciting journeys and explore the beauty of different destinations.
            </p>
          </div>
          {/* Add more topic cards as needed */}
        </div>
      </div>
    </div>
  );
}
