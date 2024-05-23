// Sample data for demonstration
const applications = [
    { title: 'Software Engineer', company: 'Tech Corp', date: '2024-05-01', status: 'Under Review' },
    { title: 'Data Analyst', company: 'Data Inc.', date: '2024-04-25', status: 'Successful' },
    { title: 'Web Developer', company: 'WebWorks', date: '2024-05-10', status: 'Rejected' },
    { title: 'Project Manager', company: 'ManageIt', date: '2024-03-15', status: 'In Progress' },
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
    let title = 'Your Applications';

    switch (type) {
        case 'in-progress':
            filteredApplications = applications.filter(app => app.status === 'In Progress');
            title = 'Applications in Progress';
            break;
        case 'successful':
            filteredApplications = applications.filter(app => app.status === 'Successful');
            title = 'Successful Applications';
            break;
        case 'rejected':
            filteredApplications = applications.filter(app => app.status === 'Rejected');
            title = 'Rejected Applications';
            break;
        case 'all':
        default:
            title = 'Total Applications';
            break;
    }

    document.getElementById('table-title').innerText = title;

    const tbody = document.getElementById('application-table-body');
    tbody.innerHTML = '';

    filteredApplications.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${app.title}</td>
            <td>${app.company}</td>
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