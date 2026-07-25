const button = document.querySelector(".cv-button");
const navLinks = document.querySelectorAll(".nav-link-elem");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

const projectsData = {
  hops: {
    title: "HopS Redesign",
    tagline:
      "Overhauled the visual design and UX of TH Köln's scheduling system",
    meta: [
      { label: "Role", value: "UX/UI Designer, Researcher" },
      { label: "Timeline", value: "14 weeks (Semester Project)" },
      { label: "Tools", value: "Figma, User Testing, Prototyping" },
      { label: "Course", value: "Interaction Design Studio, TH Köln" },
    ],
    problem: `
            <p><strong>The Challenge:</strong> TH Köln's scheduling system (HopS) is outdated and confusing. Students struggle to find courses, register for classes, and understand their schedules. The interface feels disconnected from modern design standards.</p>
            <p><strong>The Insight:</strong> A scheduling app is used multiple times daily. Poor UX compounds frustration at scale.</p>
            <p><strong>The Opportunity:</strong> Redesign HopS to be intuitive, visually cohesive, and actually enjoyable to use.</p>
          `,
    designQuestion: `<p><strong>Design Question:</strong> How might we make course planning and scheduling less frustrating and more intuitive for TH Köln students?</p>`,
    research: `
            <p><strong>Research Method:</strong> I conducted 8 user interviews with students across different semesters and programs. I also reviewed competitor apps (Uni Cologne portal, other university systems) and observed students using HopS in the wild.</p>
          `,
    findings: [
      {
        title: "Finding 1",
        text: "Students can't easily see their full schedule at a glance. Information is scattered.",
      },
      {
        title: "Finding 2",
        text: "Course search is time-consuming. No smart filters or recommendations based on program.",
      },
      {
        title: "Finding 3",
        text: "The visual design feels outdated, which undermines trust in the system.",
      },
      {
        title: "Finding 4",
        text: "Mobile experience is barely functional. Most students access on phone.",
      },
    ],
    approach: `
            <p><strong>Ideation & Sketching:</strong> I explored 3 different information architectures:</p>
            <ul>
              <li>Timeline-first (week view with day breakdown)</li>
              <li>Course-first (all courses, then schedule view)</li>
              <li>Semester view (full semester overview, drill-down)</li>
            </ul>
            <p style="margin-top: 1rem;">Testing with 3 users showed the <strong>semester overview → week view flow performed best</strong>. Users wanted to see the big picture first, then drill into details.</p>
          `,
    solution: `
            <p>The final redesign centers around a <strong>clean, modern interface</strong> with smart information hierarchy. Students can see their full schedule, easily search courses, and understand requirements at a glance.</p>
          `,
    features: [
      {
        title: "📅 Week View",
        text: "See your entire week at a glance. Color-coded by course type or program.",
      },
      {
        title: "🔍 Smart Search",
        text: "Filter by program, time, professor, room location. Save favorite courses.",
      },
      {
        title: "📱 Mobile-First",
        text: "Optimized for phone usage with swipe navigation and compact layouts.",
      },
      {
        title: "🔔 Smart Notifications",
        text: "Get reminders for course registration deadlines and schedule changes.",
      },
    ],
    decisions: [
      {
        title: "Why Week View?",
        text: "Most UIs default to month view, but students need to see their actual schedule. A week view is the right level of detail for busy students.",
      },
      {
        title: "Color System",
        text: "I used distinct colors for each course type (lecture, seminar, lab) and program. This reduces cognitive load and makes scanning faster.",
      },
    ],
    learnings: [
      {
        title: "✓ What Worked",
        text: "Starting with low-fidelity sketches saved time. Users told me what mattered before I invested in polished design.",
      },
      {
        title: "⚠ What I'd Change",
        text: "I should have tested the prototype with more advanced students. They have different scheduling constraints than beginners.",
      },
      {
        title: "💡 Key Takeaway",
        text: "Context matters. A scheduling app is different from a course marketplace. Understanding the core use case (fitting classes around work/life) shaped every decision.",
      },
      {
        title: "🔮 Next Steps",
        text: "If implemented: test with the actual HopS team, explore integration with other student systems, gather feedback from first semester of use.",
      },
    ],
    cta: [
      { label: "Open Figma Prototype", url: "#" },
      { label: "Read Case Study", url: "#" },
    ],
    nextProject: { id: "travel", title: "Travel Safety Companion" },
    prevProject: null,
  },
  travel: {
    title: "Travel Safety Companion",
    tagline: "A community-driven travel app for solo female travelers",
    meta: [
      { label: "Role", value: "UX/UI Designer, Researcher" },
      { label: "Timeline", value: "12 weeks (Semester Project)" },
      { label: "Tools", value: "Figma, User Interviews, Miro" },
      { label: "Course", value: "Interaction Design Studio, TH Köln" },
    ],
    problem: `
            <p><strong>The Challenge:</strong> Solo female travelers face unique safety concerns that generic travel apps don't address. They piece together information from Reddit, Instagram, and travel blogs.</p>
            <p><strong>The Insight:</strong> Safety is emotional, not just physical. Women need reassurance and community, not just warnings.</p>
            <p><strong>The Opportunity:</strong> Build a travel companion that combines verified safety info, community wisdom, and practical planning tools.</p>
          `,
    designQuestion: `<p><strong>Design Question:</strong> How might we help solo female travelers feel confident and informed when traveling to unfamiliar places?</p>`,
    research: `
            <p><strong>Research Method:</strong> I interviewed 6 solo female travelers (ages 22–35) who traveled internationally within the last 2 years. I also reviewed academic research on travel safety and explored existing travel apps and communities.</p>
          `,
    findings: [
      {
        title: "Finding 1",
        text: "Safety concerns vary by destination. Women want destination-specific guidance, not generic warnings.",
      },
      {
        title: "Finding 2",
        text: "Peer recommendations carry more weight than official sources. Women trust other travelers over guides.",
      },
      {
        title: "Finding 3",
        text: "Information is scattered across 4+ tools. There's no single source of truth.",
      },
      {
        title: "Finding 4",
        text: "Confidence is context-dependent. Women want to feel supported and not alone.",
      },
    ],
    approach: `
            <p><strong>Ideation & Sketching:</strong> I explored 3 interaction models:</p>
            <ul>
              <li>Timeline-first: Day-by-day planning with safety alerts</li>
              <li>Community-first: Peer Q&A and reviews leading</li>
              <li>Hybrid: Both integration with community insights embedded</li>
            </ul>
            <p style="margin-top: 1rem;">Testing with 2 users showed the <strong>hybrid model worked best</strong>—planning + community reassurance together.</p>
          `,
    solution: `
            <p>The final design centers around a <strong>community-informed travel companion</strong>. Solo female travelers can plan trips, access peer-reviewed safety insights, and connect with other women—all in one place.</p>
          `,
    features: [
      {
        title: "📍 Destination Guides",
        text: "Location-specific safety info written by and for solo female travelers.",
      },
      {
        title: "💬 Community Q&A",
        text: "Ask 'Is it safe to walk alone at night in [neighborhood]?' Get real answers.",
      },
      {
        title: "📋 Smart Trip Planner",
        text: "Plan day-by-day. The app flags risky areas and suggests safer alternatives.",
      },
      {
        title: "🏨 Vetted Stays",
        text: "Accommodation reviews filtered by solo female travelers. Find women-friendly hostels.",
      },
    ],
    decisions: [
      {
        title: "Why Community First?",
        text: "Research showed peer recommendations matter more than official sources. By centering community wisdom, the app builds trust.",
      },
      {
        title: "Visual Language",
        text: "I chose warm, approachable colors and rounded forms to convey safety and inclusivity—not clinical.",
      },
    ],
    learnings: [
      {
        title: "✓ What Worked",
        text: "Starting with user interviews—not assumptions—saved me from building features nobody needed.",
      },
      {
        title: "⚠ What I'd Change",
        text: "I designed for 1-2 person groups. With larger groups, the interface gets complex. A 'group mode' would help.",
      },
      {
        title: "💡 Key Takeaway",
        text: "Safety is emotional, not just physical. The best designs acknowledge both feelings and facts.",
      },
      {
        title: "🔮 Next Steps",
        text: "Test with larger group, explore moderation at scale, research revenue models (freemium? community-funded?).",
      },
    ],
    cta: [
      { label: "Open Figma Prototype", url: "#" },
      { label: "Read Full Case Study", url: "#" },
    ],
    nextProject: { id: "events", title: "Vibe Match Events" },
    prevProject: { id: "hops", title: "HopS Redesign" },
  },
  events: {
    title: "Vibe Match Events",
    tagline:
      "An event discovery app that matches users with local Cologne experiences",
    meta: [
      { label: "Role", value: "UX/UI Designer, Curator" },
      { label: "Timeline", value: "10 weeks (Personal Project)" },
      { label: "Tools", value: "Figma, Instagram Research, Interviews" },
      { label: "Status", value: "Concept & Prototype" },
    ],
    problem: `
            <p><strong>The Challenge:</strong> Finding events in Cologne that match your vibe is hard. Instagram, event listing sites, and word-of-mouth are scattered. Young people miss events that would actually resonate with them.</p>
            <p><strong>The Insight:</strong> Events aren't just about what's happening—they're about community and feeling like you belong.</p>
            <p><strong>The Opportunity:</strong> Create a discovery app that understands your aesthetic and connects you with people and experiences aligned with your vibe.</p>
          `,
    designQuestion: `<p><strong>Design Question:</strong> How might we help people discover local events that genuinely match their interests and community vibe?</p>`,
    research: `
            <p><strong>Research Method:</strong> I studied Instagram accounts curating Cologne events and culture. I interviewed 5 young people about how they discover events and what makes an event feel "right" for them.</p>
          `,
    findings: [
      {
        title: "Finding 1",
        text: "People discover events through Instagram and friends, not dedicated event apps.",
      },
      {
        title: "Finding 2",
        text: "Vibe matters more than genre. A coffee pop-up can feel more like 'home' than a big concert.",
      },
      {
        title: "Finding 3",
        text: "Community is key. People go to events to meet their people, not just experience something.",
      },
      {
        title: "Finding 4",
        text: "Current event apps feel corporate and miss the soul of local scenes.",
      },
    ],
    approach: `
            <p><strong>Ideation & Sketching:</strong> I explored how to represent "vibe" visually and technically:</p>
            <ul>
              <li>Tag-based system (aesthetic tags: "cozy", "indie", "eclectic")</li>
              <li>Visual similarity (shows events with similar aesthetics)</li>
              <li>Community profiles (curated by local tastemakers)</li>
            </ul>
            <p style="margin-top: 1rem;">The <strong>community profile model won</strong>—following tastemakers felt more authentic than algorithm-driven matching.</p>
          `,
    solution: `
            <p>The final design uses a <strong>visual-first, community-driven approach</strong>. Users follow local tastemakers and curators. The app shows events that match your followed communities' aesthetic, with emphasis on visual discovery and social connection.</p>
          `,
    features: [
      {
        title: "🎨 Visual Discovery",
        text: "Browse events by aesthetic. Similar vibes grouped together based on visual language.",
      },
      {
        title: "👥 Follow Curators",
        text: "Follow local tastemakers and event organizers. See what events they're excited about.",
      },
      {
        title: "🗺️ Neighborhood Guides",
        text: "Explore Cologne by vibe. Indie coffee shops, street art, underground music, wellness spaces.",
      },
      {
        title: "🤝 Community Hub",
        text: "RSVP, meet others going to events, see who you'll meet there.",
      },
    ],
    decisions: [
      {
        title: "Why Visual-First?",
        text: "Instagram already proved that visual discovery works. By leaning into aesthetics, we connect with emotions, not just categories.",
      },
      {
        title: "Community Over Algorithm",
        text: "Tastemakers and curators felt more trustworthy than an algorithm. Users want recommendations from humans they respect.",
      },
    ],
    learnings: [
      {
        title: "✓ What Worked",
        text: "Studying how people already discover events (Instagram, friends) informed the design. I didn't fight user behavior; I built on it.",
      },
      {
        title: "⚠ What I'd Change",
        text: "I should have explored how to bootstrap the curator community. Who creates the first events and recommendations?",
      },
      {
        title: "💡 Key Takeaway",
        text: "Niche communities thrive on trust and taste. Generic solutions don't work. This app works because it respects local culture.",
      },
      {
        title: "🔮 Next Steps",
        text: "Partner with local influencers and event organizers, test with Cologne communities, explore expansion to other German cities.",
      },
    ],
    cta: [
      { label: "Open Figma Prototype", url: "#" },
      { label: "View Case Study", url: "#" },
    ],
    nextProject: null,
    prevProject: { id: "travel", title: "Travel Safety Companion" },
  },
};

