        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('open');
        }

        function showPage(pageId) {
            mobileMenu.classList.remove('open');
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function handleContact(event) {
            event.preventDefault();
            const form = document.getElementById('contactForm');
            const success = document.getElementById('successMessage');
            const btn = form.querySelector('button');
            btn.innerHTML = 'Lähetetään...';
            btn.disabled = true;
            setTimeout(() => {
                form.style.display = 'none';
                success.classList.remove('hidden');
            }, 1200);
        }
