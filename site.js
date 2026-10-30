(function(){
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (here === '' || here.indexOf('.html') === -1) here = 'index.html';
  var links = [
    ['services.html','What We Do'],
    ['approach.html','Our Approach'],
    ['opportunities.html','Opportunities'],
    ['case-studies.html','Case Studies'],
    ['insights.html','Insights'],
    ['about.html','About']
  ];
  function cur(href){ return here === href ? ' aria-current="page"' : ''; }
  var home = (here === 'index.html' || here === '') ? '#top' : 'index.html';
  var navHtml =
    '<header class="nav"><div class="wrap">' +
      '<a class="logo" href="' + home + '" aria-label="Traxn home">traxn<i aria-hidden="true"></i></a>' +
      '<ul>' + links.map(function(l){ return '<li><a href="' + l[0] + '"' + cur(l[0]) + '>' + l[1] + '</a></li>'; }).join('') + '</ul>' +
      '<a class="btn btn-primary" href="contact.html">Start a conversation</a>' +
      '<button class="menu-btn" type="button" id="menu-btn" aria-expanded="false" aria-controls="drawer">Menu</button>' +
    '</div></header>' +
    '<nav class="drawer" id="drawer" data-open="false" aria-label="Mobile"><div class="wrap">' +
      '<ul>' + links.map(function(l){ return '<li><a href="' + l[0] + '"' + cur(l[0]) + '>' + l[1] + '</a></li>'; }).join('') + '</ul>' +
      '<a class="btn btn-primary" href="contact.html">Start a conversation</a>' +
    '</div></nav>';
  var footHtml =
    '<footer><div class="wrap">' +
      '<div class="cols">' +
        '<div class="brand"><a class="logo" href="index.html" aria-label="Traxn home">traxn<i aria-hidden="true"></i></a>' +
          '<p>A founder-led marketing strategy consultancy in Bengaluru. We help B2B SaaS and AI companies get clear on who they serve, what makes them different, and how to grow.</p></div>' +
        '<div><h4>Services</h4><ul>' +
          '<li><a href="positioning.html">Brand and product positioning</a></li>' +
          '<li><a href="gtm.html">Go-to-market strategy</a></li>' +
          '<li><a href="demand.html">Demand generation and growth</a></li>' +
          '<li><a href="ai-search.html">AI search and content visibility</a></li></ul></div>' +
        '<div><h4>Company</h4><ul>' +
          '<li><a href="approach.html">Our approach</a></li>' +
          '<li><a href="opportunities.html">Opportunities</a></li>' +
          '<li><a href="case-studies.html">Case studies</a></li>' +
          '<li><a href="insights.html">Insights</a></li>' +
          '<li><a href="about.html">About</a></li>' +
          '<li><a href="contact.html">Contact</a></li></ul></div>' +
        '<div><h4>Contact</h4><ul>' +
          '<li>Bengaluru, India</li>' +
          '<li><a href="https://www.linkedin.com/in/ayushigupta-pmm/" target="_blank" rel="noopener">LinkedIn</a></li>' +
          '<li><span id="foot-email">Email on request via LinkedIn</span></li></ul></div>' +
      '</div>' +
      '<div class="legal"><span>&copy; ' + new Date().getFullYear() + ' Traxn. All rights reserved.</span>' +
        '<nav><a href="privacy.html">Privacy policy</a><a href="terms.html">Terms of use</a></nav></div>' +
    '</div></footer>';
  var n = document.getElementById('site-nav'); if (n) n.outerHTML = navHtml;
  var f = document.getElementById('site-footer'); if (f) f.outerHTML = footHtml;
  var btn = document.getElementById('menu-btn'), drawer = document.getElementById('drawer');
  if (btn && drawer) btn.addEventListener('click', function(){
    var open = drawer.getAttribute('data-open') === 'true';
    drawer.setAttribute('data-open', open ? 'false' : 'true');
    btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    btn.textContent = open ? 'Menu' : 'Close';
  });
})();
