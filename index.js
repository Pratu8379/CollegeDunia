const listElem = document.querySelector('#list');

const loading = document.querySelector('.loader');

let limit = 10;


async function getColleges() {
  const response = await fetch(`colleges.json?_limit=${limit}`);

  const data = await response.json();
  console.log(data);
  return data;

}
// getColleges();


async function showColleges() {
  const colleges1 = await getColleges();
  console.log(colleges1)
  colleges1.colleges.forEach(function(element,index) {
    
    const collegeElem = document.createElement('div');
    collegeElem.classList.add('container');
    collegeElem.innerHTML = `
  <li class="college">
                       
                    <div>
                    <img src="${element.image}" class="college-img" alt="${element.college_name}">
                    
                    
                    </img>
                    </div>
                    <div class="flex1">
                    <div>
                    <h2 class="college-title">${element.college_name}</h2>
                    
                    <p>${element.nearest_place }</p>
                    
                    <p>${element.famous_nearest_places }</p>
                    
                    <p >${element.offertext  }</p>
                    </div>

                    <div>
                    <div class="flex2">
                    <p class="first1">${element.original_fees}</p>
                    <p class="first2">${element.discount}</p></div>
                    <h2 class="heading2">${element.discounted_fees}</h2>
                    <p>${element.fees_cycle}</p>
                    <p>${element.amenties}</p>

                    </div>
                    </div>
                    
                </li>
  `;
    listElem.appendChild(collegeElem)
    
  })

}

function showLoading() {
  
  loading.classList.add('show');
  setTimeout(() => {
    loading.classList.remove('show');


    setTimeout(() => {
      
      showColleges();
    }, 3000)
  });

}

showColleges();


window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if(scrollTop  + clientHeight >= scrollHeight -10){
    showColleges();
  }

})