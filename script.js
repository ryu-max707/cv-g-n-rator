function saveCV() {
    if (validateForm()) {
        let cvData = {
            fullName: document.getElementById('fullName').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            jobTitle: document.getElementById('jobTitle').value,
            address: document.getElementById('address').value,
            description: document.getElementById('description').value,
            company: document.getElementById('company').value,
            position: document.getElementById('position').value,
            duration: document.getElementById('duration').value,
            experienceDesc: document.getElementById('experienceDesc').value,
            degree: document.getElementById('degree').value,
            institution: document.getElementById('institution').value,
            graduationYear: document.getElementById('graduationYear').value,
            skills: document.getElementById('skills').value,
            interests: document.getElementById('interests').value,
            references: document.getElementById('references').value,
            languages: document.getElementById('languages').value
        };
        localStorage.setItem('cvData', JSON.stringify(cvData));
        displayCV();
    }
}

function validateForm() {
    let isValid = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^\d{10}$/;

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;

    if (!emailPattern.test(email)) {
        alert("Veuillez entrer un email valide.");
        isValid = false;
    }
    if (!phonePattern.test(phone)) {
        alert("Veuillez entrer un numéro de téléphone valide.");
        isValid = false;
    }
    if (age < 18 || age > 65) {
        alert("L'âge doit être compris entre 18 et 65 ans.");
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        alert("Veuillez entrer un email valide.");
        isValid = false;

    return isValid;
}

function updatePreview() {
    let cvData = {
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        jobTitle: document.getElementById('jobTitle').value,
        address: document.getElementById('address').value,
        description: document.getElementById('description').value,
        company: document.getElementById('company').value,
        position: document.getElementById('position').value,
        duration: document.getElementById('duration').value,
        experienceDesc: document.getElementById('experienceDesc').value,
        degree: document.getElementById('degree').value,
        institution: document.getElementById('institution').value,
        graduationYear: document.getElementById('graduationYear').value,
        skills: document.getElementById('skills').value,
        interests: document.getElementById('interests').value,
        references: document.getElementById('references').value,
        languages: document.getElementById('languages').value,
        status: document.getElementById('status').value

    
    };
    localStorage.setItem('cvData', JSON.stringify(cvData));
    displayCV();

   

    document.getElementById('prevName').textContent = cvData.fullName;
    document.getElementById('prevAge').textContent = 'Âge: ' + cvData.age;
    document.getElementById('prevGender').textContent = 'Sexe: ' + cvData.gender;
    document.getElementById('prevEmail').textContent = 'Email: ' + cvData.email;
    document.getElementById('prevPhone').textContent = 'Téléphone: ' + cvData.phone;
    document.getElementById('prevJob').textContent = 'Poste: ' + cvData.jobTitle;
    document.getElementById('prevAddress').textContent = 'Adresse: ' + cvData.address;
    document.getElementById('prevDescription').textContent = 'Description: ' + cvData.description;
    document.getElementById('prevCompany').textContent = 'Nom de l\'entreprise: ' + cvData.company;
    document.getElementById('prevPosition').textContent = 'Poste occupé: ' + cvData.position;
    document.getElementById('prevDuration').textContent = 'Durée: ' + cvData.duration;
    document.getElementById('prevExperienceDesc').textContent = 'Description des missions: ' + cvData.experienceDesc;
    document.getElementById('prevDegree').textContent = 'Diplôme obtenu: ' + cvData.degree;
    document.getElementById('prevInstitution').textContent = 'Établissement: ' + cvData.institution;
    document.getElementById('prevGraduationYear').textContent = 'Année d\'obtention: ' + cvData.graduationYear;
    document.getElementById('prevSkills').textContent = 'Compétences clés avec niveau de maîtrise: ' + cvData.skills;
    document.getElementById('prevInterests').textContent = 'Loisirs et passions: ' + cvData.interests;
    document.getElementById('prevReferences').textContent = 'Nom, poste et contact des références professionnelles: ' + cvData.references;
    document.getElementById('prevLanguages').textContent = 'Langues maîtrisées et niveau de compétence: ' + cvData.languages;
    document.getElementById('prevStatus').textContent = 'Situation actuelle: ' + cvData.status;
}

function displayCV() {
    let cvData = JSON.parse(localStorage.getItem('cvData'));
    if (cvData) {
        document.getElementById('prevName').textContent = cvData.fullName;
        document.getElementById('prevAge').textContent = 'Âge: ' + cvData.age;
        document.getElementById('prevGender').textContent = 'Sexe: ' + cvData.gender;
        document.getElementById('prevEmail').textContent = 'Email: ' + cvData.email;
        document.getElementById('prevPhone').textContent = 'Téléphone: ' + cvData.phone;
        document.getElementById('prevJob').textContent = 'Poste: ' + cvData.jobTitle;
        document.getElementById('prevAddress').textContent = 'Adresse: ' + cvData.address;
        document.getElementById('prevDescription').textContent = 'Description: ' + cvData.description;
        document.getElementById('prevCompany').textContent = 'Nom de l\'entreprise: ' + cvData.company;
        document.getElementById('prevPosition').textContent = 'Poste occupé: ' + cvData.position;
        document.getElementById('prevDuration').textContent = 'Durée: ' + cvData.duration;
        document.getElementById('prevExperienceDesc').textContent = 'Description des missions: ' + cvData.experienceDesc;
        document.getElementById('prevDegree').textContent = 'Diplôme obtenu: ' + cvData.degree;
        document.getElementById('prevInstitution').textContent = 'Établissement: ' + cvData.institution;
        document.getElementById('prevGraduationYear').textContent = 'Année d\'obtention: ' + cvData.graduationYear;
        document.getElementById('prevSkills').textContent = 'Compétences clés avec niveau de maîtrise: ' + cvData.skills;
        document.getElementById('prevInterests').textContent = 'Loisirs et passions: ' + cvData.interests;
        document.getElementById('prevReferences').textContent = 'Nom, poste et contact des références professionnelles: ' + cvData.references;
        document.getElementById('prevLanguages').textContent = 'Langues maîtrisées et niveau de compétence: ' + cvData.languages;
    }
}



document.addEventListener('DOMContentLoaded', displayCV);
document.getElementById('fullName').addEventListener('input', updatePreview);
document.getElementById('age').addEventListener('input', updatePreview);
document.getElementById('gender').addEventListener('input', updatePreview);
document.getElementById('email').addEventListener('input', updatePreview);
document.getElementById('phone').addEventListener('input', updatePreview);
document.getElementById('jobTitle').addEventListener('input', updatePreview);
document.getElementById('address').addEventListener('input', updatePreview);
document.getElementById('description').addEventListener('input', updatePreview);
document.getElementById('company').addEventListener('input', updatePreview);
document.getElementById('position').addEventListener('input', updatePreview);
document.getElementById('duration').addEventListener('input', updatePreview);
document.getElementById('experienceDesc').addEventListener('input', updatePreview);
document.getElementById('degree').addEventListener('input', updatePreview);
document.getElementById('institution').addEventListener('input', updatePreview);
document.getElementById('graduationYear').addEventListener('input', updatePreview);
document.getElementById('skills').addEventListener('input', updatePreview);
document.getElementById('interests').addEventListener('input', updatePreview);
document.getElementById('references').addEventListener('input', updatePreview);
document.getElementById('languages').addEventListener('input', updatePreview);
document.getElementById('status').addEventListener('input', updatePreview);
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let cvData = JSON.parse(localStorage.getItem('cvData'));
    if (cvData) {
        doc.text(`Nom: ${cvData.fullName}`, 10, 10);
        doc.text(`Âge: ${cvData.age}`, 10, 20);
        doc.text(`Sexe: ${cvData.gender}`, 10, 30);
        doc.text(`Email: ${cvData.email}`, 10, 40);
        doc.text(`Téléphone: ${cvData.phone}`, 10, 50);
        doc.text(`Poste: ${cvData.jobTitle}`, 10, 60);
        doc.text(`Adresse: ${cvData.address}`, 10, 70);
        doc.text(`Description: ${cvData.description}`, 10, 80);
        doc.text(`Nom de l'entreprise: ${cvData.company}`, 10, 90);
        doc.text(`Poste occupé: ${cvData.position}`, 10, 100);
        doc.text(`Durée: ${cvData.duration}`, 10, 110);
        doc.text(`Description des missions: ${cvData.experienceDesc}`, 10, 120);
        doc.text(`Diplôme obtenu: ${cvData.degree}`, 10, 130);
        doc.text(`Établissement: ${cvData.institution}`, 10, 140);
        doc.text(`Année d'obtention: ${cvData.graduationYear}`, 10, 150);
        doc.text(`Compétences clés avec niveau de maîtrise: ${cvData.skills}`, 10, 160);
        doc.text(`Loisirs et passions: ${cvData.interests}`, 10, 170);
        doc.text(`Reference : ${cvData.references}`, 10, 180);
        doc.text(`Langues maîtrisées et niveau de compétence: ${cvData.languages}`, 10, 190);
    }
    doc.save("CV.pdf");
}

