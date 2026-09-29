(function () {
  var root = document.documentElement;

  // Theme toggle
  var btn = document.querySelector(".theme-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Recently viewed posts
  var KEY = "recentlyViewed";
  var list = [];
  try { list = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) {}

  var article = document.querySelector("article.post");
  if (article) {
    var entry = { title: article.dataset.title, url: article.dataset.url };
    list = [entry].concat(list.filter(function (p) { return p.url !== entry.url; })).slice(0, 5);
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {}
  }

  var ol = document.getElementById("recently-viewed");
  if (ol && list.length) {
    list.forEach(function (p) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = p.url; a.textContent = p.title;
      li.appendChild(a); ol.appendChild(li);
    });
    ol.closest(".side-block").hidden = false;
  }
})();
