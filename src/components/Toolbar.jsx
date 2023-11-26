import '../../src/App.css'
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line react/prop-types
const Toolbar = ({ filters, onSelectFilter, selected }) => {

    // eslint-disable-next-line react/prop-types
    // const listFilters = filters.map((filter) => 
    //     <button 
    //         key={filter} 
    //         // selected={selected}
    //         className={!selected ? "selected" : ""}
    //         onClick={onSelectedFilter}
    //     >
    //         {filter}
    //     </button>
    // )

    return (
        <div className="toolbar-wrapper">
            {filters.map((filter) => (
                <button
                    key={uuidv4()}
                    onClick={() => onSelectFilter(filter)}
                    className={filter === selected ? "selected" : ""}
                >
                    {filter}
                </button>
            ))}
            {/* {listFilters} */}
        </div>
        // <div className="toolbar-wrapper">
        //     <button className="toolbar-all">All</button>
        //     <button className="toolbar-websites">Websites</button>
        //     <button className="toolbar-flayers">Flayers</button>
        //     <button className="toolbar-business">Business Cards</button>
        // </div>
    )
};

export default Toolbar;