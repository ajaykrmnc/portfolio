import React from 'react';

export default function About() {
    return (
        <div className="about-wrapper">
            <div>
                <h1>{'Hi, I\'m Ajay! 👋'}</h1>
                <blockquote>
                    <p>💻 Mathematics and Computing Undergrad at IIT ISM Dhanbad</p>
                </blockquote>
                <p className="about-links-container">
                    <a href="https://twitter.com/Ajayiitism">
                        <img
                            src="https://img.shields.io/twitter/follow/Ajayiitism?style=social"
                            alt="Twitter: @ajaykrmnc"
                        />
                    </a>
                    <a href="https://github.com/ajaykrmnc">
                        <img
                            src="https://img.shields.io/github/followers/ajaykrmnc?label=follow&style=social"
                            alt="GitHub: @ajaykrmnc"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/ajaykrmnc/">
                        <img
                            alt="Linkedin: @ajaykrmnc"
                            src="https://img.shields.io/badge/-AjayKumar-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ajaykrmnc/"
                        />
                    </a>
                    <a href="mailto:ajaykg6917@gmail.com">
                        <img
                            src="https://img.shields.io/badge/Gmail-@ajaykg6917-red"
                            alt="Gmail: @ajaykg6917"
                        />
                    </a>
    
                </p>
                <p>
                    My passion lies in solving challenging problems, designing algorithms, and
                    communicating complex ideas to non-technical stakeholders.
                </p>
                <p>
                    I always look to exceed expectations and am effective both working as an
                    individual and as part of a team.
                </p>
                <p>
                    In my spare time, I like to travel 🚶, read books 📚, listen to music 🎧 and
                    watch movies 📺.
                </p>
                <p>
                    I enjoy learning new things and connecting with people across a range of
                    industries. If you ever want to bounce ideas off of me, please feel free to
                    reach out on twitter or email. 😄
                </p>
                <hr className="about-separator" />
                <h2>⚡ Technical Skills ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Area</th>
                        <th>Proficiencies</th>
                    </tr>
                    <tr>
                        <td>Langauge</td>
                        <td>C, C++</td>
                    </tr>
                    <tr>
                        <td>Frontend</td>
                        <td>HTML,CSS, React JS, Redux, Bootstrap</td>
                    </tr>
                    <tr>
                        <td>BackEnd</td>
                        <td>Node.js, Express</td>
                    </tr>
                    <tr>
                        <td>Databases</td>
                        <td>MongoDB (Mongoose), MySQL, Firebase</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Git, Netlify, Postman</td>
                    </tr>
                </table>
                <hr className="about-separator" />
                <h2>⚡ Competitive Programming ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Site</th>
                        <th>Rating</th>
                        <th>Profile</th>
                    </tr>
                    <tr>
                        <td>Codechef</td>
                        <td>4* (1800)</td>
                        <td><a href="https://www.codechef.com/users/ajaykrmnc">ajaykrmnc</a></td>
                    </tr>
                    <tr>
                        <td>Codeforces</td>
                        <td>Specailist</td>
                        <td><a href="https://codeforces.com/profile/ajay_mnc">ajay_mnc</a></td>
                    </tr>
                    <tr>
                        <td>GeeksforGeeks</td>
                        <td>Points: 800</td>
                        <td><a href="https://www.codeforces.com/profile/ajay_mnc">ajay_mnc</a></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
