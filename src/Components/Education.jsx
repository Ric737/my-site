import React from "react";

/**
 * Renders the Education section of the website.
 * @returns {JSX.Element} JSX.Element
 */

const Education = () => {
    return (
        /*create education section*/
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-container">
                    <div className="education-block">
                        <h3 className="education-title">Jain University</h3>
                        <p className="education-date">Present</p>
                        <p className="education-description">
                            B.Tech Computer Science and Engineering (Cybersecurity)
                        </p>
                    </div>
                    <div className="education-block">
                        <h3 className="education-title">Indian School Salalah</h3>
                        <p className="education-date">2020</p>
                        <p className="education-description">Class 12 (CBSE)</p>
                    </div>
                </div>
            </div>
            <style>{`
            .education-section .container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
                .education-section .education-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    grid-gap: 1rem;
                }

                .education-section .education-block {
                    background-color: #f5f5f5;
                    padding: 1rem;
                    border-radius: 0.5rem;
                }

                .education-section .education-title {
                    margin-top: 0;
                }

                .education-section .education-date {
                    margin-bottom: 0.5rem;
                    font-weight: bold;
                }

                .education-section .education-description {
                    margin-top: 0;
                }
            `}</style>
        </section>
    );
};

export default Education;
