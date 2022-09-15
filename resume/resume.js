function openContent(evt, cat) {
    var resumes = document.querySelectorAll(".resume");
    resumes.forEach( (resume) => {
      resume.style.display = "none";
    })

    var tablinks = document.querySelectorAll(".tablinks")
    tablinks.forEach( (tablink) => {
      tablink.className = tablink.className.replace("active", "");
    })

    document.querySelector(`#${cat}`).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.querySelector("#default").click();