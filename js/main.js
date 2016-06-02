function manualValidate(ev) {
     ev.target.checkValidity();
     return false;
 }
 $("#contactForm").bind("submit", manualValidate);