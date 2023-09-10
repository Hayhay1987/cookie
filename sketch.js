function setup() {
  j = createElement()
  createCanvas(4000,1000)
  background(200)
  a = createElement("h1", "Enter your cookie clicker save code here:")
  a.position(0,0)
  b = createInput()
  b.position(0,100)
  c = createButton("Hack in infinite cookies!")
  c.position(0,150)
  c.mousePressed(hi)
  c2 = createButton("Hack in all the acheivements!")
  c2.position(200, 150)
  c2.mousePressed(bee)
}

function hi() {
  d = b.value().split("%", 2)
  e = atob(d[0])
  f = e.split("|")
  g = f[4].split(";")
  g[0] = "1e+2617352"
  f[4] = g.join(";")
  h = f.join("|")
  i = btoa(h)
  element(i)
}

function bee() {
  d = b.value().split("%", 2)
  e = atob(d[0])
  f = e.split("|")
  console.log(f)
  f[7] = ""
  for (var i = 0; i != 643; i++) {
    f[7] += "1"
  }
  g = join(f, "|")
  element(btoa(g))
}

function element(asdasd) {
  j.remove()
  j = createElement("p", asdasd)
  j.position(0, 200)
  j.style('font-size', '1px')
}
