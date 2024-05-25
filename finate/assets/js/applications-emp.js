// Sample data for demonstration
const applications = [
    { title: 'Software Engineer', name: 'Nuel Nyaayo', date: '2024-05-01', status: 'Under Review' },
    { title: 'Data Analyst', name: 'Samwel Cromwel', date: '2024-04-25', status: 'Under Review' },
    { title: 'Web Developer', name: 'Chelsea Kirimi', date: '2024-05-10', status: 'Under Review' },
    { title: 'Project Manager', name: 'Kate Wamwitha', date: '2024-03-15', status: 'Under Review' },
    // More applications as needed
];

// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to filter applications based on status
function filterApplications(type) {
    let filteredApplications = applications;
    let title = 'Applications under Review';

    switch (type) {
        case 'in-progress':
            filteredApplications = applications.filter(app => app.status === 'In Interviewing');
            title = 'Applications in Interviewing';
            break;
        case 'successful':
            filteredApplications = applications.filter(app => app.status === 'Hired');
            title = 'Hired';
            break;
        case 'rejected':
            filteredApplications = applications.filter(app => app.status === 'Rejected');
            title = 'Rejected Applications';
            break;
        case 'all':
        default:
            title = 'Applications under Review';
            break;
    }

    document.getElementById('table-title').innerText = title;

    const tbody = document.getElementById('application-table-body');
    tbody.innerHTML = '';

    filteredApplications.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${app.title}</td>
            <td>${app.name}</td>
            <td>${app.date}</td>
            <td>${app.status}</td>
            <td>
                <a href="#view-details">View Details</a>
                <a href="#withdraw">Withdraw</a>
                <a href="#follow-up">Follow Up</a>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    const type = getUrlParameter('type');
    filterApplications(type);
});