const recipes = [
      { title: 'Migas', desc: 'Crumble the bread into small pieces. Sauté with olive oil.', img: 'img/migas.jpg' },
      { title: 'Sushi', desc: 'Make sushi rolls with rice and seaweed.', img: 'img/sushi.jpg' },
      { title: 'Burek', desc: 'Fry chopped onions and minced meat.', img: 'img/burek.jpg' },
      { title: 'Corba', desc: 'Pick through your lentils and rinse.', img: 'img/cobra.jpg' },
      { title: 'Kumpir', desc: 'Baked potato filled with butter and cheese.', img: 'img/kumpir.jpg' },
      { title: 'Tamiya', desc: 'Deep-fried balls made from ground chickpeas.', img: 'img/tamiya.jpg' },
      { title: 'Bistek', desc: 'Marinate beef in soy sauce and onions.', img: 'img/bistek.jpg' },
      { title: 'Wontons', desc: 'Fill wonton wrappers with meat or shrimp.', img: 'img/wonton.jpg' },
      { title: 'Kafteji', desc: 'Fried mix of vegetables and eggs.', img: 'img/kaftezi.jpg' },
      { title: 'Big Mac', desc: 'Burger with beef patty, cheese, and sauce.', img: 'img/bigmac.jpg' },
      { title: 'Lasagne', desc: 'Layered pasta with meat and cheese.', img: 'img/lasagne.jpg' },
      { title: 'Timbits', desc: 'Fried dough balls coated with sugar.', img: 'img/timbit.jpg' },
      { title: 'Dal Fry', desc: 'Cooked lentils tempered with spices.', img: 'img/dalfry.jpg' },
      { title: 'Koshari', desc: 'Lentils, rice, and pasta topped with sauce.', img: 'img/koshari.jpg' },
      { title: 'Poutine', desc: 'Fries topped with cheese curds and gravy.', img: 'img/putine.jpg' },
      { title: 'Pancakes', desc: 'Flat cake made from batter and cooked on a griddle.', img: 'img/pancake.jpg' },
      { title: 'Kapsalon', desc: 'Loaded fries topped with meat and cheese.', img: 'img/kapsalon.jpg' },
      { title: 'Moussaka', desc: 'Eggplant-based dish with meat and béchamel.', img: 'img/mous.jpg' },
      { title: 'Shawarma', desc: 'Meat grilled on a spit and served in a wrap.', img: 'img/shwarma.jpg' },
      { title: 'Fish Pie', desc: 'Mashed potato-topped pie with fish.', img: 'img/fishpie.jpg' }
    ];

    const recipeGrid = document.getElementById('recipeGrid');
    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${recipe.img}" alt="${recipe.title}" />
        <h3>${recipe.title}</h3>
        <p>${recipe.desc}</p>
        <button onclick="showDetails('${recipe.title}')">View Details</button>
      `;
      recipeGrid.appendChild(card);
    });

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  let matchFound = false;

  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    const isMatch = title.includes(query);
    card.style.display = isMatch ? 'block' : 'none';
    if (isMatch) matchFound = true;
  });

  const noMatchMsg = document.getElementById('noMatchMessage');
  if (!matchFound) {
    if (!noMatchMsg) {
      const msg = document.createElement('p');
      msg.id = 'noMatchMessage';
      msg.textContent = 'No match found.';
      msg.style.textAlign = 'center';
      msg.style.fontWeight = 'bold';
      msg.style.fontWeight = 'bold';
      msg.style.marginTop = '20px';
      document.getElementById('recipeGrid').appendChild(msg);
    }
  } else {
    if (noMatchMsg) noMatchMsg.remove();
  }
});


    async function showDetails(foodName) {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);
      const data = await res.json();
      const meal = data.meals ? data.meals[0] : null;
      if (!meal) return;

      const modal = document.getElementById('detailsModal');
      const content = document.getElementById('detailsContent');
      content.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
        <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
      `;
      modal.style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('detailsModal').style.display = 'none';
    }