document.addEventListener('DOMContentLoaded', () => {
    // Select navigation elements
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    const appUI = document.querySelector('.app-ui');
    const originalExploreHTML = document.querySelector('.phone-mockup .app-ui').innerHTML;

    // Bottom navigation HTML
    const bottomNavHTML = `
    <div class="bottom-nav">
        <div class="nav-item" data-view="explore">
            <div class="nav-icon"><i class="fas fa-search"></i></div>
            <div>Explore</div>
        </div>
        <div class="nav-item" data-view="passes">
            <div class="nav-icon"><i class="fas fa-ticket-alt"></i></div>
            <div>Passes</div>
        </div>
        <div class="nav-item" data-view="history">
            <div class="nav-icon"><i class="fas fa-history"></i></div>
            <div>History</div>
        </div>
        <div class="nav-item" data-view="profile">
            <div class="nav-icon"><i class="fas fa-user"></i></div>
            <div>Profile</div>
        </div>
    </div>
    `;

    // Gym passes data
    const gymPasses = [
        {
            name: "Elite Fitness Center",
            status: "active",
            type: "1 Day Pass",
            validUntil: "28 Mar 2025",
            price: "₹99/day"
        },
        {
            name: "Fitness World", 
            status: "active",
            type: "7 Day Pass",
            validUntil: "05 Apr 2025",
            price: "₹299/week"
        },
        {
            name: "Urban Fitness",
            status: "upcoming", 
            type: "5 Day Pass",
            validUntil: "01 Apr 2025",
            price: "₹249/week"
        },
        {
            name: "PowerHouse Gym",
            status: "expired",
            type: "3 Day Pass", 
            validUntil: "20 Mar 2025",
            price: "₹179/week"
        },
        {
            name: "Strength Hub",
            status: "upcoming",
            type: "10 Day Pass",
            validUntil: "10 Apr 2025",
            price: "₹399/week"
        },
        {
            name: "Cardio Zone",
            status: "active",
            type: "14 Day Pass",
            validUntil: "15 Apr 2025",
            price: "₹499/week"
        }
    ];

    // Render passes view
    const renderPassesView = () => {
        return `
            <div class="status-bar">
                <span>9:41</span>
                <div>
                    <i class="fas fa-signal"></i>
                    <i class="fas fa-wifi"></i>
                    <i class="fas fa-battery-full"></i>
                </div>
            </div>
            <div class="app-header">
                <div class="app-title">My Passes</div>
                <i class="fas fa-filter"></i>
            </div>
            <div class="passes-scroll-container">
                <div class="gym-passes-list">
                    ${gymPasses.map(pass => `
                        <div class="gym-pass-card">
                            <div class="pass-header">
                                <h3>${pass.name}</h3>
                                <span class="pass-status ${pass.status}">
                                    ${pass.status.charAt(0).toUpperCase() + pass.status.slice(1)}
                                </span>
                            </div>
                            <div class="pass-details">
                                <div class="pass-type">${pass.type}</div>
                                <div class="pass-validity">
                                    ${pass.status === 'expired' ? 'Expired' : `Valid until ${pass.validUntil}`}
                                </div>
                            </div>
                            <div class="pass-actions">
                                <div class="pass-price">${pass.price}</div>
                                <button class="btn-pass ${pass.status === 'expired' ? 'btn-renew' : 'btn-view'}">
                                    ${pass.status === 'expired' ? 'Renew' : 'View Pass'}
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ${bottomNavHTML}
        `;
    };

    // Render profile view
    const renderProfileView = () => {
        return `
            <div class="status-bar">
                <span>9:41</span>
                <div>
                    <i class="fas fa-signal"></i>
                    <i class="fas fa-wifi"></i>
                    <i class="fas fa-battery-full"></i>
                </div>
            </div>
            <div class="profile-container">
                <div class="profile-header">
                    <div class="profile-settings">
                        <i class="fas fa-cog"></i>
                    </div>
                    <div class="profile-avatar">
                        <img src="/api/placeholder/120/120" alt="Profile" class="avatar-image">
                        <div class="avatar-badge">
                            <i class="fas fa-camera"></i>
                        </div>
                    </div>
                    <h2 class="profile-name">John Traveler</h2>
                    <p class="profile-title">Fitness Enthusiast</p>
                </div>

                <div class="profile-stats">
                    <div class="stat-item">
                        <span class="stat-value">24</span>
                        <span class="stat-label">Total Visits</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">3</span>
                        <span class="stat-label">Active Passes</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">6</span>
                        <span class="stat-label">Gyms</span>
                    </div>
                </div>

                <div class="profile-sections">
                    <div class="profile-section">
                        <h3>Personal Information</h3>
                        <div class="section-content">
                            <div class="info-row">
                                <i class="fas fa-envelope"></i>
                                <span>john.traveler@example.com</span>
                            </div>
                            <div class="info-row">
                                <i class="fas fa-phone"></i>
                                <span>+91 9876 543210</span>
                            </div>
                        </div>
                    </div>

                    <div class="profile-section">
                        <h3>Membership</h3>
                        <div class="section-content">
                            <div class="info-row">
                                <i class="fas fa-calendar"></i>
                                <span>Member Since: Jan 2024</span>
                            </div>
                            <div class="info-row">
                                <i class="fas fa-ticket-alt"></i>
                                <span>Current Plan: Premium</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ${bottomNavHTML}
        `;
    };

    // Render view function
    const renderView = (viewName) => {
        switch(viewName) {
            case 'explore':
                return originalExploreHTML;
            case 'passes':
                return renderPassesView();
            case 'history':
                // History view (simplified)
                return `
                    <div class="status-bar">
                        <span>9:41</span>
                        <div>
                            <i class="fas fa-signal"></i>
                            <i class="fas fa-wifi"></i>
                            <i class="fas fa-battery-full"></i>
                        </div>
                    </div>
                    <div class="app-header">
                        <div class="app-title">Gym History</div>
                    </div>
                    <div class="history-container">
                        <div class="history-list">
                            <div class="history-item">
                                <div class="history-gym">Elite Fitness Center</div>
                                <div class="history-date">15 Mar 2025</div>
                            </div>
                        </div>
                    </div>
                    ${bottomNavHTML}
                `;
            case 'profile':
                return renderProfileView();
            default:
                return '';
        }
    };

    // Navigation setup function
    const setupNavigation = (items, ui) => {
        items.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all nav items
                items.forEach(navItem => navItem.classList.remove('active'));
                
                // Add active class to clicked item
                item.classList.add('active');
                
                // Determine which view to show based on clicked item
                const viewName = item.querySelector('div:last-child').textContent.toLowerCase();
                
                // Update app UI content
                ui.innerHTML = renderView(viewName);

                // Reattach navigation for new view
                const newNavItems = ui.querySelectorAll('.bottom-nav .nav-item');
                setupNavigation(newNavItems, ui);
            });
        });
    };

    // Initial navigation setup
    setupNavigation(navItems, appUI);
});