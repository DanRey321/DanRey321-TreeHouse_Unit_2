/******************************************
Daniel Reyes
FSJS project 2 - List Filter and Pagination
******************************************/

const limitPerPage = 10;
const studentList = document.querySelectorAll('.student-item');


const showPage = (list, page) => {

   //Hides all list Items
   for(i = 0; i < list.length; i += 1){
      listToHide = list.item(i);
      listToHide.style.display = "none";
   }

   //get ending and starting index values of page selected in appendbuttonLinks
   let start = (page * limitPerPage) - limitPerPage;
   let end = page * limitPerPage;

   //only show list items of page selected
   for(j = start; j < end ; j += 1){
      listToShow = list[j];
      listToShow.style.display = 'block'
   }

}

const appendbuttonLinks = (list) => {
  /*
  * Creates buttons for each page needed inside a dive with className pagination
  * An unordered list is created with list items equal to the number of pages needed. 
  * Each ListItem will have an a tag with href = # and a page number.active
  * Page 1 which has index 0 will be set to active... default page
  * When the button is clicked, the active status will be removed on the current page and given to page selected.
  * 
  */
   const divOnPage = document.querySelector('div.page'); 
   const buttonsDiv = document.createElement('div'); //div created for new buttons
   const buttonsUl = document.createElement('ul');  //ul created for buttons dive created above
   buttonsDiv.className = 'pagination'; 
   divOnPage.appendChild(buttonsDiv); 
   buttonsDiv.appendChild(buttonsUl);
   

   const numberOfPages = list.length / limitPerPage; //total # of list items / max items per page
   //console.log(numberOfPages); test current page
   for(let i = 0; i < numberOfPages; i += 1){
      const buttonLi = document.createElement('li');
      const buttonTag = document.createElement('a');
      buttonsUl.appendChild(buttonLi);
      buttonLi.appendChild(buttonTag);
      
      buttonTag.href = '#';
      buttonTag.textContent = i + 1;
     
      if(i === 0){ //default active page 1 or index 0
         buttonTag.className = 'active';
      }
      
   }

   buttonsUl.addEventListener('click', (e) => {
   
      //Removes 'active' from current page
      const currentPage = buttonsUl.querySelectorAll('a');
      for(let j = 0; j < currentPage.length; j += 1){
      currentPage[j].className = '';
      }
      
      //Adds active to page selected
      const pageSelected = event.target.className = 'active';
      
      //call showPage with new page selected.
      showPage(list, event.target.innerText);

   });

}

//defualt page 1 selected.
showPage(studentList, 1);
//appendbuttonLinks will listen to user 'click' and class showPage with updated page.
appendbuttonLinks(studentList);