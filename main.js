(function() {
    "use strict";
    let item = document.querySelectorAll('.timeline li');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    function callbackfunc() {
        for (let i = 0; i < item.length; i++) {
            if (isElementInViewport(item[i])) {
                item[i].classList.add('in-view')

            }
        }
    }
    window.addEventListener('load', callbackfunc)
    window.addEventListener('resize', callbackfunc)
    window.addEventListener('scroll', callbackfunc)
})()



let wrapper = document.getElementById('wrapper');
let loginLink = document.getElementById('login-link');
let registerLink = document.getElementById('register-link');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})




document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("register-btn");
    const usernameInput = document.getElementById("register-username");
    const passwordInput = document.getElementById("register-password");

    const userGreeting = document.getElementById("user-greeting");
    const loginBtn = document.getElementById("login-btn");


    const savedUser = localStorage.getItem("username");
    if (savedUser && userGreeting) {
        userGreeting.textContent = ` ${savedUser}`;
        if (loginBtn) loginBtn.style.display = "none";
    }


    if (registerBtn && usernameInput && passwordInput) {
        registerBtn.addEventListener("click", function(e) {
            e.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username.length <= 4) {
                alert("❌ اسم المستخدم يجب أن يكون أكثر من 4 أحرف.");
                return;
            }

            if (password.length <= 3) {
                alert("❌ كلمة المرور يجب أن تكون أكثر من 3 أحرف.");
                return;
            }


            localStorage.setItem("username", username);
            alert("✅ مرحبا بك في بلاد الأندلس  ! سيتم تحويلك إلى الصفحة الرئيسية.");
            window.location.href = "./index.html";
        });
    }
});