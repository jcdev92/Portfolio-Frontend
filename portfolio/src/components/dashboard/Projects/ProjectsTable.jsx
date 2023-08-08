export const ProjectsTable = () => {
  return (
    <div className="w-5/6 h-5/6">
      <div className="relative overflow-auto backdrop-blur-sm bg-white/30 w-full h-5/6 rounded-md shadow-md">
        <table className="w-full sm:rounded-lg text-sm text-left text-white dark:text-gray-400">
          <thead className="border-b text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                url
              </th>
              <th scope="col" className="px-6 py-3">
                github
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className=" dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                Apple Watch
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Watches</td>
              <td className="px-6 py-4">$199</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                Apple iMac
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">PC</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                Apple AirPods
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$399</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                iPad Pro
              </th>
              <td className="px-6 py-4">Gold</td>
              <td className="px-6 py-4">Tablet</td>
              <td className="px-6 py-4">$699</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                Magic Keyboard
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                Smart Folio iPad Air
              </th>
              <td className="px-6 py-4">Blue</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$79</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                AirTag
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$29</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className=" dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-3" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                AirTag
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$29</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium hover:text-gray-400 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center justify-between pt-4 "
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-200 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-yellow-400 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-yellow-400 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8 backdrop-blur-sm bg-white/30">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-white  border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
