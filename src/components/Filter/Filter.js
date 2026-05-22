import "./Filter.css";

import {
  FiFilter
} from "react-icons/fi";

function Filter({

  showFilters,
  setShowFilters,

  buttons,

  sortLabel,

  sortActive,

  onSortClick

}) {

  return (

    <div className="filter-wrapper">

      {/* FILTER ICON */}

      <div
        className={
          showFilters
            ? "filter-icon rotate-open"
            : "filter-icon rotate-close"
        }
        onClick={() =>
          setShowFilters(!showFilters)
        }
      >

        <FiFilter />

      </div>

      {/* BUTTONS */}

      <div
        className={
          showFilters
            ? "filter-buttons show-filter-buttons"
            : "filter-buttons"
        }
      >

        {/* SORT BUTTON */}

        {
          sortLabel && (

            <button
              className={
                sortActive
                  ? "filter-btn active-filter-btn"
                  : "filter-btn"
              }
              onClick={onSortClick}
            >

              {sortLabel}

            </button>

          )
        }

        {/* OTHER BUTTONS */}

        {
          buttons.map((item) => (

            <button
              key={item.id}
              className={
                item.active
                  ? "filter-btn active-filter-btn"
                  : "filter-btn"
              }
              onClick={item.onClick}
            >

              {item.label}

            </button>

          ))
        }

      </div>

    </div>

  );

}

export default Filter;