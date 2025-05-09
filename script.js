document.addEventListener('DOMContentLoaded', () => {
    // Slideshow functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('touchstart', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

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
            birthDate: "10/05/2004",
            major: "Kỹ Thuật Phần Mềm",
            description: "Chuyên gia debug code và... debug tình yêu 😎",
            relationship: "Độc thân và... đang tìm kiếm 💔",
            schedule: {
                "Slot 1": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 2": ["JPD133 (NVH, 408)", "-", "-", "JPD133 (NVH, 408)", "-", "-", "-"],
                "Slot 3": ["SWP391 (NVH, 413)", "-", "SWR302 (NVH, 412)", "SWP391 (NVH, 413)", "-", "SWR302 (NVH, 412)", "-"],
                "Slot 4": ["-", "-", "SWT301 (NVH, 408)", "-", "-", "SWT301 (NVH, 408)", "-"]
            }
        },
        2: {
            name: "Quỳnh Hương",
            birthDate: "03/11/2004",
            major: "Ngôn Ngữ Anh",
            description: "Cô nàng 'đa ngôn ngữ' - nói tiếng Anh, tiếng Việt và cả... tiếng lòng 💝",
            relationship: "Độc thân và... đang học tiếng Anh 📚",
            schedule: {
                "Slot 1": ["-", "-", "HỌC", "-", "-", "HỌC", "-"],
                "Slot 2": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 3": ["HỌC", "-", "HỌC", "HỌC", "-", "HỌC", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        3: {
            name: "Hiểu Nhân",
            birthDate: "18/05/2004",
            major: "Kỹ Thuật Phần Mềm",
            description: "Coder chuyên nghiệp, nhưng đôi khi code còn dễ hiểu hơn... tình cảm của cậu ấy 😅",
            relationship: "Độc thân và... đang debug tình yêu 💻",
            schedule: {
                "Slot 1": ["HỌC", "-", "HỌC", "HỌC", "-", "HỌC", "-"],
                "Slot 2": ["HỌC", "-", "HỌC", "HỌC", "-", "HỌC", "-"],
                "Slot 3": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 4": ["-", "-", "-", "-", "-", "-", "-"]
            }
        },
        4: {
            name: "Diễm My",
            birthDate: "29/02/2004",
            major: "Thiết Kế Đồ Họa",
            description: "Nữ hoàng Photoshop, chuyên gia biến mọi thứ thành... nghệ thuật 🎨",
            relationship: "Đã có người yêu 💑",
            schedule: {
                "Slot 1": ["-", "HỌC", "HỌC", "-", "-", "HỌC", "-"],
                "Slot 2": ["-", "HỌC", "HỌC", "-", "-", "HỌC", "-"],
                "Slot 3": ["-", "-", "HỌC", "-", "-", "HỌC", "-"],
                "Slot 4": ["-", "-", "HỌC", "-", "-", "HỌC", "-"]
            }
        },
        5: {
            name: "Thanh Hải",
            birthDate: "02/09/2004",
            major: "Kỹ Thuật Phần Mềm",
            description: "Chuyên gia giải quyết bug và... giải quyết tình huống khó xử 😎",
            relationship: "Độc thân và... đang tìm bug trong tình yêu 🐛",
            schedule: {
                "Slot 1": ["-", "HỌC", "-", "-", "HỌC", "-", "-"],
                "Slot 2": ["-", "HỌC", "HỌC", "HỌC", "HỌC", "HỌC", "-"],
                "Slot 3": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 4": ["HỌC", "-", "-", "HỌC", "-", "-", "-"]
            }
        },
        6: {
            name: "Phương Thảo",
            birthDate: "27/09/2004",
            major: "Kinh Doanh Quốc Tế",
            description: "Nữ thương nhân tương lai, nhưng hiện tại đang... thương nhớ ai đó 💕",
            relationship: "Đã có người yêu 💑",
            schedule: {
                "Slot 1": ["-", "-", "-", "-", "-", "-", "-"],
                "Slot 2": ["-", "-", "HỌC", "-", "-", "HỌC", "-"],
                "Slot 3": ["-", "HỌC", "HỌC", "-", "HỌC", "HỌC", "-"],
                "Slot 4": ["-", "HỌC", "-", "-", "HỌC", "-", "-"]
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
                    <p class="member-description"><span id="modalMemberDescription"></span></p>
                    <p class="member-relationship"><span id="modalMemberRelationship"></span></p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(memberInfoModal);

    // Add click and touch events for members
    document.querySelectorAll('.member').forEach(member => {
        const handleMemberClick = (e) => {
            if (e.type === 'touchstart') {
                e.preventDefault();
            }
            const memberId = member.getAttribute('data-member');
            const memberData = memberSchedules[memberId];
            
            if (memberData) {
                const modal = document.getElementById('memberInfoModal');
                const modalImg = document.getElementById('modalMemberImage');
                const modalName = document.getElementById('modalMemberName');
                const modalBirth = document.getElementById('modalMemberBirth');
                const modalMajor = document.getElementById('modalMemberMajor');
                const modalDescription = document.getElementById('modalMemberDescription');
                const modalRelationship = document.getElementById('modalMemberRelationship');

                modalImg.src = member.querySelector('img').src;
                modalName.textContent = memberData.name;
                modalBirth.textContent = memberData.birthDate;
                modalMajor.textContent = memberData.major;
                modalDescription.textContent = memberData.description;
                modalRelationship.textContent = memberData.relationship;

                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('active');
                }, 10);

                // Update schedule content
                const scheduleContent = document.getElementById('scheduleContent');
                if (scheduleContent) {
                    scheduleContent.innerHTML = `<h3>Lịch học của ${memberData.name}</h3>`;
                    scheduleContent.appendChild(createScheduleTable(memberData.schedule));
                    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        member.addEventListener('click', handleMemberClick);
        member.addEventListener('touchstart', handleMemberClick);
    });

    // Close modal when clicking the close button
    document.querySelectorAll('.close-button').forEach(button => {
        const handleClose = (e) => {
            if (e.type === 'touchstart') {
                e.preventDefault();
            }
            const modal = document.getElementById('memberInfoModal');
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        };

        button.addEventListener('click', handleClose);
        button.addEventListener('touchstart', handleClose);
    });

    // Close modal when clicking outside
    const handleOutsideClick = (e) => {
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        const modal = document.getElementById('memberInfoModal');
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    };

    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('touchstart', handleOutsideClick);

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightboxBtn = document.querySelector('.close-lightbox');

    // Function to open lightbox
    window.openLightbox = function(element) {
        const img = element.querySelector('img');
        const caption = element.querySelector('.gallery-caption').textContent;
        
        lightboxImg.src = img.src;
        lightbox.querySelector('.lightbox-caption').textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Function to close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners for lightbox
    closeLightboxBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

    // Close lightbox when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});