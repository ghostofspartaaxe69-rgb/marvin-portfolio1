(() => {
    const mediaItems = (folder, prefix, extension, count, type) =>
        Array.from({ length: count }, (_, index) => ({
            src: `assets/projects/video-editing/${folder}/${prefix}${index + 1}.${extension}`,
            type,
            alt: `Social media ${type} ${index + 1}`,
            caption: `${type === 'video' ? 'Video' : 'Graphic'} ${index + 1}`
        }));

    const galleries = {
        crm: {
            title: 'CRM Workflow Template',
            description: 'A streamlined CRM workflow designed to organize leads, automate follow-ups, and create a more efficient sales process.',
            intro: 'A practical CRM setup that keeps important customer information and sales activity in one organized place.',
            features: [
                ['Workflow Automation', 'Automated steps that reduce repetitive tasks and keep leads moving through the pipeline.'],
                ['Lead Nurturing', 'Structured follow-up sequences that help maintain engagement and improve communication.'],
                ['CRM Organization', 'A clear system for managing contacts, tracking activity, and keeping key information accessible.']
            ],
            items: [
                { src: 'assets/projects/hubspot/hubspot-workflow.webp', alt: 'HubSpot workflow automation', caption: 'Workflow automation' },
                { src: 'assets/projects/hubspot/hubspot-dashboard.webp', alt: 'HubSpot dashboard', caption: 'CRM dashboard' },
                { src: 'assets/projects/hubspot/hubspot-marketing-email.webp', alt: 'HubSpot marketing email', caption: 'Marketing email' },
                { src: 'assets/projects/hubspot/hubspot-email-report.webp', alt: 'HubSpot email report', caption: 'Email report' }
            ]
        },
        'lead-tracker': {
            title: 'Lead Management Tracker',
            description: 'A centralized lead tracking system designed to organize prospects, monitor progress, and make follow-ups easier to manage.',
            intro: 'A simple, organized workspace that makes it easier to see every prospect and the next action they need.',
            features: [
                ['Lead Organization', 'Keep prospect information, contact details, and important data in one organized workspace.'],
                ['Pipeline Tracking', 'Monitor where each lead is in the sales process and identify the next action.'],
                ['Follow-Up Management', 'Track follow-up dates and activities so opportunities do not get missed.']
            ],
            items: [
                { src: 'assets/projects/lead-tracker/lead-tracker-sheet.webp', alt: 'Lead tracker spreadsheet', caption: 'Lead tracker spreadsheet' },
                { src: 'assets/projects/lead-tracker/lead-management-board.webp', alt: 'Lead management board', caption: 'Lead management board' }
            ]
        },
        'onboarding-sop': {
            title: 'Customer Onboarding SOP',
            description: 'A structured onboarding system that provides a clear, repeatable process for delivering a consistent customer experience.',
            intro: 'Easy-to-follow documentation that helps teams deliver a reliable start for every customer.',
            features: [
                ['Step-by-Step Process', 'Clear instructions that guide team members through each stage of onboarding.'],
                ['Consistency & Quality', 'A standardized workflow designed to help maintain reliable service across every customer.'],
                ['Team Efficiency', 'Simple documentation that reduces confusion and helps streamline training.']
            ],
            items: [
                { src: 'assets/projects/customer-onboarding-sop/cover.webp', alt: 'Customer onboarding SOP cover', caption: 'SOP cover' },
                { src: 'assets/projects/customer-onboarding-sop/overview.webp', alt: 'Customer onboarding overview', caption: 'Process overview' },
                { src: 'assets/projects/customer-onboarding-sop/onboarding-process.webp', alt: 'Customer onboarding process', caption: 'Onboarding process' },
                { src: 'assets/projects/customer-onboarding-sop/process-flow.webp', alt: 'Customer onboarding process flow', caption: 'Process flow' }
            ]
        },
        'social-video': {
            title: 'Social Media Content',
            description: 'A collection of short-form videos and graphic designs created to boost engagement, strengthen brand identity, and deliver clear, impactful messages.',
            intro: 'Content designed to look polished, connect with the right audience, and support your social media goals.',
            platforms: 'Platforms: Facebook · Instagram · TikTok · LinkedIn',
            features: [
                ['Short-form Videos', 'Engaging reels designed to capture attention and encourage action.'],
                ['Graphic Designs', 'Branded visuals for social media posts, ads, and promotions.'],
                ['Purpose-Driven Content', 'Every piece is created with strategy, audience, and goals in mind.']
            ],
            tabs: {
                videos: { label: 'Videos', items: mediaItems('Video', 'sample', 'mp4', 11, 'video') },
                graphics: { label: 'Graphics', items: mediaItems('Graphic', '', 'png', 16, 'graphic') }
            }
        },
        'landing-page': {
            title: 'Landing Page Concept',
            description: 'A modern landing page concept designed to capture attention, communicate value clearly, and guide visitors toward action.',
            intro: 'A focused page experience that helps visitors understand the offer and take the next step.',
            features: [
                ['Conversion-Focused Design', 'Strategic layouts that guide visitors toward important actions and goals.'],
                ['Clear Brand Messaging', 'Visual hierarchy and messaging designed to communicate the brand effectively.'],
                ['Responsive Experience', 'A clean and adaptable design built with a smooth user experience in mind.']
            ],
            items: [
                { src: 'assets/projects/landing-page/homepage.webp', alt: 'Landing page homepage', caption: 'Homepage' },
                { src: 'assets/projects/landing-page/menu.webp', alt: 'Landing page menu', caption: 'Menu page' },
                { src: 'assets/projects/landing-page/about.webp', alt: 'Landing page about section', caption: 'About page' },
                { src: 'assets/projects/landing-page/contact.webp', alt: 'Landing page contact section', caption: 'Contact page' },
                { src: 'assets/projects/landing-page/mobile.webp', alt: 'Landing page mobile layout', caption: 'Mobile layout' }
            ]
        },
        'email-campaign': {
            title: 'Email Marketing Campaign',
            description: 'A branded email campaign designed to capture attention, communicate value, and encourage audience engagement.',
            intro: 'An email experience that looks consistent with the brand and supports clear, timely communication.',
            features: [
                ['Campaign Design', 'Visually consistent emails designed to match the brand and communicate clearly.'],
                ['Audience Engagement', 'Content structured to capture attention and encourage readers to take action.'],
                ['Marketing Automation', 'Campaign workflows that can support scheduled communication and customer follow-ups.']
            ],
            items: [
                { src: 'assets/projects/hubspot/hubspot-marketing-email.webp', alt: 'Marketing email', caption: 'Marketing email' },
                { src: 'assets/projects/hubspot/hubspot-email-report.webp', alt: 'Email campaign report', caption: 'Campaign report' },
                { src: 'assets/projects/hubspot/hubspot-dashboard.webp', alt: 'Campaign dashboard', caption: 'Campaign dashboard' }
            ]
        }
    };

    const modal = document.querySelector('#solution-modal');
    const modalTitle = modal.querySelector('#solution-modal-title');
    const description = modal.querySelector('.solution-modal-description');
    const projectIntro = modal.querySelector('.solution-project-intro');
    const features = modal.querySelector('.solution-project-features');
    const platforms = modal.querySelector('.solution-project-platforms');
    const tabs = modal.querySelector('.solution-gallery-tabs');
    const stage = modal.querySelector('.solution-gallery-stage');
    const caption = modal.querySelector('.solution-gallery-caption');
    const count = modal.querySelector('.solution-gallery-count');
    const thumbnails = modal.querySelector('.solution-gallery-thumbnails');
    const previousButton = modal.querySelector('.solution-gallery-arrow--previous');
    const nextButton = modal.querySelector('.solution-gallery-arrow--next');
    let activeGallery;
    let activeTab;
    let activeIndex;
    let triggerElement;

    const currentGallery = () => galleries[activeGallery];
    const currentItems = () => currentGallery().tabs ? currentGallery().tabs[activeTab].items : currentGallery().items;

    function renderDetails(gallery) {
        modalTitle.textContent = gallery.title;
        description.textContent = gallery.description;
        projectIntro.textContent = gallery.intro;
        platforms.textContent = gallery.platforms || '';
        platforms.hidden = !gallery.platforms;
        features.replaceChildren(...gallery.features.map(([title, copy]) => {
            const item = document.createElement('div');
            item.className = 'solution-project-feature';
            item.innerHTML = `<h4>${title}</h4><p>${copy}</p>`;
            return item;
        }));
    }

    function renderTabs(gallery) {
        tabs.hidden = !gallery.tabs;
        tabs.replaceChildren();
        if (!gallery.tabs) return;
        Object.entries(gallery.tabs).forEach(([id, tab]) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'solution-gallery-tab';
            button.textContent = `${tab.label} (${tab.items.length})`;
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-selected', id === activeTab);
            button.classList.toggle('is-active', id === activeTab);
            button.addEventListener('click', () => { activeTab = id; activeIndex = 0; renderGallery(); });
            tabs.append(button);
        });
    }

    function renderGallery() {
        const gallery = currentGallery();
        const items = currentItems();
        const item = items[activeIndex];
        renderDetails(gallery);
        renderTabs(gallery);
        caption.textContent = item.caption;
        count.textContent = `${activeIndex + 1} of ${items.length}`;
        stage.replaceChildren();
        const media = document.createElement(item.type === 'video' ? 'video' : 'img');
        media.src = item.src;
        media.className = 'solution-gallery-media';
        if (item.type === 'video') { media.controls = true; media.autoplay = true; media.playsInline = true; }
        else media.alt = item.alt;
        stage.append(media);
        thumbnails.replaceChildren(...items.map((galleryItem, index) => {
            const thumbnail = document.createElement('button');
            thumbnail.type = 'button';
            thumbnail.className = 'solution-gallery-thumbnail';
            thumbnail.classList.toggle('is-active', index === activeIndex);
            thumbnail.setAttribute('aria-label', `Show ${galleryItem.caption}`);
            thumbnail.addEventListener('click', () => { activeIndex = index; renderGallery(); });
            if (galleryItem.type === 'video') thumbnail.innerHTML = '<i class="fa-solid fa-play"></i>';
            else { const image = document.createElement('img'); image.src = galleryItem.src; image.alt = ''; thumbnail.append(image); }
            return thumbnail;
        }));
        const hasMultipleItems = items.length > 1;
        previousButton.hidden = !hasMultipleItems;
        nextButton.hidden = !hasMultipleItems;
    }

    function openGallery(id, trigger) {
        activeGallery = id;
        activeTab = galleries[id].tabs ? Object.keys(galleries[id].tabs)[0] : null;
        activeIndex = 0;
        triggerElement = trigger;
        renderGallery();
        modal.hidden = false;
        document.body.classList.add('solution-modal-open');
        modal.querySelector('.solution-modal-close').focus();
    }
    function closeGallery() {
        if (modal.hidden) return;
        modal.hidden = true;
        document.body.classList.remove('solution-modal-open');
        stage.replaceChildren();
        triggerElement?.focus();
    }
    function moveGallery(direction) { const items = currentItems(); activeIndex = (activeIndex + direction + items.length) % items.length; renderGallery(); }
    document.querySelectorAll('[data-gallery]').forEach(trigger => trigger.addEventListener('click', () => openGallery(trigger.dataset.gallery, trigger)));
    modal.querySelectorAll('[data-modal-close]').forEach(button => button.addEventListener('click', closeGallery));
    previousButton.addEventListener('click', () => moveGallery(-1));
    nextButton.addEventListener('click', () => moveGallery(1));
    document.addEventListener('keydown', event => {
        if (modal.hidden) return;
        if (event.key === 'Escape') closeGallery();
        if (event.key === 'ArrowLeft') moveGallery(-1);
        if (event.key === 'ArrowRight') moveGallery(1);
    });
})();
