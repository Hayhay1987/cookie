function setup() {
  createCanvas(4000,1000)
  background(200)
  a = createElement("h1", "Enter your cookie clicker save code here:")
  a.position(0,0)
  b = createInput()
  b.position(0,100)
  c = createButton("Hack in infinite cookies!")
  c.position(0,150)
  c.mousePressed(hi)
}

function hi() {
  original = b.value()
  d = b.value().split("%", 2)
  e = atob(d[0])
  f = e.split("|")
  g = f[4].split(";")
  g[0] = "1e+2617352"
  f[4] = g.join(";")
  h = f.join("|")
  i = btoa(h)
  j= createElement("p", i)
  j.position(0, 200)
  j.style("font-size", "1px")
}
