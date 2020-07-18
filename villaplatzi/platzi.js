document.addEventListener("keydown", moverTeclado);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  UUP: 87,
  DOOWN: 83,
  LEEFT: 65,
  RIIGHT: 68
};

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

var xp = 170;
var yp = 210;
var xv = 230;
var yv = 210;
function dibujar()
{
if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
if(pollo.cargaOK == true)
  {
    papel.drawImage(pollo.imagen, xp, yp);
  }
if(vaca.cargaOK == true)
 {
     papel.drawImage(vaca.imagen, xv, yv);
   }
}

function moverTeclado(evento)
{
var movimiento = 5;
switch(evento.keyCode)
  {
    case teclas.UP:
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(pollo.imagen, xp , yp - movimiento);
    yp = yp - movimiento;
    break
    case teclas.DOWN:
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(pollo.imagen, xp , yp + movimiento);
    yp = yp + movimiento;
    break
    case teclas.LEFT:
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(pollo.imagen, xp - movimiento, yp);
    xp = xp - movimiento;
    break
    case teclas.RIGHT:
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(pollo.imagen, xp + movimiento , yp );
    xp = xp + movimiento;
    break

    case teclas.UUP:
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(vaca.imagen, xv , yv - movimiento);
    yv = yv - movimiento;
    break
    case teclas.DOOWN:
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(vaca.imagen, xv , yv + movimiento);
    yv = yv + movimiento;
    break
    case teclas.LEEFT:
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(vaca.imagen, xv - movimiento, yv);
    xv = xv - movimiento;
    break
    case teclas.RIIGHT:
    papel.drawImage(fondo.imagen, 0, 0);
    papel.drawImage(vaca.imagen, xv + movimiento , yv );
    xv = xv + movimiento;
    break
  }
}
