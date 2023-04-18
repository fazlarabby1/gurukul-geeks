import React, { useState } from 'react';
import InfoModal from '../InfoModal/InfoModal';
import CollegeInfo from '../CollegeInfo/CollegeInfo';

const Form = () => {

    const [studying, setStudying] = useState('');
    const [institution, setInstitution] = useState('');
    const [institutionName, setInstitutionName] = useState('');
    const [grade, setGrade] = useState('');
    const [degree, setDegree] = useState('');
    const [graduationYear, setGraduationYear] = useState('');

    const [jobState, setJobState] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [experience, setExperience] = useState('');
    const [occupation, setOccupation] = useState('');

    const candidateInfo = { studying, institution, institutionName, grade, degree, graduationYear, jobState, companyName, experience, occupation };

    const candidatStates = { 
        setStudying,
        setInstitution,
        setInstitutionName,
        setGrade,
        setDegree,
        setGraduationYear,
        setJobState,
        setCompanyName,
        setExperience,
        setOccupation }

    return (
        <div className='w-96 md:w-[450px] mx-auto my-9'>
            <form className='font-semibold'>
                <div className="mb-3">
                    <h1>Are you Currently Studying?</h1>
                    <div className='mt-2 flex justify-between'>
                        <label className="flex items-center">
                            <input type="radio" name="radio-1" className="radio checked:bg-blue-500" onClick={() => setStudying('yes')} />
                            <span className="label-text ml-2">Yes, I am studying</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="radio-1" className="radio checked:bg-blue-500" onClick={() => setStudying('no')} />
                            <span className="label-text ml-2">No, I am not studying</span>
                        </label>
                    </div>
                </div>
                {(studying === "yes") && <div className="mb-3">
                    <h1>Are you Currently?</h1>
                    <div className='mt-2 flex justify-between'>
                        <label className="flex items-center">
                            <input onClick={() => setInstitution('school')} type="radio" name="radio-2" className="radio checked:bg-blue-500" />
                            <span className="label-text ml-2">in School</span>
                        </label>
                        <label className="flex items-center">
                            <input onClick={() => setInstitution('college')} type="radio" name="radio-2" className="radio checked:bg-blue-500" />
                            <span className="label-text ml-2">in College</span>
                        </label>
                    </div>
                </div>}

                {/* School Information */}
                {(institution === 'school') && <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">School Name</span>
                        </label>
                        <input onBlur={(e) => setInstitutionName(e.target.value)} type="text" placeholder="Enter your school name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex items-center justify-between my-3">
                        <label>
                            <span className="label-text">Select Your Grade</span>
                        </label>
                        <select onClick={e => setGrade(e.target.value)} className="select select-bordered w-64">
                            <option disabled selected>Grade ?</option>
                            <option value="Six">Six</option>
                            <option value="Seven">Seven</option>
                            <option value="Eight">Eight</option>
                            <option value="Nine">Nine</option>
                            <option value="Ten">Ten</option>
                            <option value="Eleven">Eleven</option>
                            <option value="Twelve">Twelve</option>
                        </select>
                    </div>
                </div>}

                {/* */}
                {(institution === 'college') && <CollegeInfo setInstitutionName={setInstitutionName} setDegree={setDegree} setGraduationYear={setGraduationYear} />}

                {/* Company Details for Currently Working candidate */}


                {(studying === "no") && <div>
                    <div className="mb-3">
                        <h1>Are you Currently?</h1>
                        <div className='mt-2 flex justify-between'>
                            <label className="flex items-center">
                                <input onClick={() => setJobState('seeking')} type="radio" name="radio-2" className="radio checked:bg-blue-500" />
                                <span className="label-text ml-2">Looking for a job</span>
                            </label>
                            <label className="flex items-center">
                                <input onClick={() => setJobState('employeed')} type="radio" name="radio-2" className="radio checked:bg-blue-500" />
                                <span className="label-text ml-2">currently working</span>
                            </label>
                        </div>
                    </div>
                    {(jobState === 'employeed') && <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input onBlur={e => setCompanyName(e.target.value)} type="text" placeholder="Enter your company name" className="input input-bordered w-full" />
                        </div>

                        <div className="flex items-center justify-between my-3">
                            <label>
                                <span className="label-text">Select Your Experience</span>
                            </label>
                            <select onClick={e => setExperience(e.target.value)} className="select select-bordered w-64">
                                <option disabled selected>years of experience?</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                                <option value="Four">Four</option>
                                <option value="Five">Five</option>
                                <option value="Six">Six</option>
                                <option value="Seven">Seven</option>
                                <option value="Eight">Eight</option>
                                <option value="Nine">Nine</option>
                                <option value="Ten">Ten</option>
                                <option value="Eleven">Eleven</option>
                                <option value="Twelve">Twelve</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <label>
                                <span className="label-text">Select Your Job Title</span>
                            </label>
                            <select onClick={e => setOccupation(e.target.value)} className="select select-bordered w-64">
                                <option disabled selected>Occupation?</option>
                                <option value="Full Stack Developer">Full Stack Developer</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="MERN Developer">MERN Developer</option>
                                <option value="Software Engineer">Software Engineer</option>
                            </select>
                        </div>
                    </div>}
                    {/* College Information or Details for Currently looking for job  */}

                    {(jobState === 'seeking') &&
                        <CollegeInfo setInstitutionName={setInstitutionName} setDegree={setDegree} setGraduationYear={setGraduationYear} />
                    }

                </div>}

                <label type='Submit' htmlFor="info-modal" className='btn btn-success text-black font-bold w-full'>Submit</label>

            </form>
            <InfoModal candidateInfo={candidateInfo} candidatStates={candidatStates} />
        </div>
    );
};

export default Form;