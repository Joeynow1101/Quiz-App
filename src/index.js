const bookmarks = document.querySelectorAll(".card__bookmark");
      let buttons = document.querySelectorAll(".card__answer");
      let answer = document.querySelectorAll(".answer");

      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          answer[index].classList.toggle("hidden")
        //   if (button.innerText === "Show Answer") {
        //     button.innerText = "Hide Answer";
        //   }
        //   else (button.innerText = 'Show Answer')

        // button.innerText = button.innerText === 'Show Answer' ? 'Hide Answer' : 'Show Answer'

          button.innerText === 'Show Answer' ? button.innerText = 'Hide Answer' : button.innerText = 'Show Answer'

        });
        
      });

      bookmarks.forEach((bookmark) => {
        bookmark.addEventListener("click", () => {
          bookmark.classList.toggle("card__bookmark");
          bookmark.classList.toggle("hover");
        });
      });


      
      