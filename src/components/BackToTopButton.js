import React from 'react'

const BackToTopButton = () => {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  var mybutton = document.getElementById("backToTopBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  return (
    <button id="backToTopBtn" onClick={scrollToTop}>
      Back to Top
    </button>
  );
};

export default BackToTopButton
