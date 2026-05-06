function showDetails(type) {

    let content = `<button onclick="goBack()" class="back-btn">⬅ Back</button>`;

    if (type === "projects") {
        content += `
        <h3>Projects</h3>

        <p><b>Sales Data Analysis Dashboard</b></p>
        <p>Developed a Sales Performance Analysis Dashboard using Python, leveraging Pandas, NumPy, and
Matplotlib for data cleaning, processing, and visualization of large datasets.Performed sales trend analysis, customer behavior analysis, and revenue forecasting to identify key
business insights such as top-performing products, regional sales patterns, and growth opportunities.
Created analytical reports and visual dashboards to present actionable insights, improving decision-making
efficiency while strengthening practical expertise in data analytics, business intelligence, and
problem-solving</p>

        <p><b>Virtual Herbal Garden</b></p>
        <p> Developed a Virtual Herbal Garden, an interactive digital platform designed to provide detailed
information about medicinal plants, enhancing awareness and understanding of traditional herbal
knowledge.Integrated virtual tours and user-friendly features to enable immersive exploration, learning, and
engagement with the medicinal properties, uses, and significance of various plants.
Combined modern technology with traditional AYUSH knowledge to create an accessible educational
solution that promotes wider understanding of herbal medicine and cultural wellness practices.</p>

        <p><b>GitHub:</b>
        <a href="https://github.com/SravanthiPotnuru" target="_blank">
        Visit My GitHub
        </a></p>
        `;
    }

    else if (type === "certificates") {
    content += `
    <h3>Certificates</h3>

    <div class="cert">
        <p>✔ Microsoft Azure Internship Certificate --> Tencon Infra</p>
        <p>✔ Data Analytics Internship Certificate --> Adhoc Networks</p>
        <p>✔Certified in English Communication -->Mepro Pearson</p>
        <p>✔Essentials of GenAI --> DigiSaksham</p>
        <p>✔Python Essentials --> Cisco</p>
        <p>✔Advanced Web Technology --> Hackathon</p>
        <p>✔Artificial Intelligence Fundamentals --> IBM</p>
        <p>✔ Programming Essentials in C --> Cisco</p>
    </div>
    `;

    }

    else if (type === "experience") {
        content += `
        <h3>Experience</h3>

        <p><b> Microsoft Azure Intern</b></p>
        <p>Gained practical experience in Microsoft Azure cloud technologies at Tencon Infra Pvt. Ltd., with hands-on
exposure to real-time cloud infrastructure and deployment processes.Worked extensively with core Azure services, including Virtual Machines, Storage Accounts, and
Networking, building strong skills in resource deployment, management, and monitoring.
Developed solid technical proficiency in cloud infrastructure, problem-solving, and Azure resource
optimization through live project involvement in a professional environment.</p>

        <p><b>Data Analytics Intern</b></p>
        <p>Gained practical experience in Python-based data analytics through an internship at Adhoc Networks
working with tools such as Pandas, NumPy, and Matplotlib for data processing and analysis.Developed hands-on skills in data cleaning, visualization, and interpreting datasets to generate meaningful
insights that support effective decision-making.Enhanced technical proficiency and real-time project exposure by applying Python analytics techniques in a
professional environment, strengthening problem-solving and data-driven analytical abilities.</p>
        `;
    }

    else if (type === "info") {
        content += `
        <h3>My Info</h3>

        <p><b>Name:</b> Sravanthi Potnuru</p>
        <p><b>Email:</b> sravanthipotnuru5826@gmail.com</p>

        <p><b>GitHub:</b>
        <a href="https://github.com/SravanthiPotnuru" target="_blank">Open</a></p>

        <p><b>LinkedIn:</b>
        <a href="https://www.linkedin.com/in/sravanthi-potnuru-604b19329" target="_blank">
        Open
        </a></p>
        `;
    }

    document.getElementById("detailsBox").innerHTML = content;
}

function goBack() {
    document.getElementById("detailsBox").innerHTML = "";
}