// Wait for the HTML document to fully load before attaching events
document.addEventListener('DOMContentLoaded', () => {

  // Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile navigation when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('active');
    });
  });

  // Data for APK Downloads
  const appsData = {
    app1: {
      title: "Custom Utility App v1.0",
      meta: "Version: 1.0.4 | Size: 15 MB",
      desc: "This app provides tools for desktop customization, asset handling, and media processing. Features include real-time performance tracking and integrated utility scripts.",
      downloadUrl: "#"
    },
    app2: {
      title: "Retro Arcade Game v2.1",
      meta: "Version: 2.1.0 | Size: 45 MB",
      desc: "A fast-paced 2D retro action game featuring custom touch controls, dynamic particle effects, and an immersive soundtrack powered by custom audio engines.",
      downloadUrl: "#"
    },
    app3: {
      title: "Godot 2D Platformer v1.0",
      meta: "Version: 1.0.0 | Size: 32 MB",
      desc: "An indie platformer game built from scratch using Godot 4 and GDScript. Features custom player movement physics, wall-jumping mechanics, dynamic particle effects, smooth camera tracking, and custom sound effects integrated via audio streams.",
      downloadUrl: "#"
    }
  };

  // Data for DevsBlog Articles
  const blogsData = {
    blog1: {
      title: "Building UI with Modern Web Tools",
      meta: "Published: October 2026 | Author: Dave Dev",
      content: `
        <p style="margin-bottom: 1rem;">When designing modern web applications, keeping a clean separation between HTML structure and CSS styling is key to maintaining readable and expandable code.</p>
        <p style="margin-bottom: 1rem;">By utilizing CSS variables for theme colors and CSS Grid/Flexbox for layout structures, you can easily build dark-themed dashboards, portals, and single-page apps that look great on desktop and mobile displays alike.</p>
      `
    },
    blog2: {
      title: "Optimizing Game Mechanics",
      meta: "Published: September 2026 | Author: Dave Dev",
      content: `
        <p style="margin-bottom: 1rem;">Building smooth mechanics in game development requires proper asset streaming and asynchronous scene loading. Minimizing heavy tasks on the main frame thread guarantees consistent frame rates.</p>
        <p style="margin-bottom: 1rem;">Whether working with 2D physics or 3D controllers, focusing on input responsiveness, dynamic state machines, and fine-tuned audio pitching elevates the overall player experience.</p>
      `
    }
  };

  const modal = document.getElementById("infoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const modalBody = document.getElementById("modalBody");
  const modalFooter = document.getElementById("modalFooter");
  const closeBtn = document.querySelector(".close-btn");

  // Open APK Modal
  function openAppModal(appKey) {
    const app = appsData[appKey];
    if (!app) return;
    modalTitle.innerText = app.title;
    modalMeta.innerText = app.meta;
    modalBody.innerHTML = `<p>${app.desc}</p>`;
    modalFooter.innerHTML = `<a href="${app.downloadUrl}" class="btn">Download APK Now</a>`;
    
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  }

  // Open Blog Modal
  function openBlogModal(blogKey) {
    const blog = blogsData[blogKey];
    if (!blog) return;
    modalTitle.innerText = blog.title;
    modalMeta.innerText = blog.meta;
    modalBody.innerHTML = blog.content;
    modalFooter.innerHTML = `<button class="btn close-modal-btn">Close Article</button>`;
    
    modal.style.display = "flex";
    document.body.classList.add("modal-open");

    // Add event listener to the dynamically created close button
    document.querySelector(".close-modal-btn").addEventListener("click", closeModal);
  }

  // Close Modal Function
  function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  // Attach event listeners to all blog "Read More" buttons
  const blogButtons = document.querySelectorAll(".blog-btn");
  blogButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const blogKey = e.target.getAttribute("data-blog");
      openBlogModal(blogKey);
    });
  });

  // Attach event listeners to all APK "View" buttons
  const appButtons = document.querySelectorAll(".app-btn");
  appButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const appKey = e.target.getAttribute("data-app");
      openAppModal(appKey);
    });
  });

  // Close modal when clicking the 'X' button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside the popup box
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

});