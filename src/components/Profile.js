import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProfileAccordion from "./accordions/ProfileAccordion";
import PasswordAccordion from "./accordions/PasswordAccordion";
import {Helmet} from "react-helmet";
import FilterAccordion from "./accordions/FilterAccordion";

const Profile = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    let stateValues = useSelector((state) => state.authReducer);
    const accordionData = [
        { name: "First name", content: stateValues.user.firstName },
        { name: "Last name", content: stateValues.user.lastName },
        { name: "Username", content: stateValues.user.username },
        { name: "E-Mail", content: stateValues.user.email }
    ]
    let savedFilters = useSelector((state) => state.mapReducer.savedFilters)

    const { user: currentUser } = useSelector((state) => state.authReducer);
    if (!currentUser) {
        return (<Navigate to="/login"></Navigate>)
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', flexDirection: "column", marginTop: 100 }}>
            <Helmet>
                <title>EV-Map | Profile</title>
            </Helmet>
            {accordionData.map((data, index) => <ProfileAccordion key={index} expanded={expanded} handleChange={handleChange} index={index} name={data.name} content={data.content} />)}
            <PasswordAccordion index={4} expanded={expanded} handleChange={handleChange} />
            {savedFilters.map((filter, index) => <FilterAccordion key={index} expanded={expanded} handleChange={handleChange} index={index} name={filter.name}/>)}
        </div>)
}

export default Profile;


