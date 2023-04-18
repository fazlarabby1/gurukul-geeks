import React from 'react';

const CollegeInfo = ({ setInstitutionName, setDegree, setGraduationYear }) => {
    return (
        <div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Collage Name</span>
                </label>
                <input onBlur={(e) => setInstitutionName(e.target.value)} type="text" placeholder="Enter your school name" className="input input-bordered w-full" />
            </div>
            <div className="flex items-center justify-between my-3">
                <label>
                    <span className="label-text">Select Your Latest Degree</span>
                </label>
                <select onClick={(e) => setDegree(e.target.value)} className="select select-bordered w-64">
                    <option disabled selected>Latest Degree ?</option>
                    <option value="BTech">BTech</option>
                    <option value="BSC">BSC</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                </select>
            </div>
            <div className="flex items-center justify-between my-3">
                <label>
                    <span className="label-text">Select Your Graduation Year</span>
                </label>
                <select onClick={(e) => setGraduationYear(e.target.value)} className="select select-bordered w-64">
                    <option disabled selected>Graduation Year ?</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    );
};

export default CollegeInfo;