function loadProject(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  // Hide main content, show project page
  document
    .querySelectorAll(".hero-section, .projects, .about-me, .footer")
    .forEach((el) => {
      el.style.display = "none";
    });
  document.getElementById("projectPage").classList.add("active");

  // Set Title & Tagline
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectTagline").textContent = project.tagline;

  // Set Meta
  const metaHTML = project.meta
    .map(
      (item) => `
          <div class="meta-item">
            <span class="meta-label">${item.label}</span>
            <span class="meta-value">${item.value}</span>
          </div>
        `,
    )
    .join("");
  document.getElementById("projectMeta").innerHTML = metaHTML;

  // Set Problem
  document.getElementById("projectProblem").innerHTML = project.problem;
  document.getElementById("projectDesignQuestion").innerHTML =
    project.designQuestion;

  // Set Research
  document.getElementById("projectResearch").innerHTML = project.research;
  const findingsHTML = project.findings
    .map(
      (finding) => `
          <div class="card">
            <h3>${finding.title}</h3>
            <p>${finding.text}</p>
          </div>
        `,
    )
    .join("");
  document.getElementById("projectFindings").innerHTML = findingsHTML;

  // Set Approach
  document.getElementById("projectApproach").innerHTML = project.approach;

  // Set Solution
  document.getElementById("projectSolution").innerHTML = project.solution;
  const featuresHTML = project.features
    .map(
      (feature) => `
          <div class="card">
            <h3>${feature.title}</h3>
            <p>${feature.text}</p>
          </div>
        `,
    )
    .join("");
  document.getElementById("projectFeatures").innerHTML = featuresHTML;

  // Set Gallery (placeholder)
  const galleryHTML = `
          <div class="gallery-item tall">[Screen: Main View]</div>
          <div class="gallery-item">[Screen: Detail 1]</div>
          <div class="gallery-item">[Screen: Detail 2]</div>
          <div class="gallery-item">[Screen: Action]</div>
          <div class="gallery-item wide">[Screen: Full Interaction Flow]</div>
        `;
  document.getElementById("projectGallery").innerHTML = galleryHTML;

  // Set Design Decisions
  const decisionsHTML = project.decisions
    .map(
      (decision) => `
          <div>
            <h3>${decision.title}</h3>
            <p>${decision.text}</p>
          </div>
        `,
    )
    .join("");
  document.getElementById("projectDecisions").innerHTML = decisionsHTML;

  // Set Learnings
  const learningsHTML = project.learnings
    .map(
      (learning) => `
          <div class="card">
            <h3>${learning.title}</h3>
            <p>${learning.text}</p>
          </div>
        `,
    )
    .join("");
  document.getElementById("projectLearnings").innerHTML = learningsHTML;

  // Set CTA
  const ctaHTML = project.cta
    .map(
      (btn) => `
          <a href="${btn.url}" class="project-link-btn">
            <div class="upper-box">${btn.label}</div>
            <div class="under-box"></div>
          </a>
        `,
    )
    .join("");
  document.getElementById("projectCTA").innerHTML = ctaHTML;

  // Set Navigation
  let navHTML = "";
  if (project.prevProject) {
    navHTML += `
          <div class="project-nav-card" onclick="loadProject('${project.prevProject.id}')">
            <h3><span class="nav-arrow">←</span>${project.prevProject.title}</h3>
            <p>Previous project</p>
          </div>
        `;
  }
  if (project.nextProject) {
    navHTML += `
          <div class="project-nav-card" onclick="loadProject('${project.nextProject.id}')">
            <h3>${project.nextProject.title}<span class="nav-arrow">→</span></h3>
            <p>Next project</p>
          </div>
        `;
  }
  document.getElementById("projectNavigation").innerHTML = navHTML;

  // Scroll to top
  window.scrollTo(0, 0);
}

// GO BACK FUNCTION
function goBackToProjects() {
  document.getElementById("projectPage").classList.remove("active");
  document
    .querySelectorAll(".hero-section, .projects, .about-me, .footer")
    .forEach((el) => {
      el.style.display = "";
    });
  window.scrollTo(0, 0);
}

button.addEventListener("click", () => {
  button.classList.toggle("filled");
});

hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.nav-link-elem[href="#${id}"]`);

      if (entry.isIntersecting) {
        // Remove highlight from all links
        navLinks.forEach((l) => l.classList.remove("active"));
        // Highlight the current one
        if (link) link.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }, // 60% of section must be visible
);

const img = document.querySelector(".img-placeholder");
const resizeObserver = new ResizeObserver(() => {
  const height = img.offsetHeight;
  img.style.width = height + "px";
});
resizeObserver.observe(img);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
