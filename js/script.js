let mainColor = '#28e3c0'
let filterMainColor = 'invert(74%) sepia(71%) saturate(464%) hue-rotate(108deg) brightness(91%) contrast(94%)'
let eduTimeline = document.getElementById("educationTimeline");
let workTimeline = document.getElementById("workTimeline");
let eduTitle = document.getElementById('educationTitle')
let workTitle = document.getElementById("workTitle");
let eduIcon = document.getElementById('educationIcon');
let workIcon = document.getElementById('workIcon');

function showEducation() {
    workTimeline.style.display = 'none';
    eduTimeline.style.display = 'block';
    eduTitle.style.color = '#8b72af';
    workTitle.style.color = 'black';
    eduIcon.style.filter = 'invert(50%) sepia(12%) saturate(1413%) hue-rotate(223deg) brightness(94%) contrast(87%)';
    workIcon.style.filter = 'none'
}

function showWork() {
    eduTimeline.style.display = 'none';
    workTimeline.style.display = 'block';
    workTitle.style.color = '#8b72af';
    eduTitle.style.color = 'black';
    eduIcon.style.filter = 'none';
    workIcon.style.filter = 'invert(50%) sepia(12%) saturate(1413%) hue-rotate(223deg) brightness(94%) contrast(87%)';
}