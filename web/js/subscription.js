const navbar = document.querySelector('.navbar');
const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const packageButton = document.querySelectorAll('.package-button');
const packageFrame = document.querySelector('.package-frame');

let subscribeButton = document.querySelector('.subscribe-button');

function checkNavbar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop >= 100) {
        navbar.style.backgroundColor = 'var(--color-4)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
}

checkNavbar();
window.addEventListener('scroll', () => {
    checkNavbar();
});

hamburgerButton.addEventListener('click', (event) => {
    hamburgerMenu.style.top = '0px';
    event.stopPropagation()
    window.addEventListener('click', (event) => {
        hamburgerMenu.style.top = '-300px';
    });
});

window.addEventListener('resize', () => {
    hamburgerMenu.style.top = '-300px';
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const data = getQueryParam("data");
if(data != null) {
    chooseSubscriptionPackage(data);
    packageButton.forEach((element) => {
        element.classList = element.classList[0] + ' package-button';
    });
    document.querySelector(`.${data}`).classList += ' selected-package-button';
}

function chooseSubscriptionPackage(name) {
    switch(name) {
        case 'basic':
            packageFrame.innerHTML = `
<div class="picture">
    <img src="../assets/basic.jpg" alt="">
</div>
<div class="description">
    <h3>Basic</h3>
    <br>
    Price: $10 per month
    <br>
    <br>
    <ul>
        <li>
            Video Access: 50 basic learning videos.
        </li>
        <li>
            PDF Materials: Downloadable PDF resources for each video.
        </li>
        <li>
            Final Tests: End-of-course assessments.
        </li>
        <li>
            Email Support: Email assistance for queries and technical support.
        </li>
    </ul>           
    <br>                    
    The Basic package is designed to kickstart your learning journey with essential resources and support. With access to a curated selection of educational videos covering various topics, you'll lay the foundation for your learning endeavors. Whether you're exploring new interests or brushing up on fundamental skills, our Basic package offers a user-friendly experience tailored to beginners. Additionally, our email support ensures that you have assistance whenever you need it, guiding you through any challenges you may encounter along the way.
    <br>
    <br>
    <div class="subscribe-button button-1">Subscribe</div>    
</div>
            `;
            break;
        case 'standard':
            packageFrame.innerHTML = `
<div class="picture">
    <img src="../assets/standard.jpg" alt="">
</div>
<div class="description">
    <h3>Standard</h3>
    <br>
    Price: $20 per month
    <br>
    <br>
    <ul>
        <li>
            Video Access: 100 videos, including advanced topics.
        </li>
        <li>
            PDF Materials: Downloadable PDF resources for each video.
        </li>
        <li>
            Final Tests: End-of-course assessments.
        </li>
        <li>
            Email and Chat Support: Assistance via email and chat.
        </li>
        <li>
            Discussion Forum: Access to a members-only forum.
        </li>        
    </ul>           
    <br>                    
    Upgrade to our Standard package for a more comprehensive learning experience. With an expanded library of educational videos, you'll delve deeper into your chosen subjects and discover new areas of interest. Our combination of email and chat support means you can get quick answers to your questions and engage in real-time discussions with our knowledgeable support team. Whether you're a student, professional, or lifelong learner, the Standard package provides the resources and assistance you need to excel in your learning journey.
    <br>
    <br>
    <div class="subscribe-button button-1">Subscribe</div>    
</div>
            `;            
            break;
        case 'deluxe':
            packageFrame.innerHTML = `
<div class="picture">
    <img src="../assets/deluxe.jpg" alt="">
</div>
<div class="description">
    <h3>Deluxe</h3>
    <br>
    Price: $30 per month
    <br>
    <br>
    <ul>
        <li>Video Access: 200 videos, including exclusive content.</li>
        <li>PDF Materials: Downloadable PDF resources for each video.</li>
        <li>Final Tests and Certificates: Assessments and digital certificates.</li>
        <li>Email, Chat, and Phone Support: Comprehensive support options.</li>
        <li>Discussion Forum: Access to a deluxe members forum.</li>
        <li>Live Webinars: Monthly live sessions with experts.</li>    
    </ul>           
    <br>                    
    Elevate your learning experience with our Deluxe package, offering exclusive access to premium content and advanced features. Dive into specialized topics and gain in-depth knowledge with our extensive collection of educational videos. Earn digital certificates to showcase your expertise and achievements as you progress through your learning goals. Our comprehensive support system, including email, chat, and phone support, ensures that you receive personalized assistance whenever you need it. Additionally, monthly live webinars provide opportunities to engage with experts in your field and stay updated on the latest trends and developments.    
    <br>
    <br>
    <div class="subscribe-button button-1">Subscribe</div>
</div>
            `;  
            break;
        case 'premium':
            packageFrame.innerHTML = `
<div class="picture">
    <img src="../assets/premium.jpg" alt="">
</div>
<div class="description">
    <h3>Premium</h3>
    <br>
    Price: $40 per month
    <br>
    <br>
    <ul>
        <li>Video Access: Full access to all videos, including new releases.</li>
        <li>PDF Materials: Downloadable PDF resources for each video.</li>
        <li>Final Tests and Certificates: Assessments and digital certificates.</li>
        <li>24/7 Priority Support: Round-the-clock support via email, chat, and phone.</li>
        <li>Exclusive Forum: Premium members-only discussion forum.</li>
        <li>Live Webinars: Monthly live sessions with experts.</li>
        <li>Personal Consultations: One-on-one sessions with instructors.</li>
        <li>Offline Access: Ability to download videos and materials for offline use.</li>    
    </ul>           
    <br>                    
    Experience the pinnacle of online learning with our Premium package, providing unparalleled access to our entire suite of resources and benefits. Enjoy unlimited access to all educational videos, including new releases and exclusive content. Receive personalized guidance and support with one-on-one consultations with our experienced instructors. Our 24/7 priority support guarantees assistance whenever you need it, ensuring a seamless learning experience. With offline access, you can continue learning on-the-go, even without an internet connection. Join our community of passionate learners and take your skills to the next level with the Premium package.
    <br>
    <br>
    <div class="subscribe-button button-1">Subscribe</div>
</div>
            `;            
            break;
    }
    subscribeButton = document.querySelector('.subscribe-button');
    subscribeButton.addEventListener('click', () => {
        window.location.href = './learn.html';
    });
}

packageButton.forEach((element) => {
    element.addEventListener('click', () => {
        chooseSubscriptionPackage(element.classList[0]);
        packageButton.forEach((element1) => {
            element1.classList = element1.classList[0] + ' package-button';
        });
        element.classList += ' selected-package-button';
    });
});

subscribeButton.addEventListener('click', () => {
    window.location.href = './learn.html';
});

const searchButton = document.querySelector('.search-button');
const searchText = document.getElementById('search-text');
searchButton.addEventListener('click', () => {
    if (searchText.value.trim() != '') {
        alert(`Searching for: ${searchText.value.trim()}`);
    }
    searchText.value = '';
});