// Chart Defaults for Dark Mode
Chart.defaults.color = '#8b92a5';
Chart.defaults.font.family = 'Inter';

// Shared options for sparklines
const sparklineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: { x: { display: false }, y: { display: false, min: 0 } },
    elements: { point: { radius: 0 }, line: { tension: 0.4, borderWidth: 2 } }
};

// Gradient Generator
function createGradient(ctx, colorStart, colorEnd) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
}

// 1. Temp Sparkline
const ctxTemp = document.getElementById('tempSparkline').getContext('2d');
new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: ['1','2','3','4','5','6','7','8'],
        datasets: [{ data: [22, 23, 24, 23.5, 24.5, 25, 24.8, 24.5], borderColor: '#2dd4bf', backgroundColor: createGradient(ctxTemp, 'rgba(45, 212, 191, 0.2)', 'rgba(45, 212, 191, 0)'), fill: true }]
    },
    options: sparklineOptions
});

// 2. Moisture Sparkline
const ctxMoist = document.getElementById('moistureSparkline').getContext('2d');
new Chart(ctxMoist, {
    type: 'line',
    data: {
        labels: ['1','2','3','4','5','6','7','8'],
        datasets: [{ data: [75, 72, 70, 68, 69, 71, 69, 68], borderColor: '#3b82f6', backgroundColor: createGradient(ctxMoist, 'rgba(59, 130, 246, 0.2)', 'rgba(59, 130, 246, 0)'), fill: true }]
    },
    options: sparklineOptions
});

// 3. Water Bar Chart
const ctxWater = document.getElementById('waterBarChart').getContext('2d');
new Chart(ctxWater, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        datasets: [{ data: [400, 600, 800, 500, 1000, 1200, 900, 1100, 800, 700, 900, 1200], backgroundColor: '#2dd4bf', borderRadius: 4 }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }
});

// 4. Main Trend Chart
const ctxMain = document.getElementById('mainTrendChart').getContext('2d');
new Chart(ctxMain, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '8', '9', '10', '11', '12', '13', '14', '15', '18', '20', '21', '22', '23', '24'],
        datasets: [
            {
                label: 'Current Temp', data: [18, 19, 20.5, 21.2, 21.5, 20.5, 20, 21.8, 24.5, 23.5, 22.5, 21.5, 22, 23, 23.5, 24, 25, 26, 26.5, 27],
                borderColor: '#2dd4bf', backgroundColor: createGradient(ctxMain, 'rgba(45, 212, 191, 0.3)', 'rgba(45, 212, 191, 0)'), borderWidth: 2, fill: true, tension: 0.4, pointBackgroundColor: '#2dd4bf', pointBorderColor: '#fff', pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6
            },
            {
                label: 'Soil Moisture', data: [16, 17, 18, 19, 19.5, 18.5, 19.5, 20.5, 24.5, 24, 23, 21, 20.5, 20.5, 20, 21, 22, 23.5, 24, 25],
                borderColor: '#3b82f6', borderWidth: 2, fill: false, tension: 0.4, pointRadius: 0, borderDash: [5, 5]
            }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false, backgroundColor: 'rgba(37, 40, 51, 0.9)', titleColor: '#fff', bodyColor: '#8b92a5', borderColor: '#374151', borderWidth: 1 } },
        scales: { x: { grid: { color: '#374151', drawBorder: false }, ticks: { font: { size: 10 } } }, y: { grid: { color: '#374151', drawBorder: false }, ticks: { font: { size: 10 }, callback: function(value) { return value + '°C'; } } } },
        interaction: { mode: 'nearest', axis: 'x', intersect: false }
    }
});

// 5. Pump Sparkline
const ctxPump = document.getElementById('pumpSparkline').getContext('2d');
new Chart(ctxPump, {
    type: 'line', data: { labels: ['1','2','3','4','5','6','7','8','9','10'], datasets: [{ data: [30, 35, 32, 40, 45, 38, 42, 50, 48, 55], borderColor: '#2dd4bf', borderWidth: 2, fill: false }] }, options: sparklineOptions
});

// 6. Valve Sparkline
const ctxValve = document.getElementById('valveSparkline').getContext('2d');
new Chart(ctxValve, {
    type: 'line', data: { labels: ['1','2','3','4','5','6','7','8','9','10'], datasets: [{ data: [10, 15, 12, 8, 20, 25, 22, 18, 15, 20], borderColor: '#3b82f6', borderWidth: 2, fill: false }] }, options: sparklineOptions
});

// 7. Analytics Chart (New)
const ctxAnalytics = document.getElementById('analyticsChart').getContext('2d');
new Chart(ctxAnalytics, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            { label: 'Water Usage (L)', data: [1200, 1900, 800, 1500, 2000, 1300, 1100], backgroundColor: '#3b82f6', borderRadius: 4, order: 2 },
            { label: 'Yield Projection Index', data: [85, 88, 86, 90, 92, 91, 94], type: 'line', borderColor: '#4ade80', borderWidth: 3, pointBackgroundColor: '#4ade80', fill: false, tension: 0.4, yAxisID: 'y1', order: 1 }
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        scales: {
            x: { grid: { color: '#374151' } },
            y: { grid: { color: '#374151' } },
            y1: { position: 'right', grid: { display: false } }
        }
    }
});

// Toast Notification Function
window.showToast = function(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-info-circle';
    if(type === 'success') icon = 'fa-check-circle';
    if(type === 'warning') icon = 'fa-exclamation-triangle';
    if(type === 'error') icon = 'fa-times-circle';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3500);
}

// Control Center Toggles
const pumpToggle = document.getElementById('pumpToggle');
const pumpStatus = document.getElementById('pumpStatus');
const valveToggle = document.getElementById('valveToggle');
const valveStatus = document.getElementById('valveStatus');

pumpToggle.addEventListener('change', (e) => {
    if(e.target.checked) {
        pumpStatus.textContent = 'Status: Active';
        pumpStatus.className = 'status active';
        showToast('Water Pumps activated successfully.', 'success');
    } else {
        pumpStatus.textContent = 'Status: Inactive';
        pumpStatus.className = 'status inactive';
        showToast('Water Pumps turned off.', 'warning');
    }
});

valveToggle.addEventListener('change', (e) => {
    if(e.target.checked) {
        valveStatus.textContent = 'Status: Active';
        valveStatus.className = 'status active';
        showToast('Irrigation Valves opened.', 'success');
    } else {
        valveStatus.textContent = 'Status: Inactive';
        valveStatus.className = 'status inactive';
        showToast('Irrigation Valves closed.', 'warning');
    }
});

// Sidebar Navigation Interactivity (SPA behavior)
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view-section');
const pageTitle = document.getElementById('page-title');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        e.currentTarget.classList.add('active');
        
        const sectionName = e.currentTarget.textContent.trim();
        const sectionId = `view-${sectionName}`;
        
        views.forEach(v => v.style.display = 'none');
        const targetView = document.getElementById(sectionId);
        if(targetView) {
            targetView.style.display = 'block';
            pageTitle.textContent = sectionName;
        } else {
            // Fallback if view not found
            document.getElementById('view-Dashboard').style.display = 'block';
            pageTitle.textContent = 'Dashboard';
            showToast(`View ${sectionName} is under development`, 'warning');
        }
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && e.target.value.trim() !== '') {
        showToast(`Searching for "${e.target.value}"...`, 'info');
        e.target.value = '';
    }
});

// Notification Bell
const notifBell = document.querySelector('.notification');
notifBell.addEventListener('click', () => {
    showToast('Alert: Soil moisture dropping in Field C.', 'warning');
});
