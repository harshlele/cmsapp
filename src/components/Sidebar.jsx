import { Link } from "react-router-dom";
import { useState } from "react";
import { PersonFill, PlusCircle } from "react-bootstrap-icons";

export default function Sidebar(props) {
  const [checkedFilters, setChecked] = useState([]);

  return (
    <div className="w-full h-full p-4 flex flex-col justify-left text-white">
      <div className="w-full text-left text-xl max-h-3/4">
        <div className="text-2xl">Filter Tags</div>

        <ul className="list-outside my-4">
          <li className="flex items-center my-2">
            <input
              type="checkbox"
              name="uwu"
              id="uwu"
              className="filter-check"
            />
            <label htmlFor="uwu" className="truncate">
              {" "}
              UWUadfadsfasdfasdfasdfsadfasdf{" "}
            </label>
          </li>

          <li className="flex items-center my-2">
            <input
              type="checkbox"
              name="uwu"
              id="uwu"
              className="filter-check"
            />
            <label htmlFor="uwu" className="truncate">
              {" "}
              UWUadfadsfasdfasdfasdfsadfasdf{" "}
            </label>
          </li>

          <li className="flex items-center my-2">
            <input
              type="checkbox"
              name="uwu"
              id="uwu"
              className="filter-check"
            />
            <label htmlFor="uwu" className="truncate">
              {" "}
              UWUadfadsfasdfasdfasdfsadfasdf{" "}
            </label>
          </li>
        </ul>
      </div>

      <ul className="list-outside text-left border-t-2 border-white text-xl w-full">
        <li className="my-2">
          <Link to="/admin/new_post" className="flex items-center">
            <PlusCircle className="mr-2" />
            New Post
          </Link>
        </li>
        <li className="my-2">
          <Link to="/admin/change_password" className="flex items-center">
            <PersonFill className="mr-2" />
            Change Password
          </Link>
        </li>
      </ul>
    </div>
  );
}
