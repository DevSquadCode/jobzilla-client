import React from 'react';
import bannerImg from '../../../images/banner.png';
import CustomModal from '../../Shared/Modal/CustomModal';
import { locations, positions } from '../searchSuggestion/SearchSuggestionData.';


const Banner = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [searchText, setSearchText] = React.useState();
    const [suggest, setSuggest] = React.useState([]);
    const [resFound, setResFound] = React.useState(true);


    const handleShowModal= () => {
      setModalShow(true);
    };


    const handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        let suggestion = [];
        if(name === 'jobPosition'){
            if (value.length > 0) {
                suggestion = positions
                  .sort()
                  .filter((e) => e.toLowerCase().includes(value.toLowerCase()));
                setResFound(suggestion.length !== 0 ? true : false);
              };
            setSuggest({position: suggestion})
        }
        if(name === 'jobLocation'){
            if (value.length > 0) {
                suggestion = locations
                  .sort()
                  .filter((e) => e.toLowerCase().includes(value.toLowerCase()));
                setResFound(suggestion.length !== 0 ? true : false);
            ;}
            setSuggest({location: suggestion});
        }
        
        setSearchText(value);
    };
    console.log(searchText)
    const suggestedText = (value) => {
        const prevSearch = {...searchText, value}
        setSearchText(prevSearch);
        setSuggest([]);
      };

      const getPositionSuggest = () => {
        if (suggest.length === 0 && searchText !== "" && !resFound) {
          return <p className='position-absolute'>Search Content Not Found</p>;
        }
        return (
          <>
            <div className="position-absolute bg-light w-75 p-3 rounded" style={{zIndex: '1'}}>
                {suggest?.position?.map((item, index) => {
                return (
                    <div onClick={() => suggestedText({position: item})} key={index} className='' style={{cursor: 'pointer'}}>
                        <p>{item}</p>
                        {index !== suggest.length - 1 && <hr />}
                    </div>
                );
                })}
            </div>
          </>
        );
      };

      const getLocationSuggest = () => {
        if (suggest.length === 0 && searchText !== "" && !resFound) {
          return <p className='position-absolute'>Search Content Not Found</p>;
        }
        return (
          <>
            <div className="position-absolute bg-light w-75 p-3 rounded" style={{zIndex: '1'}}>
                {suggest?.location?.map((item, index) => {
                return (
                    <div onClick={() => suggestedText({location: item})} key={index} className='' style={{cursor: 'pointer'}}>
                        <p>{item}</p>
                        {index !== suggest.length - 1 && <hr />}
                    </div>
                );
                })}
            </div>
          </>
        );
      };

    const handleSearch = e => {
        e.preventDefault(); 
        handleShowModal()
    };


    return (
        <section className='py-4'>
            <div className="container mt-5 py-5">
                <div className="row py-3">
                    <div className="col-md-4 py-2 position-relative">
                        <input onChange={handleInputChange} value={searchText?.value?.position} name='jobPosition' className='form-control' type="search" placeholder='Job Position' />
                        {searchText && getPositionSuggest()}
                    </div>
                    <div className="col-md-4 py-2">
                        <input onChange={handleInputChange} value={searchText?.value?.location} name='jobLocation' className='form-control' type="search" placeholder='Job Location' />
                        {searchText && getLocationSuggest()}
                    </div>
                    <div className="col-md-4 py-2">
                        <div className="input-group">
                            <select className="form-select" aria-label="Default select example">
                                <option value='Select Category'>Select Category</option>
                                <option value="1">Remote</option>
                                <option value="2">Full Time</option>
                                <option value="3">Part Time</option>
                            </select>
                            <button onClick={handleSearch} className="btn-brand">Search</button>
                            <CustomModal setShow={setModalShow} show={modalShow}/>
                        </div>
                    </div>
                </div>
                <div className="row flex-column flex-column-reverse flex-md-row text-center text-md-start">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className='py-2 brand-text-color'>Find your Dream Job Here </h1>
                            <p className='text-secondary pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non temporibus fuga, nemo accusantium praesentium vel id quos quod voluptas distinctio!</p>
                            <div className="row">
                                <div className='col-6 col-md-4'>
                                    <button className="btn-brand-outline">Find a Job</button>
                                </div>
                                <div className='col-6 col-md-4'>
                                    <button className="btn-brand-outline">Post a Job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;