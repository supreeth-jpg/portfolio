import React from 'react';
import './Page.css';

const Projects = () => {
    const projectList = [
        {
            title: "OPSD PowerDesk: Day-Ahead Forecasting",
            description: "Built a time series forecasting system for energy demand using SARIMA, LSTM, GRU, and RNN models. Implemented anomaly detection and a real-time visualization dashboard.",
            tech: ["SARIMA", "LSTM", "Python", "Visualization"],
            link: "https://github.com/your-username/portfolio" // Placeholder link
        },
        {
            title: "Hybrid ML Model for Credit Default Risk",
            description: "Developed a hybrid ML model combining classification and regression for credit risk assessment. Predicted PD and computed Expected Loss using Random Forest and SVM.",
            tech: ["Logistic Regression", "Random Forest", "SVM", "Credit Risk"],
            link: "https://github.com/your-username/portfolio" // Placeholder link
        }
    ];

    return (
        <div className="page-container animate-fade-in">
            <header className="page-header">
                <h1>Selected Projects</h1>
                <p>A collection of my work in AI, Data Science, and Design.</p>
            </header>

            <section className="projects-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card glass">
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Projects;
