import React from 'react';
import './Page.css';

const Home = () => {
    return (
        <div className="page-container animate-fade-in">
            <header className="hero-section">
                <div className="profile-img-container">
                    <img 
                        src={process.env.PUBLIC_URL + '/profile.jpeg'} 
                        alt="Supreeth Kunaparaju" 
                        className="profile-img glass"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                    />
                </div>
                <h1 className="hero-title">SUPREETH KUNAPARAJU</h1>
                <p className="hero-subtitle">UI/UX Designer & Computer Science Student</p>
            </header>

            <section className="info-grid">
                <div className="info-card glass">
                    <h3>About Me</h3>
                    <p>
                        I am a Computer Science Engineering student at Mahindra University with a strong passion for UI/UX design and digital marketing. 
                        I enjoy creating user-centric interfaces and exploring the intersection of technology and creativity.
                    </p>
                </div>

                <div className="info-card glass">
                    <h3>Research Interests</h3>
                    <ul>
                        <li>User Experience Design (UX)</li>
                        <li>Machine Learning & Forecasting</li>
                        <li>Digital Marketing Analytics</li>
                        <li>Human-Computer Interaction</li>
                    </ul>
                </div>

                <div className="info-card glass">
                    <h3>Personal Details</h3>
                    <div className="contact-info">
                        <p><strong>Phone:</strong> (91) 7013146003</p>
                        <p><strong>Email (College):</strong> se23ucse098@mahindrauniversity.edu.in</p>
                        <p><strong>Email (Personal):</strong> supreethkunaparaju@gmail.com</p>
                        <p><strong>Location:</strong> Hyderabad, India</p>
                    </div>
                </div>

                <div className="info-card glass">
                    <h3>Technical Skills</h3>
                    <div className="skills-tags">
                        <span>SQL</span>
                        <span>Figma</span>
                        <span>Adobe Illustrator</span>
                        <span>Adobe Premiere Pro</span>
                        <span>DaVinci Resolve</span>
                        <span>After Effects</span>
                    </div>
                </div>
            </section>

            <section className="education-section glass">
                <h3>Education</h3>
                <div className="edu-item">
                    <h4>Bachelor of Technology (Computer Science Engg)</h4>
                    <p>Mahindra University, Hyderabad | 2023 – Present</p>
                    <p className="muted">CGPA: 5.73/10 (till 5th semester)</p>
                </div>
                <div className="edu-item">
                    <h4>Intermediate</h4>
                    <p>Aditya Junior College, Kakinada | 2021 – 2023</p>
                    <p className="muted">Percentage: 91%</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
