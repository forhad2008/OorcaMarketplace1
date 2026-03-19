// Show submenu based on the first word typed
function showSuggestions() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const firstWord = input.split(" ")[0]; // take only the first word
    const menu = document.getElementById("searchMenu");
    const items = menu.querySelectorAll("div");

    let show = false;

    items.forEach(item => {
        const keyword = item.innerText.toLowerCase();
        if (keyword.includes(firstWord) && input !== "") {
            item.style.display = "block";
            show = true;
        } else {
            item.style.display = "none";
        }
    });

    menu.style.display = show ? "block" : "none";
}

// Navigate to page when suggestion clicked
function goPage(page) {
    window.location.href = page;
}

// Search button or Enter key triggers correct page
function goSearch() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const firstWord = input.split(" ")[0];

    if (firstWord.includes("business")) {
        window.location.href = "business-card.html";
    } else if (firstWord.includes("logo")) {
        window.location.href = "logo.html";
    } else if (firstWord.includes("theme")) {
        window.location.href = "theme.html";
    } else if (firstWord.includes("branding")) {
        window.location.href = "branding.html";
    } else {
        alert("No matching product found");
    }
}

// Press Enter key
document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        goSearch();
    }
});
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic validation
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Simulate successful login
    alert(`Welcome back, ${email}!`);

    // Optionally store login info in localStorage
    localStorage.setItem("loggedInUser", email);

    // Redirect to a "dashboard" or profile page (create a new page later)
    window.location.href = "dashboard.html";
}