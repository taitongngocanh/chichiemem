document.addEventListener('DOMContentLoaded', () => {
    const memberSchedules = {
        1: {
            name: "Anh Tài",
            schedule: {
                "Slot 1": ["JPD133 (NVH, 408)", "-", "-", "JPD133 (NVH, 408)", "-", "-", "-"],
                "Slot 2": ["SWP391 (NVH, 413)", "SWP302 (NVH, 412)", "SWP391 (NVH, 413)", "SWP302 (NVH, 412)", "-", "-", "-"],
                "Slot 3": ["-", "WT301 (NVH, 409)", "-", "WT301 (NVH, 409)", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        2: {
            name: "Quỳnh Hương",
            schedule: {
                "Slot 1": ["-", "JPD133 (NVH, 408)", "-", "-", "JPD133 (NVH, 408)", "-", "-"],
                "Slot 2": ["SWP302 (NVH, 412)", "-", "SWP391 (NVH, 413)", "-", "SWP302 (NVH, 412)", "-", "-"],
                "Slot 3": ["WT301 (NVH, 409)", "-", "-", "WT301 (NVH, 409)", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        // ... other member schedules ...
    };

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

    // Get member ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('id');

    if (memberId && memberSchedules[memberId]) {
        const memberData = memberSchedules[memberId];
        document.getElementById('memberName').textContent = `Lịch học của ${memberData.name}`;
        const scheduleTable = createScheduleTable(memberData.schedule);
        document.getElementById('scheduleTable').appendChild(scheduleTable);
    }

    // Add click events to members in dropdown
    document.querySelectorAll('.member').forEach(member => {
        member.addEventListener('click', (e) => {
            e.preventDefault();
            const memberId = member.getAttribute('data-member');
            window.location.href = `schedule.html?id=${memberId}`;
        });
    });
}); 