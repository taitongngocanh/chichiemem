document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Member schedule data
    const memberSchedules = {
        1: {
            name: "Anh Tài",
            birthDate: "01/01/2000",
            major: "Công nghệ thông tin",
            schedule: {
                "Slot 1": ["JPD133 (NVH, 408)", "-", "-", "JPD133 (NVH, 408)", "-", "-", "-"],
                "Slot 2": ["SWP391 (NVH, 413)", "SWP302 (NVH, 412)", "SWP391 (NVH, 413)", "SWP302 (NVH, 412)", "-", "-", "-"],
                "Slot 3": ["-", "WT301 (NVH, 409)", "-", "WT301 (NVH, 409)", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        2: {
            name: "Quỳnh Hương",
            birthDate: "15/03/2001",
            major: "Công nghệ thông tin",
            schedule: {
                "Slot 1": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 2": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 3": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        3: {
            name: "Tạ Hiểu Nhân",
            birthDate: "20/05/2000",
            major: "Công nghệ thông tin",
            schedule: {
                "Slot 1": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 2": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 3": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        4: {
            name: "Nguyễn Thị Diễm My",
            birthDate: "10/07/2001",
            major: "Công nghệ thông tin",
            schedule: {
                "Slot 1": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 2": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 3": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        5: {
            name: "Hải",
            birthDate: "25/09/2000",
            major: "Công nghệ thông tin",
            schedule: {
                "Slot 1": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 2": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 3": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        6: {
            name: "Phương Thảo",
            birthDate: "05/11/2001",
            major: "Công nghệ thông tin",
            schedule: {
                "Slot 1": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 2": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 3": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        }
        // Add more member schedules as needed
    };

    // Modal elements
    const modal = document.getElementById('scheduleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSchedule = document.getElementById('modalSchedule');
    const closeButton = document.querySelector('.close-button');

    // Function to create schedule table
    function createScheduleTable(schedule) {
        const table = document.createElement('table');
        table.className = 'schedule-table';
        
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const timeHeader = document.createElement('th');
        timeHeader.textContent = 'Slot';
        headerRow.appendChild(timeHeader);
        
        ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'].forEach(day => {
            const th = document.createElement('th');
            th.textContent = day;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        Object.entries(schedule).forEach(([slot, classes]) => {
            const row = document.createElement('tr');
            const slotCell = document.createElement('td');
            slotCell.textContent = slot;
            row.appendChild(slotCell);
            
            classes.forEach(className => {
                const td = document.createElement('td');
                td.textContent = className;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        
        return table;
    }

    // Add member info modal to the page
    const memberInfoModal = document.createElement('div');
    memberInfoModal.id = 'memberInfoModal';
    memberInfoModal.className = 'modal';
    memberInfoModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div class="member-info">
                <img id="modalMemberImage" src="" alt="Member Image">
                <h2 id="modalMemberName"></h2>
                <div class="member-details">
                    <p><strong>Ngày sinh:</strong> <span id="modalMemberBirth"></span></p>
                    <p><strong>Ngành học:</strong> <span id="modalMemberMajor"></span></p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(memberInfoModal);

    // Add click events to members
    document.querySelectorAll('.member').forEach(member => {
        member.addEventListener('click', () => {
            const memberId = member.getAttribute('data-member');
            const memberData = memberSchedules[memberId];
            
            if (memberData) {
                // Update member info modal
                const modal = document.getElementById('memberInfoModal');
                const modalImg = document.getElementById('modalMemberImage');
                const modalName = document.getElementById('modalMemberName');
                const modalBirth = document.getElementById('modalMemberBirth');
                const modalMajor = document.getElementById('modalMemberMajor');

                modalImg.src = member.querySelector('img').src;
                modalName.textContent = memberData.name;
                modalBirth.textContent = memberData.birthDate;
                modalMajor.textContent = memberData.major;

                modal.style.display = 'block';

                // Update schedule content
                const scheduleContent = document.getElementById('scheduleContent');
                if (scheduleContent) {
                    scheduleContent.innerHTML = `<h3>Lịch học của ${memberData.name}</h3>`;
                    scheduleContent.appendChild(createScheduleTable(memberData.schedule));
                    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Close modal when clicking the close button
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', () => {
            document.getElementById('memberInfoModal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('memberInfoModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});