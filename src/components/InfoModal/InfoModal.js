import React from 'react';

const InfoModal = ({ candidateInfo, candidatStates }) => {

    const { studying, institution, institutionName, grade, degree, graduationYear, jobState, companyName, experience, occupation } = candidateInfo;

    const {
        setStudying,
        setInstitution,
        setInstitutionName,
        setGrade,
        setDegree,
        setGraduationYear,
        setJobState,
        setCompanyName,
        setExperience,
        setOccupation } = candidatStates;

    const handleConfirm = () => {
        setStudying("");
        setInstitution("");
        setInstitutionName("");
        setGrade("");
        setDegree("");
        setGraduationYear("");
        setJobState("");
        setCompanyName("");
        setExperience("");
        setOccupation("");
    };

    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="info-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Your Submitted Information</h3>
                    {(studying === "yes") && <p className="py-4">
                        <span>You are a student. </span>{(institution === 'school') &&
                            <span>You are studying in <b>{institutionName}</b> school and you are in <b>{grade}</b> grade.</span>
                        }
                        {(institution === 'college') &&
                            <span>You are studying in <b>{institutionName}</b> college. Your last degree is <b>{degree}</b> and your graduation year is <b>{graduationYear}</b>.</span>
                        }
                    </p>}
                    {(studying === "no") && <p className="py-4">
                        <span>You are not a student. </span>
                        {(jobState === 'seeking') &&
                            <span>You are seeking for a job. Your college name is <b>{institutionName}</b>. Your last completed degree is <b>{degree}</b> and your graduation year is <b>{graduationYear}</b>.</span>
                        }
                        {(jobState === 'employeed') &&
                            <span>You are employeed. You work in <b>{companyName}</b>. You have <b>{experience}</b> years of experience and you are a <b>{occupation}</b>.</span>
                        }
                    </p>}
                    <div className="modal-action">
                        <label
                            onClick={handleConfirm}
                            htmlFor="info-modal" className="btn">Ok</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;