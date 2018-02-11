
//Console.log Resume

console.log('Name:', ' Maryann Ullrich'.toUpperCase());
console.log('Career: Full Stack Engineer');
console.log(`Description: Junior Web developer able to build a Web prescence from the ground up
 - from concept, navigtion, layout to programming all features.`);

console.log('My Interests:');
console.log('Reading');
console.log('Country Music');
console.log('Museums and Zoos');
console.log('Hiking');
console.log('Travelling');


console.log('My Previous Experience:');
function displayPostion(companyName, jobTitle, description) {
    console.log("* " +  jobTitle + ' at ' + companyName + " -- "  + description);
}
let jobs = [
    {
        companyName: "Believe Artist Management",  
        jobTitle: "Artist Manager", 
        desc: "Responsible for the building of artist's website and ongoing maintenance using Javacsript, jQuery, HTML, and CSS.  One example is tymarch.net",
    },
    
    { 
        companyName: "Public Service Company of New Hampshire",
        jobTitle: "Accounting Applications Analyst",
        desc: "Required extensive comprehension of accounting principles. Knowledge of programming in user software; such as Cobol, Easytrieve, Lotus 123.  Objective was to meet the April 15th deadline for the filing of the Property Tax Letters and to fully document the Tax Ledger System, correct job control language, correct program logic errors, update programs with new tax requirements, and create an entire system backkup.",
    },

    { 
        companyName: "Texas Instruments",
        jobTitle: "Systems Analyst",
        desc: "Responsibilities included the installation, training, and support of PC-based software modules, LAN definition and configuration, development of Bar Code functionality, capital forecasting, procurement, and installation, hardware reallocation/upgrade plan, utilization analysis and procurement of PC’s, laser printers, and PC software including standardization. ",
    }
   
];

for (let i = 0; i < jobs.length; i++) {
    let curJob = jobs[i];
    displayPostion(curJob.companyName, curJob.jobTitle, curJob.desc);
}

console.log('My Skills:'); 


function displaySkill(skillName, isCool) {
    if (isCool) {
        console.log(`* BAM ${skillName}`);
    }
    else {
        console.log(skillName);
    }
}

let allSkills = [
    {
        skillName: "Javascript",
        cool: false
    },
    {
        skillName: "HTML",
        cool: true
    },
    {
        skillName: "CSS",
        cool: true
    },
    {
        skillName: "TurboTax",
        cool: true
    },
    {
        skillName: "MySQL",
        cool: false
    },
    {
        skillName: "Quickbooks",
        cool: true
    },
    {
        skillName: "Dancing",
        cool: false
    }
  ];

for (let i = 0; i < allSkills.length; i++) {
    let skillObj = allSkills[i];
    displaySkill(skillObj.skillName, skillObj.cool);
}






