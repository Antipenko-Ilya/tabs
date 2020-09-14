const textTmp =
  "Залог успеха ООО «АртСтройТехнология»  в наших приоритетах, которыми мы дорожим: любовь и гордость за свое дело, профессиональная деловая честность и открытость, здоровый азарт и вдохновение в работе. Уважение к партнерам по бизнесу и высшая степень ответственности перед Заказчиками. Активное участие в общественной жизни, выработка новых подходов в динамично меняющихся условиях бизнеса. Безусловная ответственность за то, что происходит в обществе и экономике страны.";
let content = document.querySelector(".content"),
  edit = document.querySelector(".edit"),
  contentText = document.querySelector(".content-text"),
  contentBtn = document.querySelector(".content-btn"),
  editBtns = document.querySelector(".edit-btns"),
  editBtn = document.querySelector(".edit-btn"),
  defaultBtn = document.querySelector(".default-btn");
tmp = "";

function firstLoad() {
  if (!localStorage.myText) {
    localStorage.myText = textTmp;
  }
  contentText.innerHTML = localStorage.myText;
}
firstLoad();

function toggleEdit(flag) {
  if (flag) {
    tmp = contentText.innerHTML;
    contentText.contentEditable = true;
    contentBtn.style.display = "none";
    editBtns.style.display = "flex";
  } else {
    contentText.setAttribute("contenteditable", false);
    contentBtn.style.display = "flex";
    editBtns.style.display = "none";
  }
}

function updateLocalStorage(flag) {
  if (flag) {
    localStorage.myText = contentText.innerHTML;
    toggleEdit(false);
  } else {
    localStorage.myText = tmp;
    contentText.innerHTML = localStorage.myText;
    toggleEdit(false);
  }
}

contentBtn.addEventListener("click", () => toggleEdit(true));
editBtn.addEventListener("click", () => updateLocalStorage(true));
defaultBtn.addEventListener("click", () => updateLocalStorage(false));
