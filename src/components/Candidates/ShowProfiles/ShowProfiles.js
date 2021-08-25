import React, { useState } from 'react';
import { useEffect } from 'react';
import ShowCandidateProfile from '../ShowCandidateProfile/ShowCandidateProfile';

const ShowProfiles = () => {

    const [profiles, setProfiles] = useState([]); 

    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => setProfiles(data))
    }, [])

    return (
        <div>
            {
                profiles.map(profile => <ShowCandidateProfile profile={profile} key={profile._id}></ShowCandidateProfile>)
            }
        </div>
    );
};

export default ShowProfiles;