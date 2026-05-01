document.addEventListener("DOMContentLoaded", () => {
    // Shared Data
    const khushiImg = "https://images.squarespace-cdn.com/content/v1/5d7fa27ac591f01062106a9f/d355ee04-655f-4f37-99bb-744d97a6bd1a/Virat+Kohli.jpg";
    const khushiImgAlt = "https://images.unsplash.com/photo-1769628628044-769bff843c17?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const viratImg = "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg";

    // 1. Render Stories
    const storiesContainer = document.querySelector(".stories-container");
    
    // We want to generate ~20 stories as was originally in HTML
    const totalStories = 20; 
    let storiesHTML = "";
    for (let i = 0; i < totalStories; i++) {
        // Switch between the two images used in the original HTML
        const imgSrc = (i < 10) ? khushiImg : khushiImgAlt;
        storiesHTML += `
            <div class="circle-container">
                <div class="circle">
                    <img src="${imgSrc}" alt="Profile picture of khushi">
                </div>
                <h1>khushi</h1>
            </div>`;
    }
    if (storiesContainer) {
        storiesContainer.innerHTML = storiesHTML;
    }

    // 2. Render Posts
    const postContainer = document.querySelector(".post-container");
    
    const totalPosts = 20; 
    let postsHTML = "";
    for (let i = 0; i < totalPosts; i++) {
        postsHTML += `
            <div class="posts">
                <div class="profile">
                    <div class="profile-circle">
                        <img src="${viratImg}" alt="Profile picture of Virat Kohli">
                    </div>
                    <h1>Virat Kohli</h1>
                </div>
                <div class="post-image-container">
                    <img src="${viratImg}" alt="Virat Kohli celebrating century">
                </div>
            
                <div class="engagement-section">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-bookmark"></i>
                    <i class="fa-brands fa-telegram"></i>
                </div>
                <div class="caption">
                    <p>Self-belief and hard work will always earn you success.</p>
                </div>
            </div>`;
    }
    
    if (postContainer) {
        postContainer.innerHTML = postsHTML;
    }
});
