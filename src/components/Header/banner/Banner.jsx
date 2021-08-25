import React from 'react';
import bannerImg from '../../../images/banner.png';
import CustomModal from '../../Shared/Modal/CustomModal';
import { locations, positions } from '../searchSuggestion/SearchSuggestionData.';


const Banner = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [suggestText, setSuggestText] = React.useState();
    const [inputText, setInputText] = React.useState();
    const [suggest, setSuggest] = React.useState([]);
    const [resFound, setResFound] = React.useState(true);
    const [searchData, setSearchData] = React.useState([]);
    const [searchError, setSearchError] = React.useState();


    const handleShowModal = () => {
        setModalShow(true);
    };


    const handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        let suggestion = [];
        if (name === 'jobPosition') {
            if (value.length > 0) {
                suggestion = positions
                    .sort()
                    .filter((e) => e.toLowerCase().includes(value.toLowerCase()));
                setResFound(suggestion.length !== 0 ? true : false);
            };
            setSuggest({ position: suggestion })
            const newValue = { ...inputText }
            newValue[name] = value;
            setInputText(newValue)
        }
        if (name === 'jobLocation') {
            if (value.length > 0) {
                suggestion = locations
                    .sort()
                    .filter((e) => e.toLowerCase().includes(value.toLowerCase()));
                setResFound(suggestion.length !== 0 ? true : false);
                ;
            }
            setSuggest({ location: suggestion });
            const newValue = { ...inputText }
            newValue[name] = value;
            setInputText(newValue)
        }
        setSuggestText(value);
    };

    const suggestedText = (value) => {
        const prevSearch = { ...suggestText, value }
        setSuggestText(prevSearch);
        setSuggest([]);
    };

    const handleSearch = e => {
        e.preventDefault();

        if(inputText?.jobPosition || inputText?.jobLocation){
            handleShowModal();
        };
        
        fetch('http://localhost:8080/searching', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inputText)
        }).then(res => res.json()).then(data => setSearchData(data)).catch(err => setSearchError(err));
    };

    console.log(inputText)

    const getPositionSuggest = () => {
        if (suggest?.position?.length === 0 && suggestText !== "" && !resFound) {
            return <p className='position-absolute py-2'>Search Content Not Found</p>;
        }
        return (
            <>
                <div className="position-absolute bg-light w-75 p-3 rounded" style={{ zIndex: '1' }}>
                    {suggest?.position?.map((item, index) => {
                        return (
                            <div onClick={() => suggestedText({ position: item })} key={index} className='' style={{ cursor: 'pointer' }}>
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
        if (suggest?.location?.length === 0 && suggestText !== "" && !resFound) {
            return <p className='position-absolute py-2'>Search Content Not Found</p>;
        }
        return (
            <>
                <div className="position-absolute bg-light w-75 p-3 rounded" style={{ zIndex: '1' }}>
                    {suggest?.location?.map((item, index) => {
                        return (
                            <div onClick={() => suggestedText({ location: item })} key={index} className='' style={{ cursor: 'pointer' }}>
                                <p>{item}</p>
                                {index !== suggest.length - 1 && <hr />}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <section className='py-4'>
            <div className="container mt-5 py-5">
            {/* {searchError && alert(searchError.message)} */}
                <div className="row py-3">
                    <div className="col-md-4 py-2 position-relative">
                        <input onChange={handleInputChange} value={suggestText?.value?.position} name='jobPosition' className='form-control' type="search" placeholder='Job Position' />
                        {suggestText && getPositionSuggest()}
                    </div>
                    <div className="col-md-4 py-2">
                        <input onChange={handleInputChange} value={suggestText?.value?.location} name='jobLocation' className='form-control' type="search" placeholder='Job Location' />
                        {suggestText && getLocationSuggest()}
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
                            <CustomModal searchData={searchData} setShow={setModalShow} show={modalShow} />
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