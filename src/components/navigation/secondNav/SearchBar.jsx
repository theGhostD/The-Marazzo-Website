import { useState } from "react";
import { Link } from "react-router-dom";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { ImSearch } from "react-icons/im";

const SearchBar = () => {
    const [dropIcon, setDropdownIcon] = useState(false);
    const [categoriesHover, setcategoriesHover] = useState(false);


    const categoriesHoverHandler = ()=>{
        setcategoriesHover(!categoriesHover);
        setDropdownIcon(!dropIcon);
    }
    return (
        <div className=" w-8/12 h-16  ">
            <form action="" className=" h-full flex    ">
                {/* categoriesdropdown */}
                <div className=" h-full flex text-center p-4  bg-gray-100 rounded-tl-full rounded-b-full rounded-br-lg">
                    <div
                        className="relative  cursor-pointer flex  items-center gap-6 text-gray-400"
                        onClick={categoriesHoverHandler}
                    >
                        categories{" "}
                        <span>
                            {dropIcon ? (
                                <AiFillCaretDown className="text-xs text-" />
                            ) : (
                                <AiFillCaretUp className="text-xs text-" />
                            )}
                        </span>{" "}
                    </div>

                    <div
                        className={`${categoriesHover
                                ? "bg-gray-500 absolute mt-1 top-[120px]"
                                : "hidden"
                            }`}
                    >
                        <ul className=".drop_down_parent ">
                            <li className="drop_down ">
                                <Link className="pr-12 pl-2">computer</Link>
                            </li>
                            <li className="drop_down ">
                                <Link className="pr-12 pl-2">electronic</Link>
                            </li>
                            <li className="drop_down ">
                                <Link className="pr-12 pl-2">shoes</Link>
                            </li>
                            <li className="drop_down ">
                                {" "}
                                <Link className="pr-12 pl-2">Watches</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* searchField */}
                <div className=" w-full h-full flex">
                    <input
                        placeholder="search here..."
                        className="w-full h-full outline-0  text-gray-600"
                    />
                    <button
                        className=" bg-yellow-400 rounded-r-full h-full  p-4 text-lg"
                        onClick={() => { }}
                    >
                        <ImSearch />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
