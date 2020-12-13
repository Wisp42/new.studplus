var list_items = document.querySelectorAll('p.list__item');
var list_wrap = document.querySelector('div.list_contant');
var list_item_links = document.querySelectorAll('a.list__item_link');

function createListItem(content, category) {
	var list_item = document.createElement('p');
	var list_item_link = document.createElement('a')

	list_item_link.innerHTML = (i+1) + '. ' + content[i].name;
	list_item_link.className = 'list__item_link';
	list_item_link.href = `../categories/${category}/page${i+1}.html`;
	
	list_item.insertAdjacentElement('beforeend', list_item_link);
	if (content[i].status == ''){
		list_item.className = 'list__item empty';
	}else{
		list_item.className = 'list__item';
	}
	list_item.title = content[i].name;

	list_wrap.appendChild(list_item);
}

function onload_header(name='Stud+', isMain=false, isList=false, isPage=false, backBtn='index') {
	var createHeader = document.createElement('header');
	createHeader.className = 'header';
	var backBtn_link = `../${backBtn}.html`;
	createHeader.innerHTML = `<div class="header-warp"><div class="header__title">${name}</div><nav class="header__nav"><div class="header-nav__item header-nav__item_back"><a href="${backBtn_link}" class="header-nav__item_link">Назад</a></div><div class="header-nav__item header-nav__item_category"><a href="../categories_lists/surgery.html" class="header-nav__item_link">Хирургия</a></div><div class="header-nav__item header-nav__item_category empty"><a href="../categories_lists/therapy.html" class="header-nav__item_link">Терапия</a></div><div class="header-nav__item header-nav__item_category empty"><a href="../categories_lists/obstetrics.html" class="header-nav__item_link">Акушерство</a></div><div class="header-nav__item header-nav__item_category empty"><a href="../categories_lists/pediatrics.html" class="header-nav__item_link">Педиатря</a></div></nav></div>`;
	document.body.insertAdjacentElement('afterbegin' , createHeader);

	var headerNav = document.querySelector('.header__nav');
	if (isMain){
		headerNav.style.display = 'none';
	}

}
function onload_show(database, cat) {
	for(i = 0; i < database.length; i++){
		createListItem(database, cat)
	}
}

function serch_keys(keys, input_val) {
	boolArr = [];
	for(var p = 0; p < input_val.length; p++){
		if (keys.includes(input_val[p])){
			boolArr.push(true);
		}else{
			boolArr.push(false);
		}
	}
	if(boolArr.includes(false)){
		return false
	}else{
		return true
	}
}

//Работает не верно
function serch_keys_RegExp(keys, input_val) {
	boolArr = [];
	for(var p = 0; p < input_val.length; p++){
		var input_val_RegExp = new RegExp(input_val[p], 'im');
		for(k = 0; k < keys.length; k++){
			if (input_val_RegExp.test(keys[k])){
				boolArr.push(true);
			}else{
				boolArr.push(false);
			}
		}
	}
	// console.log(boolArr)
	if(boolArr.includes(true)){
		return true
	}else{
		return false
	}
}

function oninput_search(database) {
	list_items = document.querySelectorAll('p.list__item');
	list_item_links = document.querySelectorAll('a.list__item_link');
	var list_item_keys;


	var search_input = document.getElementById('search_form');
	var serch_RegExp = new RegExp(search_input.value, 'im');
	var search_input_keys = search_input.value.split(', ');
	// console.log(search_input_keys);
	// console.log(serch_RegExp)
	for (var i = 0; i < database.length; i++){
		list_item_keys = database[i].keys.split(', ');
		list_item_keys.push('');
		// console.log(list_item_keys);
		for (var j = 0; j < search_input_keys.length; j++){
			// console.log(list_item_keys)
			if (search_input.value == ''){
				list_items[i].style.display = 'block';
				list_item_links[i].style.whiteSpace = 'nowrap';
			}else if (serch_RegExp.test(database[i].name)){
				list_items[i].style.display = 'block';
				list_item_links[i].style.whiteSpace = 'normal';
			}else if (serch_keys(list_item_keys, search_input_keys)){
				list_items[i].style.display = 'block';
				list_item_links[i].style.whiteSpace = 'normal';
			}else{
				list_items[i].style.display = 'none';
			}
		}
	}
}