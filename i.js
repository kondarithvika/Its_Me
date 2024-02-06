
document.addEventListener('DOMContentLoaded', function () {
  showContent(1); // Show content1 by default
  
  // Check for saved theme in local storage and apply it
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});


let y = document.querySelector("ul");

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
}

let trigg=0;
function togg_mode() {
  let b = document.body;
  
  if(trigg) {
    b.style.backgroundColor="white";
    b.style.color="black";
    trigg=0;
  } else {
    b.style.backgroundColor="black";
    b.style.color="white";
    trigg=1;
  }
}

function showContent(sectionNumber) {
  var allContent = document.getElementsByClassName("content");
  for (var i = 0; i < allContent.length; i++) {
    allContent[i].style.display = "none";
  }

  var selectedContent = document.getElementById("content" + sectionNumber);
  if (selectedContent) {
    selectedContent.style.display = "block";
  }
}

function openBlog(blogId) {
  const blogUrl = `blog.html#${blogId}`;
  window.open(blogUrl, '_blank');
}

  

document.addEventListener('DOMContentLoaded', () => {
  const likeCounter = document.getElementById('likeCounter');
  const commentsList = document.getElementById('commentsList');
  const blogTitle = document.getElementById('blogTitle');
  const blogId = window.location.hash.substring(1);
  const blogKey = `blog_${blogId}`;

  const storedLikes = parseInt(localStorage.getItem(`${blogKey}_likes`)) || 0;
  const storedComments = JSON.parse(localStorage.getItem(`${blogKey}_comments`)) || [];

  likeCounter.textContent = `Likes: ${storedLikes}`;
  blogTitle.textContent = `Blog ${blogId}`;

  storedComments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.textContent = comment;
    commentsList.appendChild(commentElement);
  });
});
load();
function load() {
  const blogId = window.location.hash.substring(1);
  const body = document.body;

  if (blogId === 'blog1') {
    const extraTextElement = document.createElement('p');
    extraTextElement.textContent = 'Problem-solving skills are a cornerstone of personal and professional success, transcending various aspects of our livesAt its core, effective problem-solving involves a systematic approach to understanding, dissecting, and resolving challenges. The first crucial step lies in comprehending the problem thoroughly—breaking it down into manageable components and identifying the underlying issues.In essence, problem-solving skills are not just about finding answers; they are about developing a mindset and approach that empowers individuals to navigate complexities with confidence, resilience, and a commitment to continuous learning. Whether in the workplace, relationships, or daily life, honing these skills equips individuals to face challenges head-on and transform obstacles into stepping stones for success.';
    extraTextElement.style.fontSize = '25px';
    const headingElement = document.createElement('h2');
    headingElement.textContent = 'Problem-Solving Skills';

    // Increase text size
    headingElement.style.fontSize = '28px';
    // body.appendChild(headingElement);
    body.insertBefore(extraTextElement, body.firstChild);
    body.insertBefore(headingElement, body.firstChild);
  }

  if (blogId === 'blog2') {
    let p = 'Goals serve as guiding stars, illuminating the path to success and providing a sense of direction. They help clarify aspirations, focus energy, and inspire action. Whether short-term or long-term, personal or professional, setting clear and achievable goals is the first step towards realizing your dreams. Periodically reflect on your goals, plans, and progress. Evaluate whats working well and what needs adjustment. Be honest with yourself about any obstacles or setbacks you have encountered and use this information to refine your strategies and stay on course towards achieving your goals.Setting goals and crafting plans are integral components of the journey towards success. By adopting a systematic approach, embracing flexibility, and seeking support when needed, you can turn your aspirations into reality. Remember, the path to success may be challenging, but with clear goals and well-crafted plans, you possess the tools to overcome obstacles and achieve your dreams.';

    const extraTextElement = document.createElement('p');
    extraTextElement.textContent = p;
    extraTextElement.style.fontSize = '24px';
    const headingElement = document.createElement('h2');
    headingElement.textContent = 'The Power of Goals :';

    // Increase text size
    headingElement.style.fontSize = '30px';

    // Prepend the extra text element to the body
    body.insertBefore(extraTextElement, body.firstChild);
    body.insertBefore(headingElement, body.firstChild);
  }
}

function incrementLikes() {
  const likeCounter = document.getElementById('likeCounter');
  const blogId = window.location.hash.substring(1);
  const blogKey = `blog_${blogId}`;

  let likes = parseInt(localStorage.getItem(`${blogKey}_likes`)) || 0;
  likes++;
  likeCounter.textContent = `Likes: ${likes}`;
  localStorage.setItem(`${blogKey}_likes`, likes);
}


  
function addComment() {
  const commentInput = document.getElementById('commentInput');
  const commentsList = document.getElementById('commentsList');
  const blogId = window.location.hash.substring(1);
  const blogKey = `blog_${blogId}`;

  console.log('Adding comment for blog:', blogId);

  const comment = commentInput.value.trim();
  if (comment !== '') {
    console.log('New comment:', comment);
    
    const commentElement = document.createElement('div');
    commentElement.textContent = comment;
    commentsList.appendChild(commentElement);

    // Save comments to local storage
    let storedComments = JSON.parse(localStorage.getItem(`${blogKey}_comments`)) || [];
    storedComments.push(comment);
    localStorage.setItem(`${blogKey}_comments`, JSON.stringify(storedComments));

    // Clear input
    commentInput.value = '';

    console.log('Comments stored locally:', storedComments);
  }
}
// Function to load existing comments from local storage
function loadCommentsFromLocalStorage() {
  const blogId = window.location.hash.substring(1);
  const blogKey = `blog_${blogId}`;

  // Retrieve stored comments from local storage
  const storedComments = JSON.parse(localStorage.getItem(`${blogKey}_comments`)) || [];

  // Get the comments list element
  const commentsList = document.getElementById('commentsList');

  // Clear existing comments
  commentsList.innerHTML = '';

  // Populate comments list with stored comments
  storedComments.forEach(comment => {
    const commentElement = document.createElement('div');
    commentElement.textContent = comment;
    commentsList.appendChild(commentElement);
  });
}
  window.onload = loadCommentsFromLocalStorage;

function clearLocalStorage() {
  // Remove the specific items you want to clear
  localStorage.removeItem('theme');
  localStorage.removeItem(`${blogKey}_likes`);
  localStorage.removeItem(`${blogKey}_comments`);
}
