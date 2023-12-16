import { useState } from 'react';
import './beadssidebar.css';

const Beadssidebar = () => {
    const [activeSection, setActiveSection] = useState(null);
  

    const toggleVisibility = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [type,settype]=useState('')

    function handlefilter(typeFilter) {
        // If the filter already contains the selected shape, remove it
        
        settype(typeFilter)

        if (selectedFilters.includes(typeFilter)) {
            setSelectedFilters(selectedFilters.filter(item => item !== typeFilter))
        } else {
            setSelectedFilters([...selectedFilters, typeFilter]);
        }
       
    }
    function removeFilter(indexToRemove) {
    
        // handlefilter()
       let aop= document.getElementById(type)
       aop.checked=false
        
        const updatedFilters = selectedFilters.filter((_, index) => index !== indexToRemove);
        setSelectedFilters(updatedFilters);
    }
    
    

    return (
        <>
            <div className='filter-data'>
                {selectedFilters.map((selectedFilter, index) => (
                        <div key={index} className="filter-item">
                            <h1>{selectedFilter} <span className='close-button' onClick={() => removeFilter(index)}>X</span></h1>
                            
                        </div>
                    ))}
                    
            </div>
            <div className="sidenav-beads">
                {/* Categories */}
                <div className="select-main" onClick={() => toggleVisibility('categories') } >
                    Categories
                    <span>
                        <i className="fa-solid fa-caret-down" ></i>
                    </span>
                </div>
                <div className='optionsmain' style={{ display: activeSection === 'categories' ? 'block' : 'none' }}>
                   <div>
                        <input type="checkbox" id="Vintage-Look" name="name" value="Anil" onChange={() => handlefilter('Vintage-Look')}/>
                        <label htmlFor="Vintage-Look">Vintage-Look</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Metallic-Look" name="name" value="Anil" onChange={() => handlefilter('Metallic-Look')}/>
                        <label htmlFor="Metallic-Look">Metallic Look</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Ntense-Look" name="name" value="Anil" onChange={() => handlefilter('Ntense-Look')}/>
                        <label htmlFor="Ntense-Look">Ntense Look</label>
                    </div>
                </div>

                {/* shapes */}
                <div className="select-main" onClick={() => toggleVisibility('sections')}>
                    Shapes
                    <span>
                        <i className="fa-solid fa-caret-down"></i>
                    </span>
                </div>
                <div className='optionsmain' style={{ display: activeSection === 'sections' ? 'block' : 'none' }}>
                <div>
                        <input type="checkbox" id="Cylinder" name="name" value="Anil" onChange={() => handlefilter('Cylinder')}/>
                        <label htmlFor="Cylinder">Cylinder</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Disc" name="name" value="Anil" onChange={() => handlefilter('Disc')}/>
                        <label htmlFor="Disc">Disc</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Droplet" name="name" value="Anil" onChange={() => handlefilter('Droplet')}/>
                        <label htmlFor="Droplet">Droplet</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Cube" name="name" value="Anil" onChange={() => handlefilter('Cube')}/>
                        <label htmlFor="Cube">Cube</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Oval" name="name" value="Anil" onChange={() => handlefilter('Oval')}/>
                        <label htmlFor="Oval">Oval</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Round" name="name" value="Anil" onChange={() => handlefilter('Round')}/>
                        <label htmlFor="Round">Round</label>
                    </div>
                </div>

                {/* colors */}
                <div className="select-main" onClick={() => toggleVisibility('shapes')}>
                    Colors
                    <span>
                        <i className="fa-solid fa-caret-down"></i>
                    </span>
                </div>
                <div className='optionsmain' style={{ display: activeSection === 'shapes' ? 'block' : 'none' }}>
                    <div>
                        <input type="checkbox" id="Beige" name="name" value="Ahmed" onChange={() => handlefilter('Beige')}/>
                        <label htmlFor="Beige">Beige</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Blue" name="name" value="Ahmed" onChange={() => handlefilter('Blue')}/>
                        <label htmlFor="Blue">Blue</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Brown" name="name" value="Ahmed" onChange={() => handlefilter('Brown')}/>
                        <label htmlFor="Brown">Brown</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Yellow" name="name" value="Ahmed" onChange={() => handlefilter('Yellow')}/>
                        <label htmlFor="Yellow">Yellow</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Gold" name="name" value="Ahmed" onChange={() => handlefilter('Gold')}/>
                        <label htmlFor="Gold">Gold</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Green" name="name" value="Ahmed" onChange={() => handlefilter('Green')}/>
                        <label htmlFor="Green">Green</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Grey" name="name" value="Ahmed" onChange={() => handlefilter('Grey')}/>
                        <label htmlFor="Grey">Grey</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Copper" name="name" value="Ahmed" onChange={() => handlefilter('Copper')}/>
                        <label htmlFor="Copper">Copper</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Mix-color" name="name" value="Ahmed" onChange={() => handlefilter('Mix-color')}/>
                        <label htmlFor="Mix-color">Mix color</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Orange" name="name" value="Ahmed" onChange={() => handlefilter('Orange')}/>
                        <label htmlFor="Orange">Orange</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Purple" name="name" value="Ahmed" onChange={() => handlefilter('Purple')}/>
                        <label htmlFor="Purple">Purple</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Red" name="name" value="Ahmed" onChange={() => handlefilter('Red')}/>
                        <label htmlFor="Red">Red</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Pink" name="name" value="Ahmed" onChange={() => handlefilter('Beige')}/>
                        <label htmlFor="Pink">Pink</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Taupe" name="name" value="Ahmed" onChange={() => handlefilter('Taupe')}/>
                        <label htmlFor="Taupe">Taupe</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Turquoise" name="name" value="Ahmed" onChange={() => handlefilter('Turquoise')}/>
                        <label htmlFor="Turquoise">Turquoise</label>
                    </div>
                    <div>
                        <input type="checkbox" id="White" name="name" value="Ahmed" onChange={() => handlefilter('White')}/>
                        <label htmlFor="White">White</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Silver" name="name" value="Ahmed" onChange={() => handlefilter('Silver')}/>
                        <label htmlFor="Silver">Silver</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Black" name="name" value="Ahmed" onChange={() => handlefilter('Black')}/>
                        <label htmlFor="Black">Black</label>
                    </div>
                </div>
                {/* size */}
                <div className="select-main" onClick={() => toggleVisibility('size')}>
                    Sizes
                    <span>
                        <i className="fa-solid fa-caret-down"></i>
                    </span>
                </div>
                <div className='optionsmain' style={{ display: activeSection === 'size' ? 'block' : 'none' }}>
                <div>
                        <input type="checkbox" id="6" name="name" value="Anil" onChange={() => handlefilter('6')}/>
                        <label htmlFor="6">6 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="6.5" name="name" value="Anil"  onChange={() => handlefilter('6.5')}/>
                        <label htmlFor="6.5">6.5 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="8" name="name" value="Anil"  onChange={() => handlefilter('8')}/>
                        <label htmlFor="8">8 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="10" name="name" value="Anil"  onChange={() => handlefilter('10')}/>
                        <label htmlFor="10">10 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="12" name="name" value="Anil"  onChange={() => handlefilter('12')}/>
                        <label htmlFor="12">12 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="16" name="name" value="Anil"  onChange={() => handlefilter('16')}/>
                        <label htmlFor="16">16 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="20" name="name" value="Anil"  onChange={() => handlefilter('20')}/>
                        <label htmlFor="20">20 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="30" name="name" value="Anil"  onChange={() => handlefilter('30')}/>
                        <label htmlFor="30">30 mm</label>
                    </div>
                </div>
                {/* width */}
                <div className="select-main" onClick={() => toggleVisibility('width')}>
                    Width
                    <span>
                        <i className="fa-solid fa-caret-down"></i>
                    </span>
                </div>
                <div className='optionsmain' style={{ display: activeSection === 'width' ? 'block' : 'none' }}>
                   <div>
                        <input type="checkbox" id="5w" name="name" value="Anil" onChange={() => handlefilter('5w')}/>
                        <label htmlFor="5w">5 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="6w" name="name" value="Anil" onChange={() => handlefilter('6w')}/>
                        <label htmlFor="6w">6 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="8w" name="name" value="Anil" onChange={() => handlefilter('8w')}/>
                        <label htmlFor="8w"> 8 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="10w" name="name" value="Anil" onChange={() => handlefilter('10w')}/>
                        <label htmlFor="10w"> 10 mm</label>
                    </div>
                </div>
                {/* length */}
                <div className="select-main" onClick={() => toggleVisibility('length')}>
                    Length
                    <span>
                        <i className="fa-solid fa-caret-down"></i>
                    </span>
                </div>
                <div className='optionsmain' style={{ display: activeSection === 'length' ? 'block' : 'none' }}>
                   <div>
                        <input type="checkbox" id="6.5l" name="name" value="Anil"  onChange={() => handlefilter('6.5l')}/>
                        <label htmlFor="6.5l">6.5 mm </label>
                    </div>
                    <div>
                        <input type="checkbox" id="8l" name="name" value="Anil" onChange={() => handlefilter('8l')}/>
                        <label htmlFor="8l">8 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="11l" name="name" value="Anil" onChange={() => handlefilter('11l')}/>
                        <label htmlFor="11l">11 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="14l" name="name" value="Anil" onChange={() => handlefilter('14l')}/>
                        <label htmlFor="14l">14 mm</label>
                    </div>
                </div>
                {/* Bead hole size */}
                <div className="select-main" onClick={() => toggleVisibility('bead')}>
                  Bead hole size
                    <span>
                        <i className="fa-solid fa-caret-down"></i>
                    </span>
                </div>
                <div className='optionsmain' style={{ display: activeSection === 'bead' ? 'block' : 'none' }}>
                   <div>
                        <input type="checkbox" id="0.5b" name="name" value="Anil" onChange={() => handlefilter('0.5b')}/>
                        <label htmlFor="0.5b">0.5 mm </label>
                    </div>
                    <div>
                        <input type="checkbox" id="1b" name="name" value="Anil" onChange={() => handlefilter('1b')}/>
                        <label htmlFor="1b">1 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="1.5b" name="name" value="Anil" onChange={() => handlefilter('1.5b')}/>
                        <label htmlFor="1.5b">1.5 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="1.7b" name="name" value="Anil" onChange={() => handlefilter('1.7b')}/>
                        <label htmlFor="1.7b">1.7 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="0.5b" name="name" value="Anil" onChange={() => handlefilter('0.5b')}/>
                        <label htmlFor="0.5b">0.5 mm </label>
                    </div>
                    <div>
                        <input type="checkbox" id="2b" name="name" value="Anil" onChange={() => handlefilter('2b')}/>
                        <label htmlFor="2b">2 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="2.5b" name="name" value="Anil" onChange={() => handlefilter('2.5b')}/>
                        <label htmlFor="2.5b">2.5 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="3b" name="name" value="Anil" onChange={() => handlefilter('3b')}/>
                        <label htmlFor="3b">3 mm</label>
                    </div>
                    <div>
                        <input type="checkbox" id="3.5b" name="name" value="Anil" onChange={() => handlefilter('3.5b')}/>
                        <label htmlFor="3.5b">3.5 mm</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Beadssidebar;
