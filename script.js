const videos = {
  course1: {
    title: "HTML for Beginners",
    embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xusJADtrrFQ?si=9iJnCgH8fa6VpI-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>" allowfullscreen></iframe>`
  },
  course2: {
    title: "JavaScript Essentials",
    embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7a2G0uLaahY?si=dBA3PwmzKin_Ncr1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>" allowfullscreen></iframe>`
  }
};

function loadCourse(courseKey) {
  const course = videos[courseKey];
  document.getElementById("video-title").innerText = course.title;
  document.getElementById("video-container").innerHTML = course.embed;
}
